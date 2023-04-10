
const filterOptions = {
  alpha: [ 
    {
    title: "Background",
    options: [
      { name: "Blue", value: 830 },
      { name: "Green", value: 803 },
      { name: "Orange", value: 797 },
      { name: "Purple", value: 789 },
      { name: "Red", value: 761 },
      { name: "Skyblue", value: 759 },
      { name: "Moon", value: 253 }
    ]
    },
    {
      title: "Bracelet",
      options: [
        { name: "None", value: 3448 },
        { name: "Luxury Gold", value: 866 },
        { name: "Black Beaded", value: 678 }
      ]
    },
    {
      title: "Clothes",
      options: [
        { name: "Tank Top", value: 843 },
        { name: "Camouflage Tshirt", value: 692 },
        { name: "Dirty Tshirt", value: 540 },
        { name: "Ripped Tshirt", value: 431 },
        { name: "AIRWORTHY", value: 276 },
        { name: "African Garb", value: 274 },
        { name: "College Jacket", value: 209 },
        { name: "Disheveled Suit", value: 169 },
        { name: "Leather Jacket", value: 152 },
        { name: "Hoodie", value: 150 },
        { name: "Wizard Robe", value: 149 },
        { name: "Polo Shirt", value: 143 },
        { name: "Bomber Jacket", value: 139 },
        { name: "Tuxedo Suit", value: 136 },
        { name: "Pink Hoodie", value: 125 },
        { name: "Camouflage Army Jacket", value: 120 },
        { name: "Suit", value: 118 },
        { name: "Army Officer Blazer", value: 104 },
        { name: "Dead Fox", value: 63 },
        { name: "Fur Coat", value: 60 },
        { name: "Monk", value: 50 },
        { name: "Racing Suit", value: 25 },
        { name: "Astronaut", value: 24 }
      ]
    },
    {
      title: "Earrings",
      options: [
        { name: "None", value: 2409 },
        { name: "Vechain", value: 890 },
        { name: "Skull and Cross Bones", value: 739 },
        { name: "Punk", value: 667 },
        { name: "Diamonds", value: 287 }
      ]
    },
    {
      title: "Eyes",
      options: [
        { name: "Angry", value: 2814 },
        { name: "Stoned", value: 1691 },
        { name: "Blue Eyes", value: 251 },
        { name: "Wink", value: 132 },
        { name: "Scar", value: 104 }
      ]
    },
    {
      title: "Eyewear",
      options: [
        { name: "None", value: 2083 },
        { name: "Rayban Glasses", value: 430 },
        { name: "John Lennon Glasses", value: 365 },
        { name: "Black RayBan", value: 301 },
        { name: "3D Lens Blue Red", value: 298 },
        { name: "Rainbow Glasses", value: 262 },
        { name: "Googles", value: 186 },
        { name: "Sunglasses", value: 184 },
        { name: "Einstein One Eye Glass", value: 173 },
        { name: "Morpheus Glasses", value: 141 },
        { name: "Agent Glasses", value: 134 },
        { name: "3D glasses", value: 127 },
        { name: "Laser Eyes", value: 109 },
        { name: "Cyclops Visor", value: 102 },
        { name: "Bonocular Glasses", value: 97 }
      ]
    },
    {
      title: "Face",
      options: [
        { name: "Normal", value: 4193 },
        { name: "White Teeth", value: 449 },
        { name: "Gold Teeth", value: 350 }
      ]
    },
    {
      title: "Headwear",
      options: [
        { name: "G Cap", value: 688 },
        { name: "None", value: 1085 },
        { name: "Bitcoin Cap", value: 592 },
        { name: "Bandaid", value: 494 },
        { name: "Gentleman Hat", value: 363 },
        { name: "NY Cap", value: 224 },
        { name: "White Fedora", value: 204 },
        { name: "Docker cap", value: 164 },
        { name: "Vechain Cap", value: 162 },
        { name: "Abe Lincoln Hat", value: 145 },
        { name: "Halo", value: 141 },
        { name: "Top Knot", value: 134 },
        { name: "Hair V Fade", value: 128 },
        { name: "Space Helmet", value: 94 },
        { name: "Airworthy Cap", value: 86 },
        { name: "Kings Crown", value: 82 },
        { name: "Viking Soldier helmet", value: 78 },
        { name: "Balaclava", value: 72 },
        { name: "Viking Gold Helmet", value: 56 }
      ]
    },
    {
      title: "Mouthwear",
      options: [
        { name: "None", value: 3908 },
        { name: "Cigarette", value: 627 },
        { name: "Joint", value: 395 },
        { name: "Beard", value: 62 }
      ]
    },
    {
      title: "Neckwear",
      options: [
        { name: "None", value: 1669 },
        { name: "Shark Teeth", value: 419 },
        { name: "Skull and Cross Bones", value: 393 },
        { name: "Dollar Necklace", value: 313 },
        { name: "Bitcoin Chain", value: 313 },
        { name: "Rapper Chain AB", value: 307 },
        { name: "Diamond V", value: 280 },
        { name: "Crystal Gem", value: 274 },
        { name: "Cuban Golden Chain", value: 244 },
        { name: "Double Gold", value: 188 },
        { name: "Black Shark Tooth", value: 164 },
        { name: "Large White Beaded Necklace", value: 131 },
        { name: "Ve Chain", value: 116 },
        { name: "Large Bitcoin Chain", value: 81 },
        { name: "Vip Pass", value: 56 },
        { name: "Dog Tags", value: 44 }
      ]
    },
    {
      title: "Nose",
      options: [
        { name: "Normal", value: 4992 }
      ]
    },
    {
      title: "Nose Ring",
      options: [
        { name: "None", value: 3455 },
        { name: "Gold", value: 691 },
        { name: "Punk", value: 436 }
      ]
    },
    {
      title: "Skin",
      options: [
        { name: "Normal", value: 2604 },
        { name: "Black Metalic", value: 1200 },
        { name: "Brown Metalic", value: 638 },
        { name: "Green Metalic", value: 296 },
        { name: "Black", value: 53 },
        { name: "Pink", value: 52 },
        { name: "Gold", value: 52 },
        { name: "White", value: 50 },
        { name: "Rainbox", value: 47 }
      ]
    },
    {
      title: "Unique",
      options: [
        { name: "Normal", value: 7 }
      ]
    }
  ],
  fusion: [
    {
      title: "Background",
      options: [
        { name: "Blue", value: 676 },
        { name: "Grey", value: 643 },
        { name: "Green", value: 634 },
        { name: "Red", value: 626 },
        { name: "Black", value: 622 },
        { name: "Pink", value: 612 },
        { name: "Yellow", value: 606 },
        { name: "Gold", value: 581 }
      ]
    },
    {
      title: "Clothes",
      options: [
        { name: "None", value: 694 },
        { name: "V Shirt", value: 396 },
        { name: "NJJ Hoodie", value: 391 },
        { name: "Punk Jacket", value: 364 },
        { name: "Puff", value: 339 },
        { name: "Spikes Jacket", value: 333 },
        { name: "Bomber Jacket", value: 306 },
        { name: "Orange Coat W Shirt", value: 268 },
        { name: "MVA White Hoodie", value: 268 },
        { name: "Black Shirt Bulletproof Vest", value: 238 },
        { name: "Leather Jacket", value: 230 },
        { name: "MVA Black Hoodie", value: 216 },
        { name: "Red Jacket", value: 215 },
        { name: "Suit", value: 211 },
        { name: "Cyberpunk Jacket", value: 189 },
        { name: "Fur Coat", value: 107 },
        { name: "Chinese Suit", value: 93 },
        { name: "Bulletproof Vest", value: 92 },
        { name: "Yakuza Jacket", value: 50 }
      ]
    },
    {
      title: "Earring",
      options: [
        { name: "None", value: 1991 },
        { name: "Cross Earring", value: 950 },
        { name: "Punk Earring", value: 861 },
        { name: "Gold Earring", value: 544 },
        { name: "Vechain Earring", value: 399 },
        { name: "Diamond Earring", value: 255 }
      ]
    },
    {
      title: "Eyes",
      options: [
        { name: "Grey Eyes", value: 3312 },
        { name: "Sun Eyes", value: 584 },
        { name: "Money Eyes", value: 454 },
        { name: "Moon Eyes", value: 220 },
        { name: "Rainbow Eyes", value: 118 },
        { name: "Psychedelic Eyes", value: 103 },
        { name: "Cyborg Eyes", value: 80 },
        { name: "Laser Eyes", value: 67 },
        { name: "Ghoul Eyes", value: 62 },
      ]
    },
    {
      title: "Eyewear",
      options: [
        { name: "None", value: 1828 },
        { name: "Ski Goggles", value: 439 },
        { name: "Heart Glasses", value: 433 },
        { name: "Rose Glasses", value: 428 },
        { name: "Rayban", value: 390 },
        { name: "3D Glasses", value: 371 },
        { name: "Rayban Spikes", value: 338 },
        { name: "Sunglasses", value: 332 },
        { name: "Cyberpunk Glasses", value: 209 },
        { name: "Futuristic Glasses", value: 120 },
        { name: "Cyclops Glasses", value: 112 }
      ]
    },
    {
      title: "Fur",
      options: [
        { name: "Short Black", value: 250 },
        { name: "Short Blue", value: 217 },
        { name: "Short White", value: 197 },
        { name: "Punk Black", value: 195 },
        { name: "Punk Purple", value: 195 },
        { name: "Short Green", value: 187 },
        { name: "Colorful Black", value: 182 },
        { name: "Bun Black", value: 182 },
        { name: "Punk Green", value: 172 },
        { name: "Punk Blue", value: 170 },
        { name: "Colorful Grey", value: 167 },
        { name: "Short Purple", value: 161 },
        { name: "Bun Green", value: 159 },
        { name: "Colorful Blue", value: 156 },
        { name: "Short Grey", value: 152 },
        { name: "Colorful Green", value: 143 },
        { name: "Short Gold", value: 130 },
        { name: "Punk White", value: 120 },
        { name: "Colorful White", value: 118 },
        { name: "Bun Blue", value: 100 },
        { name: "Short Amethyst", value: 92 },
        { name: "Colorful Gold", value: 92 },
        { name: "Bun White", value: 91 },
        { name: "Short Emerald", value: 88 },
        { name: "Bun Purple", value: 83 },
        { name: "Bun Grey", value: 83 },
        { name: "Colorful Purple", value: 80 },
        { name: "Bun Gold", value: 78 },
        { name: "Punk Gold", value: 72 },
        { name: "Short Rainbow", value: 68 },
        { name: "Bun Amethyst", value: 67 },
        { name: "Punk Grey", value: 66 },
        { name: "Short Tiger", value: 63 },
        { name: "Colorful Amethyst", value: 54 },
        { name: "Colorful Emerald", value: 49 },
        { name: "Punk Amethyst", value: 46 },
        { name: "Punk Rainbow", value: 45 },
        { name: "Bun Emerald", value: 44 },
        { name: "Short Ruby", value: 42 },
        { name: "Short Sapphire", value: 41 },
        { name: "Bun Rainbow", value: 37 },
        { name: "Bun Tiger", value: 37 },
        { name: "Punk Tiger", value: 35 },
        { name: "Punk Emerald", value: 31 },
        { name: "Colorful Rainbow", value: 30 },
        { name: "Colorful Sapphire", value: 29 },
        { name: "Punk Sapphire", value: 22 },
        { name: "Bun Sapphire", value: 22 },
        { name: "Bun Ruby", value: 19 },
        { name: "Colorful Tiger", value: 17 },
        { name: "Colorful Ruby", value: 15 },
        { name: "Punk Ruby", value: 9 }
      ]
    },
    {
      title: "Hats",
      options: [
        { name: "None", value: 3643 },
        { name: "Vechain Cap", value: 284 },
        { name: "Urban Cap", value: 230 },
        { name: "Hat", value: 221 },
        { name: "MVA Hat", value: 178 },
        { name: "Beanie", value: 124 },
        { name: "Headphones", value: 95 },
        { name: "MVA Backward", value: 62 },
        { name: "Asian Hat", value: 52 },
        { name: "Fur Hat", value: 33 },
        { name: "Military Helmet", value: 30 },
        { name: "Halo", value: 23 },
        { name: "Riot Helmet", value: 20 },
        { name: "Black Crown", value: 5 }
      ]
    },
    {
      title: "Face",
      options: [
        { name: "Mad Face", value: 1537 },
        { name: "Serious Face", value: 628 },
        { name: "Smoking Cuban Face", value: 424 },
        { name: "Smoking Face", value: 390 },
        { name: "Crystal Face", value: 360 },
        { name: "Smoking Joint Face", value: 308  },
        { name: "Smiling Face", value: 281 },
        { name: "Arrogant Face", value: 211 },
        { name: "Party Face", value: 186 },
        { name: "Gold Face", value: 180 },
        { name: "Holding Knife Face", value: 151 },
        { name: "Dripping Face", value: 115 },
        { name: "Mad Gold Face", value: 97 },
        { name: "Mad Beard Face", value: 85 },
        { name: "Mad Tattoo Face", value: 47 }
      ]
    },
    {
      title: "Neck",
      options: [
        { name: "None", value: 1698 },
        { name: "Rope Chain", value: 642 },
        { name: "Tennis Chain", value: 635 },
        { name: "Shark Tooth", value: 463 },
        { name: "Moon Necklace", value: 461 },
        { name: "Cuban", value: 409 },
        { name: "Pearl Chain", value: 258 },
        { name: "Vechain Necklace", value: 226 },
        { name: "Barbed Wire", value: 95 },
        { name: "Gold Cuban", value: 86 },
        { name: "Diamond Cuban", value: 27 }
      ]
    }
  ]
}

export default filterOptions;