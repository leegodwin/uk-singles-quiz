const QUIZ_DATA = [
  {
    year: 1986,
    newsStory: "The Space Shuttle Challenger explodes after launch; the Chernobyl nuclear disaster alarms the world",
    choices: [
      { position: 1, title: "Don't Leave Me This Way", artist: "The Communards", sales: "~755,000 copies" },
      { position: 2, title: "Every Loser Wins", artist: "Nick Berry", sales: "~740,000 copies" },
      { position: 3, title: "I Want To Wake Up With You", artist: "Boris Gardiner", sales: "~630,000 copies" },
      { position: 4, title: "Living Doll", artist: "Cliff Richard & The Young Ones", sales: "~620,000 copies" }
    ]
  },
  {
    year: 1987,
    newsStory: "The Great Storm devastates southern England; Reagan and Gorbachev sign INF nuclear treaty",
    choices: [
      { position: 1, title: "Never Gonna Give You Up", artist: "Rick Astley", sales: "~759,000 copies" },
      { position: 2, title: "Nothing's Gonna Stop Us Now", artist: "Starship", sales: "~730,000 copies" },
      { position: 3, title: "China In Your Hand", artist: "T'Pau", sales: "~710,000 copies" },
      { position: 4, title: "I Wanna Dance With Somebody (Who Loves Me)", artist: "Whitney Houston", sales: "~670,000 copies" }
    ]
  },
  {
    year: 1988,
    newsStory: "Lockerbie bombing of Pan Am Flight 103; George H. W. Bush elected US President",
    choices: [
      { position: 1, title: "Mistletoe and Wine", artist: "Cliff Richard", sales: "~750,000 copies" },
      { position: 2, title: "I Should Be So Lucky", artist: "Kylie Minogue", sales: "~675,000 copies" },
      { position: 3, title: "The Only Way Is Up", artist: "Yazz & The Plastic Population", sales: "~630,000 copies" },
      { position: 4, title: "Nothing's Gonna Change My Love For You", artist: "Glenn Medeiros", sales: "~580,000 copies" }
    ]
  },
  {
    year: 1989,
    newsStory: "The Berlin Wall falls signaling the end of the Cold War; Tiananmen Square protests in Beijing",
    choices: [
      { position: 1, title: "Ride On Time", artist: "Black Box", sales: "~850,000 copies" },
      { position: 2, title: "Swing The Mood", artist: "Jive Bunny & The Mastermixers", sales: "~820,000 copies" },
      { position: 3, title: "Eternal Flame", artist: "The Bangles", sales: "~520,000 copies" },
      { position: 4, title: "Too Many Broken Hearts", artist: "Jason Donovan", sales: "~480,000 copies" }
    ]
  },
  {
    year: 1990,
    newsStory: "Nelson Mandela freed after 27 years in prison; Iraq invades Kuwait",
    choices: [
      { position: 1, title: "Unchained Melody", artist: "The Righteous Brothers", sales: "~840,000 copies" },
      { position: 2, title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", sales: "~800,000 copies" },
      { position: 3, title: "Sacrifice / Healing Hands", artist: "Elton John", sales: "~600,000 copies" },
      { position: 4, title: "Ice Ice Baby", artist: "Vanilla Ice", sales: "~580,000 copies" }
    ]
  },
  {
    year: 1991,
    newsStory: "Gulf War liberates Kuwait; the Soviet Union dissolves",
    choices: [
      { position: 1, title: "(Everything I Do) I Do It for You", artist: "Bryan Adams", sales: "~1,850,000 copies" },
      { position: 2, title: "The Shoop Shoop Song (It's in His Kiss)", artist: "Cher", sales: "~720,000 copies" },
      { position: 3, title: "I'm Too Sexy", artist: "Right Said Fred", sales: "~650,000 copies" },
      { position: 4, title: "Do The Bartman", artist: "The Simpsons", sales: "~460,000 copies" }
    ]
  },
  {
    year: 1992,
    newsStory: "Maastricht Treaty signed establishing the European Union; Bill Clinton elected US President",
    choices: [
      { position: 1, title: "I Will Always Love You", artist: "Whitney Houston", sales: "~1,500,000 copies" },
      { position: 2, title: "Rhythm Is a Dancer", artist: "Snap!", sales: "~670,000 copies" },
      { position: 3, title: "Stay", artist: "Shakespears Sister", sales: "~640,000 copies" },
      { position: 4, title: "Please Don't Go", artist: "KWS", sales: "~580,000 copies" }
    ]
  },
  {
    year: 1993,
    newsStory: "Velvet Divorce splits Czechoslovakia; World Trade Center bombed in New York",
    choices: [
      { position: 1, title: "I'd Do Anything for Love (But I Won't Do That)", artist: "Meat Loaf", sales: "~720,000 copies" },
      { position: 2, title: "Mr. Vain", artist: "Culture Beat", sales: "~630,000 copies" },
      { position: 3, title: "Oh Carolina", artist: "Shaggy", sales: "~600,000 copies" },
      { position: 4, title: "No Limit", artist: "2 Unlimited", sales: "~570,000 copies" }
    ]
  },
  {
    year: 1994,
    newsStory: "Channel Tunnel opens connecting the UK and France; Nelson Mandela elected President of South Africa",
    choices: [
      { position: 1, title: "Love Is All Around", artist: "Wet Wet Wet", sales: "~1,783,000 copies" },
      { position: 2, title: "Saturday Night", artist: "Whigfield", sales: "~1,080,000 copies" },
      { position: 3, title: "Stay Another Day", artist: "East 17", sales: "~720,000 copies" },
      { position: 4, title: "Baby Come Back", artist: "Pato Banton feat. UB40", sales: "~680,000 copies" }
    ]
  },
  {
    year: 1995,
    newsStory: "Srebrenica massacre during Bosnian War; eBay launched as e-commerce era begins",
    choices: [
      { position: 1, title: "Unchained Melody / White Cliffs of Dover", artist: "Robson & Jerome", sales: "~1,840,000 copies" },
      { position: 2, title: "Gangsta's Paradise", artist: "Coolio feat. L.V.", sales: "~1,070,000 copies" },
      { position: 3, title: "I Believe / Up on the Roof", artist: "Robson & Jerome", sales: "~1,040,000 copies" },
      { position: 4, title: "Fairground", artist: "Simply Red", sales: "~790,000 copies" }
    ]
  },
  {
    year: 1996,
    newsStory: "Dolly the sheep successfully cloned in Scotland; Atlanta hosts Centennial Olympic Games",
    choices: [
      { position: 1, title: "Killing Me Softly", artist: "Fugees", sales: "~1,360,000 copies" },
      { position: 2, title: "Wannabe", artist: "Spice Girls", sales: "~1,270,000 copies" },
      { position: 3, title: "Don't Look Back in Anger", artist: "Oasis", sales: "~920,000 copies" },
      { position: 4, title: "Return of the Mack", artist: "Mark Morrison", sales: "~740,000 copies" }
    ]
  },
  {
    year: 1997,
    newsStory: "Princess Diana dies in Paris car crash; UK handovers Hong Kong sovereignty to China",
    choices: [
      { position: 1, title: "Candle in the Wind 1997 / Something About the Way You Look Tonight", artist: "Elton John", sales: "4,770,000 copies" },
      { position: 2, title: "Barbie Girl", artist: "Aqua", sales: "~1,720,000 copies" },
      { position: 3, title: "I'll Be Missing You", artist: "Puff Daddy & Faith Evans", sales: "~1,470,000 copies" },
      { position: 4, title: "Perfect Day", artist: "Various Artists (BBC Music)", sales: "~1,180,000 copies" }
    ]
  },
  {
    year: 1998,
    newsStory: "Good Friday Agreement signed in Northern Ireland; Google founded in California",
    choices: [
      { position: 1, title: "Believe", artist: "Cher", sales: "~1,830,000 copies" },
      { position: 2, title: "My Heart Will Go On", artist: "Celine Dion", sales: "~1,480,000 copies" },
      { position: 3, title: "It's Like That", artist: "Run-D.M.C. vs. Jason Nevins", sales: "~1,120,000 copies" },
      { position: 4, title: "No Matter What", artist: "Boyzone", sales: "~1,070,000 copies" }
    ]
  },
  {
    year: 1999,
    newsStory: "Euro currency established for financial markets; NATO air strikes in Kosovo",
    choices: [
      { position: 1, title: "...Baby One More Time", artist: "Britney Spears", sales: "~1,445,000 copies" },
      { position: 2, title: "Blue (Da Ba Dee)", artist: "Eiffel 65", sales: "~1,020,000 copies" },
      { position: 3, title: "Mambo No. 5", artist: "Lou Bega", sales: "~860,000 copies" },
      { position: 4, title: "9 PM (Till I Come)", artist: "ATB", sales: "~830,000 copies" }
    ]
  },
  {
    year: 2000,
    newsStory: "The world celebrates the New Millennium without feared Y2K computer bugs; Sydney Summer Olympics",
    choices: [
      { position: 1, title: "Can We Fix It?", artist: "Bob the Builder", sales: "~853,000 copies" },
      { position: 2, title: "Pure Shores", artist: "All Saints", sales: "~685,000 copies" },
      { position: 3, title: "It Feels So Good", artist: "Sonique", sales: "~640,000 copies" },
      { position: 4, title: "Who Let the Dogs Out?", artist: "Baha Men", sales: "~610,000 copies" }
    ]
  },
  {
    year: 2001,
    newsStory: "September 11 terrorist attacks in the United States; War in Afghanistan begins",
    choices: [
      { position: 1, title: "It Wasn't Me", artist: "Shaggy feat. Rikrok", sales: "~1,151,000 copies" },
      { position: 2, title: "Pure and Simple", artist: "Hear'Say", sales: "~1,070,000 copies" },
      { position: 3, title: "Can't Get You Out of My Head", artist: "Kylie Minogue", sales: "~1,037,000 copies" },
      { position: 4, title: "Whole Again", artist: "Atomic Kitten", sales: "~920,000 copies" }
    ]
  },
  {
    year: 2002,
    newsStory: "Euro coins and banknotes introduced into circulation; Queen Elizabeth II celebrates Golden Jubilee",
    choices: [
      { position: 1, title: "Anything Is Possible / Evergreen", artist: "Will Young", sales: "~1,784,000 copies" },
      { position: 2, title: "Unchained Melody", artist: "Gareth Gates", sales: "~1,300,000 copies" },
      { position: 3, title: "Dilemma", artist: "Nelly feat. Kelly Rowland", sales: "~800,000 copies" },
      { position: 4, title: "A Little Less Conversation", artist: "Elvis vs. JXL", sales: "~780,000 copies" }
    ]
  },
  {
    year: 2003,
    newsStory: "US-led coalition invades Iraq; Concorde makes its final supersonic commercial flight",
    choices: [
      { position: 1, title: "Where Is the Love?", artist: "Black Eyed Peas", sales: "~625,000 copies" },
      { position: 2, title: "Sweet Dreams my LA Ex", artist: "Rachel Stevens", sales: "~430,000 copies" },
      { position: 3, title: "Bring Me to Life", artist: "Evanescence", sales: "~420,000 copies" },
      { position: 4, title: "Ignition (Remix)", artist: "R. Kelly", sales: "~410,000 copies" }
    ]
  },
  {
    year: 2004,
    newsStory: "Indian Ocean earthquake triggers deadly tsunami; Facebook launched at Harvard University",
    choices: [
      { position: 1, title: "Do They Know It's Christmas?", artist: "Band Aid 20", sales: "~1,065,000 downloads & physical" },
      { position: 2, title: "Fuck It (I Don't Want You Back)", artist: "Eamon", sales: "~550,000 downloads & physical" },
      { position: 3, title: "Cha Cha Slide", artist: "DJ Casper", sales: "~370,000 downloads & physical" },
      { position: 4, title: "Call on Me", artist: "Eric Prydz", sales: "~335,000 downloads & physical" }
    ]
  },
  {
    year: 2005,
    newsStory: "7/7 suicide bombings strike London transport system; YouTube website launched",
    choices: [
      { position: 1, title: "Is This the Way to Amarillo", artist: "Tony Christie feat. Peter Kay", sales: "~1,100,000 downloads & physical" },
      { position: 2, title: "That's My Goal", artist: "Shayne Ward", sales: "~870,000 downloads & physical" },
      { position: 3, title: "Crazy Frog (Axel F)", artist: "Crazy Frog", sales: "~525,000 downloads & physical" },
      { position: 4, title: "You're Beautiful", artist: "James Blunt", sales: "~475,000 downloads & physical" }
    ]
  },
  {
    year: 2006,
    newsStory: "Montenegro declares independence; Twitter launched redefining social media communication",
    choices: [
      { position: 1, title: "Crazy", artist: "Gnarls Barkley", sales: "~820,000 downloads & physical" },
      { position: 2, title: "Bleeding Love", artist: "Leona Lewis", sales: "~788,000 downloads & physical" },
      { position: 3, title: "Hips Don't Lie", artist: "Shakira feat. Wyclef Jean", sales: "~495,000 downloads & physical" },
      { position: 4, title: "I Don't Feel Like Dancin'", artist: "Scissor Sisters", sales: "~485,000 downloads & physical" }
    ]
  },
  {
    year: 2007,
    newsStory: "Apple introduces the original iPhone; Gordon Brown succeeds Tony Blair as UK Prime Minister",
    choices: [
      { position: 1, title: "Bleeding Love", artist: "Leona Lewis", sales: "~788,000 downloads & physical" },
      { position: 2, title: "Umbrella", artist: "Rihanna feat. Jay-Z", sales: "~610,000 downloads & physical" },
      { position: 3, title: "Grace Kelly", artist: "Mika", sales: "~590,000 downloads & physical" },
      { position: 4, title: "Rule the World", artist: "Take That", sales: "~460,000 downloads & physical" }
    ]
  },
  {
    year: 2008,
    newsStory: "Global financial crisis sparks worldwide recession; Barack Obama elected first Black US President",
    choices: [
      { position: 1, title: "Hallelujah", artist: "Alexandra Burke", sales: "~888,000 downloads & physical" },
      { position: 2, title: "Hero", artist: "X Factor Finalists 2008", sales: "~750,000 downloads & physical" },
      { position: 3, title: "Mercy", artist: "Duffy", sales: "~540,000 downloads & physical" },
      { position: 4, title: "I Kissed a Girl", artist: "Katy Perry", sales: "~480,000 downloads & physical" }
    ]
  },
  {
    year: 2009,
    newsStory: "Michael Jackson dies at age 50; H1N1 swine flu declared global pandemic",
    choices: [
      { position: 1, title: "Poker Face", artist: "Lady Gaga", sales: "~882,000 downloads & physical" },
      { position: 2, title: "I Gotta Feeling", artist: "Black Eyed Peas", sales: "~848,000 downloads & physical" },
      { position: 3, title: "Just Dance", artist: "Lady Gaga", sales: "~760,000 downloads & physical" },
      { position: 4, title: "Fight for This Love", artist: "Cheryl Cole", sales: "~680,000 downloads & physical" }
    ]
  },
  {
    year: 2010,
    newsStory: "Eyjafjallajökull volcano eruption grounds European flights; Deepwater Horizon oil spill in Gulf of Mexico",
    choices: [
      { position: 1, title: "Love the Way You Lie", artist: "Eminem feat. Rihanna", sales: "~854,000 chart units" },
      { position: 2, title: "When We Collide", artist: "Matt Cardle", sales: "~815,000 chart units" },
      { position: 3, title: "Just the Way You Are (Amazing)", artist: "Bruno Mars", sales: "~760,000 chart units" },
      { position: 4, title: "Forget You", artist: "CeeLo Green", sales: "~740,000 chart units" }
    ]
  },
  {
    year: 2011,
    newsStory: "Fukushima earthquake and tsunami disaster in Japan; Arab Spring uprisings sweep Middle East",
    choices: [
      { position: 1, title: "Someone Like You", artist: "Adele", sales: "~1,240,000 chart units" },
      { position: 2, title: "Moves Like Jagger", artist: "Maroon 5 feat. Christina Aguilera", sales: "~1,040,000 chart units" },
      { position: 3, title: "Party Rock Anthem", artist: "LMFAO", sales: "~995,000 chart units" },
      { position: 4, title: "Price Tag", artist: "Jessie J feat. B.o.B", sales: "~980,000 chart units" }
    ]
  },
  {
    year: 2012,
    newsStory: "London hosts Summer Olympics; Queen Elizabeth II celebrates Diamond Jubilee",
    choices: [
      { position: 1, title: "Somebody That I Used to Know", artist: "Gotye feat. Kimbra", sales: "~1,318,000 chart units" },
      { position: 2, title: "Call Me Maybe", artist: "Carly Rae Jepsen", sales: "~1,140,000 chart units" },
      { position: 3, title: "Impossible", artist: "James Arthur", sales: "~970,000 chart units" },
      { position: 4, title: "Gangnam Style", artist: "Psy", sales: "~878,000 chart units" }
    ]
  },
  {
    year: 2013,
    newsStory: "Pope Francis elected following resignation of Pope Benedict XVI; Nelson Mandela dies aged 95",
    choices: [
      { position: 1, title: "Blurred Lines", artist: "Robin Thicke feat. T.I. & Pharrell Williams", sales: "~1,470,000 chart units" },
      { position: 2, title: "Get Lucky", artist: "Daft Punk feat. Pharrell Williams", sales: "~1,300,000 chart units" },
      { position: 3, title: "Wake Me Up", artist: "Avicii", sales: "~1,180,000 chart units" },
      { position: 4, title: "Let Her Go", artist: "Passenger", sales: "~1,030,000 chart units" }
    ]
  },
  {
    year: 2014,
    newsStory: "Ebola outbreak in West Africa; Scotland votes 'No' in independence referendum",
    choices: [
      { position: 1, title: "Happy", artist: "Pharrell Williams", sales: "~1,500,000 chart units" },
      { position: 2, title: "Rather Be", artist: "Clean Bandit feat. Jess Glynne", sales: "~1,130,000 chart units" },
      { position: 3, title: "All of Me", artist: "John Legend", sales: "~1,060,000 chart units" },
      { position: 4, title: "Uptown Funk", artist: "Mark Ronson feat. Bruno Mars", sales: "~980,000 chart units" }
    ]
  },
  {
    year: 2015,
    newsStory: "European migrant crisis peaks; Paris Agreement adopted to tackle global climate change",
    choices: [
      { position: 1, title: "Uptown Funk", artist: "Mark Ronson feat. Bruno Mars", sales: "~1,760,000 chart units" },
      { position: 2, title: "Cheerleader (Felix Jaehn Remix)", artist: "OMI", sales: "~1,520,000 chart units" },
      { position: 3, title: "Take Me to Church", artist: "Hozier", sales: "~1,250,000 chart units" },
      { position: 4, title: "Sorry", artist: "Justin Bieber", sales: "~1,190,000 chart units" }
    ]
  },
  {
    year: 2016,
    newsStory: "UK votes to leave the European Union in Brexit referendum; Donald Trump elected US President",
    choices: [
      { position: 1, title: "One Dance", artist: "Drake feat. Wizkid & Kyla", sales: "~1,950,000 chart units" },
      { position: 2, title: "7 Years", artist: "Lukas Graham", sales: "~1,490,000 chart units" },
      { position: 3, title: "Cheap Thrills", artist: "Sia feat. Sean Paul", sales: "~1,460,000 chart units" },
      { position: 4, title: "I Took a Pill in Ibiza (SeeB Remix)", artist: "Mike Posner", sales: "~1,380,000 chart units" }
    ]
  },
  {
    year: 2017,
    newsStory: "Total solar eclipse visible across North America; #MeToo movement gains global prominence",
    choices: [
      { position: 1, title: "Shape of You", artist: "Ed Sheeran", sales: "~3,200,000 chart units" },
      { position: 2, title: "Despacito (Remix)", artist: "Luis Fonsi feat. Daddy Yankee & Justin Bieber", sales: "~2,300,000 chart units" },
      { position: 3, title: "Castle on the Hill", artist: "Ed Sheeran", sales: "~1,700,000 chart units" },
      { position: 4, title: "Unforgettable", artist: "French Montana feat. Swae Lee", sales: "~1,400,000 chart units" }
    ]
  },
  {
    year: 2018,
    newsStory: "Prince Harry marries Meghan Markle at Windsor Castle; Thailand cave rescue saves 12 young footballers",
    choices: [
      { position: 1, title: "One Kiss", artist: "Calvin Harris & Dua Lipa", sales: "~1,570,000 chart units" },
      { position: 2, title: "God's Plan", artist: "Drake", sales: "~1,560,000 chart units" },
      { position: 3, title: "Shotgun", artist: "George Ezra", sales: "~1,490,000 chart units" },
      { position: 4, title: "This Is Me", artist: "Keala Settle & Ensemble", sales: "~1,390,000 chart units" }
    ]
  },
  {
    year: 2019,
    newsStory: "Notre-Dame Cathedral in Paris suffers devastating fire; First direct image of a black hole captured",
    choices: [
      { position: 1, title: "Someone You Loved", artist: "Lewis Capaldi", sales: "~2,330,000 chart units" },
      { position: 2, title: "Old Town Road", artist: "Lil Nas X", sales: "~1,740,000 chart units" },
      { position: 3, title: "Bad Guy", artist: "Billie Eilish", sales: "~1,380,000 chart units" },
      { position: 4, title: "Dance Monkey", artist: "Tones and I", sales: "~1,350,000 chart units" }
    ]
  },
  {
    year: 2020,
    newsStory: "COVID-19 pandemic causes global lockdowns; UK formally leaves the European Union",
    choices: [
      { position: 1, title: "Blinding Lights", artist: "The Weeknd", sales: "~2,200,000 chart units" },
      { position: 2, title: "Dance Monkey", artist: "Tones and I", sales: "~1,590,000 chart units" },
      { position: 3, title: "Roses (Imanbek Remix)", artist: "SAINt JHN", sales: "~1,390,000 chart units" },
      { position: 4, title: "Before You Go", artist: "Lewis Capaldi", sales: "~1,220,000 chart units" }
    ]
  },
  {
    year: 2021,
    newsStory: "Global COVID-19 vaccination rollout begins; US forces withdraw from Afghanistan",
    choices: [
      { position: 1, title: "Bad Habits", artist: "Ed Sheeran", sales: "~1,700,000 chart units" },
      { position: 2, title: "Good 4 U", artist: "Olivia Rodrigo", sales: "~1,390,000 chart units" },
      { position: 3, title: "Drivers License", artist: "Olivia Rodrigo", sales: "~1,330,000 chart units" },
      { position: 4, title: "Save Your Tears", artist: "The Weeknd", sales: "~1,070,000 chart units" }
    ]
  },
  {
    year: 2022,
    newsStory: "Queen Elizabeth II dies after 70-year reign; Russia invades Ukraine triggering global energy crisis",
    choices: [
      { position: 1, title: "As It Was", artist: "Harry Styles", sales: "~1,570,000 chart units" },
      { position: 2, title: "Bad Habits", artist: "Ed Sheeran", sales: "~1,180,000 chart units" },
      { position: 3, title: "Peru", artist: "Fireboy DML & Ed Sheeran", sales: "~1,080,000 chart units" },
      { position: 4, title: "Go", artist: "Cat Burns", sales: "~1,040,000 chart units" }
    ]
  },
  {
    year: 2023,
    newsStory: "King Charles III crowned at Westminster Abbey; Generative AI boom leads technological shift",
    choices: [
      { position: 1, title: "Flowers", artist: "Miley Cyrus", sales: "~1,200,000 chart units" },
      { position: 2, title: "Sprinter", artist: "Dave & Central Cee", sales: "~1,110,000 chart units" },
      { position: 3, title: "Escapism.", artist: "RAYE feat. 070 Shake", sales: "~980,000 chart units" },
      { position: 4, title: "Anti-Hero", artist: "Taylor Swift", sales: "~920,000 chart units" }
    ]
  },
  {
    year: 2024,
    newsStory: "Keir Starmer elected UK Prime Minister in Labour landslide; Paris hosts Summer Olympics",
    choices: [
      { position: 1, title: "Stick Season", artist: "Noah Kahan", sales: "~1,850,000 chart units" },
      { position: 2, title: "Espresso", artist: "Sabrina Carpenter", sales: "~1,420,000 chart units" },
      { position: 3, title: "Beautiful Things", artist: "Benson Boone", sales: "~1,350,000 chart units" },
      { position: 4, title: "A Bar Song (Tipsy)", artist: "Shaboozey", sales: "~1,180,000 chart units" }
    ]
  },
  {
    year: 2025,
    newsStory: "Robert Prevost elected Pope Leo XIV; global accords established to regulate advancing AI",
    choices: [
      { position: 1, title: "Ordinary", artist: "Alex Warren", sales: "~1,620,000 chart units" },
      { position: 2, title: "APT.", artist: "ROSÉ & Bruno Mars", sales: "~1,280,000 chart units" },
      { position: 3, title: "Taste", artist: "Sabrina Carpenter", sales: "~1,150,000 chart units" },
      { position: 4, title: "Good Luck, Babe!", artist: "Chappell Roan", sales: "~1,020,000 chart units" }
    ]
  },
  {
    year: 2026,
    newsStory: "Commercial lunar landers establish permanent automated outposts; UK celebrates major green energy milestones",
    choices: [
      { position: 1, title: "Messy", artist: "Lola Young", sales: "~1,180,000 YTD chart units" },
      { position: 2, title: "Ordinary", artist: "Alex Warren", sales: "~980,000 YTD chart units" },
      { position: 3, title: "Sailor Song", artist: "Gigi Perez", sales: "~890,000 YTD chart units" },
      { position: 4, title: "Luther", artist: "Kendrick Lamar & SZA", sales: "~840,000 YTD chart units" }
    ]
  }
];
