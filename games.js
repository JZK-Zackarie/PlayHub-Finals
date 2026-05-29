// Top 50 Popular Games Database
const gamesData = [
    {
        id: 1,
        title: "Grand Theft Auto V",
        price: 1299,
        category: "Action",
        rating: 4.8,
        downloads: "5.2M",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
        description: "Experience the award-winning open-world action-adventure game set in the sprawling city of Los Santos and the surrounding countryside.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-3470 / AMD FX-8350",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
            storage: "72 GB available space"
        },
        reviews: [
            { author: "GamerPro", rating: 5, comment: "One of the best open-world games ever made. Endless fun!" },
            { author: "PhilGamer", rating: 4.5, comment: "Great story, amazing graphics, and tons of activities." },
            { author: "CityExplorer", rating: 5, comment: "The attention to detail is incredible. Worth every peso!" }
        ]
    },
    {
        id: 2,
        title: "Minecraft",
        price: 1095,
        category: "Adventure",
        rating: 4.9,
        downloads: "8.5M",
        image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800",
        description: "Build, explore, and survive in randomly generated worlds. Create anything you can imagine in this sandbox adventure game.",
        isFree: false,
        systemRequirements: {
            os: "Windows 7 and up",
            processor: "Intel Core i3-3210 / AMD A8-7600",
            memory: "4 GB RAM",
            graphics: "Integrated: Intel HD Graphics 4000",
            storage: "4 GB available space"
        },
        reviews: [
            { author: "BlockMaster", rating: 5, comment: "Unlimited creativity and fun. My kids love it!" },
            { author: "MineAddict", rating: 5, comment: "Timeless classic. Never gets old!" },
            { author: "BuilderPro", rating: 4.8, comment: "Perfect for all ages. Highly recommended!" }
        ]
    },
    {
        id: 3,
        title: "Fortnite",
        price: 0,
        category: "Shooter",
        rating: 4.5,
        downloads: "12.3M",
        image: "https://images.unsplash.com/photo-1589241062272-c0a000072d9e?w=800",
        description: "Jump into the Battle Royale phenomenon. Build, battle, and be the last one standing in this free-to-play shooter.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Core i5-7300U 3.5 GHz",
            memory: "8 GB RAM",
            graphics: "Intel HD 620",
            storage: "30 GB available space"
        },
        reviews: [
            { author: "BattleKing", rating: 4.5, comment: "Great gameplay, constantly updated with new content." },
            { author: "VictoryPlayer", rating: 4, comment: "Fun with friends, building mechanics add depth." },
            { author: "RoyaleFan", rating: 5, comment: "Best battle royale game out there!" }
        ]
    },
    {
        id: 4,
        title: "Valorant",
        price: 0,
        category: "Shooter",
        rating: 4.7,
        downloads: "9.8M",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        description: "A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.",
        isFree: true,
        systemRequirements: {
            os: "Windows 7/8/10 64-bit",
            processor: "Intel Core 2 Duo E8400",
            memory: "4 GB RAM",
            graphics: "Intel HD 4000",
            storage: "20 GB available space"
        },
        reviews: [
            { author: "TacShooter", rating: 5, comment: "Perfect blend of CS:GO and Overwatch!" },
            { author: "AgentMain", rating: 4.5, comment: "Competitive and skill-based. Love it!" },
            { author: "ValPro", rating: 4.8, comment: "Best tactical shooter right now." }
        ]
    },
    {
        id: 5,
        title: "Counter-Strike 2",
        price: 0,
        category: "Shooter",
        rating: 4.8,
        downloads: "11.2M",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
        description: "The legendary competitive shooter returns with updated graphics and gameplay on the Source 2 engine.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10",
            processor: "4 hardware CPU threads",
            memory: "8 GB RAM",
            graphics: "Video card must support Vulkan + DirectX 11",
            storage: "85 GB available space"
        },
        reviews: [
            { author: "CSLegend", rating: 5, comment: "The king of FPS games is back!" },
            { author: "CompetitivePro", rating: 4.7, comment: "Improved graphics, same addictive gameplay." },
            { author: "BombDefuser", rating: 5, comment: "Worth the upgrade from CS:GO!" }
        ]
    },
    {
        id: 6,
        title: "Dota 2",
        price: 0,
        category: "Strategy",
        rating: 4.6,
        downloads: "7.9M",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        description: "Join the epic MOBA battle with over 100 heroes. Deep strategy meets intense team-based action.",
        isFree: true,
        systemRequirements: {
            os: "Windows 7 or newer",
            processor: "Dual core from Intel or AMD at 2.8 GHz",
            memory: "4 GB RAM",
            graphics: "NVIDIA GeForce 8600/9600GT",
            storage: "60 GB available space"
        },
        reviews: [
            { author: "MOBAKing", rating: 4.8, comment: "Incredibly deep and rewarding gameplay." },
            { author: "SupportMain", rating: 4.5, comment: "Steep learning curve but worth it!" },
            { author: "CarryPlayer", rating: 4.7, comment: "Best MOBA ever created!" }
        ]
    },
    {
        id: 7,
        title: "League of Legends",
        price: 0,
        category: "Strategy",
        rating: 4.7,
        downloads: "15.5M",
        image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=800",
        description: "Battle in the world's most popular MOBA. Choose your champion and fight in 5v5 strategic combat.",
        isFree: true,
        systemRequirements: {
            os: "Windows 7/8/10",
            processor: "3 GHz processor",
            memory: "4 GB RAM",
            graphics: "Nvidia GeForce 8800",
            storage: "16 GB available space"
        },
        reviews: [
            { author: "SummonerX", rating: 5, comment: "Most addictive game I've ever played!" },
            { author: "MidLaner", rating: 4.5, comment: "Great with friends, constant updates." },
            { author: "ChampionMaster", rating: 4.8, comment: "Every match is different. Love it!" }
        ]
    },
    {
        id: 8,
        title: "Apex Legends",
        price: 0,
        category: "Shooter",
        rating: 4.6,
        downloads: "8.7M",
        image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800",
        description: "Fast-paced battle royale with unique legends and abilities. Team up and be the last squad standing.",
        isFree: true,
        systemRequirements: {
            os: "Windows 7 64-bit",
            processor: "Intel Core i3-6300",
            memory: "6 GB RAM",
            graphics: "NVIDIA GeForce GT 640",
            storage: "56 GB available space"
        },
        reviews: [
            { author: "LegendMain", rating: 4.7, comment: "Smoothest battle royale gameplay!" },
            { author: "SquadLeader", rating: 4.5, comment: "Great movement mechanics and gunplay." },
            { author: "ApexPro", rating: 4.8, comment: "Best squad-based BR game!" }
        ]
    },
    {
        id: 9,
        title: "Cyberpunk 2077",
        price: 1999,
        category: "RPG",
        rating: 4.4,
        downloads: "4.2M",
        image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800",
        description: "Explore Night City, a megalopolis obsessed with power, glamour and body modification in this dystopian RPG.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-6700",
            memory: "12 GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 6GB",
            storage: "70 GB SSD"
        },
        reviews: [
            { author: "NightCityRunner", rating: 4.5, comment: "Amazing story and world-building!" },
            { author: "CyberFan", rating: 4.3, comment: "Much improved since launch. Great game!" },
            { author: "RPGLover", rating: 4.5, comment: "Incredible atmosphere and characters." }
        ]
    },
    {
        id: 10,
        title: "Elden Ring",
        price: 2499,
        category: "RPG",
        rating: 4.9,
        downloads: "6.8M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "A massive open-world action RPG from FromSoftware. Explore the Lands Between and become the Elden Lord.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10",
            processor: "Intel Core i7-8700K",
            memory: "16 GB RAM",
            graphics: "NVIDIA GeForce GTX 1070",
            storage: "60 GB available space"
        },
        reviews: [
            { author: "SoulsVeteran", rating: 5, comment: "Masterpiece. Best FromSoft game yet!" },
            { author: "TarnishedOne", rating: 4.9, comment: "Challenging but incredibly rewarding." },
            { author: "OpenWorldFan", rating: 5, comment: "Game of the decade!" }
        ]
    },
    {
        id: 11,
        title: "Red Dead Redemption 2",
        price: 2199,
        category: "Action",
        rating: 4.9,
        downloads: "5.5M",
        image: "https://images.unsplash.com/photo-1526398977052-654221a252b1?w=800",
        description: "Experience the epic tale of outlaw Arthur Morgan and the Van der Linde gang in this Western masterpiece.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-4770K",
            memory: "12 GB RAM",
            graphics: "Nvidia GeForce GTX 1060 6GB",
            storage: "150 GB available space"
        },
        reviews: [
            { author: "WesternFan", rating: 5, comment: "Best story in any game ever!" },
            { author: "CowboyGamer", rating: 4.9, comment: "Stunning graphics and immersive world." },
            { author: "OutlawLife", rating: 5, comment: "A true work of art!" }
        ]
    },
    {
        id: 12,
        title: "The Witcher 3: Wild Hunt",
        price: 999,
        category: "RPG",
        rating: 4.9,
        downloads: "7.2M",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
        description: "Hunt monsters in a visually stunning fantasy world. Play as Geralt of Rivia in this award-winning RPG.",
        isFree: false,
        systemRequirements: {
            os: "Windows 7 64-bit",
            processor: "Intel Core i5-2500K",
            memory: "6 GB RAM",
            graphics: "NVIDIA GTX 660",
            storage: "50 GB available space"
        },
        reviews: [
            { author: "WitcherFan", rating: 5, comment: "Best RPG of all time!" },
            { author: "MonsterHunter", rating: 4.9, comment: "Incredible story and side quests." },
            { author: "GeraltMain", rating: 5, comment: "A masterclass in game design!" }
        ]
    },
    {
        id: 13,
        title: "FIFA 24",
        price: 2799,
        category: "Sports",
        rating: 4.3,
        downloads: "6.1M",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
        description: "The world's game returns with HyperMotion technology. Play with over 19,000 players across 700+ teams.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600K",
            memory: "8 GB RAM",
            graphics: "NVIDIA GeForce GTX 1050 Ti",
            storage: "100 GB available space"
        },
        reviews: [
            { author: "SoccerKing", rating: 4.5, comment: "Best FIFA yet with improved gameplay!" },
            { author: "UTPlayer", rating: 4.2, comment: "Ultimate Team is addictive as always." },
            { author: "CareerMode", rating: 4.3, comment: "Great career mode improvements!" }
        ]
    },
    {
        id: 14,
        title: "Call of Duty: Modern Warfare III",
        price: 2999,
        category: "Shooter",
        rating: 4.5,
        downloads: "9.4M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "The epic conclusion to the Modern Warfare trilogy. Intense multiplayer and gripping campaign.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600",
            memory: "8 GB RAM",
            graphics: "NVIDIA GeForce GTX 960",
            storage: "149 GB available space"
        },
        reviews: [
            { author: "CODVeteran", rating: 4.7, comment: "Best COD in years!" },
            { author: "MPPlayer", rating: 4.5, comment: "Multiplayer is fantastic!" },
            { author: "CampaignFan", rating: 4.4, comment: "Great story and action!" }
        ]
    },
    {
        id: 15,
        title: "Overwatch 2",
        price: 0,
        category: "Shooter",
        rating: 4.4,
        downloads: "8.9M",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800",
        description: "Team-based action game with heroes featuring unique abilities. Free-to-play competitive shooter.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3",
            memory: "6 GB RAM",
            graphics: "NVIDIA GTX 600 series",
            storage: "50 GB available space"
        },
        reviews: [
            { author: "HeroMain", rating: 4.5, comment: "Fun and addictive team gameplay!" },
            { author: "SupportPlayer", rating: 4.3, comment: "Great variety of heroes!" },
            { author: "CompPlayer", rating: 4.5, comment: "Competitive scene is amazing!" }
        ]
    },
    {
        id: 16,
        title: "Hogwarts Legacy",
        price: 2599,
        category: "RPG",
        rating: 4.7,
        downloads: "5.9M",
        image: "https://images.unsplash.com/photo-1544306094-e2dcf9479da3?w=800",
        description: "Experience life as a student at Hogwarts in the 1800s. Master spells, brew potions, and uncover secrets.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-6600",
            memory: "16 GB RAM",
            graphics: "NVIDIA GeForce GTX 960",
            storage: "85 GB available space"
        },
        reviews: [
            { author: "PotterFan", rating: 5, comment: "Dream come true for Harry Potter fans!" },
            { author: "WizardGamer", rating: 4.7, comment: "Beautiful world and engaging story!" },
            { author: "MagicMaster", rating: 4.6, comment: "So much to explore and discover!" }
        ]
    },
    {
        id: 17,
        title: "Palworld",
        price: 1299,
        category: "Adventure",
        rating: 4.6,
        downloads: "7.8M",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        description: "Catch, train, and battle mysterious creatures called Pals in this multiplayer open-world survival game.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-3570K",
            memory: "16 GB RAM",
            graphics: "NVIDIA GeForce GTX 1050",
            storage: "40 GB available space"
        },
        reviews: [
            { author: "PalTrainer", rating: 4.7, comment: "Surprisingly deep and fun!" },
            { author: "SurvivalFan", rating: 4.5, comment: "Great with friends!" },
            { author: "CreatureLover", rating: 4.6, comment: "Addictive gameplay loop!" }
        ]
    },
    {
        id: 18,
        title: "Starfield",
        price: 2799,
        category: "RPG",
        rating: 4.3,
        downloads: "4.7M",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
        description: "Explore the vast expanse of space in Bethesda's new universe. Create your character and discover the mysteries of the stars.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "AMD Ryzen 5 3600X",
            memory: "16 GB RAM",
            graphics: "AMD Radeon RX 6800 XT",
            storage: "125 GB SSD"
        },
        reviews: [
            { author: "SpaceExplorer", rating: 4.5, comment: "Massive game with tons to do!" },
            { author: "BethesdaFan", rating: 4.2, comment: "Classic Bethesda RPG in space!" },
            { author: "StarTraveler", rating: 4.4, comment: "Beautiful space exploration!" }
        ]
    },
    {
        id: 19,
        title: "Baldur's Gate 3",
        price: 2499,
        category: "RPG",
        rating: 4.9,
        downloads: "6.3M",
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800",
        description: "The highly acclaimed D&D RPG. Make choices that shape your story in this epic adventure.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-4690",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 970",
            storage: "150 GB available space"
        },
        reviews: [
            { author: "DnDFan", rating: 5, comment: "Best RPG in decades!" },
            { author: "StoryGamer", rating: 4.9, comment: "Every choice matters!" },
            { author: "TacticalPlayer", rating: 5, comment: "Perfect adaptation of D&D!" }
        ]
    },
    {
        id: 20,
        title: "Rocket League",
        price: 0,
        category: "Sports",
        rating: 4.7,
        downloads: "10.2M",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800",
        description: "Soccer meets driving in this high-octane hybrid. Compete in fast-paced matches with rocket-powered cars.",
        isFree: true,
        systemRequirements: {
            os: "Windows 7 64-bit",
            processor: "2.5 GHz Dual core",
            memory: "4 GB RAM",
            graphics: "NVIDIA GeForce 760",
            storage: "20 GB available space"
        },
        reviews: [
            { author: "CarSoccerPro", rating: 4.8, comment: "Easy to learn, hard to master!" },
            { author: "CompetitiveRL", rating: 4.7, comment: "Most addictive game ever!" },
            { author: "AerialKing", rating: 4.9, comment: "Perfect gameplay mechanics!" }
        ]
    },
    {
        id: 21,
        title: "Terraria",
        price: 399,
        category: "Adventure",
        rating: 4.8,
        downloads: "8.3M",
        image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=800",
        description: "Dig, fight, explore, build in this 2D action-adventure sandbox. Craft weapons and face challenging bosses.",
        isFree: false,
        systemRequirements: {
            os: "Windows 7, 8/8.1, 10",
            processor: "2.0 GHz",
            memory: "2.5 GB RAM",
            graphics: "128mb Video Memory",
            storage: "200 MB available space"
        },
        reviews: [
            { author: "Miner2D", rating: 4.9, comment: "Hundreds of hours of content!" },
            { author: "BossSlayer", rating: 4.8, comment: "Great with friends!" },
            { author: "BuilderX", rating: 4.8, comment: "Endless possibilities!" }
        ]
    },
    {
        id: 22,
        title: "Stardew Valley",
        price: 599,
        category: "Adventure",
        rating: 4.9,
        downloads: "9.1M",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
        description: "Escape to the countryside. Farm, fish, forage, mine, and build relationships in this relaxing RPG.",
        isFree: false,
        systemRequirements: {
            os: "Windows Vista or greater",
            processor: "2 GHz",
            memory: "2 GB RAM",
            graphics: "256 MB",
            storage: "500 MB available space"
        },
        reviews: [
            { author: "FarmLife", rating: 5, comment: "Most relaxing game ever!" },
            { author: "ValleyResident", rating: 4.9, comment: "Incredibly charming and addictive!" },
            { author: "CropMaster", rating: 5, comment: "Perfect game to unwind!" }
        ]
    },
    {
        id: 23,
        title: "Among Us",
        price: 199,
        category: "Strategy",
        rating: 4.4,
        downloads: "11.7M",
        image: "https://images.unsplash.com/photo-1610041321420-b7c4ffec5c88?w=800",
        description: "Play with 4-15 players online. Complete tasks or hunt down the impostor in this social deduction game.",
        isFree: false,
        systemRequirements: {
            os: "Windows 7 SP1+",
            processor: "SSE2 instruction set support",
            memory: "1 GB RAM",
            graphics: "DX10 capable",
            storage: "250 MB available space"
        },
        reviews: [
            { author: "Crewmate", rating: 4.5, comment: "So fun with friends!" },
            { author: "Impostor", rating: 4.3, comment: "Simple but engaging!" },
            { author: "Detective", rating: 4.4, comment: "Great party game!" }
        ]
    },
    {
        id: 24,
        title: "Fall Guys",
        price: 0,
        category: "Adventure",
        rating: 4.5,
        downloads: "8.6M",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        description: "Stumble through obstacle courses with up to 60 players in this chaotic multiplayer party game.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 660",
            storage: "2 GB available space"
        },
        reviews: [
            { author: "BeanGuy", rating: 4.6, comment: "Hilarious and fun!" },
            { author: "CrownChaser", rating: 4.4, comment: "Great casual fun!" },
            { author: "StumblePro", rating: 4.5, comment: "Perfect party game!" }
        ]
    },
    {
        id: 25,
        title: "Rust",
        price: 1499,
        category: "Adventure",
        rating: 4.5,
        downloads: "5.8M",
        image: "https://images.unsplash.com/photo-1520004434532-668416a08753?w=800",
        description: "Survive, build, and dominate in this multiplayer survival game. Trust no one in the harsh wilderness.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-3770",
            memory: "10 GB RAM",
            graphics: "GTX 670 2GB",
            storage: "20 GB available space"
        },
        reviews: [
            { author: "SurvivalPro", rating: 4.6, comment: "Intense and unforgiving!" },
            { author: "BaseBuilder", rating: 4.4, comment: "Great with a group!" },
            { author: "RaidKing", rating: 4.5, comment: "Adrenaline-pumping gameplay!" }
        ]
    },
    {
        id: 26,
        title: "Destiny 2",
        price: 0,
        category: "Shooter",
        rating: 4.5,
        downloads: "7.4M",
        image: "https://images.unsplash.com/photo-1551103782-8ab07cb3e20c?w=800",
        description: "Become a Guardian and defend humanity in this free-to-play MMO shooter with epic raids and PvP.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-3250",
            memory: "6 GB RAM",
            graphics: "NVIDIA GTX 660",
            storage: "105 GB available space"
        },
        reviews: [
            { author: "Guardian", rating: 4.6, comment: "Best gunplay in any shooter!" },
            { author: "RaidMaster", rating: 4.5, comment: "Raids are incredible!" },
            { author: "CrucibleKing", rating: 4.4, comment: "Great PvP experience!" }
        ]
    },
    {
        id: 27,
        title: "God of War",
        price: 2199,
        category: "Action",
        rating: 4.9,
        downloads: "5.3M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "Experience Kratos' journey in Norse mythology. A masterpiece of action-adventure gaming.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-2500K",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 960",
            storage: "70 GB available space"
        },
        reviews: [
            { author: "KratosFan", rating: 5, comment: "Perfect game. 10/10!" },
            { author: "NorseGamer", rating: 4.9, comment: "Best story in gaming!" },
            { author: "ActionKing", rating: 5, comment: "Combat is flawless!" }
        ]
    },
    {
        id: 28,
        title: "Spider-Man Remastered",
        price: 2499,
        category: "Action",
        rating: 4.8,
        downloads: "5.1M",
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800",
        description: "Swing through New York City as Spider-Man. Experience the acclaimed PS4 game on PC.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-4160",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 950",
            storage: "75 GB SSD"
        },
        reviews: [
            { author: "WebSlinger", rating: 4.9, comment: "Best superhero game ever!" },
            { author: "NYCSwinger", rating: 4.8, comment: "Movement feels incredible!" },
            { author: "MarvelFan", rating: 4.8, comment: "Great story and gameplay!" }
        ]
    },
    {
        id: 29,
        title: "Dead by Daylight",
        price: 799,
        category: "Action",
        rating: 4.4,
        downloads: "6.9M",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
        description: "Survive or hunt in this 4v1 multiplayer horror game. Escape the killer or sacrifice the survivors.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-4170",
            memory: "8 GB RAM",
            graphics: "GeForce GTX 460",
            storage: "50 GB available space"
        },
        reviews: [
            { author: "HorrorFan", rating: 4.5, comment: "Intense and scary!" },
            { author: "SurvivorMain", rating: 4.3, comment: "Great with friends!" },
            { author: "KillerMain", rating: 4.5, comment: "Unique horror experience!" }
        ]
    },
    {
        id: 30,
        title: "Rainbow Six Siege",
        price: 799,
        category: "Shooter",
        rating: 4.6,
        downloads: "7.8M",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
        description: "Master tactical team-based gameplay. Breach, defend, and outsmart your opponents in intense 5v5 matches.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-2500K",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 670",
            storage: "85 GB available space"
        },
        reviews: [
            { author: "TacticalOps", rating: 4.7, comment: "Best tactical shooter!" },
            { author: "OperatorMain", rating: 4.5, comment: "High skill ceiling, very rewarding!" },
            { author: "BreachExpert", rating: 4.6, comment: "Every round is different!" }
        ]
    },
    {
        id: 31,
        title: "Warframe",
        price: 0,
        category: "Shooter",
        rating: 4.6,
        downloads: "8.5M",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        description: "Fast-paced cooperative shooter. Master the Warframes and explore a sci-fi universe.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-7700",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 1050",
            storage: "50 GB available space"
        },
        reviews: [
            { author: "TennoWarrior", rating: 4.7, comment: "Amazing free-to-play model!" },
            { author: "SpaceNinja", rating: 4.6, comment: "Tons of content!" },
            { author: "FrameFarmer", rating: 4.5, comment: "Addictive gameplay loop!" }
        ]
    },
    {
        id: 32,
        title: "ARK: Survival Evolved",
        price: 1299,
        category: "Adventure",
        rating: 4.3,
        downloads: "6.2M",
        image: "https://images.unsplash.com/photo-1526398977052-654221a252b1?w=800",
        description: "Survive on an island full of dinosaurs. Tame, train, and ride prehistoric creatures.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-2400",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 670",
            storage: "60 GB available space"
        },
        reviews: [
            { author: "DinoTamer", rating: 4.5, comment: "Amazing dino experience!" },
            { author: "TribeMember", rating: 4.2, comment: "Great with friends!" },
            { author: "AlphaPlayer", rating: 4.3, comment: "Challenging survival game!" }
        ]
    },
    {
        id: 33,
        title: "The Sims 4",
        price: 1499,
        category: "Adventure",
        rating: 4.5,
        downloads: "7.9M",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
        description: "Create and control people in a virtual world. Build homes, form relationships, and live out stories.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5",
            memory: "4 GB RAM",
            graphics: "NVIDIA GTX 650",
            storage: "26 GB available space"
        },
        reviews: [
            { author: "SimBuilder", rating: 4.6, comment: "Endless creativity!" },
            { author: "StoryTeller", rating: 4.4, comment: "Love creating stories!" },
            { author: "HouseDesigner", rating: 4.5, comment: "Best life sim!" }
        ]
    },
    {
        id: 34,
        title: "NBA 2K24",
        price: 2599,
        category: "Sports",
        rating: 4.4,
        downloads: "5.7M",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
        description: "Experience the most authentic basketball game. Build your career in MyCareer or dominate in MyTeam.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-4430",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 770",
            storage: "110 GB available space"
        },
        reviews: [
            { author: "HoopsDream", rating: 4.5, comment: "Best basketball sim!" },
            { author: "MyCareerPro", rating: 4.3, comment: "Career mode is fun!" },
            { author: "CourtKing", rating: 4.4, comment: "Graphics are amazing!" }
        ]
    },
    {
        id: 35,
        title: "Street Fighter 6",
        price: 2499,
        category: "Action",
        rating: 4.7,
        downloads: "4.8M",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800",
        description: "The legendary fighting game returns. Master the fighters and compete in intense 1v1 battles.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-7500",
            memory: "8 GB RAM",
            graphics: "GTX 1060",
            storage: "60 GB available space"
        },
        reviews: [
            { author: "FightingFan", rating: 4.8, comment: "Best Street Fighter yet!" },
            { author: "ComboKing", rating: 4.7, comment: "Incredible fighting system!" },
            { author: "WorldWarrior", rating: 4.7, comment: "Perfect for beginners and pros!" }
        ]
    },
    {
        id: 36,
        title: "Resident Evil 4 Remake",
        price: 2599,
        category: "Action",
        rating: 4.9,
        downloads: "5.4M",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
        description: "The survival horror classic reimagined. Save the President's daughter from a sinister cult.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "AMD Ryzen 5 3600",
            memory: "16 GB RAM",
            graphics: "AMD Radeon RX 5700",
            storage: "67 GB available space"
        },
        reviews: [
            { author: "HorrorVeteran", rating: 5, comment: "Perfect remake!" },
            { author: "SurvivalMaster", rating: 4.9, comment: "Better than the original!" },
            { author: "REFan", rating: 4.9, comment: "Masterpiece of a remake!" }
        ]
    },
    {
        id: 37,
        title: "Halo Infinite",
        price: 0,
        category: "Shooter",
        rating: 4.5,
        downloads: "7.1M",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
        description: "Master Chief returns in this free-to-play multiplayer. Classic Halo gameplay with modern updates.",
        isFree: true,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "AMD Ryzen 5 1600",
            memory: "8 GB RAM",
            graphics: "AMD RX 570",
            storage: "50 GB available space"
        },
        reviews: [
            { author: "Spartan117", rating: 4.6, comment: "Halo is back!" },
            { author: "ArenaPlayer", rating: 4.4, comment: "Great multiplayer!" },
            { author: "CampaignFan", rating: 4.5, comment: "Love the open world!" }
        ]
    },
    {
        id: 38,
        title: "Monster Hunter: World",
        price: 1299,
        category: "Action",
        rating: 4.7,
        downloads: "6.5M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "Hunt massive monsters in stunning ecosystems. Team up with friends for epic battles.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-4460",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 760",
            storage: "48 GB available space"
        },
        reviews: [
            { author: "HunterPro", rating: 4.8, comment: "Best MH game!" },
            { author: "MonsterSlayer", rating: 4.7, comment: "Incredibly satisfying combat!" },
            { author: "CoopHunter", rating: 4.7, comment: "Amazing with friends!" }
        ]
    },
    {
        id: 39,
        title: "Dark Souls III",
        price: 1499,
        category: "RPG",
        rating: 4.8,
        downloads: "6.7M",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
        description: "Face challenging enemies in this dark fantasy RPG. Prepare to die... a lot.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-2100",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 750 Ti",
            storage: "25 GB available space"
        },
        reviews: [
            { author: "SoulsLord", rating: 4.9, comment: "Challenging masterpiece!" },
            { author: "BoneFire", rating: 4.8, comment: "Best Souls game!" },
            { author: "HollowKnight", rating: 4.8, comment: "Difficult but fair!" }
        ]
    },
    {
        id: 40,
        title: "Mortal Kombat 11",
        price: 1999,
        category: "Action",
        rating: 4.6,
        downloads: "5.5M",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800",
        description: "The brutal fighting game returns. Execute fatalities and dominate in online matches.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-750",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 670",
            storage: "80 GB available space"
        },
        reviews: [
            { author: "FatalityKing", rating: 4.7, comment: "Brutal and beautiful!" },
            { author: "KombatPro", rating: 4.6, comment: "Best MK yet!" },
            { author: "FighterX", rating: 4.6, comment: "Great story mode!" }
        ]
    },
    {
        id: 41,
        title: "Sekiro: Shadows Die Twice",
        price: 2499,
        category: "Action",
        rating: 4.9,
        downloads: "5.2M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "Master the art of the samurai in feudal Japan. Intense combat and beautiful environments.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-2100",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 760",
            storage: "25 GB available space"
        },
        reviews: [
            { author: "ShinobiMaster", rating: 5, comment: "Best combat system ever!" },
            { author: "SamuraiGamer", rating: 4.9, comment: "Challenging but amazing!" },
            { author: "FromSoftFan", rating: 4.9, comment: "Masterpiece!" }
        ]
    },
    {
        id: 42,
        title: "No Man's Sky",
        price: 1299,
        category: "Adventure",
        rating: 4.6,
        downloads: "6.1M",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
        description: "Explore an infinite procedurally generated universe. Discover planets, build bases, and survive.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 480",
            storage: "15 GB available space"
        },
        reviews: [
            { author: "SpaceNomad", rating: 4.7, comment: "Amazing redemption story!" },
            { author: "Explorer", rating: 4.6, comment: "Infinite exploration!" },
            { author: "BaseBuider", rating: 4.5, comment: "So much to do!" }
        ]
    },
    {
        id: 43,
        title: "Final Fantasy XIV",
        price: 799,
        category: "RPG",
        rating: 4.8,
        downloads: "7.3M",
        image: "https://images.unsplash.com/photo-1528872042734-4f79f05dd114?w=800",
        description: "The critically acclaimed MMORPG. Experience an epic story and beautiful world.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-3770",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 970",
            storage: "80 GB available space"
        },
        reviews: [
            { author: "WarriorOfLight", rating: 4.9, comment: "Best MMORPG story!" },
            { author: "EorzeaResident", rating: 4.8, comment: "Amazing community!" },
            { author: "RaidLeader", rating: 4.8, comment: "Incredible endgame!" }
        ]
    },
    {
        id: 44,
        title: "Gran Turismo 7",
        price: 2999,
        category: "Racing",
        rating: 4.7,
        downloads: "4.9M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "The real driving simulator. Race over 400 cars on legendary tracks.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-8600",
            memory: "16 GB RAM",
            graphics: "NVIDIA RTX 2060",
            storage: "110 GB SSD"
        },
        reviews: [
            { author: "RacingPro", rating: 4.8, comment: "Most realistic racing!" },
            { author: "CarCollector", rating: 4.7, comment: "Amazing car selection!" },
            { author: "TrackMaster", rating: 4.7, comment: "Best Gran Turismo!" }
        ]
    },
    {
        id: 45,
        title: "Forza Horizon 5",
        price: 2599,
        category: "Racing",
        rating: 4.8,
        downloads: "6.8M",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
        description: "Explore Mexico in the ultimate racing and driving experience. Stunning open world.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-8400",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 1060",
            storage: "110 GB available space"
        },
        reviews: [
            { author: "HorizonRacer", rating: 4.9, comment: "Best racing game!" },
            { author: "MexicoExplorer", rating: 4.8, comment: "Beautiful open world!" },
            { author: "SpeedDemon", rating: 4.8, comment: "Perfect arcade racing!" }
        ]
    },
    {
        id: 46,
        title: "Cities: Skylines",
        price: 999,
        category: "Strategy",
        rating: 4.7,
        downloads: "6.4M",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800",
        description: "Build and manage your dream city. Handle traffic, services, and keep citizens happy.",
        isFree: false,
        systemRequirements: {
            os: "Windows 7 64-bit",
            processor: "Intel Core i5-3470",
            memory: "6 GB RAM",
            graphics: "NVIDIA GTX 260",
            storage: "4 GB available space"
        },
        reviews: [
            { author: "CityPlanner", rating: 4.8, comment: "Best city builder!" },
            { author: "TrafficEngineer", rating: 4.7, comment: "So addictive!" },
            { author: "MayorPro", rating: 4.7, comment: "Endless replayability!" }
        ]
    },
    {
        id: 47,
        title: "Civilization VI",
        price: 1999,
        category: "Strategy",
        rating: 4.7,
        downloads: "5.9M",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800",
        description: "Build an empire to stand the test of time. Lead your civilization to victory.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-3210",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 650",
            storage: "15 GB available space"
        },
        reviews: [
            { author: "StrategyMaster", rating: 4.8, comment: "One more turn!" },
            { author: "WorldLeader", rating: 4.7, comment: "Best Civ game!" },
            { author: "HistoryBuff", rating: 4.7, comment: "Incredibly deep!" }
        ]
    },
    {
        id: 48,
        title: "DOOM Eternal",
        price: 1999,
        category: "Shooter",
        rating: 4.8,
        downloads: "5.6M",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
        description: "Rip and tear through demon hordes. Fast-paced FPS action at its finest.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5-3570",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 1060",
            storage: "80 GB available space"
        },
        reviews: [
            { author: "DoomSlayer", rating: 4.9, comment: "Pure adrenaline!" },
            { author: "FPSFan", rating: 4.8, comment: "Best FPS campaign!" },
            { author: "DemonHunter", rating: 4.8, comment: "Incredibly satisfying!" }
        ]
    },
    {
        id: 49,
        title: "Subnautica",
        price: 999,
        category: "Adventure",
        rating: 4.8,
        downloads: "6.3M",
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800",
        description: "Explore an alien ocean planet. Dive deep, build bases, and survive in this underwater adventure.",
        isFree: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i3-3210",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 550 Ti",
            storage: "20 GB available space"
        },
        reviews: [
            { author: "OceanExplorer", rating: 4.9, comment: "Beautiful and terrifying!" },
            { author: "DeepDiver", rating: 4.8, comment: "Amazing exploration game!" },
            { author: "UnderwaterFan", rating: 4.8, comment: "Unique experience!" }
        ]
    },
    {
        id: 50,
        title: "Hades",
        price: 899,
        category: "Action",
        rating: 4.9,
        downloads: "7.1M",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
        description: "Defy the god of death in this award-winning roguelike. Escape the underworld with incredible combat.",
        isFree: false,
        systemRequirements: {
            os: "Windows 7 SP1",
            processor: "Dual Core 3.0 GHz",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 750 Ti",
            storage: "15 GB available space"
        },
        reviews: [
            { author: "RogueFan", rating: 5, comment: "Perfect roguelike!" },
            { author: "GreekMythology", rating: 4.9, comment: "Amazing story and gameplay!" },
            { author: "IndieGamer", rating: 5, comment: "Best indie game ever!" }
        ]
    }
];