const songs = [
  [
    "Married Life",
    "Michael Giacchino",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/7iocNjLrxPHLl8njgRlv5U"
  ],
  [
    "Minuet in G",
    "J.S. Bach",
    "Classical",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6QVJWeZbK3C4o3F2OUkp2p"
  ],
  [
    "Canon in D (Easy)",
    "Pachelbel",
    "Classical",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1OLSvtJGks9Vw7LXusnmsL"
  ],
  [
    "Let It Be",
    "The Beatles",
    "Rock",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48"
  ],
  [
    "We Will Rock You",
    "Queen",
    "Rock",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2ELSVi4kwWOXgxiIC592tJ"
  ],
  [
    "Ode to Joy",
    "Beethoven",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/40gRh2ZURv5tYBo8yB9Lu3"
  ],
  [
    "Stand By Me",
    "Ben E. King",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
  ],
  [
    "Riptide",
    "Vance Joy",
    "Pop",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7yq4Qj7cqayVTp3FF9CWbm"
  ],
  [
    "Perfect",
    "Ed Sheeran",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
  ],
  [
    "Let It Go",
    "Idina Menzel",
    "Film",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0qcr5FMsEO85NAQjrlDRKo"
  ],
  [
    "River Flows in You",
    "Yiruma",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2agBDIr9MYDUducQPC1sFU"
  ],
  [
    "Clocks",
    "Coldplay",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns"
  ],
  [
    "Canon in D",
    "Pachelbel",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1c3GkbZBnyrQ1cm4TGHFrK"
  ],
  [
    "Time",
    "Hans Zimmer",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6ZFbXIJkuI1dVNWvzJzown"
  ],
  [
    "Interstellar Theme",
    "Hans Zimmer",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
  ],
  [
    "Billie Jean",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7J1uxwnxfQLu4APicE5Rnj"
  ],
  [
    "Viva La Vida",
    "Coldplay",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
  ],
  [
    "Someone Like You",
    "Adele",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3bNv3VuUOKgrf5hu3YcuRo"
  ],
  [
    "The Scientist",
    "Coldplay",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle"
  ],
  [
    "Test Drive",
    "John Powell",
    "Film",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2QTDuJIGKUjR7E2Q6KupIh"
  ],
  [
    "Canon in D (Easy)",
    "Pachelbel",
    "Classical",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1OLSvtJGks9Vw7LXusnmsL"
  ],
  [
    "Ode to Joy",
    "Ludwig van Beethoven",
    "Classical",
    1,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/40gRh2ZURv5tYBo8yB9Lu3"
  ],
  [
    "Twinkle Twinkle Little Star",
    "Traditional",
    "Classical",
    1,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/26g5SAtlGnizOuDbDg47K7"
  ],
  [
    "Amazing Grace",
    "Traditional",
    "Classical",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2gAeKqq5FALIgJABswWMPU"
  ],
  [
    "Minuet in G (Easy)",
    "J.S. Bach",
    "Classical",
    1,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/5sgAPzX5TmiwgkVGif8w1b"
  ],
  [
    "Mamma Mia",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91"
  ],
  [
    "Dancing Queen (Easy)",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/0mfKAnrBaroiuc2eknNUXf"
  ],
  [
    "I Have a Dream",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1PtJclc46wTk367PlsU6Uj"
  ],
  [
    "Happy",
    "Pharrell Williams",
    "Pop",
    1,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH"
  ],
  [
    "Perfect",
    "Ed Sheeran",
    "Pop",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
  ],
  [
    "Let It Go",
    "Frozen",
    "Film",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/0qcr5FMsEO85NAQjrlDRKo"
  ],
  [
    "Hedwigs Theme (Easy)",
    "John Williams",
    "Film",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/5OkRsZsJBBFIOWbCyJq6eL"
  ],
  [
    "Hes a Pirate (Easy)",
    "Klaus Badelt",
    "Film",
    1,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/4jHQR1XOQdnCt2RrM50GfR"
  ],
  [
    "My Heart Will Go On",
    "Celine Dion",
    "Film",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/33LC84JgLvK2KuW43MfaNq"
  ],
  [
    "The Lion Sleeps Tonight",
    "Traditional",
    "Pop",
    1,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/4uSJKezergr1Ce86qQHokB"
  ],
  [
    "Knockin on Heavens Door",
    "Bob Dylan",
    "Rock",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/6HSXNV0b4M4cLJ7ljgVVeh"
  ],
  [
    "Wonderwall (Easy)",
    "Oasis",
    "Rock",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/4JJR827Q2O8s7x0GYguzxk"
  ],
  [
    "Smoke on the Water (Easy)",
    "Deep Purple",
    "Rock",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/1Sgj10byiGzPpI2IrXSFEn"
  ],
  [
    "Seven Nation Army",
    "The White Stripes",
    "Rock",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3dPQuX8Gs42Y7b454ybpMR"
  ],
  [
    "Zombie",
    "The Cranberries",
    "Rock",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/49wOjOkS4pBK3PQnPnNYjb"
  ],
  [
    "Mamma Mia",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91"
  ],
  [
    "Dancing Queen",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr"
  ],
  [
    "Take On Me (Easy)",
    "a-ha",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/62aj6pzjrfimmXIMWHMYiU"
  ],
  [
    "Perfect",
    "Ed Sheeran",
    "Pop",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
  ],
  [
    "Someone You Loved",
    "Lewis Capaldi",
    "Pop",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"
  ],
  [
    "Stand By Me",
    "Ben E. King",
    "Pop",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
  ],
  [
    "Im Yours",
    "Jason Mraz",
    "Pop",
    1,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/1EzrEOXmMH3G43AXT1y7pA"
  ],
  [
    "Hallelujah",
    "Leonard Cohen",
    "Pop",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/7yzbimr8WVyAtBX3Eg6UL9"
  ],
  [
    "Pirates of the Caribbean Theme (Easy)",
    "Klaus Badelt",
    "Film",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/1rLWqudpe3pVRa66xEv2Fo"
  ],
  [
    "Harry Potter Theme (Easy)",
    "John Williams",
    "Film",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/7LGpOFZvhflj4xEVAsMt0D"
  ],
  [
    "We Will Rock You",
    "Queen",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2ELSVi4kwWOXgxiIC592tJ"
  ],
  [
    "Seven Nation Army",
    "The White Stripes",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/3dPQuX8Gs42Y7b454ybpMR"
  ],
  [
    "Smoke on the Water",
    "Deep Purple",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/5MMnwYs0hIxkENRsbkWJ2G"
  ],
  [
    "Another One Bites the Dust",
    "Queen",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/1KPuohcXPmJYQfdyg9zKmR"
  ],
  [
    "Zombie",
    "The Cranberries",
    "Rock",
    1,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/49wOjOkS4pBK3PQnPnNYjb"
  ],
  [
    "Dancing Queen",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr"
  ],
  [
    "Mamma Mia",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91"
  ],
  [
    "Happy",
    "Pharrell Williams",
    "Pop",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH"
  ],
  [
    "Counting Stars",
    "OneRepublic",
    "Pop",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2tpWsVSb9UEmDRxAl1zhX1"
  ],
  [
    "Uptown Funk",
    "Mark Ronson",
    "Pop",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS"
  ],
  [
    "Dancing Queen",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr"
  ],
  [
    "Mamma Mia",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91"
  ],
  [
    "The Winner Takes It All",
    "ABBA",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3oEkrIfXfSh9zGnE7eBzSV"
  ],
  [
    "Chiquitita",
    "ABBA",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/762B4bOcXF7I2Y8UlKTyTy"
  ],
  [
    "I Have a Dream",
    "ABBA",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1PtJclc46wTk367PlsU6Uj"
  ],
  [
    "Gimme! Gimme! Gimme!",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3vkQ5DAB1qQMYO4Mr9zJN6"
  ],
  [
    "Take A Chance On Me",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/5BckPAYcKEJuYs1eV1BHHe"
  ],
  [
    "Super Trouper",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/0J2p4KYdr6Mg4ET6JPlbe1"
  ],
  [
    "Bohemian Rhapsody",
    "Queen",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0LQmP5mwOOhOcaZoPaquNL"
  ],
  [
    "Love Of My Life",
    "Queen",
    "Rock",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0xcWxI1fUxfD6LrrljUH7L"
  ],
  [
    "We Are The Champions",
    "Queen",
    "Rock",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0saBeiGcu2dECTvAknHPzL"
  ],
  [
    "Dont Stop Me Now",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/1NHWG8zxSEypSRF3UufrnO"
  ],
  [
    "We Will Rock You",
    "Queen",
    "Rock",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/2ELSVi4kwWOXgxiIC592tJ"
  ],
  [
    "Another One Bites The Dust",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/1KPuohcXPmJYQfdyg9zKmR"
  ],
  [
    "Crazy Little Thing Called Love",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/7uON6DWIjXgmLQIfGsWXpV"
  ],
  [
    "I Want To Break Free",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3SfwhRb2CzGGuyUYF64wYR"
  ],
  [
    "Bohemian Rhapsody",
    "Queen",
    "Rock",
    5,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0LQmP5mwOOhOcaZoPaquNL"
  ],
  [
    "Somebody To Love",
    "Queen",
    "Rock",
    4,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/18OMrZoyyZuVy06FttIFhq"
  ],
  [
    "We Are The Champions",
    "Queen",
    "Rock",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0saBeiGcu2dECTvAknHPzL"
  ],
  [
    "Dont Stop Me Now",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/1NHWG8zxSEypSRF3UufrnO"
  ],
  [
    "Eye of the Tiger",
    "Survivor",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2HHtWyy5CgaQbC7XSoOb0e"
  ],
  [
    "Viva La Vida",
    "Coldplay",
    "Pop",
    1,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
  ],
  [
    "Believer",
    "Imagine Dragons",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP"
  ],
  [
    "We Are the Champions",
    "Queen",
    "Rock",
    1,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/0saBeiGcu2dECTvAknHPzL"
  ],
  [
    "The Final Countdown",
    "Europe",
    "Rock",
    1,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/3MrRksHupTVEQ7YbA0FsZK"
  ],
  [
    "Take a Chance on Me",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/5BckPAYcKEJuYs1eV1BHHe"
  ],
  [
    "The Winner Takes It All",
    "ABBA",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/3oEkrIfXfSh9zGnE7eBzSV"
  ],
  [
    "Fernando",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/4BM8yJ0PzBi2ZewpMTOxtx"
  ],
  [
    "Chiquitita",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/762B4bOcXF7I2Y8UlKTyTy"
  ],
  [
    "S.O.S.",
    "ABBA",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0J2p4KYdr6Mg4ET6JPlbe1"
  ],
  [
    "Voulez-Vous",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/17OqI90oTFZ3J8PVu6j07V"
  ],
  [
    "Money, Money, Money",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/3lKN03PDeBnXZS7sDukRBt"
  ],
  [
    "Gimme! Gimme! Gimme!",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/3vkQ5DAB1qQMYO4Mr9zJN6"
  ],
  [
    "Super Trouper",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/0J2p4KYdr6Mg4ET6JPlbe1"
  ],
  [
    "Does Your Mother Know",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/2HPB3px8MJZRMfu1L65Z41"
  ],
  [
    "Lay All Your Love on Me",
    "ABBA",
    "Pop",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4euAGZTszWPrriggYK0HG9"
  ],
  [
    "One of Us",
    "ABBA",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/40IHflbrHcOuC8ZcYxUSAC"
  ],
  [
    "Voulez-Vous",
    "ABBA",
    "Pop",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/17OqI90oTFZ3J8PVu6j07V"
  ],
  [
    "Gimme! Gimme! Gimme!",
    "ABBA",
    "Pop",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/3vkQ5DAB1qQMYO4Mr9zJN6"
  ],
  [
    "The Name of the Game",
    "ABBA",
    "Pop",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1lDo24S34NvI1pAg7Oxldc"
  ],
  [
    "The Winner Takes It All (Easy)",
    "ABBA",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/25bfRdAv96HG8B1cD49fzn"
  ],
  [
    "Dancing Queen (Easy)",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0mfKAnrBaroiuc2eknNUXf"
  ],
  [
    "Mamma Mia (Easy)",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/6myFVB4x3mkzV8WrD0E5Ou"
  ],
  [
    "Take a Chance on Me (Easy)",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/4MJ7GR6B2PIprCbAJYIpgr"
  ],
  [
    "Fernando (Easy)",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/4uTz1lbe1LtlRiV3FY2E2p"
  ],
  [
    "Dancing Queen",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr"
  ],
  [
    "Mamma Mia",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91"
  ],
  [
    "I Have a Dream",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1PtJclc46wTk367PlsU6Uj"
  ],
  [
    "Thank You for the Music",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/08GOw3NsrJ0LsCCeyqzt3b"
  ],
  [
    "Waterloo",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/3Dy4REq8O09IlgiwuHQ3sk"
  ],
  [
    "Perfect",
    "Ed Sheeran",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
  ],
  [
    "Someone You Loved",
    "Lewis Capaldi",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"
  ],
  [
    "Happy",
    "Pharrell Williams",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH"
  ],
  [
    "Count on Me",
    "Bruno Mars",
    "Pop",
    1,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/3B5UbSndRz907IZhhmUfLi"
  ],
  [
    "Let Her Go",
    "Passenger",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/5KReHDo8W8w9bKTY3KxPy3"
  ],
  [
    "Let It Go",
    "Frozen",
    "Film",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0qcr5FMsEO85NAQjrlDRKo"
  ],
  [
    "A Whole New World",
    "Aladdin",
    "Film",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/4tS8xQfyPGc7f4lJ1JP6BX"
  ],
  [
    "Can You Feel the Love Tonight",
    "The Lion King",
    "Film",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/32RxZnEk5KyWUTZR4azxbD"
  ],
  [
    "Stand By Me",
    "Ben E. King",
    "Pop",
    1,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
  ],
  [
    "Viva La Vida",
    "Coldplay",
    "Pop",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
  ],
  [
    "Sweet Child O Mine",
    "Guns N Roses",
    "Rock",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW"
  ],
  [
    "Hotel California",
    "Eagles",
    "Rock",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv"
  ],
  [
    "Experience",
    "Ludovico Einaudi",
    "Classical",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj"
  ],
  [
    "Hes a Pirate",
    "Klaus Badelt",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4AD2dterIUjNt1LFNI9Bvi"
  ],
  [
    "Moonlight Sonata",
    "Beethoven",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/40gRh2ZURv5tYBo8yB9Lu3"
  ],
  [
    "Clair de Lune",
    "Debussy",
    "Classical",
    5,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5u5aVJKjSMJr4zesMPz7bL"
  ],
  [
    "Nocturne Op.9 No.2",
    "Chopin",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1VNvsvEsUpuUCbHpVop1vo"
  ],
  [
    "Stairway to Heaven",
    "Led Zeppelin",
    "Rock",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc"
  ],
  [
    "Comptine d un autre été",
    "Yann Tiersen",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/14rZjW3RioG7WesZhYESso"
  ],
  [
    "Nuvole Bianche",
    "Ludovico Einaudi",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3weNRklVDqb4Rr5MhKBR3D"
  ],
  [
    "Una Mattina",
    "Ludovico Einaudi",
    "Classical",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0Dkibk70FDp6t7eOZNemNQ"
  ],
  [
    "I Giorni",
    "Ludovico Einaudi",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0VLascXUZ2Ze2u5kUD5J1f"
  ],
  [
    "Le Onde",
    "Ludovico Einaudi",
    "Classical",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1ULzttQgU3Q9EaIpdoxF1T"
  ],
  [
    "Gymnopédie No.1",
    "Erik Satie",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5NGtFXVpXSvwunEIGeviY3"
  ],
  [
    "Gnossienne No.1",
    "Erik Satie",
    "Classical",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5NGtFXVpXSvwunEIGeviY3"
  ],
  [
    "Prelude in C Major",
    "J.S. Bach",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/17i5jLpzndlQhbS4SrTd0B"
  ],
  [
    "Arabesque No.1",
    "Claude Debussy",
    "Classical",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/7zXmnMz68mi7Y1jMa7DHut"
  ],
  [
    "Waltz in A Minor",
    "Frédéric Chopin",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/71MpmxCJ1TW05c7Fvv1SfI"
  ],
  [
    "Prelude Op.28 No.4",
    "Frédéric Chopin",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0YXlnlBSUl2TTgJdCHm47B"
  ],
  [
    "Raindrop Prelude",
    "Frédéric Chopin",
    "Classical",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3tfD2ZwaViEIptKqwkVMKj"
  ],
  [
    "Liebestraum No.3",
    "Franz Liszt",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2u9VGZmVz7Rm01SfDgzcfA"
  ],
  [
    "Hungarian Rhapsody No.2",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7CIoJE0JfVFcmmUY3fFojH"
  ],
  [
    "Turkish March",
    "W.A. Mozart",
    "Classical",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5NSBrcJWwqLsQPuX0XczOW"
  ],
  [
    "Pathetique Sonata",
    "Ludwig van Beethoven",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2inBCNxBhgh8NTCHjcND59"
  ],
  [
    "The Entertainer",
    "Scott Joplin",
    "Classical",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6DWIm1TfM9WiCNQeLbbAsd"
  ],
  [
    "Maple Leaf Rag",
    "Scott Joplin",
    "Classical",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6OFKuIfo6qfEcfq0tzOgG9"
  ],
  [
    "Sonatina in C",
    "Muzio Clementi",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/22h3ELV6U6g0gRcLTB6VY3"
  ],
  [
    "Largo from New World Symphony",
    "Antonín Dvořák",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/37amjDk5wKJ7J07EVzocEP"
  ],
  [
    "Cornfield Chase",
    "Hans Zimmer",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6pWgRkpqVfxnj3WuIcJ7WP"
  ],
  [
    "Day One",
    "Hans Zimmer",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
  ],
  [
    "Now We Are Free",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/11IXRdEjiH0KL8nh4G1j7d"
  ],
  [
    "Chevaliers de Sangreal",
    "Hans Zimmer",
    "Film",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2u2i29v0jysxivXIABOTj6"
  ],
  [
    "Hedwigs Theme",
    "John Williams",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF"
  ],
  [
    "Jurassic Park Theme",
    "John Williams",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2TZbQZXOuR8osP2AK8yYMN"
  ],
  [
    "Star Wars Main Theme",
    "John Williams",
    "Film",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7a9UUo3zfID7Ik2fTQjRLi"
  ],
  [
    "The Imperial March",
    "John Williams",
    "Film",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2bw4WgXyXP90hIex7ur58y"
  ],
  [
    "One Summers Day",
    "Joe Hisaishi",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/24yI12lKyeNrN7yEAPVc8j"
  ],
  [
    "Merry-Go-Round of Life",
    "Joe Hisaishi",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/39uLYYZytVUwcjgeYLI409"
  ],
  [
    "Howls Moving Castle Theme",
    "Joe Hisaishi",
    "Film",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/22ddy6PgC03prjM5PzfuDk"
  ],
  [
    "Marry Me",
    "Train",
    "Pop",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2MWOqewf5j0qf2b6S5J6cS"
  ],
  [
    "Photograph",
    "Ed Sheeran",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
  ],
  [
    "Thinking Out Loud",
    "Ed Sheeran",
    "Pop",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f"
  ],
  [
    "Shallow",
    "Lady Gaga",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2VxeLyX666F8uXCJ0dZF8B"
  ],
  [
    "Easy On Me",
    "Adele",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/46IZ0fSY2mpAiktS3KOqds"
  ],
  [
    "Hello",
    "Adele",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1Yk0cQdMLx5RzzFTYwmuld"
  ],
  [
    "Someone You Loved",
    "Lewis Capaldi",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"
  ],
  [
    "Fix You",
    "Coldplay",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
  ],
  [
    "Yellow",
    "Coldplay",
    "Rock",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg"
  ],
  [
    "Paradise",
    "Coldplay",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6nek1Nin9q48AVZcWs9e9D"
  ],
  [
    "Demons",
    "Imagine Dragons",
    "Rock",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5qaEfEh1AtSdrdrByCP7qR"
  ],
  [
    "Radioactive",
    "Imagine Dragons",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/62yJjFtgkhUrXktIoSjgP2"
  ],
  [
    "Nothing Else Matters",
    "Metallica",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6QAsrXPnMSXIbV0yEJHlEX"
  ],
  [
    "Dont Stop Believin",
    "Journey",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5RKQ5NdjSh2QzD4MaunT91"
  ],
  [
    "Sweden",
    "C418",
    "Film",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/716HpbfSkMkU7TwQsJlhHT"
  ],
  [
    "Wet Hands",
    "C418",
    "Film",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1MLZMrjfwiT5ll5vjIwwU7"
  ],
  [
    "To Zanarkand",
    "Nobuo Uematsu",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1k1zai8aT3y6BSlxAxQMTF"
  ],
  [
    "Dragonborn",
    "Jeremy Soule",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/1jLmVI46Yf0jzQkugZReIn"
  ],
  [
    "Ezios Family",
    "Jesper Kyd",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/05UMQXFCsa9oPnLgfJHVyF"
  ],
  [
    "Hallelujah",
    "Leonard Cohen",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7yzbimr8WVyAtBX3Eg6UL9"
  ],
  [
    "Imagine",
    "John Lennon",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9"
  ],
  [
    "Count on Me",
    "Bruno Mars",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3B5UbSndRz907IZhhmUfLi"
  ],
  [
    "A Thousand Years",
    "Christina Perri",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6vS1uzFFH8tUWDPnGbBDbc"
  ],
  [
    "All of Me",
    "John Legend",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a"
  ],
  [
    "Love Story",
    "Taylor Swift",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1D4PL9B8gOg78jiHg3FvBb"
  ],
  [
    "You Are My Sunshine",
    "Traditional",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2VTUz4vnpsKwR9wluFNP59"
  ],
  [
    "Cant Help Falling in Love",
    "Elvis Presley",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
  ],
  [
    "Lean on Me",
    "Bill Withers",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3M8FzayQWtkvOhqMn2V4T2"
  ],
  [
    "What a Wonderful World",
    "Louis Armstrong",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/29U7stRjqHU6rMiS8BfaI9"
  ],
  [
    "The Lion Sleeps Tonight",
    "The Tokens",
    "Pop",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2EbYvUisyXUltuUJRoViAm"
  ],
  [
    "Happy Birthday",
    "Traditional",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2OSHgobA7CSxxLJ5Pr4Y4R"
  ],
  [
    "Twinkle Twinkle Little Star",
    "Traditional",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/26g5SAtlGnizOuDbDg47K7"
  ],
  [
    "Greensleeves",
    "Traditional",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0zvWXDMgXSBoOkZ3XKPGC6"
  ],
  [
    "Scarborough Fair",
    "Traditional",
    "Classical",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1U1NkDoPpCSEX1T6ZMWX04"
  ],
  [
    "Morning Mood",
    "Edvard Grieg",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/58qWLnRZc6McLaLQx0zU7e"
  ],
  [
    "Simple Gifts",
    "Traditional",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/7aqx8hsa0qrpkDYfDnQy54"
  ],
  [
    "Aura Lee",
    "Traditional",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/07aEkV3R7BM6Wakq3i6ub9"
  ],
  [
    "Lightly Row",
    "Traditional",
    "Classical",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0MZFisaNtVwYCJQQjtl0Ny"
  ],
  [
    "Musette in D",
    "J.S. Bach",
    "Classical",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3mNh679G9SZGcYzzjY37rN"
  ],
  [
    "Once Upon a Dream",
    "Pyotr Ilyich Tchaikovsky",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3Bmd7FPv3OulR6tJzLhUot"
  ],
  [
    "Beauty and the Beast",
    "Alan Menken",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/04HdDK4MwSttuBTzN0U4Ef"
  ],
  [
    "A Whole New World",
    "Alan Menken",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5V0TVDsIceZe78EkSDlLjA"
  ],
  [
    "Can You Feel the Love Tonight",
    "Elton John",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/32RxZnEk5KyWUTZR4azxbD"
  ],
  [
    "Colors of the Wind",
    "Alan Menken",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2BG97EQecLERHxQM53r2pL"
  ],
  [
    "Remember Me",
    "Kristen Anderson-Lopez",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7Bqh0XWnQjyw3qUGtSuuo7"
  ],
  [
    "Youve Got a Friend in Me",
    "Randy Newman",
    "Film",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2stkLJ0JNcXkIRDNF3ld6c"
  ],
  [
    "When You Wish Upon a Star",
    "Leigh Harline",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5x1Jh2OEobLfotsi4W06pw"
  ],
  [
    "Married Life (Easy)",
    "Michael Giacchino",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5esKpmZvV29GhPXi5QMALE"
  ],
  [
    "Part of Your World",
    "Alan Menken",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7tUSJY4nsDBJTjd1UXKRsT"
  ],
  [
    "Stand by Your Man",
    "Tammy Wynette",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6xatfNMI8NkY5XxRHAeiS4"
  ],
  [
    "Yesterday",
    "The Beatles",
    "Rock",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI"
  ],
  [
    "Hey Jude",
    "The Beatles",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1eT2CjXwFXNx6oY5ydvzKU"
  ],
  [
    "Imagine Dragons - Bones",
    "Imagine Dragons",
    "Rock",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/54ipXppHLA8U4yqpOFTUhr"
  ],
  [
    "Zombie",
    "The Cranberries",
    "Rock",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/49wOjOkS4pBK3PQnPnNYjb"
  ],
  [
    "Wonderful Tonight",
    "Eric Clapton",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/6zC0mpGYwbNTpk9SKwh08f"
  ],
  [
    "Take Me Home, Country Roads",
    "John Denver",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1QbOvACeYanja5pbnJbAmk"
  ],
  [
    "Every Breath You Take",
    "The Police",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1JSTJqkT5qHq8MDJnJbRE1"
  ],
  [
    "Africa",
    "Toto",
    "Rock",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX"
  ],
  [
    "The Sound of Silence",
    "Simon & Garfunkel",
    "Rock",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2YplrdHMBoRdnHgMeHEwHm"
  ],
  [
    "La Campanella",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2Hnurh1BcigGbCGFOb4Uid"
  ],
  [
    "Transcendental Etude No.4 Mazeppa",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2se5QqNHPODeXI9xRr6z25"
  ],
  [
    "Hungarian Rhapsody No.6",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0mwn1hTGqC0luXpwI9EG3G"
  ],
  [
    "Mephisto Waltz No.1",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5NXhhKV4An0YOoOBvHVbz0"
  ],
  [
    "Totentanz",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0HLSdGYupRsW727qtnufD1"
  ],
  [
    "Ballade No.1",
    "Frédéric Chopin",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/334v1TurqA14CpRfYXFBzh"
  ],
  [
    "Ballade No.4",
    "Frédéric Chopin",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2djnUcMuDTej4ffwesZvGT"
  ],
  [
    "Scherzo No.2",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2MSgFefjK0T7Iwjvr3OKqV"
  ],
  [
    "Etude Op.10 No.1",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7L5n4GRzNG9gUxxL05XbsT"
  ],
  [
    "Etude Op.10 No.4",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7Cj3Xamn69RBqUKWdMJec0"
  ],
  [
    "Etude Op.10 No.12 Revolutionary",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0UJ8cvkSN6SHeNwVFmGGQX"
  ],
  [
    "Etude Op.25 No.11 Winter Wind",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/35AghX0R7ReZCtB3cPDu6U"
  ],
  [
    "Polonaise Op.53 Heroic",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4QE6VEFPfV5wd3sTFR83ij"
  ],
  [
    "Fantaisie-Impromptu",
    "Frédéric Chopin",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0Y9BzZGT2FuLVPrHoq1g2G"
  ],
  [
    "Piano Sonata No.2",
    "Frédéric Chopin",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2MSgFefjK0T7Iwjvr3OKqV"
  ],
  [
    "Gaspard de la Nuit",
    "Maurice Ravel",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2rCWOGzSBQyeCOrxG7xVZ3"
  ],
  [
    "Jeux d eau",
    "Maurice Ravel",
    "Classical",
    5,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/6XJVv5lYTvwmPyTUPsakB0"
  ],
  [
    "Miroirs: Alborada del Gracioso",
    "Maurice Ravel",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3iZs0Wk6BkrogJh3ZuQIhS"
  ],
  [
    "Ondine",
    "Maurice Ravel",
    "Classical",
    5,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/4MKO9HZwIfzrKCs4FS1prQ"
  ],
  [
    "Scarbo",
    "Maurice Ravel",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2TDf6oiiSJYASglObKNDrG"
  ],
  [
    "Toccata in D Minor",
    "J.S. Bach",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0BWJNm4TrO6H3qgiCmDBjM"
  ],
  [
    "Goldberg Variations: Aria",
    "J.S. Bach",
    "Classical",
    5,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2VweWpQgRyYZfroRqqeO8r"
  ],
  [
    "Italian Concerto",
    "J.S. Bach",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0hxAsmSTVGZkHCJmktpSDe"
  ],
  [
    "English Suite No.2",
    "J.S. Bach",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5pYJUfs91g5YFld2z82PvP"
  ],
  [
    "Chromatic Fantasia and Fugue",
    "J.S. Bach",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0hxAsmSTVGZkHCJmktpSDe"
  ],
  [
    "Appassionata Sonata",
    "Ludwig van Beethoven",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7gliuFmpjf2RPE397WaX00"
  ],
  [
    "Hammerklavier Sonata",
    "Ludwig van Beethoven",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7LWk8XRhxjSuF6FHmmFfeD"
  ],
  [
    "Waldstein Sonata",
    "Ludwig van Beethoven",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3KCCHrSAJ4AOOJ2M22y4bE"
  ],
  [
    "Tempest Sonata",
    "Ludwig van Beethoven",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2jzmyowcEhrWjVDSbgzqEU"
  ],
  [
    "Piano Sonata No.31",
    "Ludwig van Beethoven",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6QCvbFdLmpdWIcTe2XlIs2"
  ],
  [
    "Paganini Etude No.6",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4JWgZ7yOhvASm9lRTkcrzC"
  ],
  [
    "Islamey",
    "Mily Balakirev",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4q2TzLVBDiH73xlAkXWJPn"
  ],
  [
    "Toccata Op.11",
    "Sergei Prokofiev",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4TKl8q5JBZOKDHxjtbDaJ5"
  ],
  [
    "Piano Concerto No.2",
    "Sergei Rachmaninoff",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4rrrn8OLrttq7r9RgNXalU"
  ],
  [
    "Prelude in G Minor Op.23 No.5",
    "Sergei Rachmaninoff",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/47Y7RZyJ4KifA1fPa9xFyE"
  ],
  [
    "Etude-Tableaux Op.39 No.5",
    "Sergei Rachmaninoff",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7w4yGoLfZJwJzHLGiUqUeh"
  ],
  [
    "Sonata in B Minor",
    "Franz Liszt",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3wTNBZNGKQmtHH7P8wuSOg"
  ],
  [
    "Petrushka",
    "Igor Stravinsky",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6FQsHpV1DREJFMBZmMKITF"
  ],
  [
    "Spanish Rhapsody",
    "Franz Liszt",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2SLZ0qndnsTVM71iFiFYuq"
  ],
  [
    "Valse-Fantaisie",
    "Mikhail Glinka",
    "Classical",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/7kN5xUUAHHTeD2FTdhBWaI"
  ],
  [
    "Honor Him",
    "Hans Zimmer",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/65hCWnFxcEfZmUTsGySi7W"
  ],
  [
    "A Small Measure of Peace",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0k1zElVBehCAzAa975af71"
  ],
  [
    "Tennessee",
    "Hans Zimmer",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4UlXSEouuDpYFo8CrhxUU5"
  ],
  [
    "This Land",
    "Hans Zimmer",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6EKywtYHtZLAvxyEcqrbE7"
  ],
  [
    "The Ecstasy of Gold",
    "Ennio Morricone",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6PrKZUXJPmBiobMN44yR8Y"
  ],
  [
    "Deborahs Theme",
    "Ennio Morricone",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0JxVLVmVLO6FYLkGQpmgun"
  ],
  [
    "Cinema Paradiso Theme",
    "Ennio Morricone",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0FFOaRW0WTJgd12cKEKuaC"
  ],
  [
    "Concerning Hobbits",
    "Howard Shore",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/644es5aYPJghtZLjM1rmSP"
  ],
  [
    "The Breaking of the Fellowship",
    "Howard Shore",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1ykbtFnlIjmIFnZ8j6wg6i"
  ],
  [
    "Into the West",
    "Howard Shore",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/78LWZ7WT4s7QDa9zzTLH5Y"
  ],
  [
    "The Gravel Road",
    "James Newton Howard",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5ynPIIbdGo2OBoX9vcnUo5"
  ],
  [
    "A Window to the Past",
    "John Williams",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1PPTlPJqKuL0fdoTmzwXJy"
  ],
  [
    "Leaving Hogwarts",
    "John Williams",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/15yScQGLH5QOuXm9XbhnPb"
  ],
  [
    "Across the Stars",
    "John Williams",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3rUMH7i22tlkymhDPOmXUv"
  ],
  [
    "The Ludlows",
    "James Horner",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6vtY2LUeXJ7KISwgiTu0Ph"
  ],
  [
    "For the Love of a Princess",
    "James Horner",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/22yxHt6UqZpH7tP6W4PooI"
  ],
  [
    "My Heart Will Go On",
    "James Horner",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7F1yVPuJ4xRdrDvf8OL0HF"
  ],
  [
    "Married Life (Simplified)",
    "Michael Giacchino",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4xL7eNJCGEaRAuH0jVpNQt"
  ],
  [
    "Theme from Up",
    "Michael Giacchino",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/37YV2vftTgOL4CKtlB4yki"
  ],
  [
    "Lava",
    "James Ford Murphy",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0wqeaDeaKq14IuQESPqBEJ"
  ],
  [
    "A Dream Is a Wish Your Heart Makes",
    "Mack David",
    "Film",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/42qmKRitmeSCKCW3PVPNcQ"
  ],
  [
    "Circle of Life",
    "Elton John",
    "Film",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5YYQOJf5Z2OTD0DFNwFdnF"
  ],
  [
    "Hakuna Matata",
    "Elton John",
    "Film",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2UUCEEduqdw9fKm33tNLbf"
  ],
  [
    "Under the Sea",
    "Alan Menken",
    "Film",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6oYkwjI1TKP9D0Y9II1GT7"
  ],
  [
    "Kiss the Girl",
    "Alan Menken",
    "Film",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/4HGIPyqDxSf863tPOwXiLJ"
  ],
  [
    "Wonderwall",
    "Oasis",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/4yBiZFLXn0n9AUJ5sWO88k"
  ],
  [
    "Knockin on Heavens Door",
    "Bob Dylan",
    "Rock",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6HSXNV0b4M4cLJ7ljgVVeh"
  ],
  [
    "Horse with No Name",
    "America",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/54eZmuggBFJbV7k248bTTt"
  ],
  [
    "Free Fallin",
    "Tom Petty",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5tVA6TkbaAH9QMITTQRrNv"
  ],
  [
    "Wild World",
    "Cat Stevens",
    "Rock",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7mjSHL2Eb0kAwiKbvNNyD9"
  ],
  [
    "Have You Ever Seen the Rain",
    "Creedence Clearwater Revival",
    "Rock",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2LawezPeJhN4AWuSB0GtAU"
  ],
  [
    "Perfect Day",
    "Lou Reed",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/4TOMI010Sd4ZAX4aZ5TS85"
  ],
  [
    "True Colors",
    "Cyndi Lauper",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2A6yzRGMgSQCUapR2ptm6A"
  ],
  [
    "Beautiful",
    "Christina Aguilera",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3TCauNPqFiniaYHBvEVoHG"
  ],
  [
    "Im Yours",
    "Jason Mraz",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1EzrEOXmMH3G43AXT1y7pA"
  ],
  [
    "Home",
    "Phillip Phillips",
    "Pop",
    1,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/1EAgPzRbK9YmdOESSMUm6P"
  ],
  [
    "You Raise Me Up",
    "Josh Groban",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2mEqLfhlEfOwYyFXI1km2U"
  ],
  [
    "Married Life (Full Version)",
    "Michael Giacchino",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2Nu92OhdAEs3ZBCHJDt38l"
  ],
  [
    "Bundle of Joy",
    "Michael Giacchino",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3eTgg18rKBD30Hef1gv0wz"
  ],
  [
    "Rewrite the Stars",
    "Benj Pasek & Justin Paul",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/163iPjMqMftS8AbK6INHqw"
  ],
  [
    "City of Stars",
    "Justin Hurwitz",
    "Film",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3gbwtdRrtD05lz08DTxfFt"
  ],
  [
    "Mia & Sebastians Theme",
    "Justin Hurwitz",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1Vk4yRsz0iBzDiZEoFMQyv"
  ],
  [
    "Another Day of Sun",
    "Justin Hurwitz",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/67eyCYAutQeM3TXAH21YoN"
  ],
  [
    "The Avengers",
    "Alan Silvestri",
    "Film",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5SXsXjVJCWeJuf7FHvgBYR"
  ],
  [
    "Portals",
    "Alan Silvestri",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0OVtnS3l4vThGxkdqCxN6K"
  ],
  [
    "Tale as Old as Time",
    "Alan Menken",
    "Film",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu"
  ],
  [
    "Reflection",
    "Matthew Wilder",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1lIYTNR8WuE2N4tAFbckG4"
  ],
  [
    "Go the Distance",
    "Alan Menken",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6LFrXh4FPwWdicQzsFNEn5"
  ],
  [
    "Married Life Waltz",
    "Michael Giacchino",
    "Film",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2BiTABduf1Y8yntWXkXPHd"
  ],
  [
    "Theme from Schindlers List",
    "John Williams",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/42gZM6AQ9BDMaTyTmMDVlN"
  ],
  [
    "Reys Theme",
    "John Williams",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3OPl6Nqnk4LHrEHp9zjOuR"
  ],
  [
    "Binary Sunset",
    "John Williams",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3h0C9Zl217U2NP0ctQsvMl"
  ],
  [
    "The Force Theme",
    "John Williams",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7fGsv7H7mYrJkNsCyGK4Lk"
  ],
  [
    "Flying Theme",
    "John Williams",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4J9mulgiRlkkgdAONNVGQv"
  ],
  [
    "Davy Jones",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6buHoQU9OTdbJrAuniVwGL"
  ],
  [
    "Flight",
    "Hans Zimmer",
    "Film",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/1mUG7ftwIxuq5fhMPkyM02"
  ],
  [
    "Lost But Won",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5U8RciWth3LqnGmQgWSybT"
  ],
  [
    "Kiss the Ring",
    "Hans Zimmer",
    "Film",
    5,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/61Ps2sXXwiYCcyAynt81JI"
  ],
  [
    "Discombobulate",
    "Hans Zimmer",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0cm6cAtRu0C0sEZzDjZFsx"
  ],
  [
    "Counting Stars",
    "OneRepublic",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2tpWsVSb9UEmDRxAl1zhX1"
  ],
  [
    "Firework",
    "Katy Perry",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/1mXuMM6zjPgjL4asbBsgnt"
  ],
  [
    "Roar",
    "Katy Perry",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6F5c58TMEs1byxUstkzVeM"
  ],
  [
    "Stay",
    "Rihanna",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0GNI8K3VATWBABQFAzBAYe"
  ],
  [
    "Just the Way You Are",
    "Bruno Mars",
    "Pop",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/47Slg6LuqLaX0VodpSCvPt"
  ],
  [
    "Grenade",
    "Bruno Mars",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4lLtanYk6tkMvooU0tWzG8"
  ],
  [
    "Say You Wont Let Go",
    "James Arthur",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh"
  ],
  [
    "Before You Go",
    "Lewis Capaldi",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2gMXnyrvIjhVBUZwvLZDMP"
  ],
  [
    "Watermelon Sugar",
    "Harry Styles",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY"
  ],
  [
    "As It Was",
    "Harry Styles",
    "Pop",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e"
  ],
  [
    "Numb",
    "Linkin Park",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h"
  ],
  [
    "In the End",
    "Linkin Park",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq"
  ],
  [
    "Fix You (Full Version)",
    "Coldplay",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5AfJUyGf3sqfbG6UXgwokV"
  ],
  [
    "Adventure of a Lifetime",
    "Coldplay",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/69uxyAqqPIsUyTO8txoP2M"
  ],
  [
    "Sky Full of Stars",
    "Coldplay",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ"
  ],
  [
    "The Show Must Go On",
    "Queen",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4GHk8YtewHGbk6HsVJ0mcT"
  ],
  [
    "Another One Bites the Dust",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/1KPuohcXPmJYQfdyg9zKmR"
  ],
  [
    "Livin on a Prayer",
    "Bon Jovi",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/37ZJ0p5Jm13JPevGcx4SkF"
  ],
  [
    "Dream On",
    "Aerosmith",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5Ih9gbqyxCzTJ43nuSuKnC"
  ],
  [
    "The Pink Panther Theme",
    "Henry Mancini",
    "Film",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0juPSJLFnLFim7BK6VzTes"
  ],
  [
    "Married Life (Intermediate)",
    "Michael Giacchino",
    "Film",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4xL7eNJCGEaRAuH0jVpNQt"
  ],
  [
    "A Sky Full of Stars",
    "Coldplay",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ"
  ],
  [
    "Someone You Loved (Advanced)",
    "Lewis Capaldi",
    "Pop",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6vgniLKD3L2iyNH1SioVWs"
  ],
  [
    "Nuvole Bianche (Concert)",
    "Ludovico Einaudi",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2hUSWb8V1wPG17Wjs40xOJ"
  ],
  [
    "Comptine dun autre été (Concert)",
    "Yann Tiersen",
    "Classical",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/7MPc9snrixDuI2CnI3qlwe"
  ],
  [
    "Spring",
    "Antonio Vivaldi",
    "Classical",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3RUBMVfbweULyfoVMXTOLV"
  ],
  [
    "Jesu, Joy of Mans Desiring",
    "J.S. Bach",
    "Classical",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/7CIZLwrVqcKKWvLuHBvMGF"
  ],
  [
    "Ave Maria",
    "Franz Schubert",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2VM3HhUnmswDIm3aILbrpd"
  ],
  [
    "Dance of the Sugar Plum Fairy",
    "Pyotr Ilyich Tchaikovsky",
    "Classical",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0mRsqyUviHWDxs7aMbuJDl"
  ],
  [
    "Love Me Like You Do",
    "Ellie Goulding",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0Cy7wt6IlRfBPHXXjmZbcP"
  ],
  [
    "Jar of Hearts",
    "Christina Perri",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0HZhYMZOcUzZKSFwPOti6m"
  ],
  [
    "Fight Song",
    "Rachel Platten",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/37f4ITSlgPX81ad2EvmVQr"
  ],
  [
    "Apologize",
    "OneRepublic",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3UhXPxLDFKCj1ZO6mmtV0a"
  ],
  [
    "Secrets",
    "OneRepublic",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0tgnTzjIkj8mVVEh0SNH0t"
  ],
  [
    "Run",
    "Leona Lewis",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4hrAKlxfblnG7llBEEX7TR"
  ],
  [
    "Turning Tables",
    "Adele",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2eF2x1BkgilhaZ2AipRY8j"
  ],
  [
    "When I Was Your Man",
    "Bruno Mars",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0nJW01T7XtvILxQgC5J7Wh"
  ],
  [
    "Locked Out of Heaven",
    "Bruno Mars",
    "Pop",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3w3y8KPTfNeOKPiqUTakBh"
  ],
  [
    "See You Again",
    "Wiz Khalifa ft. Charlie Puth",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3GWZmvkkwJZKhMIN1MKOIG"
  ],
  [
    "Attention",
    "Charlie Puth",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50"
  ],
  [
    "We Dont Talk Anymore",
    "Charlie Puth",
    "Pop",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/54PbBpquVfhfrwRwvjSXbI"
  ],
  [
    "Stay With Me",
    "Sam Smith",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5Nm9ERjJZ5oyfXZTECKmRt"
  ],
  [
    "Writings On The Wall",
    "Sam Smith",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1PWnAEQcbwQwK759otUbta"
  ],
  [
    "Photograph (Concert Version)",
    "Ed Sheeran",
    "Pop",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5t8djD6oZcfAyqF4cTQfFb"
  ],
  [
    "Boulevard of Broken Dreams",
    "Green Day",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1hwJKpe0BPUsq6UUrwBWTw"
  ],
  [
    "Wake Me Up When September Ends",
    "Green Day",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3ZffCQKLFLUvYM59XKLbVm"
  ],
  [
    "Iris",
    "Goo Goo Dolls",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6Qyc6fS4DsZjB2mRW9DsQs"
  ],
  [
    "With or Without You",
    "U2",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4N0fzRX3T7QkOecp3pkWpp"
  ],
  [
    "The Unforgiven",
    "Metallica",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6pAIZfkNBQh4RAiOliPo4t"
  ],
  [
    "November Rain",
    "Guns N Roses",
    "Rock",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3YRCqOhFifThpSRFJ1VWFM"
  ],
  [
    "Nothing Compares 2 U",
    "Sinéad O Connor",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/5GHY1DFWKz3Prg2V0Iodqo"
  ],
  [
    "Dust in the Wind",
    "Kansas",
    "Rock",
    2,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/6zeE5tKyr8Nu882DQhhSQI"
  ],
  [
    "Eye of the Tiger",
    "Survivor",
    "Rock",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2HHtWyy5CgaQbC7XSoOb0e"
  ],
  [
    "Carry On Wayward Son",
    "Kansas",
    "Rock",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/4DMKwE2E2iYDKY01C335Uw"
  ],
  [
    "A Game of Thrones",
    "Ramin Djawadi",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1vPEPhmGDnp8RR6GCBozaa"
  ],
  [
    "Light of the Seven",
    "Ramin Djawadi",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6iLzFJhs4ATwJn7P1utZIJ"
  ],
  [
    "Westworld Theme",
    "Ramin Djawadi",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/2sw8teIvVMRZKKYD5p795f"
  ],
  [
    "Pacific Rim Theme",
    "Ramin Djawadi",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5LVNsOvWUyGjo0i2ZA2tE9"
  ],
  [
    "Iron Man 3 Theme",
    "Brian Tyler",
    "Film",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/17MPInLMNnYajnNhEpFR3R"
  ],
  [
    "The Last Samurai",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6ZFbXIJkuI1dVNWvzJzown"
  ],
  [
    "Zoosters Breakout",
    "Hans Zimmer",
    "Film",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2kcdk01LzaPX4NTrDOSYg7"
  ],
  [
    "Pearl Harbor Theme",
    "Hans Zimmer",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/1ApiOS9fdotVWtVV2Mq5hY"
  ],
  [
    "Spirit",
    "Hans Zimmer",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/75OrTolKEnimJj625JUIft"
  ],
  [
    "Brothers",
    "Thomas Newman",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/12ccaTWv8iGmCDikmBWNDo"
  ],
  [
    "American Beauty Theme",
    "Thomas Newman",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0YjaC9peYewdRxCTCNd3hX"
  ],
  [
    "The Shape of Water",
    "Alexandre Desplat",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/10j83gxjw3eUkj0tQlTIPM"
  ],
  [
    "The Imitation Game",
    "Alexandre Desplat",
    "Film",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0o9ivTBX7mjTnaUYF4Gk6t"
  ],
  [
    "Marions Theme",
    "John Williams",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3sX879PInJBILJgIYzNn0z"
  ],
  [
    "Theme from E.T.",
    "John Williams",
    "Film",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2TZbQZXOuR8osP2AK8yYMN"
  ],
  [
    "Nocturne in C Sharp Minor",
    "Frédéric Chopin",
    "Classical",
    4,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2MSgFefjK0T7Iwjvr3OKqV"
  ],
  [
    "Fantaisie in F Minor",
    "Franz Schubert",
    "Classical",
    5,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6rL2calYlZBsWOiRNbSMno"
  ],
  [
    "Impromptu Op.90 No.3",
    "Franz Schubert",
    "Classical",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3fDp5V2yDXRBNeZyIa9fHh"
  ],
  [
    "Kinderszenen",
    "Robert Schumann",
    "Classical",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/5t3PzI8yXjxtuNfyELNfrv"
  ],
  [
    "Traumerei",
    "Robert Schumann",
    "Classical",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/6bQdJrbxlDuXTYuaZhcSP4"
  ],
  [
    "Sonata K.545",
    "W.A. Mozart",
    "Classical",
    3,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0iGDZom5WctL4eSQogMhMp"
  ],
  [
    "Rondo Alla Turca (Full)",
    "W.A. Mozart",
    "Classical",
    4,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6UtE2z8JlZNP2e3nBsduT2"
  ],
  [
    "Piano Concerto No.21",
    "W.A. Mozart",
    "Classical",
    5,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/3icDAkAImzq03VBb6j5wE5"
  ],
  [
    "Claire de Lune (Concert)",
    "Claude Debussy",
    "Classical",
    5,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0bP9LxuLKeeOOckM4RT9yT"
  ],
  [
    "Childrens Corner",
    "Claude Debussy",
    "Classical",
    4,
    "Relaxing",
    "Piano",
    "https://open.spotify.com/track/0ogfW3TmOfoZTNnp6FmPko"
  ],
  [
    "Canon in D",
    "Pachelbel",
    "Classical",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1c3GkbZBnyrQ1cm4TGHFrK"
  ],
  [
    "Minuet in G",
    "J.S. Bach",
    "Classical",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/6QVJWeZbK3C4o3F2OUkp2p"
  ],
  [
    "Für Elise",
    "Ludwig van Beethoven",
    "Classical",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/6zemU1SlXHnr2lHE6M4dkN"
  ],
  [
    "Air on the G String",
    "J.S. Bach",
    "Classical",
    3,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/6pt8oGfiwgidz03nGw1zTb"
  ],
  [
    "Ave Maria",
    "Franz Schubert",
    "Classical",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2VM3HhUnmswDIm3aILbrpd"
  ],
  [
    "The Swan",
    "Camille Saint-Saëns",
    "Classical",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2LKMUX3iN0tQOvggbalydj"
  ],
  [
    "Clair de Lune",
    "Claude Debussy",
    "Classical",
    4,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/5u5aVJKjSMJr4zesMPz7bL"
  ],
  [
    "Gymnopédie No.1",
    "Erik Satie",
    "Classical",
    3,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/5NGtFXVpXSvwunEIGeviY3"
  ],
  [
    "Nocturne Op.9 No.2",
    "Frédéric Chopin",
    "Classical",
    4,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1VNvsvEsUpuUCbHpVop1vo"
  ],
  [
    "Hungarian Dance No.5",
    "Johannes Brahms",
    "Classical",
    4,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/5fw6sm5n3ElFSNwWdLM94E"
  ],
  [
    "Csárdás",
    "Vittorio Monti",
    "Classical",
    5,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/6lo128WdLt7xP5Ejvsq1ym"
  ],
  [
    "Spring (The Four Seasons)",
    "Antonio Vivaldi",
    "Classical",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/3RUBMVfbweULyfoVMXTOLV"
  ],
  [
    "Summer (The Four Seasons)",
    "Antonio Vivaldi",
    "Classical",
    4,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/1Ojz92vyPK4fJ5K8RVnV5u"
  ],
  [
    "Winter (The Four Seasons)",
    "Antonio Vivaldi",
    "Classical",
    4,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/0ROMalDdNg3L2HoZP4qFyJ"
  ],
  [
    "Violin Concerto No.1",
    "Max Bruch",
    "Classical",
    5,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/6XVc8PNCLS67PN0fVjQsQx"
  ],
  [
    "Interstellar Theme",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
  ],
  [
    "Harry Potter Theme",
    "John Williams",
    "Film",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF"
  ],
  [
    "Hes a Pirate",
    "Klaus Badelt",
    "Film",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/4AD2dterIUjNt1LFNI9Bvi"
  ],
  [
    "Game of Thrones Theme",
    "Ramin Djawadi",
    "Film",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2q6fxAvSpqXR4jx9Ne7RGz"
  ],
  [
    "Pirates of the Caribbean Theme",
    "Hans Zimmer",
    "Film",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/65dzaZqMOZadoKteEzzkuE"
  ],
  [
    "The Lord of the Rings Theme",
    "Howard Shore",
    "Film",
    4,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/3Knohqfb9jeYzL6wMZiWLM"
  ],
  [
    "Schindlers List Theme",
    "John Williams",
    "Film",
    5,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/42gZM6AQ9BDMaTyTmMDVlN"
  ],
  [
    "Merry Go Round of Life",
    "Joe Hisaishi",
    "Film",
    3,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/39uLYYZytVUwcjgeYLI409"
  ],
  [
    "Howls Moving Castle Theme",
    "Joe Hisaishi",
    "Film",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/22ddy6PgC03prjM5PzfuDk"
  ],
  [
    "A Thousand Years",
    "Christina Perri",
    "Pop",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/6vS1uzFFH8tUWDPnGbBDbc"
  ],
  [
    "Photograph",
    "Ed Sheeran",
    "Pop",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
  ],
  [
    "Someone You Loved",
    "Lewis Capaldi",
    "Pop",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"
  ],
  [
    "Lovely",
    "Billie Eilish",
    "Pop",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4"
  ],
  [
    "Shallow",
    "Lady Gaga",
    "Pop",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2VxeLyX666F8uXCJ0dZF8B"
  ],
  [
    "Fix You",
    "Coldplay",
    "Pop",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
  ],
  [
    "Yellow",
    "Coldplay",
    "Pop",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg"
  ],
  [
    "Viva La Vida",
    "Coldplay",
    "Pop",
    2,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
  ],
  [
    "Clocks",
    "Coldplay",
    "Rock",
    3,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns"
  ],
  [
    "The Scientist",
    "Coldplay",
    "Rock",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle"
  ],
  [
    "Boulevard of Broken Dreams",
    "Green Day",
    "Rock",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1hwJKpe0BPUsq6UUrwBWTw"
  ],
  [
    "Demons",
    "Imagine Dragons",
    "Rock",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/5qaEfEh1AtSdrdrByCP7qR"
  ],
  [
    "Believer",
    "Imagine Dragons",
    "Rock",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP"
  ],
  [
    "Radioactive",
    "Imagine Dragons",
    "Rock",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/62yJjFtgkhUrXktIoSjgP2"
  ],
  [
    "Numb",
    "Linkin Park",
    "Rock",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h"
  ],
  [
    "Nothing Else Matters",
    "Metallica",
    "Rock",
    4,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/6QAsrXPnMSXIbV0yEJHlEX"
  ],
  [
    "Experience",
    "Ludovico Einaudi",
    "Classical",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj"
  ],
  [
    "River Flows in You",
    "Yiruma",
    "Classical",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/2agBDIr9MYDUducQPC1sFU"
  ],
  [
    "Kiss the Rain",
    "Yiruma",
    "Classical",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/7vd1j4IDTU0koES9M8dvBQ"
  ],
  [
    "Hes a Pirate",
    "Klaus Badelt",
    "Film",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/4AD2dterIUjNt1LFNI9Bvi"
  ],
  [
    "Interstellar Theme",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
  ],
  [
    "The Avengers Theme",
    "Alan Silvestri",
    "Film",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7xWrx2fc30odTmPLmGZrDA"
  ],
  [
    "Star Wars Main Theme",
    "John Williams",
    "Film",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7a9UUo3zfID7Ik2fTQjRLi"
  ],
  [
    "Harry Potter Theme",
    "John Williams",
    "Film",
    2,
    "Relaxing",
    "Drums",
    "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF"
  ],
  [
    "Mission Impossible Theme",
    "Lalo Schifrin",
    "Film",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/09YGG2X8TGSgaZJEaQAo3G"
  ],
  [
    "Pirates of the Caribbean Theme",
    "Hans Zimmer",
    "Film",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/65dzaZqMOZadoKteEzzkuE"
  ],
  [
    "The Dark Knight Theme",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/2uZg4Dg2zshOJTyKa22ixE"
  ],
  [
    "James Bond Theme",
    "Monty Norman",
    "Film",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2VSFOKsNSH9dBQ8BIZ8o2m"
  ],
  [
    "Rocky Theme",
    "Bill Conti",
    "Film",
    2,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7iXYRR70wewzVYzWScm99j"
  ],
  [
    "Perfect",
    "Ed Sheeran",
    "Pop",
    2,
    "Relaxing",
    "Drums",
    "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
  ],
  [
    "Shape of You",
    "Ed Sheeran",
    "Pop",
    2,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
  ],
  [
    "Yellow",
    "Coldplay",
    "Pop",
    2,
    "Relaxing",
    "Drums",
    "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg"
  ],
  [
    "Fix You",
    "Coldplay",
    "Pop",
    3,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
  ],
  [
    "Blinding Lights",
    "The Weeknd",
    "Pop",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
  ],
  [
    "Stay",
    "The Kid LAROI",
    "Pop",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20"
  ],
  [
    "Lovely",
    "Billie Eilish",
    "Pop",
    3,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4"
  ],
  [
    "Someone You Loved",
    "Lewis Capaldi",
    "Pop",
    2,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"
  ],
  [
    "A Thousand Years",
    "Christina Perri",
    "Pop",
    2,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/6vS1uzFFH8tUWDPnGbBDbc"
  ],
  [
    "Back In Black",
    "AC/DC",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj"
  ],
  [
    "Boulevard of Broken Dreams",
    "Green Day",
    "Rock",
    3,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/1hwJKpe0BPUsq6UUrwBWTw"
  ],
  [
    "American Idiot",
    "Green Day",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/6nTiIhLmQ3FWhvrGafw2zj"
  ],
  [
    "Numb",
    "Linkin Park",
    "Rock",
    3,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h"
  ],
  [
    "In The End",
    "Linkin Park",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq"
  ],
  [
    "Nothing Else Matters",
    "Metallica",
    "Rock",
    4,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/6QAsrXPnMSXIbV0yEJHlEX"
  ],
  [
    "Enter Sandman",
    "Metallica",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/3DwQ7AH3xGD9h65ezslm6q"
  ],
  [
    "Californication",
    "Red Hot Chili Peppers",
    "Rock",
    4,
    "Relaxing",
    "Drums",
    "https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox"
  ],
  [
    "Everlong",
    "Foo Fighters",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/5UWwZ5lm5PKu6eKsHAGxOk"
  ],
  [
    "The Pretender",
    "Foo Fighters",
    "Rock",
    5,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7x8dCjCr0x6x2lXKujYD34"
  ],
  [
    "My Hero",
    "Foo Fighters",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/4dVbhS6OiYvFikshyaQaCN"
  ],
  [
    "Use Somebody",
    "Kings of Leon",
    "Rock",
    3,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/5VGlqQANWDKJFl0MBG3sg2"
  ],
  [
    "R U Mine?",
    "Arctic Monkeys",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2AT8iROs4FQueDv2c8q2KE"
  ],
  [
    "Do I Wanna Know?",
    "Arctic Monkeys",
    "Rock",
    4,
    "Relaxing",
    "Drums",
    "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst"
  ],
  [
    "Radioactive",
    "Imagine Dragons",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/62yJjFtgkhUrXktIoSjgP2"
  ],
  [
    "Demons",
    "Imagine Dragons",
    "Rock",
    2,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/5qaEfEh1AtSdrdrByCP7qR"
  ],
  [
    "Clocks",
    "Coldplay",
    "Rock",
    3,
    "Relaxing",
    "Drums",
    "https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns"
  ],
  [
    "Romance (Spanish Romance)",
    "Traditional",
    "Classical",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/40pWXzf0b893V7qfuU8w88"
  ],
  [
    "Asturias",
    "Isaac Albéniz",
    "Classical",
    5,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/4wYpjral4wvOld6talKDM4"
  ],
  [
    "Cavatina",
    "Stanley Myers",
    "Classical",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/28W5lTZMClVz9fLt6iiaJN"
  ],
  [
    "Lágrima",
    "Francisco Tárrega",
    "Classical",
    3,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/1aMeBqrCnPf1CzRXlKyNFs"
  ],
  [
    "Recuerdos de la Alhambra",
    "Francisco Tárrega",
    "Classical",
    5,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/4Qs9FqBjUbiqRdimNv19pK"
  ],
  [
    "Malagueña",
    "Traditional",
    "Classical",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3eNQjOjSOMag4Id5bdrnsH"
  ],
  [
    "Spanish Dance No.5",
    "Enrique Granados",
    "Classical",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/0d2vVREIyNeCF2AUZrTsh2"
  ],
  [
    "Bach Cello Suite No.1 Prelude",
    "J.S. Bach",
    "Classical",
    4,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/17i5jLpzndlQhbS4SrTd0B"
  ],
  [
    "Interstellar Theme",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
  ],
  [
    "Hes a Pirate",
    "Klaus Badelt",
    "Film",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/4AD2dterIUjNt1LFNI9Bvi"
  ],
  [
    "Harry Potter Theme",
    "John Williams",
    "Film",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF"
  ],
  [
    "Game of Thrones Theme",
    "Ramin Djawadi",
    "Film",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/2q6fxAvSpqXR4jx9Ne7RGz"
  ],
  [
    "Pirates of the Caribbean Theme",
    "Hans Zimmer",
    "Film",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/65dzaZqMOZadoKteEzzkuE"
  ],
  [
    "The Lord of the Rings Theme",
    "Howard Shore",
    "Film",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/3Knohqfb9jeYzL6wMZiWLM"
  ],
  [
    "The Last of the Mohicans Theme",
    "Trevor Jones",
    "Film",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/6ov7k1IH8lFX6vznriZXmo"
  ],
  [
    "Hedwigs Theme",
    "John Williams",
    "Film",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF"
  ],
  [
    "Photograph",
    "Ed Sheeran",
    "Pop",
    2,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
  ],
  [
    "Shape of You",
    "Ed Sheeran",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
  ],
  [
    "A Thousand Years",
    "Christina Perri",
    "Pop",
    2,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/6vS1uzFFH8tUWDPnGbBDbc"
  ],
  [
    "Lovely",
    "Billie Eilish",
    "Pop",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4"
  ],
  [
    "Stay",
    "The Kid LAROI",
    "Pop",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20"
  ],
  [
    "Blinding Lights",
    "The Weeknd",
    "Pop",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
  ],
  [
    "Yellow",
    "Coldplay",
    "Pop",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg"
  ],
  [
    "Viva La Vida",
    "Coldplay",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
  ],
  [
    "Fix You",
    "Coldplay",
    "Pop",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
  ],
  [
    "Wonderwall",
    "Oasis",
    "Rock",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/4yBiZFLXn0n9AUJ5sWO88k"
  ],
  [
    "Knockin on Heavens Door",
    "Guns N Roses",
    "Rock",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/4JiEyzf0Md7KEFFGWDDdCr"
  ],
  [
    "Smoke on the Water",
    "Deep Purple",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/5MMnwYs0hIxkENRsbkWJ2G"
  ],
  [
    "Back In Black",
    "AC/DC",
    "Rock",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj"
  ],
  [
    "Sweet Child O Mine",
    "Guns N Roses",
    "Rock",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW"
  ],
  [
    "Nothing Else Matters",
    "Metallica",
    "Rock",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/6QAsrXPnMSXIbV0yEJHlEX"
  ],
  [
    "Enter Sandman",
    "Metallica",
    "Rock",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3DwQ7AH3xGD9h65ezslm6q"
  ],
  [
    "Californication",
    "Red Hot Chili Peppers",
    "Rock",
    4,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox"
  ],
  [
    "Hotel California",
    "Eagles",
    "Rock",
    5,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv"
  ],
  [
    "Stairway to Heaven",
    "Led Zeppelin",
    "Rock",
    5,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc"
  ],
  [
    "Sweet Home Alabama",
    "Lynyrd Skynyrd",
    "Rock",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/7e89621JPkKaeDSTQ3avtg"
  ],
  [
    "Boulevard of Broken Dreams",
    "Green Day",
    "Rock",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/1hwJKpe0BPUsq6UUrwBWTw"
  ],
  [
    "American Idiot",
    "Green Day",
    "Rock",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/6nTiIhLmQ3FWhvrGafw2zj"
  ],
  [
    "Numb",
    "Linkin Park",
    "Rock",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h"
  ],
  [
    "Do I Wanna Know?",
    "Arctic Monkeys",
    "Rock",
    4,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst"
  ],
  [
    "R U Mine?",
    "Arctic Monkeys",
    "Rock",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/2AT8iROs4FQueDv2c8q2KE"
  ],
  [
    "Everlong",
    "Foo Fighters",
    "Rock",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/5UWwZ5lm5PKu6eKsHAGxOk"
  ],
  [
    "O Mio Babbino Caro",
    "Giacomo Puccini",
    "Classical",
    4,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1oi7QvpgDkBFTROce7LkB8"
  ],
  [
    "Ave Maria",
    "Franz Schubert",
    "Classical",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/2VM3HhUnmswDIm3aILbrpd"
  ],
  [
    "Nessun Dorma",
    "Giacomo Puccini",
    "Classical",
    5,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/6NsZucPvDbyARfXLgTpY9u"
  ],
  [
    "Hallelujah",
    "Leonard Cohen",
    "Classical",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/7yzbimr8WVyAtBX3Eg6UL9"
  ],
  [
    "Amazing Grace",
    "Traditional",
    "Classical",
    2,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/2gAeKqq5FALIgJABswWMPU"
  ],
  [
    "Panis Angelicus",
    "César Franck",
    "Classical",
    4,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/5rhV47Le2TO5hgZ7DZCvhS"
  ],
  [
    "The Flower Duet",
    "Léo Delibes",
    "Classical",
    4,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/2xORus0TIDTVKatLletu1B"
  ],
  [
    "Interstellar Theme",
    "Hans Zimmer",
    "Film",
    4,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/4WmB04GBqS4xPMYN9dHgBw"
  ],
  [
    "City of Stars",
    "Justin Hurwitz",
    "Film",
    3,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/3gbwtdRrtD05lz08DTxfFt"
  ],
  [
    "A Million Dreams",
    "The Greatest Showman",
    "Film",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0RoA7ObU6phWpqhlC9zH4Z"
  ],
  [
    "This Is Me",
    "The Greatest Showman",
    "Film",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/45aBsnKRWUzhwbcqOJLwfe"
  ],
  [
    "Shallow",
    "Lady Gaga",
    "Film",
    4,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/2VxeLyX666F8uXCJ0dZF8B"
  ],
  [
    "Let It Go",
    "Kristen Anderson-Lopez",
    "Film",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/5q9k7uDMyVrLe1C23f1bwy"
  ],
  [
    "Remember Me",
    "Coco",
    "Film",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/2cFGv8v5DcbJXHEdzouFne"
  ],
  [
    "You ve Got a Friend in Me",
    "Randy Newman",
    "Film",
    1,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/2stkLJ0JNcXkIRDNF3ld6c"
  ],
  [
    "Can You Feel the Love Tonight",
    "Elton John",
    "Film",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/32RxZnEk5KyWUTZR4azxbD"
  ],
  [
    "Photograph",
    "Ed Sheeran",
    "Pop",
    2,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
  ],
  [
    "Shape of You",
    "Ed Sheeran",
    "Pop",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
  ],
  [
    "A Thousand Years",
    "Christina Perri",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/6vS1uzFFH8tUWDPnGbBDbc"
  ],
  [
    "Lovely",
    "Billie Eilish",
    "Pop",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4"
  ],
  [
    "Bad Guy",
    "Billie Eilish",
    "Pop",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"
  ],
  [
    "Stay",
    "The Kid LAROI",
    "Pop",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20"
  ],
  [
    "Blinding Lights",
    "The Weeknd",
    "Pop",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
  ],
  [
    "Yellow",
    "Coldplay",
    "Pop",
    2,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg"
  ],
  [
    "Fix You",
    "Coldplay",
    "Pop",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
  ],
  [
    "Someone Like You",
    "Adele",
    "Pop",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/3bNv3VuUOKgrf5hu3YcuRo"
  ],
  [
    "Rolling in the Deep",
    "Adele",
    "Pop",
    4,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/4OSBTYWVwsQhGLF9NHvIbR"
  ],
  [
    "When We Were Young",
    "Adele",
    "Pop",
    4,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/6O5TrlFWTYvznd9fMC0VvU"
  ],
  [
    "We Will Rock You",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/2ELSVi4kwWOXgxiIC592tJ"
  ],
  [
    "Dream On",
    "Aerosmith",
    "Rock",
    5,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/5Ih9gbqyxCzTJ43nuSuKnC"
  ],
  [
    "Nothing Else Matters",
    "Metallica",
    "Rock",
    4,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/6QAsrXPnMSXIbV0yEJHlEX"
  ],
  [
    "Numb",
    "Linkin Park",
    "Rock",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h"
  ],
  [
    "Boulevard of Broken Dreams",
    "Green Day",
    "Rock",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1hwJKpe0BPUsq6UUrwBWTw"
  ],
  [
    "The Scientist",
    "Coldplay",
    "Rock",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle"
  ],
  [
    "Clocks",
    "Coldplay",
    "Rock",
    3,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns"
  ],
  [
    "Everlong",
    "Foo Fighters",
    "Rock",
    4,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/5UWwZ5lm5PKu6eKsHAGxOk"
  ],
  [
    "Use Somebody",
    "Kings of Leon",
    "Rock",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/5VGlqQANWDKJFl0MBG3sg2"
  ],
  [
    "Wonderwall",
    "Oasis",
    "Rock",
    2,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/4yBiZFLXn0n9AUJ5sWO88k"
  ],
  [
    "Radio Ga Ga",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/6N717o83wbmahFGUqkjQj7"
  ],
  [
    "Killer Queen",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/46L5lm1Xzwr0TExEMpObtq"
  ],
  [
    "Under Pressure",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/5oybkyECAyGaDxYLUCPjFh"
  ],
  [
    "Who Wants to Live Forever",
    "Queen",
    "Rock",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/3bmh7WhduQpPW7fwg6Uv8Y"
  ],
  [
    "Radio Ga Ga",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/6N717o83wbmahFGUqkjQj7"
  ],
  [
    "Killer Queen",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/46L5lm1Xzwr0TExEMpObtq"
  ],
  [
    "Under Pressure",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/5oybkyECAyGaDxYLUCPjFh"
  ],
  [
    "Who Wants to Live Forever",
    "Queen",
    "Rock",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/3bmh7WhduQpPW7fwg6Uv8Y"
  ],
  [
    "Radio Ga Ga",
    "Queen",
    "Rock",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/6N717o83wbmahFGUqkjQj7"
  ],
  [
    "Killer Queen",
    "Queen",
    "Rock",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/46L5lm1Xzwr0TExEMpObtq"
  ],
  [
    "Fernando",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4BM8yJ0PzBi2ZewpMTOxtx"
  ],
  [
    "S.O.S.",
    "ABBA",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/0J2p4KYdr6Mg4ET6JPlbe1"
  ],
  [
    "Money Money Money",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3lKN03PDeBnXZS7sDukRBt"
  ],
  [
    "Waterloo",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/3Dy4REq8O09IlgiwuHQ3sk"
  ],
  [
    "Fernando",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/4BM8yJ0PzBi2ZewpMTOxtx"
  ],
  [
    "S.O.S.",
    "ABBA",
    "Pop",
    2,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/0J2p4KYdr6Mg4ET6JPlbe1"
  ],
  [
    "Money Money Money",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3lKN03PDeBnXZS7sDukRBt"
  ],
  [
    "Waterloo",
    "ABBA",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3Dy4REq8O09IlgiwuHQ3sk"
  ],
  [
    "Fernando",
    "ABBA",
    "Pop",
    1,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/4BM8yJ0PzBi2ZewpMTOxtx"
  ],
  [
    "Waterloo",
    "ABBA",
    "Pop",
    2,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/3Dy4REq8O09IlgiwuHQ3sk"
  ],
  [
    "Spring Waltz",
    "Frédéric Chopin",
    "Classical",
    3,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/10QWG0lVUbzScm6G0DsGGt"
  ],
  [
    "Meditation from Thaïs",
    "Jules Massenet",
    "Classical",
    4,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/7pgJTa3eZM4kkT2vsZUmFt"
  ],
  [
    "Salut d Amour",
    "Edward Elgar",
    "Classical",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/7LGVH46HZVMj88VH4k1HBd"
  ],
  [
    "Canon Rock",
    "JerryC",
    "Rock",
    4,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/2uAgeOaBKGR9YCMnTbm4bJ"
  ],
  [
    "Adventure of a Lifetime",
    "Coldplay",
    "Rock",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/69uxyAqqPIsUyTO8txoP2M"
  ],
  [
    "A Sky Full of Stars",
    "Coldplay",
    "Pop",
    2,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ"
  ],
  [
    "Someone Like You",
    "Adele",
    "Pop",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/3bNv3VuUOKgrf5hu3YcuRo"
  ],
  [
    "Rolling in the Deep",
    "Adele",
    "Pop",
    3,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/4OSBTYWVwsQhGLF9NHvIbR"
  ],
  [
    "Love Story",
    "Taylor Swift",
    "Pop",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/1D4PL9B8gOg78jiHg3FvBb"
  ],
  [
    "Safe and Sound",
    "Taylor Swift",
    "Pop",
    2,
    "Relaxing",
    "Violin",
    "https://open.spotify.com/track/5FCU2rrI0fXfqTddc5KepW"
  ],
  [
    "Billie Jean",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7J1uxwnxfQLu4APicE5Rnj"
  ],
  [
    "Beat It",
    "Michael Jackson",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/3BovdzfaX4jb5KFQwoPfAw"
  ],
  [
    "Livin on a Prayer",
    "Bon Jovi",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/37ZJ0p5Jm13JPevGcx4SkF"
  ],
  [
    "Dont Stop Believin",
    "Journey",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/5RKQ5NdjSh2QzD4MaunT91"
  ],
  [
    "Highway to Hell",
    "AC/DC",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2zYzyRzz6pRmhPzyfMEC8s"
  ],
  [
    "Thunderstruck",
    "AC/DC",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj"
  ],
  [
    "Paradise City",
    "Guns N Roses",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/6eN1f9KNmiWEhpE2RhQqB5"
  ],
  [
    "Sweet Child O Mine",
    "Guns N Roses",
    "Rock",
    4,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW"
  ],
  [
    "I Love Rock n Roll",
    "Joan Jett",
    "Rock",
    2,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/4jTqsgDaffdNH0BMBwhjFv"
  ],
  [
    "Should I Stay or Should I Go",
    "The Clash",
    "Rock",
    2,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/39shmbIHICJ2Wxnk1fPSdz"
  ],
  [
    "Basket Case",
    "Green Day",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/6L89mwZXSOwYl76YXfX13s"
  ],
  [
    "Holiday",
    "Green Day",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/5vfjUAhefN7IjHbTvVCT4Z"
  ],
  [
    "House of the Rising Sun",
    "The Animals",
    "Rock",
    2,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/0ev91hkSfD8mR15VBiAHts"
  ],
  [
    "Wish You Were Here",
    "Pink Floyd",
    "Rock",
    3,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1"
  ],
  [
    "Comfortably Numb",
    "Pink Floyd",
    "Rock",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/5HNCy40Ni5BZJFw1TKzRsC"
  ],
  [
    "Time",
    "Pink Floyd",
    "Rock",
    4,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/3TO7bbrUKrOSPGRTB5MeCz"
  ],
  [
    "Blackbird",
    "The Beatles",
    "Rock",
    3,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/5jgFfDIR6FR0gvlA56Nakr"
  ],
  [
    "Here Comes the Sun",
    "The Beatles",
    "Rock",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2"
  ],
  [
    "Norwegian Wood",
    "The Beatles",
    "Rock",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/1H7gMYGykdtwZOV6s1N0by"
  ],
  [
    "Brown Eyed Girl",
    "Van Morrison",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/4CNL4GBNTdVIU5Nk6hB4LC"
  ],
  [
    "Sweet Caroline",
    "Neil Diamond",
    "Pop",
    1,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/62AuGbAkt8Ox2IrFFb8GKV"
  ],
  [
    "Ring of Fire",
    "Johnny Cash",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/6YffUZJ2R06kyxyK6onezL"
  ],
  [
    "Jolene",
    "Dolly Parton",
    "Pop",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/2SpEHTbUuebeLkgs9QB7Ue"
  ],
  [
    "Fast Car",
    "Tracy Chapman",
    "Pop",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/2M9ro2krNb7nr7HSprkEgo"
  ],
  [
    "Tears in Heaven",
    "Eric Clapton",
    "Rock",
    3,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/1kgdslQYmeTR4thk9whoRw"
  ],
  [
    "Wonderful Tonight",
    "Eric Clapton",
    "Rock",
    2,
    "Relaxing",
    "Guitar",
    "https://open.spotify.com/track/6zC0mpGYwbNTpk9SKwh08f"
  ],
  [
    "Layla",
    "Eric Clapton",
    "Rock",
    4,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/5phbwzg5d2MqNAoc0435Zu"
  ],
  [
    "Man in the Mirror",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/2u2udGmop1z67EPpr91km7"
  ],
  [
    "Heal the World",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/7woW97CfcWaKtuC6W5BP2K"
  ],
  [
    "Earth Song",
    "Michael Jackson",
    "Pop",
    3,
    "Emotional",
    "Piano",
    "https://open.spotify.com/track/4GCGH6TJ69neckwITeBFXK"
  ],
  [
    "Smooth Criminal",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Piano",
    "https://open.spotify.com/track/2bCQHF9gdG5BNDVuEIEnNk"
  ],
  [
    "Man in the Mirror",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/2u2udGmop1z67EPpr91km7"
  ],
  [
    "Heal the World",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/7woW97CfcWaKtuC6W5BP2K"
  ],
  [
    "Thriller",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/3S2R0EVwBSAVMd5UMgKTL0"
  ],
  [
    "Beat It",
    "Michael Jackson",
    "Rock",
    3,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/3BovdzfaX4jb5KFQwoPfAw"
  ],
  [
    "Black or White",
    "Michael Jackson",
    "Rock",
    2,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/7EsjkelQuoUlJXEw7SeVV4"
  ],
  [
    "Beat It",
    "Michael Jackson",
    "Rock",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/3BovdzfaX4jb5KFQwoPfAw"
  ],
  [
    "Smooth Criminal",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Guitar",
    "https://open.spotify.com/track/2bCQHF9gdG5BNDVuEIEnNk"
  ],
  [
    "Man in the Mirror",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Guitar",
    "https://open.spotify.com/track/2u2udGmop1z67EPpr91km7"
  ],
  [
    "Smooth Criminal",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/2bCQHF9gdG5BNDVuEIEnNk"
  ],
  [
    "Thriller",
    "Michael Jackson",
    "Pop",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/3S2R0EVwBSAVMd5UMgKTL0"
  ],
  [
    "Black or White",
    "Michael Jackson",
    "Rock",
    3,
    "Energetic",
    "Drums",
    "https://open.spotify.com/track/7EsjkelQuoUlJXEw7SeVV4"
  ],
  [
    "Man in the Mirror",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Drums",
    "https://open.spotify.com/track/2u2udGmop1z67EPpr91km7"
  ],
  [
    "Smooth Criminal",
    "Michael Jackson",
    "Pop",
    4,
    "Energetic",
    "Violin",
    "https://open.spotify.com/track/2bCQHF9gdG5BNDVuEIEnNk"
  ],
  [
    "Earth Song",
    "Michael Jackson",
    "Pop",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/4GCGH6TJ69neckwITeBFXK"
  ],
  [
    "Heal the World",
    "Michael Jackson",
    "Pop",
    2,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/7woW97CfcWaKtuC6W5BP2K"
  ],
  [
    "Man in the Mirror",
    "Michael Jackson",
    "Pop",
    3,
    "Emotional",
    "Violin",
    "https://open.spotify.com/track/2u2udGmop1z67EPpr91km7"
  ],
  [
    "Imagine",
    "John Lennon",
    "Pop",
    1,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9"
  ],
  [
    "Hey Jude",
    "The Beatles",
    "Rock",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1eT2CjXwFXNx6oY5ydvzKU"
  ],
  [
    "Let It Be",
    "The Beatles",
    "Rock",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48"
  ],
  [
    "Yesterday",
    "The Beatles",
    "Rock",
    1,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI"
  ],
  [
    "Here Comes the Sun",
    "The Beatles",
    "Rock",
    2,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2"
  ],
  [
    "Sweet Caroline",
    "Neil Diamond",
    "Pop",
    1,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/62AuGbAkt8Ox2IrFFb8GKV"
  ],
  [
    "Lean on Me",
    "Bill Withers",
    "Pop",
    1,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/3M8FzayQWtkvOhqMn2V4T2"
  ],
  [
    "What a Wonderful World",
    "Louis Armstrong",
    "Pop",
    1,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/29U7stRjqHU6rMiS8BfaI9"
  ],
  [
    "Cant Help Falling in Love",
    "Elvis Presley",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
  ],
  [
    "Always on My Mind",
    "Elvis Presley",
    "Pop",
    2,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/1B5Tp2Ml9nLlmTSJx8xVfI"
  ],
  [
    "My Way",
    "Frank Sinatra",
    "Pop",
    3,
    "Emotional",
    "Singing",
    "https://open.spotify.com/track/3spdoTYpuCpmq19tuD0bOe"
  ],
  [
    "Fly Me to the Moon",
    "Frank Sinatra",
    "Pop",
    2,
    "Relaxing",
    "Singing",
    "https://open.spotify.com/track/5b7OgznPJJr1vHNYGyvxau"
  ],
  [
    "New York New York",
    "Frank Sinatra",
    "Pop",
    2,
    "Energetic",
    "Singing",
    "https://open.spotify.com/track/4NdzFKsviXMxchKjzPhnKW"
  ]
];
window.songs = songs;
window.todaysPicks = todaysPicks;
