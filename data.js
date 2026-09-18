const QUIZ_DATA = [
  {
    year: 1985,
    newsStory: "Live Aid concert watched by 1.9 billion people raises funds for Ethiopian famine relief",
    choices: [
      { position: 1, title: "The Power of Love", artist: "Jennifer Rush" },
      { position: 2, title: "I Know Him So Well", artist: "Elaine Paige & Barbara Dickson" },
      { position: 3, title: "19", artist: "Paul Hardcastle" },
      { position: 4, title: "Easy Lover", artist: "Philip Bailey & Phil Collins" }
    ]
  },
  {
    year: 1986,
    newsStory: "Chernobyl nuclear disaster sends a radioactive cloud across Europe",
    choices: [
      { position: 1, title: "Don't Leave Me This Way", artist: "The Communards" },
      { position: 2, title: "Every Loser Wins", artist: "Nick Berry" },
      { position: 3, title: "A Different Corner", artist: "George Michael" },
      { position: 4, title: "West End Girls", artist: "Pet Shop Boys" }
    ]
  },
  {
    year: 1987,
    newsStory: "The Great Storm batters southern England; Black Monday crashes global stock markets",
    choices: [
      { position: 1, title: "Never Gonna Give You Up", artist: "Rick Astley" },
      { position: 2, title: "La Bamba", artist: "Los Lobos" },
      { position: 3, title: "I Wanna Dance with Somebody (Who Loves Me)", artist: "Whitney Houston" },
      { position: 4, title: "Nothing's Gonna Stop Us Now", artist: "Starship" }
    ]
  },
  {
    year: 1988,
    newsStory: "Pan Am Flight 103 bombed over Lockerbie, killing 270 people",
    choices: [
      { position: 1, title: "Mistletoe and Wine", artist: "Cliff Richard" },
      { position: 2, title: "I Should Be So Lucky", artist: "Kylie Minogue" },
      { position: 3, title: "The Only Way Is Up", artist: "Yazz & The Plastic Population" },
      { position: 4, title: "Perfect", artist: "Fairground Attraction" }
    ]
  },
  {
    year: 1989,
    newsStory: "The Berlin Wall falls as communist regimes collapse across Eastern Europe",
    choices: [
      { position: 1, title: "Ride on Time", artist: "Black Box" },
      { position: 2, title: "Back to Life (However Do You Want Me)", artist: "Soul II Soul ft Caron Wheeler" },
      { position: 3, title: "Eternal Flame", artist: "The Bangles" },
      { position: 4, title: "Like a Prayer", artist: "Madonna" }
    ]
  },
  {
    year: 1990,
    newsStory: "Nelson Mandela freed after 27 years in prison; Iraq invades Kuwait",
    choices: [
      { position: 1, title: "Unchained Melody", artist: "The Righteous Brothers" },
      { position: 2, title: "Nothing Compares 2 U", artist: "Sinead O'Connor" },
      { position: 3, title: "Sacrifice / Healing Hands", artist: "Elton John" },
      { position: 4, title: "Step by Step", artist: "New Kids on the Block" }
    ]
  },
  {
    year: 1991,
    newsStory: "Gulf War liberates Kuwait; the Soviet Union dissolves",
    choices: [
      { position: 1, title: "(Everything I Do) I Do It for You", artist: "Bryan Adams" },
      { position: 2, title: "Any Dream Will Do", artist: "Jason Donovan" },
      { position: 3, title: "Bohemian Rhapsody / These Are the Days of Our Lives", artist: "Queen" },
      { position: 4, title: "Unbelievable", artist: "EMF" }
    ]
  },
  {
    year: 1992,
    newsStory: "Black Wednesday forces the pound out of the European Exchange Rate Mechanism",
    choices: [
      { position: 1, title: "I Will Always Love You", artist: "Whitney Houston" },
      { position: 2, title: "Would I Lie to You?", artist: "Charles & Eddie" },
      { position: 3, title: "Rhythm Is a Dancer", artist: "Snap!" },
      { position: 4, title: "Ain't No Doubt", artist: "Jimmy Nail" }
    ]
  },
  {
    year: 1993,
    newsStory: "The Maastricht Treaty comes into force, creating the European Union",
    choices: [
      { position: 1, title: "I'd Do Anything for Love (But I Won't Do That)", artist: "Meat Loaf" },
      { position: 2, title: "Mr Vain", artist: "Culture Beat" },
      { position: 3, title: "No Limit", artist: "2 Unlimited" },
      { position: 4, title: "Boom! Shake the Room", artist: "DJ Jazzy Jeff & The Fresh Prince" }
    ]
  },
  {
    year: 1994,
    newsStory: "The Channel Tunnel opens; Nelson Mandela becomes South Africa's first Black President",
    choices: [
      { position: 1, title: "Love Is All Around", artist: "Wet Wet Wet" },
      { position: 2, title: "Saturday Night", artist: "Whigfield" },
      { position: 3, title: "Cotton Eye Joe", artist: "Rednex" },
      { position: 4, title: "Things Can Only Get Better", artist: "D:Ream" }
    ]
  },
  {
    year: 1995,
    newsStory: "Oklahoma City bombing kills 168; Oasis and Blur battle for chart supremacy",
    choices: [
      { position: 1, title: "Unchained Melody / White Cliffs of Dover", artist: "Robson & Jerome" },
      { position: 2, title: "Gangsta's Paradise", artist: "Coolio ft L.V." },
      { position: 3, title: "Fairground", artist: "Simply Red" },
      { position: 4, title: "Boom Boom Boom", artist: "The Outhere Brothers" }
    ]
  },
  {
    year: 1996,
    newsStory: "Dolly the sheep becomes the first cloned mammal; Dunblane school massacre shocks UK",
    choices: [
      { position: 1, title: "Wannabe", artist: "Spice Girls" },
      { position: 2, title: "Killing Me Softly", artist: "Fugees" },
      { position: 3, title: "Forever Love", artist: "Gary Barlow" },
      { position: 4, title: "Firestarter", artist: "The Prodigy" }
    ]
  },
  {
    year: 1997,
    newsStory: "Princess Diana dies in a Paris car crash; Tony Blair wins a historic Labour landslide",
    choices: [
      { position: 1, title: "Candle in the Wind 1997", artist: "Elton John" },
      { position: 2, title: "Barbie Girl", artist: "Aqua" },
      { position: 3, title: "I'll Be Missing You", artist: "Puff Daddy & Faith Evans" },
      { position: 4, title: "MMMBop", artist: "Hanson" }
    ]
  },
  {
    year: 1998,
    newsStory: "The Good Friday Agreement brings hope for lasting peace in Northern Ireland",
    choices: [
      { position: 1, title: "Believe", artist: "Cher" },
      { position: 2, title: "My Heart Will Go On", artist: "Celine Dion" },
      { position: 3, title: "No Matter What", artist: "Boyzone" },
      { position: 4, title: "Angels", artist: "Robbie Williams" }
    ]
  },
  {
    year: 1999,
    newsStory: "NATO bombs Serbia; fears mount over the Y2K bug as the millennium approaches",
    choices: [
      { position: 1, title: "...Baby One More Time", artist: "Britney Spears" },
      { position: 2, title: "Mambo No. 5", artist: "Lou Bega" },
      { position: 3, title: "Blue (Da Ba Dee)", artist: "Eiffel 65" },
      { position: 4, title: "Livin' la Vida Loca", artist: "Ricky Martin" }
    ]
  },
  {
    year: 2000,
    newsStory: "A total solar eclipse crosses the UK; the Millennium Dome opens to mixed reviews",
    choices: [
      { position: 1, title: "Can We Fix It?", artist: "Bob the Builder" },
      { position: 2, title: "Pure Shores", artist: "All Saints" },
      { position: 3, title: "It Feels So Good", artist: "Sonique" },
      { position: 4, title: "The Real Slim Shady", artist: "Eminem" }
    ]
  },
  {
    year: 2001,
    newsStory: "September 11 attacks kill nearly 3,000 in New York, Washington and Pennsylvania",
    choices: [
      { position: 1, title: "Whole Again", artist: "Atomic Kitten" },
      { position: 2, title: "Can't Get You Out of My Head", artist: "Kylie Minogue" },
      { position: 3, title: "It Wasn't Me", artist: "Shaggy ft RikRok" },
      { position: 4, title: "Pure and Simple", artist: "Hear'Say" }
    ]
  },
  {
    year: 2002,
    newsStory: "Queen Elizabeth II celebrates her Golden Jubilee; the Queen Mother dies aged 101",
    choices: [
      { position: 1, title: "Anything Is Possible / Evergreen", artist: "Will Young" },
      { position: 2, title: "Dilemma", artist: "Nelly ft Kelly Rowland" },
      { position: 3, title: "Just a Little", artist: "Liberty X" },
      { position: 4, title: "A Little Less Conversation", artist: "Elvis vs JXL" }
    ]
  },
  {
    year: 2003,
    newsStory: "UK joins the US-led invasion of Iraq; SARS outbreak spreads across Asia",
    choices: [
      { position: 1, title: "Where Is the Love?", artist: "The Black Eyed Peas" },
      { position: 2, title: "Spirit in the Sky", artist: "Gareth Gates ft The Kumars" },
      { position: 3, title: "Ignition (Remix)", artist: "R. Kelly" },
      { position: 4, title: "Crazy in Love", artist: "Beyoncé ft Jay-Z" }
    ]
  },
  {
    year: 2004,
    newsStory: "Boxing Day tsunami kills over 230,000 across South and Southeast Asia",
    choices: [
      { position: 1, title: "Do They Know It's Christmas?", artist: "Band Aid 20" },
      { position: 2, title: "Yeah!", artist: "Usher ft Lil Jon & Ludacris" },
      { position: 3, title: "Mysterious Girl", artist: "Peter Andre" },
      { position: 4, title: "Leave Right Now", artist: "Will Young" }
    ]
  },
  {
    year: 2005,
    newsStory: "London bombings kill 52 on 7 July; Hurricane Katrina devastates New Orleans",
    choices: [
      { position: 1, title: "(Is This the Way to) Amarillo", artist: "Tony Christie ft Peter Kay" },
      { position: 2, title: "Axel F", artist: "Crazy Frog" },
      { position: 3, title: "You're Beautiful", artist: "James Blunt" },
      { position: 4, title: "That's My Goal", artist: "Shayne Ward" }
    ]
  },
  {
    year: 2006,
    newsStory: "Twitter launches; North Korea tests its first nuclear weapon",
    choices: [
      { position: 1, title: "Crazy", artist: "Gnarls Barkley" },
      { position: 2, title: "Hips Don't Lie", artist: "Shakira ft Wyclef Jean" },
      { position: 3, title: "Smile", artist: "Lily Allen" },
      { position: 4, title: "Patience", artist: "Take That" }
    ]
  },
  {
    year: 2007,
    newsStory: "The iPhone goes on sale; Northern Rock bank run sparks UK financial fears",
    choices: [
      { position: 1, title: "Bleeding Love", artist: "Leona Lewis" },
      { position: 2, title: "Umbrella", artist: "Rihanna ft Jay-Z" },
      { position: 3, title: "Grace Kelly", artist: "Mika" },
      { position: 4, title: "Shine", artist: "Take That" }
    ]
  },
  {
    year: 2008,
    newsStory: "Global financial crisis triggers the worst recession since the 1930s",
    choices: [
      { position: 1, title: "Hallelujah", artist: "Alexandra Burke" },
      { position: 2, title: "I Kissed a Girl", artist: "Katy Perry" },
      { position: 3, title: "Mercy", artist: "Duffy" },
      { position: 4, title: "Sex on Fire", artist: "Kings of Leon" }
    ]
  },
  {
    year: 2009,
    newsStory: "Barack Obama inaugurated as US President; Michael Jackson dies aged 50",
    choices: [
      { position: 1, title: "Poker Face", artist: "Lady Gaga" },
      { position: 2, title: "Fight for This Love", artist: "Cheryl Cole" },
      { position: 3, title: "I Gotta Feeling", artist: "The Black Eyed Peas" },
      { position: 4, title: "Halo", artist: "Beyoncé" }
    ]
  },
  {
    year: 2010,
    newsStory: "Haiti earthquake kills over 200,000; Deepwater Horizon causes massive Gulf oil spill",
    choices: [
      { position: 1, title: "Love the Way You Lie", artist: "Eminem ft Rihanna" },
      { position: 2, title: "Pass Out", artist: "Tinie Tempah" },
      { position: 3, title: "Just the Way You Are", artist: "Bruno Mars" },
      { position: 4, title: "Rude Boy", artist: "Rihanna" }
    ]
  },
  {
    year: 2011,
    newsStory: "Prince William marries Kate Middleton; Osama bin Laden killed in Pakistan",
    choices: [
      { position: 1, title: "Someone Like You", artist: "Adele" },
      { position: 2, title: "Party Rock Anthem", artist: "LMFAO ft Lauren Bennett & GoonRock" },
      { position: 3, title: "Moves Like Jagger", artist: "Maroon 5 ft Christina Aguilera" },
      { position: 4, title: "We Found Love", artist: "Rihanna ft Calvin Harris" }
    ]
  },
  {
    year: 2012,
    newsStory: "London hosts the Olympic Games; Diamond Jubilee marks the Queen's 60 years on the throne",
    choices: [
      { position: 1, title: "Somebody That I Used to Know", artist: "Gotye ft Kimbra" },
      { position: 2, title: "Call Me Maybe", artist: "Carly Rae Jepsen" },
      { position: 3, title: "Diamonds", artist: "Rihanna" },
      { position: 4, title: "Glad You Came", artist: "The Wanted" }
    ]
  },
  {
    year: 2013,
    newsStory: "Margaret Thatcher dies; Edward Snowden reveals the NSA's mass surveillance programme",
    choices: [
      { position: 1, title: "Blurred Lines", artist: "Robin Thicke ft T.I. & Pharrell" },
      { position: 2, title: "Get Lucky", artist: "Daft Punk ft Pharrell Williams & Nile Rodgers" },
      { position: 3, title: "Wake Me Up", artist: "Avicii" },
      { position: 4, title: "Pompeii", artist: "Bastille" }
    ]
  },
  {
    year: 2014,
    newsStory: "Scotland votes No to independence; MH17 shot down over eastern Ukraine",
    choices: [
      { position: 1, title: "Happy", artist: "Pharrell Williams" },
      { position: 2, title: "Rather Be", artist: "Clean Bandit ft Jess Glynne" },
      { position: 3, title: "All About That Bass", artist: "Meghan Trainor" },
      { position: 4, title: "Thinking Out Loud", artist: "Ed Sheeran" }
    ]
  },
  {
    year: 2015,
    newsStory: "Paris terror attacks kill 130; over one million refugees reach Europe",
    choices: [
      { position: 1, title: "Uptown Funk", artist: "Mark Ronson ft Bruno Mars" },
      { position: 2, title: "Cheerleader (Felix Jaehn Remix)", artist: "OMI" },
      { position: 3, title: "Love Me Like You Do", artist: "Ellie Goulding" },
      { position: 4, title: "Take Me to Church", artist: "Hozier" }
    ]
  },
  {
    year: 2016,
    newsStory: "UK votes to leave the EU; David Bowie and Prince die; Donald Trump elected US President",
    choices: [
      { position: 1, title: "One Dance", artist: "Drake ft Wizkid & Kyla" },
      { position: 2, title: "7 Years", artist: "Lukas Graham" },
      { position: 3, title: "Cheap Thrills", artist: "Sia" },
      { position: 4, title: "Cold Water", artist: "Major Lazer ft Justin Bieber & MØ" }
    ]
  },
  {
    year: 2017,
    newsStory: "Manchester Arena bombing kills 22; Grenfell Tower fire kills 72 in London",
    choices: [
      { position: 1, title: "Shape of You", artist: "Ed Sheeran" },
      { position: 2, title: "Despacito (Remix)", artist: "Luis Fonsi & Daddy Yankee ft Justin Bieber" },
      { position: 3, title: "Human", artist: "Rag'n'Bone Man" },
      { position: 4, title: "Castle on the Hill", artist: "Ed Sheeran" }
    ]
  },
  {
    year: 2018,
    newsStory: "Prince Harry marries Meghan Markle; England reach the World Cup semi-final",
    choices: [
      { position: 1, title: "One Kiss", artist: "Calvin Harris & Dua Lipa" },
      { position: 2, title: "God's Plan", artist: "Drake" },
      { position: 3, title: "Shotgun", artist: "George Ezra" },
      { position: 4, title: "This Is Me", artist: "Keala Settle & The Greatest Showman Ensemble" }
    ]
  },
  {
    year: 2019,
    newsStory: "Boris Johnson becomes Prime Minister; Brexit deadlock dominates UK politics all year",
    choices: [
      { position: 1, title: "Someone You Loved", artist: "Lewis Capaldi" },
      { position: 2, title: "Old Town Road", artist: "Lil Nas X ft Billy Ray Cyrus" },
      { position: 3, title: "bad guy", artist: "Billie Eilish" },
      { position: 4, title: "Señorita", artist: "Shawn Mendes & Camila Cabello" }
    ]
  },
  {
    year: 2020,
    newsStory: "COVID-19 pandemic causes global lockdowns, killing millions worldwide",
    choices: [
      { position: 1, title: "Blinding Lights", artist: "The Weeknd" },
      { position: 2, title: "Roses (Imanbek Remix)", artist: "SAINt JHN" },
      { position: 3, title: "Head & Heart", artist: "Joel Corry ft MNEK" },
      { position: 4, title: "Watermelon Sugar", artist: "Harry Styles" }
    ]
  },
  {
    year: 2021,
    newsStory: "COVID vaccines roll out worldwide; England reach the Euro 2020 final; COP26 held in Glasgow",
    choices: [
      { position: 1, title: "Bad Habits", artist: "Ed Sheeran" },
      { position: 2, title: "drivers license", artist: "Olivia Rodrigo" },
      { position: 3, title: "Wellerman", artist: "Nathan Evans" },
      { position: 4, title: "good 4 u", artist: "Olivia Rodrigo" }
    ]
  },
  {
    year: 2022,
    newsStory: "Queen Elizabeth II dies after 70 years on the throne; Russia invades Ukraine",
    choices: [
      { position: 1, title: "As It Was", artist: "Harry Styles" },
      { position: 2, title: "Running Up That Hill (A Deal with God)", artist: "Kate Bush" },
      { position: 3, title: "Unholy", artist: "Sam Smith & Kim Petras" },
      { position: 4, title: "Heat Waves", artist: "Glass Animals" }
    ]
  },
  {
    year: 2023,
    newsStory: "ChatGPT sparks a global AI revolution; the Israel-Hamas conflict breaks out",
    choices: [
      { position: 1, title: "Flowers", artist: "Miley Cyrus" },
      { position: 2, title: "Sprinter", artist: "Dave & Central Cee" },
      { position: 3, title: "vampire", artist: "Olivia Rodrigo" },
      { position: 4, title: "Anti-Hero", artist: "Taylor Swift" }
    ]
  },
  {
    year: 2024,
    newsStory: "Labour wins UK general election after 14 years; Donald Trump returns to the White House",
    choices: [
      { position: 1, title: "Stick Season", artist: "Noah Kahan" },
      { position: 2, title: "Espresso", artist: "Sabrina Carpenter" },
      { position: 3, title: "Too Sweet", artist: "Hozier" },
      { position: 4, title: "Beautiful Things", artist: "Benson Boone" }
    ]
  }
];
