const screens = {
  welcome: document.getElementById("welcome-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const startForm = document.getElementById("start-form");
const playerNameInput = document.getElementById("player-name");
const difficultyModeSelect = document.getElementById("difficulty-mode");
const playerLabel = document.getElementById("player-label");
const questionTitle = document.getElementById("question-title");
const questionNews = document.getElementById("question-news");
const progressLabel = document.getElementById("progress-label");
const optionsGrid = document.getElementById("options-grid");

const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultSummary = document.getElementById("result-summary");
const playAgainBtn = document.getElementById("play-again-btn");
const homeBtn = document.getElementById("home-btn");

const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardEmpty = document.getElementById("leaderboard-empty");
const leaderboardCount = document.getElementById("leaderboard-count");
const leaderboardStatus = document.getElementById("leaderboard-status");
const modeTabs = Array.from(document.querySelectorAll(".mode-tab"));

const LEADERBOARD_KEY = "ukSinglesQuizLeaderboard";
const LEADERBOARD_MIGRATED_KEY = "ukSinglesQuizLeaderboardMigratedToCloud";
const MAX_STORED_PER_MODE = 200;
const MAX_DISPLAYED_SCORES = 50;
const SUPABASE_CONFIGURED = Boolean(QUIZ_CONFIG.supabaseUrl && QUIZ_CONFIG.supabaseAnonKey);
const MODES = {
  easy: { label: "Easy", questionCount: 10 },
  medium: { label: "Medium", questionCount: 20 },
  hard: { label: "Hard", questionCount: 40 }
};

let playerName = "";
let score = 0;
let currentQuestionIndex = 0;
let selected = false;
let questions = [];
let selectedMode = "medium";
let activeLeaderboardMode = "all";
let leaderboard = loadLeaderboard();
const artworkCache = new Map();

normalizeLeaderboardShape();
renderModeTabs();
renderLeaderboard();
setLeaderboardStatus(SUPABASE_CONFIGURED ? "Connecting" : "Local only");
if (SUPABASE_CONFIGURED) {
  loadSharedLeaderboard();
}

startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = playerNameInput.value.trim();
  if (!name) {
    playerNameInput.focus();
    return;
  }

  const mode = difficultyModeSelect.value;
  startQuiz(name, mode);
});

playAgainBtn.addEventListener("click", () => {
  if (playerName) {
    startQuiz(playerName, selectedMode);
  } else {
    showScreen("welcome");
  }
});

homeBtn.addEventListener("click", () => {
  showScreen("welcome");
  document.querySelector(".leaderboard-card").scrollIntoView({ behavior: "smooth", block: "start" });
});

modeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const mode = tab.dataset.mode;
    if (mode !== "all" && !MODES[mode]) return;

    activeLeaderboardMode = mode;
    renderModeTabs();
    renderLeaderboard();
  });
});

function showScreen(target) {
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("active", name === target);
  });
}

function startQuiz(name, mode) {
  if (!MODES[mode]) return;

  playerName = name;
  selectedMode = mode;
  score = 0;
  currentQuestionIndex = 0;
  selected = false;
  questions = buildQuestionsForMode(mode);

  playerLabel.textContent = `Player: ${playerName} | Mode: ${MODES[selectedMode].label}`;
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  selected = false;

  const question = questions[currentQuestionIndex];
  const options = shuffleChoices(question.choices).map((choice) => ({
    ...choice,
    isCorrect: choice.title === question.choices[0].title && choice.artist === question.choices[0].artist
  }));

  question.currentOptions = options;

  questionTitle.textContent = String(question.year);
  questionNews.textContent = question.newsStory;
  progressLabel.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  optionsGrid.innerHTML = "";
  options.forEach((option) => {
    const card = buildOptionCard(option);
    optionsGrid.appendChild(card);
  });
}

function buildOptionCard(option) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option-btn";

  const image = document.createElement("img");
  image.className = "option-cover";
  image.alt = `${option.title} cover art`;
  image.loading = "lazy";
  image.src = makePlaceholder(option.title);

  const body = document.createElement("div");
  body.className = "option-body";

  const title = document.createElement("p");
  title.className = "option-title";
  title.textContent = option.title;

  const artist = document.createElement("p");
  artist.className = "option-artist";
  artist.textContent = option.artist;

  body.append(title, artist);
  button.append(image, body);

  loadArtwork(option, image);

  button.addEventListener("click", () => {
    if (selected) return;
    selected = true;

    const allOptions = Array.from(optionsGrid.querySelectorAll(".option-btn"));
    allOptions.forEach((btn) => {
      btn.disabled = true;
    });

    if (option.isCorrect) {
      score += 1;
    }

    setTimeout(() => {
      currentQuestionIndex += 1;
      if (currentQuestionIndex >= questions.length) {
        finishQuiz();
      } else {
        renderQuestion();
      }
    }, 600);
  });

  return button;
}

async function loadArtwork(option, imageElement) {
  const key = `${option.title}::${option.artist}`;
  if (artworkCache.has(key)) {
    imageElement.src = artworkCache.get(key);
    return;
  }

  const query = encodeURIComponent(`${option.title} ${option.artist}`);
  const endpoint = `https://itunes.apple.com/search?term=${query}&entity=song&limit=10&country=gb`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) return;

    const data = await response.json();
    if (!data.results?.length) return;

    const titleLower = option.title.toLowerCase();
    const single = data.results.find(r =>
      r.collectionType === "Single" &&
      r.trackName?.toLowerCase().includes(titleLower)
    );
    const anyMatch = data.results.find(r =>
      r.trackName?.toLowerCase().includes(titleLower)
    );
    const best = single || anyMatch || data.results[0];

    const imageUrl = best?.artworkUrl100?.replace("100x100bb.jpg", "600x600bb.jpg");
    if (!imageUrl) return;

    artworkCache.set(key, imageUrl);
    imageElement.src = imageUrl;
  } catch {
    // Keep placeholder on network failure.
  }
}

function finishQuiz() {
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  resultScore.textContent = `${score}/${total} (${pct}%)`;
  resultTitle.textContent = pct >= 85 ? "Chart Champion" : pct >= 60 ? "Strong Music Memory" : "Fresh Ears, Keep Going";
  resultSummary.textContent = `${playerName}, you picked ${score} yearly winners out of ${total} on ${MODES[selectedMode].label} mode.`;

  addLeaderboardEntry({
    name: playerName,
    score,
    total,
    mode: selectedMode,
    date: new Date().toISOString()
  });

  showScreen("result");
}

function addLeaderboardEntry(entry) {
  const existing = Array.isArray(leaderboard[entry.mode]) ? leaderboard[entry.mode] : [];
  const updated = [...existing, entry].sort((a, b) => {
    const aPct = a.total ? a.score / a.total : 0;
    const bPct = b.total ? b.score / b.total : 0;
    if (bPct !== aPct) return bPct - aPct;
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
  });

  leaderboard[entry.mode] = updated.slice(0, MAX_STORED_PER_MODE);
  saveLeaderboard(leaderboard);
  activeLeaderboardMode = entry.mode;
  renderModeTabs();
  renderLeaderboard();

  if (SUPABASE_CONFIGURED) {
    submitSharedScore(entry);
  }
}

function renderLeaderboard() {
  const rows = getRenderedLeaderboardRows(activeLeaderboardMode);

  leaderboardList.innerHTML = "";

  if (!rows.length) {
    leaderboardEmpty.style.display = "block";
    leaderboardCount.textContent = activeLeaderboardMode === "all"
      ? "0 overall scores"
      : `0 ${MODES[activeLeaderboardMode].label} scores`;
    return;
  }

  leaderboardEmpty.style.display = "none";
  leaderboardCount.textContent = activeLeaderboardMode === "all"
    ? `${rows.length} overall best scores`
    : `${rows.length} ${MODES[activeLeaderboardMode].label} scores`;

  rows.forEach((entry, index) => {
    const li = document.createElement("li");

    const left = document.createElement("span");
    left.className = "lb-name";
    left.textContent = `${index + 1}. ${entry.name}`;

    const right = document.createElement("span");
    right.className = "lb-meta";

    const scoreEl = document.createElement("strong");
    scoreEl.textContent = `${entry.score}/${entry.total}`;

    const dateStr = entry.date
      ? new Date(entry.date).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })
      : "";
    const modeStr = activeLeaderboardMode === "all" ? ` · ${MODES[entry.mode].label}` : "";
    const detailEl = document.createElement("span");
    detailEl.textContent = `${modeStr} · ${dateStr}`;

    right.append(scoreEl, detailEl);
    li.append(left, right);
    leaderboardList.appendChild(li);
  });
}

function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (!raw) {
      return {
        easy: [],
        medium: [],
        hard: []
      };
    }

    const parsed = JSON.parse(raw);
    return parsed;
  } catch {
    return {
      easy: [],
      medium: [],
      hard: []
    };
  }
}

function saveLeaderboard(data) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(data));
}

async function loadSharedLeaderboard() {
  try {
    let rows = await requestSharedScores();

    if (localStorage.getItem(LEADERBOARD_MIGRATED_KEY) !== "true") {
      const localEntries = [
        ...(leaderboard.easy || []),
        ...(leaderboard.medium || []),
        ...(leaderboard.hard || [])
      ];

      if (localEntries.length) {
        await insertSharedScores(localEntries);
        rows = await requestSharedScores();
      }

      localStorage.setItem(LEADERBOARD_MIGRATED_KEY, "true");
    }

    leaderboard = { easy: [], medium: [], hard: [] };
    rows.forEach((row) => {
      if (!MODES[row.mode]) return;
      leaderboard[row.mode].push({
        name: row.name,
        score: Number(row.score),
        total: Number(row.total),
        mode: row.mode,
        date: row.created_at
      });
    });

    normalizeLeaderboardShape();
    saveLeaderboard(leaderboard);
    setLeaderboardStatus("Shared");
    renderLeaderboard();
  } catch (error) {
    console.error("Could not load the shared leaderboard", error);
    setLeaderboardStatus("Offline · local only");
  }
}

async function submitSharedScore(entry) {
  try {
    await insertSharedScores([entry]);
    await loadSharedLeaderboard();
  } catch (error) {
    console.error("Could not submit the shared score", error);
    setLeaderboardStatus("Sync failed");
  }
}

async function requestSharedScores() {
  const response = await fetch(`${getSupabaseRestUrl()}?select=name,score,total,mode,created_at&order=created_at.desc&limit=1000`, {
    headers: getSupabaseHeaders()
  });
  if (!response.ok) throw new Error(`Leaderboard read failed (${response.status})`);
  return response.json();
}

async function insertSharedScores(entries) {
  const response = await fetch(getSupabaseRestUrl(), {
    method: "POST",
    headers: {
      ...getSupabaseHeaders(),
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify(entries.map((entry) => ({
      name: entry.name.trim().slice(0, 24),
      score: entry.score,
      total: entry.total,
      mode: entry.mode
    })))
  });
  if (!response.ok) throw new Error(`Leaderboard write failed (${response.status})`);
}

function getSupabaseRestUrl() {
  return `${QUIZ_CONFIG.supabaseUrl.replace(/\/$/, "")}/rest/v1/quiz_scores`;
}

function getSupabaseHeaders() {
  return {
    apikey: QUIZ_CONFIG.supabaseAnonKey,
    Authorization: `Bearer ${QUIZ_CONFIG.supabaseAnonKey}`
  };
}

function setLeaderboardStatus(status) {
  leaderboardStatus.textContent = status;
}

function normalizeLeaderboardShape() {
  if (Array.isArray(leaderboard)) {
    const migrated = {
      easy: [],
      medium: leaderboard
        .filter((item) => {
          return item && typeof item.name === "string" && typeof item.score === "number" && typeof item.total === "number";
        })
        .slice(0, MAX_STORED_PER_MODE),
      hard: []
    };
    leaderboard = migrated;
    saveLeaderboard(leaderboard);
    return;
  }

  ["easy", "medium", "hard"].forEach((mode) => {
    if (!Array.isArray(leaderboard[mode])) {
      leaderboard[mode] = [];
    }

    leaderboard[mode] = leaderboard[mode].filter((item) => {
      return item && typeof item.name === "string" && typeof item.score === "number" && typeof item.total === "number";
    }).slice(0, MAX_STORED_PER_MODE);
  });
}

function renderModeTabs() {
  modeTabs.forEach((tab) => {
    const mode = tab.dataset.mode;
    const isActive = mode === activeLeaderboardMode;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function buildQuestionsForMode(mode) {
  const targetCount = MODES[mode].questionCount;
  const pool = structuredClone(QUIZ_DATA);
  if (targetCount >= pool.length) return pool;

  return shuffleChoices(pool).slice(0, targetCount).sort((a, b) => a.year - b.year);
}

function getRenderedLeaderboardRows(mode) {
  const entries = mode === "all"
    ? [
        ...(leaderboard.easy || []),
        ...(leaderboard.medium || []),
        ...(leaderboard.hard || [])
      ]
    : (leaderboard[mode] || []);

  return entries
    .filter(e => e && e.name)
    .sort((a, b) => {
      const aPct = a.total ? a.score / a.total : 0;
      const bPct = b.total ? b.score / b.total : 0;
      if (bPct !== aPct) return bPct - aPct;
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
    })
    .slice(0, MAX_DISPLAYED_SCORES);
}

function shuffleChoices(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function makePlaceholder(text) {
  const safeText = encodeURIComponent(text.slice(0, 26));
  return `https://placehold.co/600x600/f1e2cf/3d2b1f?text=${safeText}`;
}