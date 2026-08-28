const QUIZ_DATA = [
  {
    year: 1985,
    choices: [
      { title: "The Power of Love", artist: "Jennifer Rush" },
      { title: "I Know Him So Well", artist: "Elaine Paige & Barbara Dickson" },
      { title: "Take On Me", artist: "a-ha" },
      { title: "Into the Groove", artist: "Madonna" }
    ]
  },
  {
    year: 1986,
    choices: [
      { title: "Don't Leave Me This Way", artist: "The Communards" },
      { title: "True Blue", artist: "Madonna" },
      { title: "The Lady in Red", artist: "Chris de Burgh" },
      { title: "A Different Corner", artist: "George Michael" }
    ]
  },
  {
    year: 1987,
    choices: [
      { title: "Never Gonna Give You Up", artist: "Rick Astley" },
      { title: "I Wanna Dance with Somebody", artist: "Whitney Houston" },
      { title: "(Is This the Way to) Amarillo", artist: "Tony Christie ft Peter Kay" },
      { title: "That's My Goal", artist: "Shayne Ward" },
      { title: "Axel F", artist: "Crazy Frog" },
      { title: "You're Beautiful", artist: "James Blunt" }
    ]
  },
  {
    year: 1988,
    choices: [
      { title: "Mistletoe and Wine", artist: "Cliff Richard" },
      { title: "Doctorin' the Tardis", artist: "The Timelords" },
      { title: "Perfect Day", artist: "Various Artists" },
      { title: "That's My Goal", artist: "Shayne Ward" },
      { title: "Axel F", artist: "Crazy Frog" },
      { title: "You're Beautiful", artist: "James Blunt" }
    ]
  },
  {
    year: 1989,
    choices: [
      { title: "Ride on Time", artist: "Black Box" },
      { title: "Eternal Flame", artist: "The Bangles" },
      { title: "Ferry 'Cross the Mersey", artist: "The Christians, Holly Johnson, Paul McCartney" },
      { title: "A Moment Like This", artist: "Leona Lewis" },
      { title: "Hips Don't Lie", artist: "Shakira ft Wyclef Jean" },
      { title: "I Don't Feel Like Dancin'", artist: "Scissor Sisters" }
    ]
  },
  {
    year: 1990,
    choices: [
      { title: "Unchained Melody", artist: "The Righteous Brothers" },
      { title: "Nothing Compares 2 U", artist: "Sinead O'Connor" },
      { title: "Sacrifice", artist: "Elton John" },
      { title: "It Must Have Been Love", artist: "Roxette" },
      { title: "Grace Kelly", artist: "Mika" },
      { title: "When You Believe", artist: "Leon Jackson" }
    ]
  },
  {
    year: 1991,
    choices: [
      { title: "(Everything I Do) I Do It for You", artist: "Bryan Adams" },
      { title: "Bohemian Rhapsody / These Are the Days of Our Lives", artist: "Queen" },
      { title: "I'm Too Sexy", artist: "Right Said Fred" },
      { title: "Hero", artist: "X Factor Finalists" },
      { title: "I Kissed a Girl", artist: "Katy Perry" }
    ]
  },
  {
    year: 1992,
    choices: [
      { title: "I Will Always Love You", artist: "Whitney Houston" },
      { title: "Stay", artist: "Shakespears Sister" },
      { title: "Would I Lie to You?", artist: "Charles & Eddie" },
      { title: "Rhythm Is a Dancer", artist: "Snap!" },
      { title: "Just Dance", artist: "Lady Gaga" },
      { title: "Fight for This Love", artist: "Cheryl Cole" }
    ]
  },
  {
    year: 1993,
    choices: [
      { title: "I'd Do Anything for Love", artist: "Meat Loaf" },
      { title: "No Limit", artist: "2 Unlimited" },
      { title: "Mr Vain", artist: "Culture Beat" },
      { title: "When We Collide", artist: "Matt Cardle" },
      { title: "Just the Way You Are (Amazing)", artist: "Bruno Mars" },
      { title: "Only Girl (In the World)", artist: "Rihanna" }
    ]
  },
  {
    year: 1994,
    choices: [
      { title: "Love Is All Around", artist: "Wet Wet Wet" },
      { title: "Saturday Night", artist: "Whigfield" },
      { title: "Cotton Eye Joe", artist: "Rednex" },
      { title: "Party Rock Anthem", artist: "LMFAO ft Lauren Bennett & GoonRock" },
      { title: "Price Tag", artist: "Jessie J ft B.o.B" }
    ]
  },
  {
    year: 1995,
    choices: [
      { title: "Unchained Melody / White Cliffs of Dover", artist: "Robson & Jerome" },
      { title: "Gangsta's Paradise", artist: "Coolio ft L.V." },
      { title: "Fairground", artist: "Simply Red" },
      { title: "Earth Song", artist: "Michael Jackson" },
      { title: "We Are Young", artist: "fun. ft Janelle Monae" },
      { title: "Titanium", artist: "David Guetta ft Sia" }
    ]
  },
  {
    year: 1996,
    choices: [
      { title: "Killing Me Softly", artist: "Fugees" },
      { title: "Wannabe", artist: "Spice Girls" },
      { title: "Breathe", artist: "The Prodigy" },
      { title: "Don't Speak", artist: "No Doubt" },
      { title: "Let Her Go", artist: "Passenger" }
    ]
  },
  {
    year: 1997,
    choices: [
      { title: "Candle in the Wind 1997", artist: "Elton John" },
      { title: "Barbie Girl", artist: "Aqua" },
      { title: "I'll Be Missing You", artist: "Puff Daddy & Faith Evans" },
      { title: "Perfect Day", artist: "Various Artists" },
      { title: "All of Me", artist: "John Legend" },
      { title: "Waves", artist: "Mr Probz" }
    ]
  },
  {
    year: 1998,
    choices: [
      { title: "Believe", artist: "Cher" },
      { title: "My Heart Will Go On", artist: "Celine Dion" },
      { title: "No Matter What", artist: "Boyzone" },
      { title: "Cheerleader (Felix Jaehn Remix)", artist: "OMI" },
      { title: "Take Me to Church", artist: "Hozier" },
      { title: "Love Me Like You Do", artist: "Ellie Goulding" }
    ]
  },
  {
    year: 1999,
    choices: [
      { title: "...Baby One More Time", artist: "Britney Spears" },
      { title: "Blue (Da Ba Dee)", artist: "Eiffel 65" },
      { title: "Mambo No. 5", artist: "Lou Bega" },
      { title: "When the Going Gets Tough", artist: "Boyzone" },
      { title: "I Took a Pill in Ibiza", artist: "Mike Posner" }
    ]
  },
  {
    year: 2000,
    choices: [
      { title: "Can We Fix It?", artist: "Bob the Builder" },
      { title: "Pure Shores", artist: "All Saints" },
      { title: "It Feels So Good", artist: "Sonique" },
      { title: "Despacito (Remix)", artist: "Luis Fonsi, Daddy Yankee ft Justin Bieber" },
      { title: "Castle on the Hill", artist: "Ed Sheeran" },
      { title: "Unforgettable", artist: "French Montana ft Swae Lee" }
    ]
  },
  {
    year: 2001,
    choices: [
      { title: "It Wasn't Me", artist: "Shaggy ft RikRok" },
      { title: "Whole Again", artist: "Atomic Kitten" },
      { title: "Can't Get You Out of My Head", artist: "Kylie Minogue" },
      { title: "Have a Nice Day", artist: "Stereophonics" },
      { title: "This Is Me", artist: "Keala Settle & The Greatest Showman Ensemble" }
    ]
  },
  {
    year: 2002,
    choices: [
      { title: "Anything Is Possible / Evergreen", artist: "Will Young" },
      { title: "Hero", artist: "Enrique Iglesias" },
      { title: "Dilemma", artist: "Nelly ft Kelly Rowland" },
      { title: "Just a Little", artist: "Liberty X" },
      { title: "I Don't Care", artist: "Ed Sheeran & Justin Bieber" },
      { title: "bad guy", artist: "Billie Eilish" }
    ]
  },
  {
    year: 2003,
    choices: [
      { title: "Where Is the Love?", artist: "The Black Eyed Peas" },
      { title: "Ignition (Remix)", artist: "R. Kelly" },
      { title: "Blinding Lights", artist: "Weeknd" },
      { title: "Dance Monkey", artist: "Tones and I" },
      { title: "Roses", artist: "SAINt JHN" },
      { title: "Before You Go", artist: "Lewis Capaldi" }
    ]
  },
  {
    year: 2004,
    choices: [
      { title: "Do They Know It's Christmas?", artist: "Band Aid 20" },
      { title: "Dragostea Din Tei", artist: "O-Zone" },
      { title: "Yeah!", artist: "Usher ft Lil Jon & Ludacris" },
      { title: "good 4 u", artist: "Olivia Rodrigo" },
      { title: "drivers license", artist: "Olivia Rodrigo" },
      { title: "Save Your Tears", artist: "Weeknd" }
    ]
  },
  {
    year: 2005,
    choices: [
      { title: "(Is This the Way to) Amarillo", artist: "Tony Christie ft Peter Kay" },
      { title: "Axel F", artist: "Crazy Frog" },
      { title: "You're Beautiful", artist: "James Blunt" },
      { title: "Bad Habits", artist: "Ed Sheeran" },
      { title: "Go", artist: "Cat Burns" }
    ]
  },
  {
    year: 2006,
    choices: [
      { title: "Crazy", artist: "Gnarls Barkley" },
      { title: "Hips Don't Lie", artist: "Shakira ft Wyclef Jean" },
      { title: "Smile", artist: "Lily Allen" },
      { title: "Patience", artist: "Take That" },
      { title: "Escapism.", artist: "RAYE ft 070 Shake" },
      { title: "Anti-Hero", artist: "Taylor Swift" }
    ]
  },
  {
    year: 2007,
    choices: [
      { title: "Bleeding Love", artist: "Leona Lewis" },
      { title: "Umbrella", artist: "Rihanna ft Jay-Z" },
      { title: "Shine", artist: "Take That" },
      { title: "Grace Kelly", artist: "Mika" },
      { title: "Espresso", artist: "Sabrina Carpenter" }
    ]
  },
  {
    year: 2008,
    choices: [
      { title: "Hallelujah", artist: "Alexandra Burke" },
      { title: "I Kissed a Girl", artist: "Katy Perry" },
      { title: "Mercy", artist: "Duffy" },
      { title: "Sex on Fire", artist: "Kings of Leon" }
    ]
  },
  {
    year: 2009,
    choices: [
      { title: "Poker Face", artist: "Lady Gaga" },
      { title: "I Gotta Feeling", artist: "The Black Eyed Peas" },
      { title: "Halo", artist: "Beyonce" },
      { title: "Bad Boys", artist: "Alexandra Burke ft Flo Rida" }
    ]
  },
  {
    year: 2010,
    choices: [
      { title: "Love the Way You Lie", artist: "Eminem ft Rihanna" },
      { title: "Just the Way You Are", artist: "Bruno Mars" },
      { title: "Pass Out", artist: "Tinie Tempah" },
      { title: "Empire State of Mind (Part II)", artist: "Alicia Keys" }
    ]
  },
  {
    year: 2011,
    choices: [
      { title: "Someone Like You", artist: "Adele" },
      { title: "Party Rock Anthem", artist: "LMFAO" },
      { title: "Moves Like Jagger", artist: "Maroon 5 ft Christina Aguilera" },
      { title: "We Found Love", artist: "Rihanna ft Calvin Harris" }
    ]
  },
  {
    year: 2012,
    choices: [
      { title: "Somebody That I Used to Know", artist: "Gotye ft Kimbra" },
      { title: "Call Me Maybe", artist: "Carly Rae Jepsen" },
      { title: "Diamonds", artist: "Rihanna" },
      { title: "Hall of Fame", artist: "The Script ft will.i.am" }
    ]
  },
  {
    year: 2013,
    choices: [
      { title: "Blurred Lines", artist: "Robin Thicke ft T.I. & Pharrell" },
      { title: "Get Lucky", artist: "Daft Punk ft Pharrell Williams" },
      { title: "Wake Me Up", artist: "Avicii" },
      { title: "Roar", artist: "Katy Perry" }
    ]
  },
  {
    year: 2014,
    choices: [
      { title: "Happy", artist: "Pharrell Williams" },
      { title: "Rather Be", artist: "Clean Bandit ft Jess Glynne" },
      { title: "All About That Bass", artist: "Meghan Trainor" },
      { title: "Ghost", artist: "Ella Henderson" }
    ]
  },
  {
    year: 2015,
    choices: [
      { title: "Uptown Funk", artist: "Mark Ronson ft Bruno Mars" },
      { title: "Cheerleader", artist: "OMI" },
      { title: "Love Me Like You Do", artist: "Ellie Goulding" },
      { title: "See You Again", artist: "Wiz Khalifa ft Charlie Puth" }
    ]
  },
  {
    year: 2016,
    choices: [
      { title: "One Dance", artist: "Drake ft Wizkid & Kyla" },
      { title: "7 Years", artist: "Lukas Graham" },
      { title: "Cheap Thrills", artist: "Sia" },
      { title: "Closer", artist: "The Chainsmokers ft Halsey" }
    ]
  },
  {
    year: 2017,
    choices: [
      { title: "Shape of You", artist: "Ed Sheeran" },
      { title: "Despacito", artist: "Luis Fonsi & Daddy Yankee ft Justin Bieber" },
      { title: "Unforgettable", artist: "French Montana ft Swae Lee" },
      { title: "Human", artist: "Rag'n'Bone Man" }
    ]
  },
  {
    year: 2018,
    choices: [
      { title: "One Kiss", artist: "Calvin Harris & Dua Lipa" },
      { title: "God's Plan", artist: "Drake" },
      { title: "Shotgun", artist: "George Ezra" },
      { title: "These Days", artist: "Rudimental ft Jess Glynne, Macklemore, Dan Caplen" }
    ]
  },
  {
    year: 2019,
    choices: [
      { title: "Someone You Loved", artist: "Lewis Capaldi" },
      { title: "Old Town Road", artist: "Lil Nas X" },
      { title: "bad guy", artist: "Billie Eilish" },
      { title: "I Don't Care", artist: "Ed Sheeran & Justin Bieber" }
    ]
  },
  {
    year: 2020,
    choices: [
      { title: "Blinding Lights", artist: "The Weeknd" },
      { title: "Roses (Imanbek Remix)", artist: "SAINt JHN" },
      { title: "Rockstar", artist: "DaBaby ft Roddy Ricch" },
      { title: "Head & Heart", artist: "Joel Corry ft MNEK" }
    ]
  },
  {
    year: 2021,
    choices: [
      { title: "Bad Habits", artist: "Ed Sheeran" },
      { title: "drivers license", artist: "Olivia Rodrigo" },
      { title: "Wellerman", artist: "Nathan Evans" },
      { title: "Shivers", artist: "Ed Sheeran" }
    ]
  },
  {
    year: 2022,
    choices: [
      { title: "As It Was", artist: "Harry Styles" },
      { title: "Unholy", artist: "Sam Smith & Kim Petras" },
      { title: "Running Up That Hill", artist: "Kate Bush" },
      { title: "Peru", artist: "Fireboy DML & Ed Sheeran" }
    ]
  },
  {
    year: 2023,
    choices: [
      { title: "Flowers", artist: "Miley Cyrus" },
      { title: "Sprinter", artist: "Dave & Central Cee" },
      { title: "vampire", artist: "Olivia Rodrigo" },
      { title: "Escapism.", artist: "RAYE ft 070 Shake" }
    ]
  },
  {
    year: 2024,
    choices: [
      { title: "Stick Season", artist: "Noah Kahan" },
      { title: "Beautiful Things", artist: "Benson Boone" },
      { title: "Texas Hold 'Em", artist: "Beyonce" },
      { title: "Lose Control", artist: "Teddy Swims" }
    ]
  }
];
