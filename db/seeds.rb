# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Army.create!(
id: 8,
name: "Abyssal Dwarfs",
alignment: "Evil"
)
Army.create!(
id: 1,
name: "Basileans",
alignment: "Good"
)
Army.create!(
id: 2,
name: "Dwarfs",
alignment: "Good"
)
Army.create!(
id: 3,
name: "Elves",
alignment: "Good"
)
Army.create!(
id: 9,
name: "Empire of Dust",
alignment: "Evil"
)
Army.create!(
id: 6,
name: "Forces of Nature",
alignment: "Neutral"
)
Army.create!(
id: 10,
name: "Forces of the Abyss",
alignment: "Evil"
)
Army.create!(
id: 11,
name: "Goblins",
alignment: "Evil"
)
Army.create!(
id: 12,
name: "Nightstalkers",
alignment: "Evil"
)
Army.create!(
id: 4,
name: "Northern Alliance",
alignment: "Good"
)
Army.create!(
id: 5,
name: "Ogres",
alignment: "Neutral"
)
Army.create!(
id: 13,
name: "Orcs",
alignment: "Evil"
)
Army.create!(
id: 7,
name: "Trident Realm of Neritica",
alignment: "Neutral"
)
Army.create!(
id: 14,
name: "Undead",
alignment: "Evil"
)









Unit.create!(
id: 94,
name: "Abbess",
display_name: "Abbess",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 93,
name: "Abbess on Panther Chariot",
display_name: "Abbess on Panther Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 405,
name: "Abyssal Berserker Regiment",
display_name: "Abyssal Berserker Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 404,
name: "Abyssal Berserker Troop",
display_name: "Abyssal Berserker Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 520,
name: "Abyssal Champion",
display_name: "Abyssal Champion",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 519,
name: "Abyssal Fiend",
display_name: "Abyssal Fiend",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 502,
name: "Abyssal Ghoul Horde",
display_name: "Abyssal Ghoul Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 501,
name: "Abyssal Ghoul Regiment",
display_name: "Abyssal Ghoul Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 500,
name: "Abyssal Ghoul Troop",
display_name: "Abyssal Ghoul Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 439,
name: "Abyssal Grotesque Champion",
display_name: "Abyssal Grotesque Champion",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 423,
name: "Abyssal Grotesque Horde",
display_name: "Abyssal Grotesque Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 245,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 422,
name: "Abyssal Grotesque Regiment",
display_name: "Abyssal Grotesque Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 497,
name: "Abyssal Guard Regiment",
display_name: "Abyssal Guard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 496,
name: "Abyssal Guard Troop",
display_name: "Abyssal Guard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 437,
name: "Abyssal Halfbreed Champion",
display_name: "Abyssal Halfbreed Champion",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 417,
name: "Abyssal Halfbreed Regiment",
display_name: "Abyssal Halfbreed Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 416,
name: "Abyssal Halfbreed Troop",
display_name: "Abyssal Halfbreed Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 522,
name: "Abyssal Harbringer",
display_name: "Abyssal Harbringer",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 517,
name: "Abyssal Horseman Regiment",
display_name: "Abyssal Horseman Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 240,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 516,
name: "Abyssal Horseman Troop",
display_name: "Abyssal Horseman Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 527,
name: "Abyssal Warlock",
display_name: "Abyssal Warlock",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 486,
name: "Ahmunite Pharaoh",
display_name: "Ahmunite Pharaoh",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 483,
name: "Ahmunite Pharaoh on Royal Chariot",
display_name: "Ahmunite Pharaoh on Royal Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 277,
name: "Air Elemental Horde (Force of Nature)",
display_name: "Air Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 276,
name: "Air Elemental Regiment (Forces of Nature)",
display_name: "Air Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 426,
name: "Angkor Heavy Mortar",
display_name: "Angkor Heavy Mortar",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 491,
name: "Apaphys, Champion of Death [1]",
display_name: "Apaphys, Champion of Death",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 360,
limited_n: 1,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 524,
name: "Archfiend of the Abyss",
display_name: "Archfiend of the Abyss",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 310,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 198,
name: "Argus Rodinar [1]",
display_name: "Argus Rodinar",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 70,
limited_n: 1,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 347,
name: "Army Standard (Ogres)",
display_name: "Army Standard",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 194,
name: "Army Standard Bearer (Elves)",
display_name: "Army Standard Bearer",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 60,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 306,
name: "Avatar of the Green Lady [1] (Forces of Nature)",
display_name: "Avatar of the Green Lady",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 185,
limited_n: 1,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 580,
name: "Ax Horde",
display_name: "Ax Horde",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Horde",
unit_strength: 4,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 581,
name: "Ax Legion",
display_name: "Ax Legion",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Legion",
unit_strength: 5,
points: 310,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 579,
name: "Ax Regiment",
display_name: "Ax Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 578,
name: "Ax Troop",
display_name: "Ax Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 660,
name: "Balefire Catapult (Undead)",
display_name: "Balefire Catapult",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 39,
name: "Banggit",
display_name: "Banggit",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 60,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 567,
name: "Banshee",
display_name: "Banshee",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 442,
name: "Ba'su'su the Vile [1] (Abyssal Dwarfs)",
display_name: "Ba'su'su the Vile",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 210,
limited_n: 1,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 531,
name: "Ba'su'su the Vile [1] (Forces of the Abyss)",
display_name: "Ba'su'su the Vile",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 210,
limited_n: 1,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 136,
name: "Battle Driller",
display_name: "Battle Driller",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 174,
name: "Battlecat Regiment",
display_name: "Battlecat Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 83,
name: "Bearer of the Holy Icon",
display_name: "Bearer of the Holy Icon",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 288,
name: "Beast of Nature",
display_name: "Beast of Nature",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 336,
name: "Berserker Brave Horde",
display_name: "Berserker Brave Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 335,
name: "Berserker Brave Regiment",
display_name: "Berserker Brave Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 128,
name: "Berserker Brock Rider Regiment",
display_name: "Berserker Brock Rider Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 195,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 127,
name: "Berserker Brock Rider Troop",
display_name: "Berserker Brock Rider Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 349,
name: "Berserker Bully",
display_name: "Berserker Bully",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 141,
name: "Berserker Lord",
display_name: "Berserker Lord",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 114,
name: "Berserker Regiment (Dwarfs)",
display_name: "Berserker Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: true,
army_id: 2
)
Unit.create!(
id: 113,
name: "Berserker Troop (Dwarfs)",
display_name: "Berserker Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: true,
army_id: 2
)
Unit.create!(
id: 27,
name: "Big Rocks Thrower",
display_name: "Big Rocks Thrower",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 35,
name: "Biggit",
display_name: "Biggit",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 403,
name: "Blacksoul Horde",
display_name: "Blacksoul Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 402,
name: "Blacksoul Regiment",
display_name: "Blacksoul Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 401,
name: "Blacksoul Troop",
display_name: "Blacksoul Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 539,
name: "Blood Worm Horde",
display_name: "Blood Worm Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 540,
name: "Blood Worm Legion",
display_name: "Blood Worm Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 5,
points: 290,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 538,
name: "Blood Worm Regiment",
display_name: "Blood Worm Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 183,
name: "Bolt Thrower (Elves)",
display_name: "Bolt Thrower",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 475,
name: "Bone Giant",
display_name: "Bone Giant",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 321,
name: "Boomer Chariot Regiment",
display_name: "Boomer Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 180,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 320,
name: "Boomer Chariot Troop",
display_name: "Boomer Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 145,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 329,
name: "Boomer Horde",
display_name: "Boomer Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 328,
name: "Boomer Regiment",
display_name: "Boomer Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 346,
name: "Boomer Sergeant",
display_name: "Boomer Sergeant",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 441,
name: "Brakki Barka [1]",
display_name: "Brakki Barka",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 200,
limited_n: 1,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 117,
name: "Bulwarker Horde",
display_name: "Bulwarker Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 116,
name: "Bulwarker Regiment",
display_name: "Bulwarker Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 115,
name: "Bulwarker Troop",
display_name: "Bulwarker Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 570,
name: "Butcher Fleshripper",
display_name: "Butcher Fleshripper",
unit_type: "Hero (Large Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 553,
name: "Butcher Horde",
display_name: "Butcher Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 552,
name: "Butcher Regiment",
display_name: "Butcher Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 227,
name: "Cavern Dweller (Northern Alliance)",
display_name: "Cavern Dweller",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 210,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 271,
name: "Centaur Bray Hunter Regiment (Forces of Nature)",
display_name: "Centaur Bray Hunter Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 2,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 270,
name: "Centaur Bray Hunter Troop (Forces of Nature)",
display_name: "Centaur Bray Hunter Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 269,
name: "Centaur Bray Strider Regiment (Forces of Nature)",
display_name: "Centaur Bray Strider Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 268,
name: "Centaur Bray Strider Troop (Forces of Nature)",
display_name: "Centaur Bray Strider Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 298,
name: "Centaur Chief (Forces of Nature)",
display_name: "Centaur Chief",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 518,
name: "Chroneas",
display_name: "Chroneas",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 241,
name: "Clarion [1]",
display_name: "Clarion",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: 1,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 386,
name: "Coral Giant",
display_name: "Coral Giant",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 487,
name: "Cursed High Priest",
display_name: "Cursed High Priest",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 675,
name: "Cursed Pharaoh (Undead)",
display_name: "Cursed Pharaoh",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 102,
name: "Danor the Wizard [1]",
display_name: "Danor the Wizard",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: 1,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 648,
name: "Deathpack Horde",
display_name: "Deathpack Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 125,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 647,
name: "Deathpack Regiment",
display_name: "Deathpack Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 75,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 415,
name: "Decimator Horde",
display_name: "Decimator Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 260,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 414,
name: "Decimator Regiment",
display_name: "Decimator Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 413,
name: "Decimator Troop",
display_name: "Decimator Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 392,
name: "Depth Horror Eternal",
display_name: "Depth Horror Eternal",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 375,
name: "Depth Horror Horde",
display_name: "Depth Horror Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 185,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 374,
name: "Depth Horror Regiment",
display_name: "Depth Horror Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 464,
name: "Desert Swarm Horde",
display_name: "Desert Swarm Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 463,
name: "Desert Swarm Regiment",
display_name: "Desert Swarm Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 60,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 525,
name: "Despoiler Champion",
display_name: "Despoiler Champion",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 85,
name: "Dictator",
display_name: "Dictator",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 537,
name: "Doppelganger Regiment",
display_name: "Doppelganger Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 184,
name: "Dragon Breath",
display_name: "Dragon Breath",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 427,
name: "'Dragon' Fire-Team",
display_name: "'Dragon' Fire-Team",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 193,
name: "Dragon Kindred Lord",
display_name: "Dragon Kindred Lord",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 182,
name: "Drakon Rider Horde",
display_name: "Drakon Rider Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 275,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 181,
name: "Drakon Rider Regiment",
display_name: "Drakon Rider Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 165,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 563,
name: "Dread-fiend",
display_name: "Dread-fiend",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 569,
name: "Dream Hunter [1]",
display_name: "Dream Hunter",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 195,
limited_n: 1,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 294,
name: "Druid (Forces of Nature)",
display_name: "Druid",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 145,
name: "Dwarf Army Standard Bearer",
display_name: "Dwarf Army Standard Bearer",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 204,
name: "Dwarf Clansman Regiment",
display_name: "Dwarf Clansman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 203,
name: "Dwarf Clansman Troop",
display_name: "Dwarf Clansman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 139,
name: "Dwarf Lord",
display_name: "Dwarf Lord",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 140,
name: "Dwarf Lord on Large Beast",
display_name: "Dwarf Lord on Large Beast",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 131,
name: "Earth Elemental Horde (Dwarfs)",
display_name: "Earth Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 281,
name: "Earth Elemental Horde (Forces of Nature)",
display_name: "Earth Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 280,
name: "Earth Elemental Regiment (Forces of Nature)",
display_name: "Earth Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 130,
name: "Earth Elemental Regiment (Dwarfs)",
display_name: "Earth Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 399,
name: "Eckter [1]",
display_name: "Eckter",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 165,
limited_n: 1,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 529,
name: "Efreet",
display_name: "Efreet",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 218,
name: "Elf Clansman Regiment",
display_name: "Elf Clansman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 217,
name: "Elf Clansman Troop",
display_name: "Elf Clansman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 80,
name: "Elohi Horde",
display_name: "Elohi Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 270,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 79,
name: "Elohi Regiment",
display_name: "Elohi Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 191,
name: "Elven Archmage",
display_name: "Elven Archmage",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 60,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 186,
name: "Elven King",
display_name: "Elven King",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 189,
name: "Elven Prince",
display_name: "Elven Prince",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 479,
name: "Empire of Dust Balefire Catapult",
display_name: "Empire of Dust Balefire Catapult",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 474,
name: "Enslaved Guardian Archer Horde",
display_name: "Enslaved Guardian Archer Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 2,
points: 235,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 473,
name: "Enslaved Guardian Archer Regiment",
display_name: "Enslaved Guardian Archer Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 472,
name: "Enslaved Guardian Horde",
display_name: "Enslaved Guardian Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 471,
name: "Enslaved Guardian Regiment",
display_name: "Enslaved Guardian Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 558,
name: "Fiend Horde",
display_name: "Fiend Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 557,
name: "Fiend Regiment",
display_name: "Fiend Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 602,
name: "Fight Wagon Horde",
display_name: "Fight Wagon Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 245,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 603,
name: "Fight Wagon Legion",
display_name: "Fight Wagon Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 285,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 601,
name: "Fight Wagon Regiment",
display_name: "Fight Wagon Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 195,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 600,
name: "Fight Wagon Troop",
display_name: "Fight Wagon Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 275,
name: "Fire Elemental Horde (Forces of Nature)",
display_name: "Fire Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 274,
name: "Fire Elemental Regiment (Forces of Nature)",
display_name: "Fire Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 610,
name: "Flagger",
display_name: "Flagger",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 40,
name: "Flaggit",
display_name: "Flaggit",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 40,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 134,
name: "Flame Belcher",
display_name: "Flame Belcher",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 147,
name: "Flame Priest",
display_name: "Flame Priest",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 507,
name: "Flamebearer Regiment",
display_name: "Flamebearer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 506,
name: "Flamebearer Troop",
display_name: "Flamebearer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 22,
name: "Fleabag Chariot Horde",
display_name: "Fleabag Chariot Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 195,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 23,
name: "Fleabag Chariot Legion",
display_name: "Fleabag Chariot Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 225,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 21,
name: "Fleabag Chariot Regiment",
display_name: "Fleabag Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 20,
name: "Fleabag Chariot Troop",
display_name: "Fleabag Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 125,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 19,
name: "Fleabag Rider Horde",
display_name: "Fleabag Rider Horde",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Horde",
unit_strength: 4,
points: 265,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 18,
name: "Fleabag Rider Regiment",
display_name: "Fleabag Rider Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 14,
name: "Fleabag Rider Sniff Regiment",
display_name: "Fleabag Rider Sniff Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 2,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 13,
name: "Fleabag Rider Sniff Troop",
display_name: "Fleabag Rider Sniff Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 17,
name: "Fleabag Rider Troop",
display_name: "Fleabag Rider Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 157,
name: "Forest Guard Regiment",
display_name: "Forest Guard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 156,
name: "Forest Guard Troop",
display_name: "Forest Guard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 176,
name: "Forest Shambler Horde (Elves)",
display_name: "Forest Shambler Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 273,
name: "Forest Shambler Horde (Forces of Nature)",
display_name: "Forest Shambler Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 175,
name: "Forest Shambler Regiment (Elves)",
display_name: "Forest Shambler Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 272,
name: "Forest Shambler Regiment (Forces of Nature)",
display_name: "Forest Shambler Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 301,
name: "Forest Warden (Forces of Nature)",
display_name: "Forest Warden",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 228,
name: "Frost Giant",
display_name: "Frost Giant",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 226,
name: "Frostfang Cavalry Horde",
display_name: "Frostfang Cavalry Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 265,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 225,
name: "Frostfang Cavalry Regiment",
display_name: "Frostfang Cavalry Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 621,
name: "Gakamak [1]",
display_name: "Gakamak",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 230,
limited_n: 1,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 505,
name: "Gargoyle Troop (Forces of the Abyss)",
display_name: "Gargoyle Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "",
unit_strength: 1,
points: 85,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 411,
name: "Gargoyle Troop (Abyssal Dwarfs)",
display_name: "Gargoyle Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 85,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 149,
name: "Garrek Heavyhand [1]",
display_name: "Garrek Heavyhand",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 150,
limited_n: 1,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 662,
name: "Ghoul Ghast",
display_name: "Ghoul Ghast",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 637,
name: "Ghoul Horde (Undead)",
display_name: "Ghoul Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 636,
name: "Ghoul Regiment (Undead)",
display_name: "Ghoul Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 635,
name: "Ghoul Troop (Undead)",
display_name: "Ghoul Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 605,
name: "Giant (Orcs)",
display_name: "Giant",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 33,
name: "Giant (Goblins)",
display_name: "Giant",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 342,
name: "Giant (Ogres)",
display_name: "Giant",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 381,
name: "Gigas Horde",
display_name: "Gigas Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 380,
name: "Gigas Regiment",
display_name: "Gigas Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 296,
name: "Gladewalker Druid (Forces of Nature)",
display_name: "Gladewalker Druid",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 100,
name: "Gnaeus Sallustis [1]",
display_name: "Gnaeus Sallustis",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 180,
limited_n: 1,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 31,
name: "Goblin Blaster",
display_name: "Goblin Blaster",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 34,
name: "Goblin Slasher",
display_name: "Goblin Slasher",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 210,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 615,
name: "Godspeaker",
display_name: "Godspeaker",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 596,
name: "Gore Chariot Horde",
display_name: "Gore Chariot Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 240,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 597,
name: "Gore Chariot Legion",
display_name: "Gore Chariot Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 275,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 595,
name: "Gore Chariot Regiment",
display_name: "Gore Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 594,
name: "Gore Chariot Troop",
display_name: "Gore Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 588,
name: "Gore Rider Regiment",
display_name: "Gore Rider Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 587,
name: "Gore Rider Troop",
display_name: "Gore Rider Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 661,
name: "Goreblight",
display_name: "Goreblight",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 584,
name: "Greatax Horde",
display_name: "Greatax Horde",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Horde",
unit_strength: 4,
points: 250,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 583,
name: "Greatax Regiment",
display_name: "Greatax Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 582,
name: "Greatax Troop",
display_name: "Greatax Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 289,
name: "Greater Air Elemental (Forces of Nature)",
display_name: "Greater Air Elemental",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 292,
name: "Greater Earth Elemental (Forces of Nature)",
display_name: "Greater Earth Elemental",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 138,
name: "Greater Earth Elemental (Dwarfs)",
display_name: "Greater Earth Elemental",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 290,
name: "Greater Fire Elemental (Forces of Nature)",
display_name: "Greater Fire Elemental",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 428,
name: "Greater Obsidian Golem",
display_name: "Greater Obsidian Golem",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 235,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 384,
name: "Greater Water Elemental (Trident Realm of Neritica)",
display_name: "Greater Water Elemental",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 291,
name: "Greater Water Elemental (Forces of Nature)",
display_name: "Greater Water Elemental",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 424,
name: "G'rog Mortar",
display_name: "G'rog Mortar",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 356,
name: "Grokagamok [1]",
display_name: "Grokagamok",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 250,
limited_n: 1,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 67,
name: "Gur Panther Regiment",
display_name: "Gur Panther Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 130,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 66,
name: "Gur Panther Troop",
display_name: "Gur Panther Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 85,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 206,
name: "Half-Elf Berserker Regiment",
display_name: "Half-Elf Berserker Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 205,
name: "Half-Elf Berserker Troop",
display_name: "Half-Elf Berserker Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 81,
name: "Heavy Arbalest",
display_name: "Heavy Arbalest",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 528,
name: "Hellequin Blood-Masque",
display_name: "Hellequin Blood-Masque",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 429,
name: "Hellfane",
display_name: "Hellfane",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 280,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 515,
name: "Hellhound Regiment",
display_name: "Hellhound Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 185,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 514,
name: "Hellhound Troop",
display_name: "Hellhound Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 434,
name: "Hexcaster",
display_name: "Hexcaster",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 91,
name: "High Paladin",
display_name: "High Paladin",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 99,
name: "High Paladin on Dragon",
display_name: "High Paladin on Dragon",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 310,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 566,
name: "Horror",
display_name: "Horror",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 556,
name: "Horror Riftweaver",
display_name: "Horror Riftweaver",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 242,
name: "Hrimm, Legendary Ice Giant [1]",
display_name: "Hrimm, Legendary Ice Giant",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 260,
limited_n: 1,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 202,
name: "Human Clansman Horde",
display_name: "Human Clansman Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 201,
name: "Human Clansman Regiment",
display_name: "Human Clansman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 200,
name: "Human Clansman Troop",
display_name: "Human Clansman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 334,
name: "Hunter Horde",
display_name: "Hunter Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 162,
name: "Hunter of the Wild Regiment",
display_name: "Hunter of the Wild Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 267,
name: "Hunter of the Wild Regiment (Forces of Nature)",
display_name: "Hunter of the Wild Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 266,
name: "Hunter of the Wild Troop (Forces of Nature)",
display_name: "Hunter of the Wild Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 161,
name: "Hunter of the Wild Troop",
display_name: "Hunter of the Wild Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 333,
name: "Hunter Regiment",
display_name: "Hunter Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 211,
name: "Huscarl Regiment",
display_name: "Huscarl Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 210,
name: "Huscarl Troop",
display_name: "Huscarl Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 293,
name: "Hydra (Forces of Nature)",
display_name: "Hydra",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 237,
name: "Ice Blade",
display_name: "Ice Blade",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 220,
name: "Ice Elemental Horde",
display_name: "Ice Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 240,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 219,
name: "Ice Elemental Regiment",
display_name: "Ice Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 229,
name: "Ice Kin Bolt Thrower",
display_name: "Ice Kin Bolt Thrower",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 215,
name: "Ice Kin Hunter Regiment",
display_name: "Ice Kin Hunter Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 180,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 214,
name: "Ice Kin Hunter Troop",
display_name: "Ice Kin Hunter Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 135,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 231,
name: "Ice Kin Master Hunter",
display_name: "Ice Kin Master Hunter",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 209,
name: "Ice Naiad Horde",
display_name: "Ice Naiad Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 208,
name: "Ice Naiad Regiment",
display_name: "Ice Naiad Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 207,
name: "Ice Naiad Troop",
display_name: "Ice Naiad Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 235,
name: "Ice-Queen",
display_name: "Ice-Queen",
unit_type: "Hero (Infantry)",
unit_type_index: 1,
unit_size: "",
unit_strength: 0,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 492,
name: "Idol of Shobik [1]",
display_name: "Idol of Shobik",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 290,
limited_n: 1,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 407,
name: "Immortal Guard Regiment",
display_name: "Immortal Guard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 406,
name: "Immortal Guard Troop",
display_name: "Immortal Guard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 513,
name: "Imp Horde",
display_name: "Imp Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 512,
name: "Imp Regiment",
display_name: "Imp Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 65,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 432,
name: "Infernox",
display_name: "Infernox",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 132,
name: "Ironbelcher Cannon",
display_name: "Ironbelcher Cannon",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 135,
name: "Ironbelcher Organ Gun",
display_name: "Ironbelcher Organ Gun",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 435,
name: "Iron-caster",
display_name: "Iron-caster",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 107,
name: "Ironclad Horde",
display_name: "Ironclad Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 106,
name: "Ironclad Regiment",
display_name: "Ironclad Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 105,
name: "Ironclad Troop",
display_name: "Ironclad Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 109,
name: "Ironguard Regiment",
display_name: "Ironguard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 108,
name: "Ironguard Troop",
display_name: "Ironguard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 120,
name: "Ironwatch Crossbow Horde",
display_name: "Ironwatch Crossbow Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 235,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 119,
name: "Ironwatch Crossbow Regiment",
display_name: "Ironwatch Crossbow Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 118,
name: "Ironwatch Crossbow Troop",
display_name: "Ironwatch Crossbow Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 125,
name: "Ironwatch Rifle Horde",
display_name: "Ironwatch Rifle Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 265,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 124,
name: "Ironwatch Rifle Regiment",
display_name: "Ironwatch Rifle Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 123,
name: "Ironwatch Rifle Troop",
display_name: "Ironwatch Rifle Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 133,
name: "Jarrun Bombard",
display_name: "Jarrun Bombard",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 680,
name: "Jarvis [1]",
display_name: "Jarvis",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 140,
limited_n: 1,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 103,
name: "Jullius, Dragon of Heaven [1]",
display_name: "Jullius, Dragon of Heaven",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 315,
limited_n: 1,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 425,
name: "Katsuchan Rocket Launcher",
display_name: "Katsuchan Rocket Launcher",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 307,
name: "Keris [1]",
display_name: "Keris",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 80,
limited_n: 1,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 165,
name: "Kindred Archer Horde",
display_name: "Kindred Archer Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 210,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 164,
name: "Kindred Archer Regiment",
display_name: "Kindred Archer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 163,
name: "Kindred Archer Troop",
display_name: "Kindred Archer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 166,
name: "Kindred Gladestalker Regiment",
display_name: "Kindred Gladestalker Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 175,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 167,
name: "Kindred Gladestalker Troop",
display_name: "Kindred Gladestalker Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 153,
name: "Kindred Tallspear Horde",
display_name: "Kindred Tallspear Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 152,
name: "Kindred Tallspear Regiment",
display_name: "Kindred Tallspear Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 151,
name: "Kindred Tallspear Troop",
display_name: "Kindred Tallspear Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 37,
name: "King (Goblins)",
display_name: "King",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 43,
name: "King on Chariot (Goblins)",
display_name: "King on Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 385,
name: "Knucker",
display_name: "Knucker",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 387,
name: "Kraken",
display_name: "Kraken",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 240,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 606,
name: "Krudger",
display_name: "Krudger",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 608,
name: "Krudger on Gore Chariot",
display_name: "Krudger on Gore Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 609,
name: "Krudger on Winged Slasher",
display_name: "Krudger on Winged Slasher",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 285,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 612,
name: "Krusher",
display_name: "Krusher",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 48,
name: "Kuzlo & Madfall (1)",
display_name: "Kuzlo & Madfall",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 145,
limited_n: 1,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 355,
name: "Kuzlo & Madfall [1] (Ogres)",
display_name: "Kuzlo & Madfall",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 145,
limited_n: 1,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 679,
name: "Lady Ilona [1]",
display_name: "Lady Ilona",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 280,
limited_n: 1,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 421,
name: "Lesser Obsidian Golem Horde",
display_name: "Lesser Obsidian Golem Horde",
unit_type: "Monstrous Infantry",
unit_type_index: 4,
unit_size: "Horde",
unit_strength: 3,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 420,
name: "Lesser Obsidian Golem Regiment",
display_name: "Lesser Obsidian Golem Regiment",
unit_type: "Monstrous Infantry",
unit_type_index: 4,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 388,
name: "Leviathan's Bane",
display_name: "Leviathan's Bane",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 672,
name: "Liche King",
display_name: "Liche King",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 575,
name: "Longax Horde",
display_name: "Longax Horde",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Horde",
unit_strength: 4,
points: 255,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 574,
name: "Longax Regiment",
display_name: "Longax Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 573,
name: "Longax Troop",
display_name: "Longax Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 230,
name: "Lord (Northern Alliance)",
display_name: "Lord",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 236,
name: "Lord on Chimera",
display_name: "Lord on Chimera",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 320,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 188,
name: "Lord on Drakon",
display_name: "Lord on Drakon",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 170,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 234,
name: "Lord on Frostfang",
display_name: "Lord on Frostfang",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 495,
name: "Lower Abyssal Horde",
display_name: "Lower Abyssal Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 494,
name: "Lower Abyssal Regiment",
display_name: "Lower Abyssal Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 493,
name: "Lower Abyssal Troop",
display_name: "Lower Abyssal Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 8,
name: "Luggit Gang Regiment",
display_name: "Luggit Gang Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 7,
name: "Luggit Gang Troop",
display_name: "Luggit Gang Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 663,
name: "Lykanis",
display_name: "Lykanis",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 197,
name: "Madriga the Elf [1]",
display_name: "Madriga the Elf",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 125,
limited_n: 1,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 47,
name: "Magwa & Jo'os [1]",
display_name: "Magwa & Jo'os",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 0,
points: 150,
limited_n: 1,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 340,
name: "Mammoth",
display_name: "Mammoth",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 533,
name: "Manifestation of Ba'el [1]",
display_name: "Manifestation of Ba'el",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 265,
limited_n: 1,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 129,
name: "Mastiff Hunting Pack Regiment",
display_name: "Mastiff Hunting Pack Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 65,
limited_n: nil,
is_irregular: true,
army_id: 2
)
Unit.create!(
id: 530,
name: "Mau'ti-bu-su [1] (Forces of the Abyss)",
display_name: "Mau'ti-bu-su",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 160,
limited_n: 1,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 16,
name: "Mawbeast Pack Regiment",
display_name: "Mawbeast Pack Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 15,
name: "Mawbeast Pack Troop",
display_name: "Mawbeast Pack Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 29,
name: "Mawpup Launcher",
display_name: "Mawpup Launcher",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 63,
name: "Men-at-Arms Crossbowman Horde",
display_name: "Men-at-Arms Crossbowman Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 62,
name: "Men-at-Arms Crossbowman Regiment",
display_name: "Men-at-Arms Crossbowman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 61,
name: "Men-at-Arms Crossbowman Troop",
display_name: "Men-at-Arms Crossbowman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 55,
name: "Men-at-Arms Spearman Horde",
display_name: "Men-at-Arms Spearman Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 54,
name: "Men-at-Arms Spearman Regiment",
display_name: "Men-at-Arms Spearman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 53,
name: "Men-at-Arms Spearman Troop",
display_name: "Men-at-Arms Spearman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 52,
name: "Men-at-Arms Swordsman Horde",
display_name: "Men-at-Arms Swordsman Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 51,
name: "Men-at-Arms Swordsman Regiment",
display_name: "Men-at-Arms Swordsman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 50,
name: "Men-at-Arms Swordsman Troop",
display_name: "Men-at-Arms Swordsman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 678,
name: "Mhorgoth the Faceless [1]",
display_name: "Mhorgoth the Faceless",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 230,
limited_n: 1,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 30,
name: "Mincer",
display_name: "Mincer",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 25,
name: "Mincer Mob Regiment",
display_name: "Mincer Mob Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 200,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 24,
name: "Mincer Mob Troop",
display_name: "Mincer Mob Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 554,
name: "Mind-screech",
display_name: "Mind-screech",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 509,
name: "Moloch Horde",
display_name: "Moloch Horde",
unit_type: "Monstrous Infantry",
unit_type_index: 4,
unit_size: "Horde",
unit_strength: 3,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 508,
name: "Moloch Regiment",
display_name: "Moloch Regiment",
unit_type: "Monstrous Infantry",
unit_type_index: 4,
unit_size: "Regiment",
unit_strength: 2,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 477,
name: "Monolith [1]",
display_name: "Monolith",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 120,
limited_n: 1,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 620,
name: "Morax Mansplitter",
display_name: "Morax Mansplitter",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 572,
name: "Morax Regiment",
display_name: "Morax Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 571,
name: "Morax Troop",
display_name: "Morax Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 641,
name: "Mummy Regiment (Undead)",
display_name: "Mummy Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 453,
name: "Mummy Regiment",
display_name: "Mummy Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 452,
name: "Mummy Troop",
display_name: "Mummy Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 640,
name: "Mummy Troop (Undead)",
display_name: "Mummy Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 412,
name: "Mutated Mastiff Hunting Pack Regiment",
display_name: "Mutated Mastiff Hunting Pack Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "",
unit_strength: 1,
points: 65,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 389,
name: "Naiad Centurion (Trident Realm of Neritica)",
display_name: "Naiad Centurion",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 260,
name: "Naiad Ensnarer Horde (Forces of Nature)",
display_name: "Naiad Ensnarer Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 359,
name: "Naiad Ensnarer Horde (Trident Realm of Neritica)",
display_name: "Naiad Ensnarer Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 358,
name: "Naiad Ensnarer Regiment (Trident Realm of Neritica)",
display_name: "Naiad Ensnarer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 259,
name: "Naiad Ensnarer Regiment (Forces of Nature)",
display_name: "Naiad Ensnarer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 258,
name: "Naiad Ensnarer Troop (Forces of Nature)",
display_name: "Naiad Ensnarer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 357,
name: "Naiad Ensnarer Troop (Trident Realm of Neritica)",
display_name: "Naiad Ensnarer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 395,
name: "Naiad Envoy (Trident Realm of Neritica)",
display_name: "Naiad Envoy",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 265,
name: "Naiad Heartpiercer Regiment (Forces of Nature)",
display_name: "Naiad Heartpiercer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 6
)
Unit.create!(
id: 367,
name: "Naiad Heartpiercer Regiment (Trident Realm of Neritica)",
display_name: "Naiad Heartpiercer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 366,
name: "Naiad Heartpiercer Troop (Trident Realm of Neritica)",
display_name: "Naiad Heartpiercer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 264,
name: "Naiad Heartpiercer Troop (Forces of Nature)",
display_name: "Naiad Heartpiercer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 6
)
Unit.create!(
id: 391,
name: "Naiad Stalker (Trident Realm of Neritica)",
display_name: "Naiad Stalker",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 304,
name: "Naiad Stalker (Forces of Nature)",
display_name: "Naiad Stalker",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 305,
name: "Naiad Wyrmrider Centurion (Forces of Nature)",
display_name: "Naiad Wyrmrider Centurion",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 390,
name: "Naiad Wyrmrider Centurion (Trident Realm of Neritica)",
display_name: "Naiad Wyrmrider Centurion",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 379,
name: "Naiad Wyrmrider Horde (Trident Realm of Neritica)",
display_name: "Naiad Wyrmrider Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 287,
name: "Naiad Wyrmrider Horde (Forces of Nature)",
display_name: "Naiad Wyrmrider Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 286,
name: "Naiad Wyrmrider Regiment (Forces of Nature)",
display_name: "Naiad Wyrmrider Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 378,
name: "Naiad Wyrmrider Regiment (Trident Realm of Neritica)",
display_name: "Naiad Wyrmrider Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 673,
name: "Necromancer",
display_name: "Necromancer",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 551,
name: "Needle-fang Horde",
display_name: "Needle-fang Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 135,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 550,
name: "Needle-fang Regiment",
display_name: "Needle-fang Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 196,
name: "Noble War Chariot (Elves)",
display_name: "Noble War Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 373,
name: "Nokken Horde",
display_name: "Nokken Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 372,
name: "Nokken Regiment",
display_name: "Nokken Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 98,
name: "Ogre Palace Guard Captain",
display_name: "Ogre Palace Guard Captain",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 78,
name: "Ogre Palace Guard Horde",
display_name: "Ogre Palace Guard Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 235,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 77,
name: "Ogre Palace Guard Regiment",
display_name: "Ogre Palace Guard Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 343,
name: "Ogre Warlock",
display_name: "Ogre Warlock",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 350,
name: "Ogre Warlord",
display_name: "Ogre Warlord",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 591,
name: "Orcling Horde",
display_name: "Orcling Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 590,
name: "Orcling Regiment",
display_name: "Orcling Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 60,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 240,
name: "Orlaf the Barbarian [1]",
display_name: "Orlaf the Barbarian",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 135,
limited_n: 1,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 433,
name: "Overmaster",
display_name: "Overmaster",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 438,
name: "Overmaster on Ancient Winged Halfbreed",
display_name: "Overmaster on Ancient Winged Halfbreed",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 300,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 213,
name: "Pack Hunter Regiment",
display_name: "Pack Hunter Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 145,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 212,
name: "Pack Hunter Troop",
display_name: "Pack Hunter Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 160,
name: "Palace Guard Horde",
display_name: "Palace Guard Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 265,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 159,
name: "Palace Guard Regiment",
display_name: "Palace Guard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 158,
name: "Palace Guard Troop",
display_name: "Palace Guard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 87,
name: "Paladin Chaplain",
display_name: "Paladin Chaplain",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 57,
name: "Paladin Foot Guard Regiment",
display_name: "Paladin Foot Guard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 56,
name: "Paladin Foot Guard Troop",
display_name: "Paladin Foot Guard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 74,
name: "Paladin Knight Horde",
display_name: "Paladin Knight Horde",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Horde",
unit_strength: 4,
points: 355,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 73,
name: "Paladin Knight Regiment",
display_name: "Paladin Knight Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 210,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 72,
name: "Paladin Knight Troop",
display_name: "Paladin Knight Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 544,
name: "Phantom Regiment",
display_name: "Phantom Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 543,
name: "Phantom Troop",
display_name: "Phantom Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 82,
name: "Phoenix",
display_name: "Phoenix",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 195,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 365,
name: "Placoderm Regiment",
display_name: "Placoderm Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 364,
name: "Placoderm Troop",
display_name: "Placoderm Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 555,
name: "Planar Apparition",
display_name: "Planar Apparition",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 562,
name: "Portal of Despair [1]",
display_name: "Portal of Despair",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 90,
limited_n: 1,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 89,
name: "Priest (Basileans)",
display_name: "Priest",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 5,
name: "Rabble Horde",
display_name: "Rabble Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 6,
name: "Rabble Legion",
display_name: "Rabble Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 180,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 4,
name: "Rabble Regiment",
display_name: "Rabble Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 122,
name: "Ranger Regiment (Dwarfs)",
display_name: "Ranger Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 185,
limited_n: nil,
is_irregular: true,
army_id: 2
)
Unit.create!(
id: 121,
name: "Ranger Troop (Dwarfs)",
display_name: "Ranger Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: true,
army_id: 2
)
Unit.create!(
id: 476,
name: "Reanimated Behemoth",
display_name: "Reanimated Behemoth",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 542,
name: "Reaper Regiment",
display_name: "Reaper Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 210,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 568,
name: "Reaper Souldrinker",
display_name: "Reaper Souldrinker",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 541,
name: "Reaper Troop",
display_name: "Reaper Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 352,
name: "Red Goblin Biggit",
display_name: "Red Goblin Biggit",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 339,
name: "Red Goblin Blaster",
display_name: "Red Goblin Blaster",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 310,
name: "Red Goblin Rabble Horde",
display_name: "Red Goblin Rabble Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 125,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 311,
name: "Red Goblin Rabble Legion",
display_name: "Red Goblin Rabble Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 180,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 309,
name: "Red Goblin Rabble Regiment",
display_name: "Red Goblin Rabble Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 75,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 318,
name: "Red Goblin Scout Regiment",
display_name: "Red Goblin Scout Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 319,
name: "Red Goblin Scout Sniff Troop",
display_name: "Red Goblin Scout Sniff Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 317,
name: "Red Goblin Scout Troop",
display_name: "Red Goblin Scout Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 313,
name: "Red Goblin Sharpstick Horde",
display_name: "Red Goblin Sharpstick Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 314,
name: "Red Goblin Sharpstick Legion",
display_name: "Red Goblin Sharpstick Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 312,
name: "Red Goblin Sharpstick Regiment",
display_name: "Red Goblin Sharpstick Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 95,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 341,
name: "Red Goblin Slasher",
display_name: "Red Goblin Slasher",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 210,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 316,
name: "Red Goblin Spitter Horde",
display_name: "Red Goblin Spitter Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 315,
name: "Red Goblin Spitter Regiment",
display_name: "Red Goblin Spitter Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 90,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 651,
name: "Revenant Cavalry Horde (Undead)",
display_name: "Revenant Cavalry Horde",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Horde",
unit_strength: 4,
points: 280,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 650,
name: "Revenant Cavalry Regiment (Undead)",
display_name: "Revenant Cavalry Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 462,
name: "Revenant Cavalry Regiment",
display_name: "Revenant Cavalry Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 196,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 649,
name: "Revenant Cavalry Troop (Undead)",
display_name: "Revenant Cavalry Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 461,
name: "Revenant Cavalry Troop",
display_name: "Revenant Cavalry Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 484,
name: "Revenant Champion",
display_name: "Revenant Champion",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 469,
name: "Revenant Chariot Horde",
display_name: "Revenant Chariot Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 190,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 470,
name: "Revenant Chariot Legion",
display_name: "Revenant Chariot Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 220,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 468,
name: "Revenant Chariot Regiment",
display_name: "Revenant Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 150,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 467,
name: "Revenant Chariot Troop (Empire of Dust)",
display_name: "Revenant Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 634,
name: "Revenant Horde (Undead)",
display_name: "Revenant Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 451,
name: "Revenant Horde",
display_name: "Revenant Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 668,
name: "Revenant King (Undead)",
display_name: "Revenant King",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 671,
name: "Revenant King on Undead Great Flying Wyrm (Undead)",
display_name: "Revenant King on Undead Great Flying Wyrm",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 250,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 489,
name: "Revenant King on Undead Great Flying Wyrm",
display_name: "Revenant King on Undead Great Flying Wyrm",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 250,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 490,
name: "Revenant on Undead Great Burrowing Wyrm",
display_name: "Revenant on Undead Great Burrowing Wyrm",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 670,
name: "Revenant on Undead Great Burrowing Wyrm (Undead)",
display_name: "Revenant on Undead Great Burrowing Wyrm",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 450,
name: "Revenant Regiment",
display_name: "Revenant Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 633,
name: "Revenant Regiment (Undead)",
display_name: "Revenant Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 632,
name: "Revenant Troop (Undead)",
display_name: "Revenant Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 449,
name: "Revenant Troop",
display_name: "Revenant Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 383,
name: "Riverguard Dambuster Horde",
display_name: "Riverguard Dambuster Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 260,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 382,
name: "Riverguard Dambuster Regiment",
display_name: "Riverguard Dambuster Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 398,
name: "Riverguard Dambuster Sentinel",
display_name: "Riverguard Dambuster Sentinel",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 369,
name: "Riverguard Regiment",
display_name: "Riverguard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 396,
name: "Riverguard Sentinel",
display_name: "Riverguard Sentinel",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 363,
name: "Riverguard Treeleaper Regiment",
display_name: "Riverguard Treeleaper Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 170,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 362,
name: "Riverguard Treeleaper Troop",
display_name: "Riverguard Treeleaper Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 368,
name: "Riverguard Troop",
display_name: "Riverguard Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 148,
name: "Rordin the Dwarf [1]",
display_name: "Rordin the Dwarf",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 125,
limited_n: 1,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 263,
name: "Salamander Prime Horde (Forces of Nature)",
display_name: "Salamander Prime Horde",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Horde",
unit_strength: 4,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 262,
name: "Salamander Prime Regiment (Forces of Nature)",
display_name: "Salamander Prime Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 261,
name: "Salamander Prime Troop (Forces of Nature)",
display_name: "Salamander Prime Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 299,
name: "Salamander Veteran (Forces of Nature)",
display_name: "Salamander Veteran",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 101,
name: "Samacris, Mother of Phoenixes [1]",
display_name: "Samacris, Mother of Phoenixes",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 195,
limited_n: 1,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 535,
name: "Scarecrow Horde",
display_name: "Scarecrow Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 536,
name: "Scarecrow Legion",
display_name: "Scarecrow Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 534,
name: "Scarecrow Regiment",
display_name: "Scarecrow Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 466,
name: "Scavenger Horde",
display_name: "Scavenger Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 465,
name: "Scavenger Regiment",
display_name: "Scavenger Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 285,
name: "Scorchwing Horde",
display_name: "Scorchwing Horde",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Horde",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: true,
army_id: 6
)
Unit.create!(
id: 284,
name: "Scorchwing Regiment",
display_name: "Scorchwing Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 6
)
Unit.create!(
id: 526,
name: "Seductress",
display_name: "Seductress",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 344,
name: "Sergeant (Ogres)",
display_name: "Sergeant",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 308,
name: "Shaarlyot [1]",
display_name: "Shaarlyot",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 135,
limited_n: 1,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 565,
name: "Shade",
display_name: "Shade",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 135,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 549,
name: "Shadowhound Regiment",
display_name: "Shadowhound Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 190,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 548,
name: "Shadowhound Troop",
display_name: "Shadowhound Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 125,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 561,
name: "Shadow-hulk",
display_name: "Shadow-hulk",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 225,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 126,
name: "Sharpshooter Troop",
display_name: "Sharpshooter Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 2,
name: "Sharpstick Horde",
display_name: "Sharpstick Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 3,
name: "Sharpstick Legion",
display_name: "Sharpstick Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 230,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 1,
name: "Sharpstick Regiment",
display_name: "Sharpstick Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 28,
name: "Sharpstick Thrower",
display_name: "Sharpstick Thrower",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 155,
name: "Shield Watch Regimentq",
display_name: "Shield Watch Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 154,
name: "Shield Watch Troop",
display_name: "Shield Watch Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 112,
name: "Shieldbreaker Horde",
display_name: "Shieldbreaker Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 205,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 111,
name: "Shieldbreaker Regiment",
display_name: "Shieldbreaker Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 110,
name: "Shieldbreaker Troop",
display_name: "Shieldbreaker Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 323,
name: "Shooter Horde",
display_name: "Shooter Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 2,
points: 230,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 322,
name: "Shooter Regiment",
display_name: "Shooter Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: true,
army_id: 5
)
Unit.create!(
id: 338,
name: "Siege Breaker Horde",
display_name: "Siege Breaker Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 240,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 337,
name: "Siege Breaker Regiment",
display_name: "Siege Breaker Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 173,
name: "Silverbreeze Cavalry Regiment",
display_name: "Silverbreeze Cavalry Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 2,
points: 200,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 172,
name: "Silverbreeze Cavalry Troop",
display_name: "Silverbreeze Cavalry Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 397,
name: "Siren",
display_name: "Siren",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 60,
name: "Sisterhood Infantry Horde",
display_name: "Sisterhood Infantry Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 240,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 59,
name: "Sisterhood Infantry Regiment",
display_name: "Sisterhood Infantry Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 145,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 58,
name: "Sisterhood Infantry Troop",
display_name: "Sisterhood Infantry Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 70,
name: "Sisterhood Panther Chariot Horde",
display_name: "Sisterhood Panther Chariot Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 225,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 71,
name: "Sisterhood Panther Chariot Legion",
display_name: "Sisterhood Panther Chariot Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 260,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 69,
name: "Sisterhood Panther Chariot Regiment",
display_name: "Sisterhood Panther Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 180,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 68,
name: "Sisterhood Panther Chariot Troop",
display_name: "Sisterhood Panther Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 145,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 76,
name: "Sisterhood Panther Lancer Regiment",
display_name: "Sisterhood Panther Lancer Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 75,
name: "Sisterhood Panther Lancer Troop",
display_name: "Sisterhood Panther Lancer Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 65,
name: "Sisterhood Scout Regiment",
display_name: "Sisterhood Scout Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 64,
name: "Sisterhood Scout Troop",
display_name: "Sisterhood Scout Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 1
)
Unit.create!(
id: 239,
name: "Skald",
display_name: "Skald",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 460,
name: "Skeleton Archer Cavalry Regiment (Empire of Dust)",
display_name: "Skeleton Archer Cavalry Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 459,
name: "Skeleton Archer Cavalry Troop (Empire of Dust)",
display_name: "Skeleton Archer Cavalry Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 100,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 456,
name: "Skeleton Archer Horde (Empire of Dust)",
display_name: "Skeleton Archer Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 646,
name: "Skeleton Archer Horde (Undead)",
display_name: "Skeleton Archer Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 645,
name: "Skeleton Archer Regiment (Undead)",
display_name: "Skeleton Archer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 95,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 455,
name: "Skeleton Archer Regiment (Empire of Dust)",
display_name: "Skeleton Archer Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 95,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 644,
name: "Skeleton Archer Troop (Undead)",
display_name: "Skeleton Archer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 454,
name: "Skeleton Archer Troop (Empire of Dust)",
display_name: "Skeleton Archer Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 458,
name: "Skeleton Deadeye Crossbow Regiment",
display_name: "Skeleton Deadeye Crossbow Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 457,
name: "Skeleton Deadeye Crossbow Troop",
display_name: "Skeleton Deadeye Crossbow Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: true,
army_id: 9
)
Unit.create!(
id: 631,
name: "Skeleton Spearman Horde (Undead)",
display_name: "Skeleton Spearman Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 448,
name: "Skeleton Spearman Horde (Empire of Dust)",
display_name: "Skeleton Spearman Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 175,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 447,
name: "Skeleton Spearman Regiment (Empire of Dust)",
display_name: "Skeleton Spearman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 630,
name: "Skeleton Spearman Regiment (Undead)",
display_name: "Skeleton Spearman Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 446,
name: "Skeleton Spearman Troop (Empire of Dust)",
display_name: "Skeleton Spearman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 629,
name: "Skeleton Spearman Troop (Undead)",
display_name: "Skeleton Spearman Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 625,
name: "Skeleton Warrior Horde (Undead)",
display_name: "Skeleton Warrior Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 445,
name: "Skeleton Warrior Horde (Empire of Dust)",
display_name: "Skeleton Warrior Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 624,
name: "Skeleton Warrior Regiment (Undead)",
display_name: "Skeleton Warrior Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 444,
name: "Skeleton Warrior Regiment (Empire of Dust)",
display_name: "Skeleton Warrior Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 85,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 623,
name: "Skeleton Warrior Troop (Undead)",
display_name: "Skeleton Warrior Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 443,
name: "Skeleton Warrior Troop (Empire of Dust)",
display_name: "Skeleton Warrior Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 617,
name: "Skulk Marauder on Gore Chariot",
display_name: "Skulk Marauder on Gore Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 589,
name: "Skulk Outrider Troop",
display_name: "Skulk Outrider Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 599,
name: "Skulk Raider Chariot Regiment",
display_name: "Skulk Raider Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 145,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 598,
name: "Skulk Raider Chariot Troop",
display_name: "Skulk Raider Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 586,
name: "Skulk Regiment",
display_name: "Skulk Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 2,
points: 110,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 618,
name: "Skulk Stalker",
display_name: "Skulk Stalker",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 585,
name: "Skulk Troop",
display_name: "Skulk Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Troop",
unit_strength: 1,
points: 85,
limited_n: nil,
is_irregular: true,
army_id: 13
)
Unit.create!(
id: 419,
name: "Slave Orc Gore Rider Regiment",
display_name: "Slave Orc Gore Rider Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 140,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 418,
name: "Slave Orc Gore Rider Troop",
display_name: "Slave Orc Gore Rider Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 410,
name: "Slave Orc Horde",
display_name: "Slave Orc Horde",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Horde",
unit_strength: 3,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 409,
name: "Slave Orc Regiment",
display_name: "Slave Orc Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 2,
points: 95,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 408,
name: "Slave Orc Troop",
display_name: "Slave Orc Troop",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "",
unit_strength: 1,
points: 60,
limited_n: nil,
is_irregular: true,
army_id: 8
)
Unit.create!(
id: 431,
name: "Slavedriver",
display_name: "Slavedriver",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 55,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 216,
name: "Snow Fox Regiment",
display_name: "Snow Fox Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 224,
name: "Snow Troll Horde",
display_name: "Snow Troll Horde",
unit_type: "Monstrous Infantry",
unit_type_index: 4,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 238,
name: "Snow Troll Prime",
display_name: "Snow Troll Prime",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 223,
name: "Snow Troll Regiment",
display_name: "Snow Troll Regiment",
unit_type: "Monstrous Infantry",
unit_type_index: 4,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 653,
name: "Soul Reaver Cavalry Regiment (Undead)",
display_name: "Soul Reaver Cavalry Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 250,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 652,
name: "Soul Reaver Cavalry Troop (Undead)",
display_name: "Soul Reaver Cavalry Troop",
unit_type: "Cavalry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 643,
name: "Soul Reaver Infantry Regiment",
display_name: "Soul Reaver Infantry Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 250,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 642,
name: "Soul Reaver Infantry Troop",
display_name: "Soul Reaver Infantry Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 480,
name: "Soul Snare [1]",
display_name: "Soul Snare",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 150,
limited_n: 1,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 559,
name: "Soulflayer Regiment",
display_name: "Soulflayer Regiment",
unit_type: "Large Cavalry",
unit_type_index: 7,
unit_size: "Regiment",
unit_strength: 2,
points: 165,
limited_n: nil,
is_irregular: true,
army_id: 12
)
Unit.create!(
id: 547,
name: "Specter Horde",
display_name: "Specter Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 546,
name: "Specter Regiment",
display_name: "Specter Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 545,
name: "Specter Troop",
display_name: "Specter Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 12,
name: "Spitter Horde",
display_name: "Spitter Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 11,
name: "Spitter Regiment",
display_name: "Spitter Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 90,
limited_n: nil,
is_irregular: true,
army_id: 11
)
Unit.create!(
id: 137,
name: "Steel Behemoth",
display_name: "Steel Behemoth",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 260,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 146,
name: "Steel Juggernaut",
display_name: "Steel Juggernaut",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 150,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 42,
name: "Stinggit",
display_name: "Stinggit",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 143,
name: "Stone Priest",
display_name: "Stone Priest",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 171,
name: "Stormwind Cavalry Regiment",
display_name: "Stormwind Cavalry Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 170,
name: "Stormwind Cavalry Troop",
display_name: "Stormwind Cavalry Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 140,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 503,
name: "Succubi Larvae Horde",
display_name: "Succubi Larvae Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 150,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 504,
name: "Succubi Larvae Legion",
display_name: "Succubi Larvae Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 215,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 499,
name: "Succubi Regiment",
display_name: "Succubi Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 498,
name: "Succubi Troop",
display_name: "Succubi Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 440,
name: "Supreme Iron-caster on Great Winged Halfbreed",
display_name: "Supreme Iron-caster on Great Winged Halfbreed",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 280,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 436,
name: "Taskmaster on Chariot",
display_name: "Taskmaster on Chariot",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 8
)
Unit.create!(
id: 560,
name: "Terror",
display_name: "Terror",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 250,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 233,
name: "Thegn",
display_name: "Thegn",
unit_type: "Hero (Heavy Infantry)",
unit_type_index: 13,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 232,
name: "Thegn on Frostfang",
display_name: "Thegn on Frostfang",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 125,
limited_n: nil,
is_irregular: false,
army_id: 4
)
Unit.create!(
id: 169,
name: "Therennian Sea Guard Horde",
display_name: "Therennian Sea Guard Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 4,
points: 290,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 168,
name: "Therennian Sea Guard Regiment",
display_name: "Therrenian Sea Guard Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 393,
name: "Thuul Aquamage",
display_name: "Thuul Aquamage",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 90,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 394,
name: "Thuul Mythican",
display_name: "Thuul Mythican",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 361,
name: "Thuul Regiment",
display_name: "Thuul Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 160,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 360,
name: "Thuul Troop",
display_name: "Thuul Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 105,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 371,
name: "Tidal Swarm Horde",
display_name: "Tidal Swarm Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 370,
name: "Tidal Swarm Regiment",
display_name: "Tidal Swarm Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 70,
limited_n: nil,
is_irregular: true,
army_id: 7
)
Unit.create!(
id: 511,
name: "Tortured Soul Horde",
display_name: "Tortured Soul Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 510,
name: "Tortured Soul Regiment",
display_name: "Tortured Soul Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: true,
army_id: 10
)
Unit.create!(
id: 185,
name: "Tree Herder (Elves)",
display_name: "Tree Herder",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 260,
limited_n: nil,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 300,
name: "Tree Herder (Forces of Nature)",
display_name: "Tree Herder",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 260,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 400,
name: "Trident King [1]",
display_name: "Trident King",
unit_type: "Hero (Chariot)",
unit_type_index: 18,
unit_size: "",
unit_strength: 1,
points: 230,
limited_n: 1,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 614,
name: "Troll Bruiser (Orcs)",
display_name: "Troll Bruiser",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 46,
name: "Troll Bruiser (Goblins)",
display_name: "Troll Bruiser",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 110,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 10,
name: "Troll Horde (Goblins)",
display_name: "Troll Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 593,
name: "Troll Horde (Orcs)",
display_name: "Troll Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 9,
name: "Troll Regiment (Goblins)",
display_name: "Troll Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 592,
name: "Troll Regiment (Orcs)",
display_name: "Troll Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 222,
name: "Tundra Wolf Regiment (Northern Alliance)",
display_name: "Tundra Wolf Regiment",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Regiment",
unit_strength: 3,
points: 180,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 221,
name: "Tundra Wolf Troop (Northern Alliance)",
display_name: "Tundra Wolf Troop",
unit_type: "Cavalry",
unit_type_index: 6,
unit_size: "Troop",
unit_strength: 1,
points: 115,
limited_n: nil,
is_irregular: true,
army_id: 4
)
Unit.create!(
id: 199,
name: "Tydarion Dragonlord [1]",
display_name: "Tydarion Dragonlord",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 345,
limited_n: 1,
is_irregular: false,
army_id: 3
)
Unit.create!(
id: 481,
name: "Undead Army Standard Bearer (Empire of Dust)",
display_name: "Undead Army Standard Bearer",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 676,
name: "Undead Army Standard Bearer (Undead)",
display_name: "Undead Army Standard Bearer",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 50,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 478,
name: "Undead Wyrm",
display_name: "Undead Wyrm",
unit_type: "Titan",
unit_type_index: 11,
unit_size: "",
unit_strength: 1,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 9
)
Unit.create!(
id: 302,
name: "Unicorn (Forces of Nature)",
display_name: "Unicorn",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 86,
name: "Ur-Elohi",
display_name: "Ur-Elohi",
unit_type: "Hero (Large Infantry)",
unit_type_index: 14,
unit_size: "",
unit_strength: 1,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 665,
name: "Vampire Lord",
display_name: "Vampire Lord",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 165,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 667,
name: "Vampire Lord on Undead Dragon",
display_name: "Vampire Lord on Undead Dragon",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 315,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 664,
name: "Vampire on Undead Pegasus",
display_name: "Vampire on Undead Pegasus",
unit_type: "Hero (Large Cavalry)",
unit_type_index: 17,
unit_size: "",
unit_strength: 1,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 564,
name: "Void Lurker",
display_name: "Void Lurker",
unit_type: "Hero (Titan)",
unit_type_index: 21,
unit_size: "",
unit_strength: 1,
points: 270,
limited_n: nil,
is_irregular: false,
army_id: 12
)
Unit.create!(
id: 179,
name: "War Chariot Horde",
display_name: "War Chariot Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 215,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 180,
name: "War Chariot Legion (Elves)",
display_name: "War Chariot Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 245,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 178,
name: "War Chariot Regiment (Elves)",
display_name: "War Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 170,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 177,
name: "War Chariot Troop (Elves)",
display_name: "War Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 135,
limited_n: nil,
is_irregular: true,
army_id: 3
)
Unit.create!(
id: 604,
name: "War Drum",
display_name: "War Drum",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 96,
name: "War Wizard (Basileans)",
display_name: "War Wizard",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 75,
limited_n: nil,
is_irregular: false,
army_id: 1
)
Unit.create!(
id: 326,
name: "Warrior Chariot Horde",
display_name: "Warrior Chariot Horde",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Horde",
unit_strength: 3,
points: 270,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 327,
name: "Warrior Chariot Legion",
display_name: "Warrior Chariot Legion",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Legion",
unit_strength: 4,
points: 310,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 325,
name: "Warrior Chariot Regiment",
display_name: "Warrior Chariot Regiment",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Regiment",
unit_strength: 2,
points: 215,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 324,
name: "Warrior Chariot Troop",
display_name: "Warrior Chariot Troop",
unit_type: "Chariot",
unit_type_index: 8,
unit_size: "Troop",
unit_strength: 1,
points: 170,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 331,
name: "Warrior Horde",
display_name: "Warrior Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 200,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 332,
name: "Warrior Legion",
display_name: "Warrior Legion",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Legion",
unit_strength: 4,
points: 350,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 330,
name: "Warrior Regiment",
display_name: "Warrior Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 5
)
Unit.create!(
id: 144,
name: "Warsmith (Dwarfs)",
display_name: "Warsmith",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 95,
limited_n: nil,
is_irregular: false,
army_id: 2
)
Unit.create!(
id: 26,
name: "War-Trombone",
display_name: "War-Trombone",
unit_type: "War Engine",
unit_type_index: 9,
unit_size: "",
unit_strength: 0,
points: 65,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 377,
name: "Water Elemental Horde (Trident Realm of Neritica)",
display_name: "Water Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 279,
name: "Water Elemental Horde (Forces of Nature)",
display_name: "Water Elemental Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 220,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 376,
name: "Water Elemental Regiment (Trident Realm of Neritica)",
display_name: "Water Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 7
)
Unit.create!(
id: 278,
name: "Water Elemental Regiment (Forces of Nature)",
display_name: "Water Elemental Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 130,
limited_n: nil,
is_irregular: false,
army_id: 6
)
Unit.create!(
id: 532,
name: "Well of Souls [1]",
display_name: "Well of Souls",
unit_type: "Hero (Monster)",
unit_type_index: 20,
unit_size: "",
unit_strength: 1,
points: 300,
limited_n: 1,
is_irregular: false,
army_id: 10
)
Unit.create!(
id: 655,
name: "Werewolf Horde",
display_name: "Werewolf Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 255,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 654,
name: "Werewolf Regiment",
display_name: "Werewolf Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 659,
name: "Wight Horde (Undead)",
display_name: "Wight Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 260,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 658,
name: "Wight Regiment (Undead)",
display_name: "Wight Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 155,
limited_n: nil,
is_irregular: true,
army_id: 14
)
Unit.create!(
id: 32,
name: "Winggit",
display_name: "Winggit",
unit_type: "Monster",
unit_type_index: 10,
unit_size: "",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 622,
name: "Wip the Outcast [1]",
display_name: "Wip the Outcast",
unit_type: "Hero (Cavalry)",
unit_type_index: 16,
unit_size: "",
unit_strength: 0,
points: 105,
limited_n: 1,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 44,
name: "Wiz",
display_name: "Wiz",
unit_type: "Hero (Infantry)",
unit_type_index: 12,
unit_size: "",
unit_strength: 0,
points: 45,
limited_n: nil,
is_irregular: false,
army_id: 11
)
Unit.create!(
id: 283,
name: "Woodland Critter Horde",
display_name: "Woodland Critter Horde",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Horde",
unit_strength: 1,
points: 130,
limited_n: nil,
is_irregular: true,
army_id: 6
)
Unit.create!(
id: 282,
name: "Woodland Critter Regiment",
display_name: "Woodland Critter Regiment",
unit_type: "Swarm",
unit_type_index: 5,
unit_size: "Regiment",
unit_strength: 1,
points: 80,
limited_n: nil,
is_irregular: true,
army_id: 6
)
Unit.create!(
id: 639,
name: "Wraith Regiment (Undead)",
display_name: "Wraith Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 3,
points: 185,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 638,
name: "Wraith Troop (Undead)",
display_name: "Wraith Troop",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Troop",
unit_strength: 1,
points: 120,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 577,
name: "Youngax Horde",
display_name: "Youngax Horde",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Horde",
unit_strength: 4,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 576,
name: "Youngax Regiment",
display_name: "Youngax Regiment",
unit_type: "Heavy Infantry",
unit_type_index: 2,
unit_size: "Regiment",
unit_strength: 3,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 13
)
Unit.create!(
id: 627,
name: "Zombie Horde",
display_name: "Zombie Horde",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Horde",
unit_strength: 3,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 628,
name: "Zombie Legion",
display_name: "Zombie Legion",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Legion",
unit_strength: 4,
points: 170,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 626,
name: "Zombie Regiment",
display_name: "Zombie Regiment",
unit_type: "Infantry",
unit_type_index: 1,
unit_size: "Regiment",
unit_strength: 2,
points: 70,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 657,
name: "Zombie Troll Horde",
display_name: "Zombie Troll Horde",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Horde",
unit_strength: 3,
points: 190,
limited_n: nil,
is_irregular: false,
army_id: 14
)
Unit.create!(
id: 656,
name: "Zombie Troll Regiment",
display_name: "Zombie Troll Regiment",
unit_type: "Large Infantry",
unit_type_index: 3,
unit_size: "Regiment",
unit_strength: 2,
points: 115,
limited_n: nil,
is_irregular: false,
army_id: 14
)










Artefact.create!(
id: 1,
name: "Aegis of the Elohi",
display_name: "Aegis of the Elohi",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 2,
name: "Blade of Slashing",
display_name: "Blade of Slashing",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 3,
name: "Blade of the Beast Slayer",
display_name: "Blade of the Beast Slayer",
points: 20,
is_heroic: true
)
Artefact.create!(
id: 4,
name: "Blessing of the Gods",
display_name: "Blessing of the Gods",
points: 20,
is_heroic: false
)
Artefact.create!(
id: 5,
name: "Blessing of the Gods (Horde)",
display_name: "Blessing of the Gods",
points: 30,
is_heroic: false
)
Artefact.create!(
id: 6,
name: "Blood of the Old King",
display_name: "Blood of the Old King",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 7,
name: "Boomstick",
display_name: "Boomstick",
points: 30,
is_heroic: true
)
Artefact.create!(
id: 8,
name: "Boots of Levitation",
display_name: "Boots of Levitation",
points: 30,
is_heroic: true
)
Artefact.create!(
id: 9,
name: "Boots of the Seven Leagues",
display_name: "Boots of the Seven Leagues",
points: 30,
is_heroic: true
)
Artefact.create!(
id: 10,
name: "Brew of Haste",
display_name: "Brew of Haste",
points: 20,
is_heroic: false
)
Artefact.create!(
id: 11,
name: "Brew of Sharpness",
display_name: "Brew of Sharpness",
points: 35,
is_heroic: false
)
Artefact.create!(
id: 12,
name: "Brew of Sharpness (Horde)",
display_name: "Brew of Sharpness",
points: 45,
is_heroic: false
)
Artefact.create!(
id: 13,
name: "Brew of Strength",
display_name: "Brew of Strength",
points: 30,
is_heroic: false
)
Artefact.create!(
id: 14,
name: "Brew of Strength (Horde)",
display_name: "Brew of Strength",
points: 40,
is_heroic: false
)
Artefact.create!(
id: 15,
name: "Chalice of Wrath",
display_name: "Chalice of Wrath",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 16,
name: "Chant of Hate",
display_name: "Chant of Hate",
points: 20,
is_heroic: false
)
Artefact.create!(
id: 17,
name: "Chant of Hate (Horde)",
display_name: "Chant of Hate",
points: 30,
is_heroic: false
)
Artefact.create!(
id: 18,
name: "Conjurer's Staff",
display_name: "Conjurer's Staff",
points: 10,
is_heroic: true
)
Artefact.create!(
id: 19,
name: "Crystal Pendant of Retribution",
display_name: "Crystal Pendant of Retribution",
points: 50,
is_heroic: false
)
Artefact.create!(
id: 20,
name: "Darklord's Onyx Ring",
display_name: "Darklord's Onyx Ring",
points: 10,
is_heroic: true
)
Artefact.create!(
id: 21,
name: "Diadem of Dragonkind",
display_name: "Diadem of Dragonkind",
points: 30,
is_heroic: false
)
Artefact.create!(
id: 22,
name: "Dragonshard Shield",
display_name: "Dragonshard Shield",
points: 20,
is_heroic: false
)
Artefact.create!(
id: 23,
name: "Dwarven Ale",
display_name: "Dwarven Ale",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 24,
name: "Fire-Oil",
display_name: "Fire-Oil",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 25,
name: "Hammer of Measured Force",
display_name: "Hammer of Measured Force",
points: 20,
is_heroic: false
)
Artefact.create!(
id: 26,
name: "Hann's Sanguinary Scripture",
display_name: "Hann's Sanguinary Scripture",
points: 10,
is_heroic: false
)
Artefact.create!(
id: 27,
name: "Healing Brew",
display_name: "Healing Brew",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 28,
name: "Helm of Confidence",
display_name: "Helm of Confidence",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 29,
name: "Inspiring Talisman",
display_name: "Inspiring Talisman",
points: 20,
is_heroic: true
)
Artefact.create!(
id: 30,
name: "Liliana's Tear",
display_name: "Liliana's Tear",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 31,
name: "Lute of Insatiable Darkness",
display_name: "Lute of Insatiable Darkness",
points: 25,
is_heroic: true
)
Artefact.create!(
id: 32,
name: "Maccwar's Potion of the Caterpillar",
display_name: "Maccwar's Potion of the Caterpillar",
points: 20,
is_heroic: false
)
Artefact.create!(
id: 33,
name: "Mace of Crushing",
display_name: "Mace of Crushing",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 34,
name: "Mead of Madness",
display_name: "Mead of Madness",
points: 10,
is_heroic: false
)
Artefact.create!(
id: 35,
name: "Mournful Blade",
display_name: "Mournful Blade",
points: 15,
is_heroic: true
)
Artefact.create!(
id: 36,
name: "Piercing Arrow",
display_name: "Piercing Arrow",
points: 10,
is_heroic: false
)
Artefact.create!(
id: 37,
name: "Pipes of Terror",
display_name: "Pipes of Terror",
points: 10,
is_heroic: false
)
Artefact.create!(
id: 38,
name: "Sacred Horn",
display_name: "Sacred Horn",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 39,
name: "Scrying Gem",
display_name: "Scrying Gem",
points: 25,
is_heroic: false
)
Artefact.create!(
id: 40,
name: "Shroud of the Saint",
display_name: "Shroud of the Saint",
points: 30,
is_heroic: true
)
Artefact.create!(
id: 41,
name: "Sir Jesse's Boots of Striding",
display_name: "Sir Jesse's Boots of Striding",
points: 15,
is_heroic: false
)
Artefact.create!(
id: 42,
name: "Staying Stone",
display_name: "Staying Stone",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 43,
name: "Tome of Darkness",
display_name: "Tome of Darkness",
points: 20,
is_heroic: true
)
Artefact.create!(
id: 44,
name: "Trickster's Wand",
display_name: "Trickster's Wand",
points: 15,
is_heroic: true
)
Artefact.create!(
id: 45,
name: "War-Bow of Kaba",
display_name: "War-Bow of Kaba",
points: 5,
is_heroic: false
)
Artefact.create!(
id: 46,
name: "Wine of Elvenkind",
display_name: "Wine of Elvenkind",
points: 40,
is_heroic: false
)
Artefact.create!(
id: 47,
name: "Wings of Honeymaze",
display_name: "Wings of Honeymaze",
points: 40,
is_heroic: true
)
Artefact.create!(
id: 48,
name: "Zephyr Crown",
display_name: "Zephyr Crown",
points: 25,
is_heroic: true
)












UnitOption.create!(
id: 178,
name: "7 Attacks (Beast of Nature)",
display_name: "7 Attacks",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 288
)
UnitOption.create!(
id: 486,
name: "Abyssal Mount (Abyssal Harbringer)",
display_name: "Abyssal Mount",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 522
)
UnitOption.create!(
id: 59,
name: "Aegis Fragment (High Paladin on Dragon)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 99
)
UnitOption.create!(
id: 60,
name: "Aegis Fragment (High Paladin on Foot)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 91
)
UnitOption.create!(
id: 62,
name: "Aegis Fragment (Paladin Chaplain on Foot)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 87
)
UnitOption.create!(
id: 64,
name: "Aegis Fragment (Paladin Foot Guard Regiment)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 57
)
UnitOption.create!(
id: 65,
name: "Aegis Fragment (Paladin Foot Guard Troop)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 56
)
UnitOption.create!(
id: 66,
name: "Aegis Fragment (Paladin Knight Horde)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 74
)
UnitOption.create!(
id: 67,
name: "Aegis Fragment (Paladin Knight Regiment)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 73
)
UnitOption.create!(
id: 68,
name: "Aegis Fragment (Paladin Knight Troop)",
display_name: "Aegis Fragment",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 72
)
UnitOption.create!(
id: 365,
name: "Aura (Vicious (Melee) - Infantry Only) (Horror)",
display_name: "Aura (Vicious (Melee) - Infantry Only)",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 566
)
UnitOption.create!(
id: 442,
name: "Aura (Vicious (Melee) - Zombie only) (Necromancer on Foot)",
display_name: "Aura (Vicious (Melee) - Zombie only)",
points: 20,
is_spell: false,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 351,
name: "Bane Chant (2) (Abyssal Warlock)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 527
)
UnitOption.create!(
id: 391,
name: "Bane Chant (2) (Cumulative) (Godspeaker on Foot)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 615
)
UnitOption.create!(
id: 366,
name: "Bane Chant (2) (Cumulative) (Horror)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 566
)
UnitOption.create!(
id: 181,
name: "Bane Chant (2) (Druid on Foot)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 294
)
UnitOption.create!(
id: 69,
name: "Bane Chant (2) (Elven Archmage on Foot)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 71,
name: "Bane Chant (2) (Flame Priest)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 147
)
UnitOption.create!(
id: 72,
name: "Bane Chant (2) (Ice-Queen)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 235
)
UnitOption.create!(
id: 276,
name: "Bane Chant (2) (Iron-caster)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 435
)
UnitOption.create!(
id: 445,
name: "Bane Chant (2) (Necromancer on Foot)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 73,
name: "Bane Chant (2) (Priest on Foot)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 89
)
UnitOption.create!(
id: 344,
name: "Bane Chant (2) (Seductress)",
display_name: "Bane Chant (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 526
)
UnitOption.create!(
id: 75,
name: "Bane Chant (2) (Stone Priest)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 143
)
UnitOption.create!(
id: 246,
name: "Bane Chant (2) (Thuul Mythican)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 394
)
UnitOption.create!(
id: 76,
name: "Bane Chant (2) (War Wizard on Foot (Basileans))",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 96
)
UnitOption.create!(
id: 79,
name: "Bane Chant (2) (Wiz on Foot)",
display_name: "Bane Chant (2)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 44
)
UnitOption.create!(
id: 392,
name: "Bane Chant (2) to replace Fireball (Godspeaker on Foot)",
display_name: "Bane Chant (2) to replace Fireball",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 615
)
UnitOption.create!(
id: 367,
name: "Bane Chant (2) to replace Lightning Bolt (Horror)",
display_name: "Bane Chant (2) to replace Lightning Bolt",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 566
)
UnitOption.create!(
id: 435,
name: "Bane Chant (3) (Liche King)",
display_name: "Bane Chant (3)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 672
)
UnitOption.create!(
id: 250,
name: "Bastion (2) [1] (Naiad Envoy (Trident Realm of Neritica))",
display_name: "Bastion (2)",
points: 20,
is_spell: true,
is_unique: true,
unit_id: 395
)
UnitOption.create!(
id: 362,
name: "Bastion (2) [1] (Planar Apparition)",
display_name: "Bastion (2)",
points: 20,
is_spell: true,
is_unique: true,
unit_id: 555
)
UnitOption.create!(
id: 203,
name: "Bastion (2) [1] (Unicorn (Forces of Nature))",
display_name: "Bastion (2)",
points: 20,
is_spell: true,
is_unique: true,
unit_id: 302
)
UnitOption.create!(
id: 80,
name: "Bastion [1] (Priest on Foot)",
display_name: "Bastion",
points: 10,
is_spell: true,
is_unique: true,
unit_id: 89
)
UnitOption.create!(
id: 193,
name: "Blizzard (2) [1] (Gladewalker Druid on Foot)",
display_name: "Blizzard (2)",
points: 20,
is_spell: true,
is_unique: true,
unit_id: 296
)
UnitOption.create!(
id: 82,
name: "Blizzard (2) [1] (Ice-Queen)",
display_name: "Blizzard (2)",
points: 30,
is_spell: true,
is_unique: true,
unit_id: 235
)
UnitOption.create!(
id: 441,
name: "Blizzard (3) [1] (Liche King)",
display_name: "Blizzard (3)",
points: 40,
is_spell: true,
is_unique: true,
unit_id: 672
)
UnitOption.create!(
id: 349,
name: "Bloodboil [1] (Abyssal Warlock)",
display_name: "Bloodboil",
points: 30,
is_spell: true,
is_unique: true,
unit_id: 527
)
UnitOption.create!(
id: 389,
name: "Bloodboil [1] (Godspeaker on Foot)",
display_name: "Bloodboil",
points: 30,
is_spell: true,
is_unique: true,
unit_id: 615
)
UnitOption.create!(
id: 226,
name: "Bloodboil [1] (Ogre Warlock)",
display_name: "Bloodboil",
points: 30,
is_spell: true,
is_unique: true,
unit_id: 343
)
UnitOption.create!(
id: 300,
name: "Casket of the Damned (Enslaved Guardian Archer Horde)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 474
)
UnitOption.create!(
id: 299,
name: "Casket of the Damned (Enslaved Guardian Archer Regiment)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 473
)
UnitOption.create!(
id: 298,
name: "Casket of the Damned (Enslaved Guardian Horde)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 472
)
UnitOption.create!(
id: 297,
name: "Casket of the Damned (Enslaved Guardian Regiment)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 471
)
UnitOption.create!(
id: 294,
name: "Casket of the Damned (Mummy Regiment)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 453
)
UnitOption.create!(
id: 293,
name: "Casket of the Damned (Mummy Troop)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 452
)
UnitOption.create!(
id: 292,
name: "Casket of the Damned (Revenant Horde)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 451
)
UnitOption.create!(
id: 291,
name: "Casket of the Damned (Revenant Regiment)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 450
)
UnitOption.create!(
id: 290,
name: "Casket of the Damned (Revenant Troop)",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 449
)
UnitOption.create!(
id: 289,
name: "Casket of the Damned (Skeleton Spearman Horde (Empire of Dust))",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 448
)
UnitOption.create!(
id: 288,
name: "Casket of the Damned (Skeleton Spearman Regiment (Empire of Dust))",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 447
)
UnitOption.create!(
id: 287,
name: "Casket of the Damned (Skeleton Spearman Troop (Empire of Dust))",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 446
)
UnitOption.create!(
id: 286,
name: "Casket of the Damned (Skeleton Warrior Horde (Empire of Dust))",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 445
)
UnitOption.create!(
id: 285,
name: "Casket of the Damned (Skeleton Warrior Regiment (Empire of Dust))",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 444
)
UnitOption.create!(
id: 284,
name: "Casket of the Damned (Skeleton Warrior Troop (Empire of Dust))",
display_name: "Casket of the Damned",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 443
)
UnitOption.create!(
id: 484,
name: "Chariot (Army Standard (Ogres))",
display_name: "Chariot",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 347
)
UnitOption.create!(
id: 474,
name: "Chariot (Ogre Warlord)",
display_name: "Chariot",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 350
)
UnitOption.create!(
id: 473,
name: "Chariot (Sergeant (Ogres))",
display_name: "Chariot",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 344
)
UnitOption.create!(
id: 271,
name: "Charnox (Lesser Obsidian Golem Horde)",
display_name: "Charnox",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 421
)
UnitOption.create!(
id: 270,
name: "Charnox (Lesser Obsidian Golem Regiment)",
display_name: "Charnox",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 420
)
UnitOption.create!(
id: 219,
name: "Crocodog (Hunter Horde)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 334
)
UnitOption.create!(
id: 218,
name: "Crocodog (Hunter Regiment)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 333
)
UnitOption.create!(
id: 230,
name: "Crocodog (Ogre Warlord on Foot)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 350
)
UnitOption.create!(
id: 220,
name: "Crocodog (Sergeant on Foot)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 344
)
UnitOption.create!(
id: 216,
name: "Crocodog (Warrior Horde)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 331
)
UnitOption.create!(
id: 217,
name: "Crocodog (Warrior Legion)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 332
)
UnitOption.create!(
id: 215,
name: "Crocodog (Warrior Regiment)",
display_name: "Crocodog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 330
)
UnitOption.create!(
id: 337,
name: "Despoiler Champion (Moloch Horde)",
display_name: "Despoiler Champion",
points: 20,
is_spell: false,
is_unique: false,
unit_id: 509
)
UnitOption.create!(
id: 336,
name: "Despoiler Champion (Moloch Regiment)",
display_name: "Despoiler Champion",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 508
)
UnitOption.create!(
id: 393,
name: "Drain Life (4) (Godspeaker on Foot)",
display_name: "Drain Life (4)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 615
)
UnitOption.create!(
id: 422,
name: "Drain Life (4) (Vampire Lord on Foot)",
display_name: "Drain Life (4)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 665
)
UnitOption.create!(
id: 419,
name: "Drain Life (4) (Vampire on Undead Pegasus)",
display_name: "Drain Life (4)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 664
)
UnitOption.create!(
id: 446,
name: "Drain Life (5) (Necromancer on Foot)",
display_name: "Drain Life (5)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 227,
name: "Drain Life (5) (Ogre Warlock)",
display_name: "Drain Life (5)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 343
)
UnitOption.create!(
id: 350,
name: "Drain Life (6) (Abyssal Warlock)",
display_name: "Drain Life (6)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 527
)
UnitOption.create!(
id: 301,
name: "Drain Life (6) (Reanimated Behemoth)",
display_name: "Drain Life (6)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 476
)
UnitOption.create!(
id: 254,
name: "Drain Life (6) (Siren)",
display_name: "Drain Life (6)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 397
)
UnitOption.create!(
id: 308,
name: "Drain Life (7) (Cursed High Priest on Foot)",
display_name: "Drain Life (7)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 436,
name: "Drain Life (7) (Liche King)",
display_name: "Drain Life (7)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 672
)
UnitOption.create!(
id: 340,
name: "Drain Life (8) (Chroneas)",
display_name: "Drain Life (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 518
)
UnitOption.create!(
id: 385,
name: "Dread (War Drum)",
display_name: "Dread",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 604
)
UnitOption.create!(
id: 346,
name: "Enthral (6) (Seductress)",
display_name: "Enthral (6)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 526
)
UnitOption.create!(
id: 304,
name: "Eternal Guard [1]",
display_name: "Eternal Guard",
points: 20,
is_spell: false,
is_unique: true,
unit_id: 486
)
UnitOption.create!(
id: 83,
name: "Fireball (10) (Flame Priest)",
display_name: "Fireball (10)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 147
)
UnitOption.create!(
id: 309,
name: "Fireball (12) (Cursed High Priest on Foot)",
display_name: "Fireball (12)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 208,
name: "Fireball (6) (Keris[1])",
display_name: "Fireball (6)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 307
)
UnitOption.create!(
id: 189,
name: "Fireball (8) (Gladewalker Druid on Foot)",
display_name: "Fireball (8)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 296
)
UnitOption.create!(
id: 228,
name: "Fireball (8) (Ogre Warlock)",
display_name: "Fireball (8)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 343
)
UnitOption.create!(
id: 470,
name: "Fleabag (Biggit)",
display_name: "Fleabag",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 35
)
UnitOption.create!(
id: 471,
name: "Fleabag (Flaggit)",
display_name: "Fleabag",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 40
)
UnitOption.create!(
id: 468,
name: "Fleabag (King (Goblins))",
display_name: "Fleabag",
points: 35,
is_spell: false,
is_unique: false,
unit_id: 37
)
UnitOption.create!(
id: 479,
name: "Fleabag (Red Goblin Biggit)",
display_name: "Fleabag",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 352
)
UnitOption.create!(
id: 467,
name: "Fleabag (Wiz)",
display_name: "Fleabag",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 44
)
UnitOption.create!(
id: 461,
name: "Forest Steed (Druid (Forces of Nature))",
display_name: "Forest Steed",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 294
)
UnitOption.create!(
id: 472,
name: "Forest Steed (Gladewalker Druid (Forces of Nature))",
display_name: "Forest Steed",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 296
)
UnitOption.create!(
id: 175,
name: "Frenzied Otter (Centaur Bray Hunter Regiment (Forces of Nature))",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 271
)
UnitOption.create!(
id: 174,
name: "Frenzied Otter (Centaur Bray Hunter Troop (Forces of Nature))",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 270
)
UnitOption.create!(
id: 173,
name: "Frenzied Otter (Centaur Bray Strider Regiment (Forces of Nature))",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 269
)
UnitOption.create!(
id: 172,
name: "Frenzied Otter (Centaur Bray Strider Troop (Forces of Nature))",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 268
)
UnitOption.create!(
id: 195,
name: "Frenzied Otter (Centaur Chief (Forces of Nature))",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 298
)
UnitOption.create!(
id: 166,
name: "Frenzied Otter (Naiad Ensnarer Horde)",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 260
)
UnitOption.create!(
id: 165,
name: "Frenzied Otter (Naiad Ensnarer Regiment)",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 259
)
UnitOption.create!(
id: 164,
name: "Frenzied Otter (Naiad Ensnarer Troop)",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 258
)
UnitOption.create!(
id: 171,
name: "Frenzied Otter (Naiad Heartpiercer Regiment)",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 265
)
UnitOption.create!(
id: 170,
name: "Frenzied Otter (Naiad Heartpiercer Troop)",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 264
)
UnitOption.create!(
id: 198,
name: "Frenzied Otter (Naiad Stalker (Forces of Nature))",
display_name: "Frenzied Otter",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 304
)
UnitOption.create!(
id: 387,
name: "Gakamak's Bloody Banner [1]",
display_name: "Gakamak's Bloody Banner",
points: 10,
is_spell: false,
is_unique: true,
unit_id: 606
)
UnitOption.create!(
id: 84,
name: "Goblin Spotter",
display_name: "Goblin Spotter",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 32
)
UnitOption.create!(
id: 343,
name: "Golloch's Fury",
display_name: "Golloch's Fury",
points: 50,
is_spell: false,
is_unique: true,
unit_id: 137
)
UnitOption.create!(
id: 469,
name: "Gore (Flagger)",
display_name: "Gore",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 610
)
UnitOption.create!(
id: 458,
name: "Gore (Godspeaker)",
display_name: "Gore",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 615
)
UnitOption.create!(
id: 459,
name: "Gore (Krudger)",
display_name: "Gore",
points: 35,
is_spell: false,
is_unique: false,
unit_id: 606
)
UnitOption.create!(
id: 460,
name: "Gore (Krusher)",
display_name: "Gore",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 612
)
UnitOption.create!(
id: 477,
name: "Gore (Skulk Stalker)",
display_name: "Gore",
points: 20,
is_spell: false,
is_unique: false,
unit_id: 618
)
UnitOption.create!(
id: 197,
name: "Guiding Flame [1] (Salamander Veteran (Forces of Nature))",
display_name: "Guiding Flame",
points: 20,
is_spell: false,
is_unique: true,
unit_id: 299
)
UnitOption.create!(
id: 487,
name: "Gur Panther (Abbess)",
display_name: "Gur Panther",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 94
)
UnitOption.create!(
id: 394,
name: "Heal (2) (Godspeaker on Foot)",
display_name: "Heal (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 615
)
UnitOption.create!(
id: 85,
name: "Heal (2) (High Paladin on Foot)",
display_name: "Heal (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 91
)
UnitOption.create!(
id: 87,
name: "Heal (2) (Paladin Chaplain on Foot)",
display_name: "Heal (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 87
)
UnitOption.create!(
id: 443,
name: "Heal (3) (Cumulative) (Necromancer on Foot)",
display_name: "Heal (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 256,
name: "Heal (3) (Siren)",
display_name: "Heal (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 397
)
UnitOption.create!(
id: 444,
name: "Heal (3) to replace Surge (Necromancer on Foot)",
display_name: "Heal (3) to replace Surge",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 281,
name: "Heal (4 - Hellforged only) (Supreme Iron-caster on Great Winged Halfbreed)",
display_name: "Heal (4 - Hellforged only)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 440
)
UnitOption.create!(
id: 89,
name: "Heal (4) (Elven Archmage on Foot)",
display_name: "Heal (4)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 488,
name: "Heal (4) (Gnaeus Sallustis)",
display_name: "Heal (4)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 100
)
UnitOption.create!(
id: 91,
name: "Heal (4) (High Paladin on Dragon)",
display_name: "Heal (4)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 99
)
UnitOption.create!(
id: 209,
name: "Heal (4) (Keris [1])",
display_name: "Heal (4)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 307
)
UnitOption.create!(
id: 428,
name: "Heal (4) (Vampire Lord on Undead Dragon)",
display_name: "Heal (4)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 667
)
UnitOption.create!(
id: 310,
name: "Heal (5) (Cursed High Priest on Foot)",
display_name: "Heal (5)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 92,
name: "Heal (5) (Ice-Queen)",
display_name: "Heal (5)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 235
)
UnitOption.create!(
id: 437,
name: "Heal (6) (Cumulative) (Liche King)",
display_name: "Heal (6)",
points: 40,
is_spell: true,
is_unique: false,
unit_id: 672
)
UnitOption.create!(
id: 438,
name: "Heal (6) to replace Surge (Liche King)",
display_name: "Heal (6) to replace Surge",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 672
)
UnitOption.create!(
id: 222,
name: "Heavy Crossbow (Sergeant on Foot)",
display_name: "Heavy Crossbow",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 344
)
UnitOption.create!(
id: 353,
name: "Hellforged Overmaster [1]",
display_name: "Hellforged Overmaster",
points: 25,
is_spell: false,
is_unique: true,
unit_id: 429
)
UnitOption.create!(
id: 395,
name: "Hex (2) (Godspeaker on Foot)",
display_name: "Hex (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 615
)
UnitOption.create!(
id: 255,
name: "Hex (2) (Siren)",
display_name: "Hex (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 397
)
UnitOption.create!(
id: 94,
name: "Hex (2) (Wiz on Foot)",
display_name: "Hex (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 44
)
UnitOption.create!(
id: 311,
name: "Hex (3) (Cursed High Priest on Foot)",
display_name: "Hex (3)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 95,
name: "Hex (3) (Elven Archmage on Foot)",
display_name: "Hex (3)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 190,
name: "Hex (3) (Gladewalker Druid on Foot)",
display_name: "Hex (3)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 296
)
UnitOption.create!(
id: 97,
name: "Horn of Heroes [1]",
display_name: "Horn of Heroes",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 139
)
UnitOption.create!(
id: 251,
name: "Horn of Ocean's Fury [1]",
display_name: "Horn of Ocean's Fury",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 395
)
UnitOption.create!(
id: 98,
name: "Horn of Winter [1]",
display_name: "Horn of Winter",
points: 10,
is_spell: false,
is_unique: true,
unit_id: 230
)
UnitOption.create!(
id: 483,
name: "Horse (Army Standard Bearer (Elves))",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 194
)
UnitOption.create!(
id: 482,
name: "Horse (Bearer of the Holy Icon)",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 83
)
UnitOption.create!(
id: 462,
name: "Horse (Elven Archmage)",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 464,
name: "Horse (Elven King)",
display_name: "Horse",
points: 35,
is_spell: false,
is_unique: false,
unit_id: 186
)
UnitOption.create!(
id: 463,
name: "Horse (Elven Prince)",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 189
)
UnitOption.create!(
id: 455,
name: "Horse (High Paladin)",
display_name: "Horse",
points: 35,
is_spell: false,
is_unique: false,
unit_id: 91
)
UnitOption.create!(
id: 456,
name: "Horse (Paladin Chaplain)",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 87
)
UnitOption.create!(
id: 465,
name: "Horse (Priest (Basileans))",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 89
)
UnitOption.create!(
id: 466,
name: "Horse (War Wizard (Basileans))",
display_name: "Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 96
)
UnitOption.create!(
id: 439,
name: "Icy Breath (10) (Liche King)",
display_name: "Icy Breath (10)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 672
)
UnitOption.create!(
id: 363,
name: "Icy Breath (8) (Planar Apparition)",
display_name: "Icy Breath (8)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 555
)
UnitOption.create!(
id: 272,
name: "Infernal Advance [1]",
display_name: "Infernal Advance",
points: 20,
is_spell: false,
is_unique: true,
unit_id: 433
)
UnitOption.create!(
id: 99,
name: "Jareth's Pendant [1]",
display_name: "Jareth's Pendant",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 37
)
UnitOption.create!(
id: 100,
name: "Javelins (Pack Hunter Regiment)",
display_name: "Javelins",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 213
)
UnitOption.create!(
id: 101,
name: "Javelins (Pack Hunter Troop)",
display_name: "Javelins",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 212
)
UnitOption.create!(
id: 182,
name: "Lightning Bolt (2) (Druid on Foot)",
display_name: "Lightning Bolt (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 294
)
UnitOption.create!(
id: 210,
name: "Lightning Bolt (2) (Keris[1])",
display_name: "Lightning Bolt (2)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 307
)
UnitOption.create!(
id: 180,
name: "Lightning Bolt (3) (Greater Air Elemental (Forces of Nature))",
display_name: "Lightning Bolt (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 289
)
UnitOption.create!(
id: 277,
name: "Lightning Bolt (3) (Iron-caster)",
display_name: "Lightning Bolt (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 435
)
UnitOption.create!(
id: 247,
name: "Lightning Bolt (3) (Thuul Mythican)",
display_name: "Lightning Bolt (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 394
)
UnitOption.create!(
id: 423,
name: "Lightning Bolt (3) (Vampire Lord on Foot)",
display_name: "Lightning Bolt (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 665
)
UnitOption.create!(
id: 420,
name: "Lightning Bolt (3) (Vampire on Undead Pegasus)",
display_name: "Lightning Bolt (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 664
)
UnitOption.create!(
id: 102,
name: "Lightning Bolt (4) (Cumulative) (War Wizard on Foot (Basileans))",
display_name: "Lightning Bolt (4)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 96
)
UnitOption.create!(
id: 429,
name: "Lightning Bolt (4) (Vampire Lord on Undead Dragon)",
display_name: "Lightning Bolt (4)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 667
)
UnitOption.create!(
id: 104,
name: "Lightning Bolt (4) to replace Fireball (War Wizard on Foot (Basileans))",
display_name: "Lightning Bolt (4) to replace Fireball",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 96
)
UnitOption.create!(
id: 200,
name: "Lightning Bolt (5) (Cumulative) (Unicorn (Forces of Nature))",
display_name: "Lightning Bolt (5)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 302
)
UnitOption.create!(
id: 106,
name: "Lightning Bolt (5) (Elven Archmage on Foot)",
display_name: "Lightning Bolt (5)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 440,
name: "Lightning Bolt (5) (Liche King)",
display_name: "Lightning Bolt (5)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 672
)
UnitOption.create!(
id: 282,
name: "Lightning Bolt (5) (Supreme Iron-caster on Great Winged Halfbreed)",
display_name: "Lightning Bolt (5)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 440
)
UnitOption.create!(
id: 345,
name: "Lightning Bolt (5) Abyssal Champion",
display_name: "Lightning Bolt (5)",
points: 35,
is_spell: true,
is_unique: false,
unit_id: 520
)
UnitOption.create!(
id: 201,
name: "Lightning Bolt (5) to replace Heal (Unicorn (Forces of Nature))",
display_name: "Lightning Bolt (5) to replace Heal",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 302
)
UnitOption.create!(
id: 333,
name: "Lurker (Succubus Regiment)",
display_name: "Lurker",
points: 20,
is_spell: false,
is_unique: false,
unit_id: 499
)
UnitOption.create!(
id: 332,
name: "Lurker (Succubus Troop)",
display_name: "Lurker",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 498
)
UnitOption.create!(
id: 354,
name: "Magwa'ns [1]",
display_name: "Magwa'ns",
points: 10,
is_spell: false,
is_unique: true,
unit_id: 16
)
UnitOption.create!(
id: 107,
name: "Martyr's Prayer (7) [1] (Priest on Foot)",
display_name: "Martyr's Prayer (7)",
points: 35,
is_spell: true,
is_unique: true,
unit_id: 89
)
UnitOption.create!(
id: 109,
name: "Mawpup (Fleabag Rider Horde)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 19
)
UnitOption.create!(
id: 110,
name: "Mawpup (Fleabag Rider Regiment)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 18
)
UnitOption.create!(
id: 111,
name: "Mawpup (Fleabag Rider Troop)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 17
)
UnitOption.create!(
id: 112,
name: "Mawpup (Luggit Gang Regiment)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 8
)
UnitOption.create!(
id: 113,
name: "Mawpup (Luggit Gang Troop)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 7
)
UnitOption.create!(
id: 114,
name: "Mawpup (Rabble Horde)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 5
)
UnitOption.create!(
id: 115,
name: "Mawpup (Rabble Legion)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 6
)
UnitOption.create!(
id: 116,
name: "Mawpup (Rabble Regiment)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 4
)
UnitOption.create!(
id: 117,
name: "Mawpup (Sharpstick Horde)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 2
)
UnitOption.create!(
id: 118,
name: "Mawpup (Sharpstick Legion)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 3
)
UnitOption.create!(
id: 119,
name: "Mawpup (Sharpstick Regiment)",
display_name: "Mawpup",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 1
)
UnitOption.create!(
id: 229,
name: "Mind Fog (1) (Ogre Warlock)",
display_name: "Mind Fog (1)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 343
)
UnitOption.create!(
id: 257,
name: "Mind Fog (1) (Siren)",
display_name: "Mind Fog (1)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 397
)
UnitOption.create!(
id: 120,
name: "Mind Fog (2) (Elven Archmage on Foot)",
display_name: "Mind Fog (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 368,
name: "Mind Fog (2) (Horror)",
display_name: "Mind Fog (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 566
)
UnitOption.create!(
id: 278,
name: "Mind Fog (2) (Iron-caster)",
display_name: "Mind Fog (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 435
)
UnitOption.create!(
id: 268,
name: "Mobile Katsuchan (Decimator Horde)",
display_name: "Mobile Katsuchan",
points: 20,
is_spell: false,
is_unique: false,
unit_id: 415
)
UnitOption.create!(
id: 267,
name: "Mobile Katsuchan (Decimator Regiment)",
display_name: "Mobile Katsuchan",
points: 20,
is_spell: false,
is_unique: false,
unit_id: 414
)
UnitOption.create!(
id: 176,
name: "Noxious Mist (Beast of Nature)",
display_name: "Noxious Mist",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 288
)
UnitOption.create!(
id: 378,
name: "Orcish Skullpole (Ax Horde)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 580
)
UnitOption.create!(
id: 379,
name: "Orcish Skullpole (Ax Legion)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 581
)
UnitOption.create!(
id: 377,
name: "Orcish Skullpole (Ax Regiment)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 579
)
UnitOption.create!(
id: 376,
name: "Orcish Skullpole (Ax Troop)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 578
)
UnitOption.create!(
id: 382,
name: "Orcish Skullpole (Greatax Horde)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 584
)
UnitOption.create!(
id: 381,
name: "Orcish Skullpole (Greatax Regiment)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 583
)
UnitOption.create!(
id: 380,
name: "Orcish Skullpole (Greatax Troop)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 582
)
UnitOption.create!(
id: 386,
name: "Orcish Skullpole (Krudger on Foot)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 606
)
UnitOption.create!(
id: 375,
name: "Orcish Skullpole (Longax Horde)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 575
)
UnitOption.create!(
id: 374,
name: "Orcish Skullpole (Longax Regiment)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 574
)
UnitOption.create!(
id: 373,
name: "Orcish Skullpole (Longax Troop)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 573
)
UnitOption.create!(
id: 372,
name: "Orcish Skullpole (Morax Regiment)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 572
)
UnitOption.create!(
id: 371,
name: "Orcish Skullpole (Morax Troop)",
display_name: "Orcish Skullpole",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 571
)
UnitOption.create!(
id: 352,
name: "Paladin Defenders [1]",
display_name: "Paladin Defenders",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 57
)
UnitOption.create!(
id: 305,
name: "Plagued Breath (Revenant King on Undead Great Flying Wyrm)",
display_name: "Plagued Breath",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 489
)
UnitOption.create!(
id: 433,
name: "Plagued Breath (Revenant on Undead Great Burrowing Wyrm (Undead))",
display_name: "Plagued Breath",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 670
)
UnitOption.create!(
id: 307,
name: "Plagued Breath (Revenant on Undead Great Burrowing Wyrm)",
display_name: "Plagued Breath",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 490
)
UnitOption.create!(
id: 241,
name: "Poison Frog (Riverguard Dambuster Horde)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 383
)
UnitOption.create!(
id: 240,
name: "Poison Frog (Riverguard Dambuster Regiment)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 382
)
UnitOption.create!(
id: 253,
name: "Poison Frog (Riverguard Dambuster Sentinel)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 398
)
UnitOption.create!(
id: 239,
name: "Poison Frog (Riverguard Regiment)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 369
)
UnitOption.create!(
id: 252,
name: "Poison Frog (Riverguard Sentinel)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 396
)
UnitOption.create!(
id: 237,
name: "Poison Frog (Riverguard Treeleaper Regiment)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 363
)
UnitOption.create!(
id: 236,
name: "Poison Frog (Riverguard Treeleaper Troop)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 362
)
UnitOption.create!(
id: 238,
name: "Poison Frog (Riverguard Troop)",
display_name: "Poison Frog",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 368
)
UnitOption.create!(
id: 401,
name: "Raid Leader [1] (Skulk Stalker on Foot)",
display_name: "Raid Leader",
points: 10,
is_spell: false,
is_unique: true,
unit_id: 618
)
UnitOption.create!(
id: 275,
name: "Rally (1 - Slave only) (Taskmaster on Chariot)",
display_name: "Rally (1 - Slave only)",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 436
)
UnitOption.create!(
id: 245,
name: "Rising Tides [1] (Thuul Aquamage)",
display_name: "Rising Tides",
points: 15,
is_spell: true,
is_unique: true,
unit_id: 393
)
UnitOption.create!(
id: 122,
name: "Saber-Toothed Hunting Cat (Elven King on Foot)",
display_name: "Saber-Toothed Hunting Cat",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 186
)
UnitOption.create!(
id: 124,
name: "Saber-Toothed Hunting Cat (Elven Prince on Foot)",
display_name: "Saber-Toothed Hunting Cat",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 189
)
UnitOption.create!(
id: 331,
name: "Sacrificial Imp (Abyssal Guard Regiment)",
display_name: "Sacrificial Imp",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 497
)
UnitOption.create!(
id: 329,
name: "Sacrificial Imp (Abyssal Guard Troop)",
display_name: "Sacrificial Imp",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 496
)
UnitOption.create!(
id: 335,
name: "Sacrificial Imp (Flamebearer Regiment)",
display_name: "Sacrificial Imp",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 507
)
UnitOption.create!(
id: 334,
name: "Sacrificial Imp (Flamebearer Troop)",
display_name: "Sacrificial Imp",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 506
)
UnitOption.create!(
id: 326,
name: "Sacrificial Imp (Lower Abyssal Horde)",
display_name: "Sacrificial Imp",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 495
)
UnitOption.create!(
id: 325,
name: "Sacrificial Imp (Lower Abyssal Regiment)",
display_name: "Sacrificial Imp",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 494
)
UnitOption.create!(
id: 324,
name: "Sacrificial Imp (Lower Abyssal Troop)",
display_name: "Sacrificial Imp",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 493
)
UnitOption.create!(
id: 339,
name: "Sacrificial Imp (Moloch Horde)",
display_name: "Sacrificial Imp",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 509
)
UnitOption.create!(
id: 338,
name: "Sacrificial Imp (Moloch Regiment)",
display_name: "Sacrificial Imp",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 508
)
UnitOption.create!(
id: 302,
name: "Scarab Jars",
display_name: "Scarab Jars",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 479
)
UnitOption.create!(
id: 361,
name: "Screamshard (Phantom Regiment)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 544
)
UnitOption.create!(
id: 360,
name: "Screamshard (Phantom Troop)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 543
)
UnitOption.create!(
id: 359,
name: "Screamshard (Reaper Regiment)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 542
)
UnitOption.create!(
id: 370,
name: "Screamshard (Reaper Souldrinker)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 568
)
UnitOption.create!(
id: 358,
name: "Screamshard (Reaper Troop)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 541
)
UnitOption.create!(
id: 356,
name: "Screamshard (Scarecrow Horde)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 535
)
UnitOption.create!(
id: 357,
name: "Screamshard (Scarecrow Legion)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 536
)
UnitOption.create!(
id: 355,
name: "Screamshard (Scarecrow Regiment)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 534
)
UnitOption.create!(
id: 364,
name: "Screamshard (Shade)",
display_name: "Screamshard",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 565
)
UnitOption.create!(
id: 125,
name: "Shardblade [1]",
display_name: "Shardblade",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 186
)
UnitOption.create!(
id: 196,
name: "Shortbow (Centaur Chief (Forces of Nature))",
display_name: "Shortbow",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 298
)
UnitOption.create!(
id: 234,
name: "Shortbow (Red Goblin Biggit on Foot)",
display_name: "Shortbow",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 352
)
UnitOption.create!(
id: 126,
name: "Snow Fox (Ice Blade)",
display_name: "Snow Fox",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 237
)
UnitOption.create!(
id: 127,
name: "Snow Fox (Lord (Northern Alliance))",
display_name: "Snow Fox",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 230
)
UnitOption.create!(
id: 128,
name: "Snow Fox (Lord on Frostfang)",
display_name: "Snow Fox",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 234
)
UnitOption.create!(
id: 129,
name: "Snow Fox (Thegn on Frostfang)",
display_name: "Snow Fox",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 232
)
UnitOption.create!(
id: 130,
name: "Snow Fox (Thegn)",
display_name: "Snow Fox",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 233
)
UnitOption.create!(
id: 183,
name: "Surge (4) (Druid on Foot)",
display_name: "Surge (4)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 294
)
UnitOption.create!(
id: 424,
name: "Surge (4) (Vampire Lord on Foot)",
display_name: "Surge (4)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 665
)
UnitOption.create!(
id: 421,
name: "Surge (4) (Vampire on Undead Pegasus)",
display_name: "Surge (4)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 664
)
UnitOption.create!(
id: 431,
name: "Surge (5) (Revenant King on Foot (Undead))",
display_name: "Surge (5)",
points: 10,
is_spell: true,
is_unique: false,
unit_id: 668
)
UnitOption.create!(
id: 248,
name: "Surge (6) (Thuul Mythican)",
display_name: "Surge (6)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 394
)
UnitOption.create!(
id: 303,
name: "Surge (8) (Ahmunite Pharaoh on Royal Chariot)",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 483
)
UnitOption.create!(
id: 191,
name: "Surge (8) (Cumulative) (Gladewalker Druid on Foot)",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 296
)
UnitOption.create!(
id: 131,
name: "Surge (8) (Cumulative) (Ice-Queen)",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 235
)
UnitOption.create!(
id: 279,
name: "Surge (8) (Cumulative) (Iron-caster)",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 435
)
UnitOption.create!(
id: 242,
name: "Surge (8) (Cumulative) (Thuul Aquamage)",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 393
)
UnitOption.create!(
id: 312,
name: "Surge (8) (Cursed High Priest on Foot)",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 211,
name: "Surge (8) (Keris[1])",
display_name: "Surge (8)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 307
)
UnitOption.create!(
id: 434,
name: "Surge (8) (Revenant King on Undead Great Flying Wyrm (Undead))",
display_name: "Surge (8)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 671
)
UnitOption.create!(
id: 306,
name: "Surge (8) (Revenant King on Undead Great Flying Wyrm)",
display_name: "Surge (8)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 489
)
UnitOption.create!(
id: 283,
name: "Surge (8) (Supreme Iron-caster on Great Winged Halfbreed)",
display_name: "Surge (8)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 440
)
UnitOption.create!(
id: 430,
name: "Surge (8) (Vampire Lord on Undead Dragon)",
display_name: "Surge (8)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 667
)
UnitOption.create!(
id: 280,
name: "Surge (8) to replace Fireball (Iron-caster)",
display_name: "Surge (8) to replace Fireball",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 435
)
UnitOption.create!(
id: 192,
name: "Surge (8) to replace Heal (Gladewalker Druid on Foot)",
display_name: "Surge (8) to replace Heal",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 296
)
UnitOption.create!(
id: 132,
name: "Surge (8) to replace Icy Breath (Ice-Queen)",
display_name: "Surge (8) to replace Icy Breath",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 235
)
UnitOption.create!(
id: 243,
name: "Surge (8) to replace Icy Breath (Thuul Aquamage)",
display_name: "Surge (8) to replace Icy Breath",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 393
)
UnitOption.create!(
id: 133,
name: "Talanaar's Standard [1]",
display_name: "Talanaar's Standard",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 233
)
UnitOption.create!(
id: 264,
name: "Throwing Mastiff (Blacksoul Horde)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 403
)
UnitOption.create!(
id: 262,
name: "Throwing Mastiff (Blacksoul Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 402
)
UnitOption.create!(
id: 260,
name: "Throwing Mastiff (Blacksoul Troop)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 401
)
UnitOption.create!(
id: 134,
name: "Throwing Mastiff (Bulwarker Horde)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 117
)
UnitOption.create!(
id: 135,
name: "Throwing Mastiff (Bulwarker Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 116
)
UnitOption.create!(
id: 136,
name: "Throwing Mastiff (Bulwarker Troop)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 115
)
UnitOption.create!(
id: 266,
name: "Throwing Mastiff (Immortal Guard Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 407
)
UnitOption.create!(
id: 265,
name: "Throwing Mastiff (Immortal Guard Troop)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 406
)
UnitOption.create!(
id: 137,
name: "Throwing Mastiff (Ironclad Horde)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 107
)
UnitOption.create!(
id: 138,
name: "Throwing Mastiff (Ironclad Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 106
)
UnitOption.create!(
id: 139,
name: "Throwing Mastiff (Ironclad Troop)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 105
)
UnitOption.create!(
id: 140,
name: "Throwing Mastiff (Ironguard Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 109
)
UnitOption.create!(
id: 141,
name: "Throwing Mastiff (Ironguard Troop)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 108
)
UnitOption.create!(
id: 142,
name: "Throwing Mastiff (Mastiff Hunting Pack Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 129
)
UnitOption.create!(
id: 269,
name: "Throwing Mastiff (Mutated Mastiff Hunting Pack Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 412
)
UnitOption.create!(
id: 143,
name: "Throwing Mastiff (Shieldbreaker Horde)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 112
)
UnitOption.create!(
id: 144,
name: "Throwing Mastiff (Shieldbreaker Regiment)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 111
)
UnitOption.create!(
id: 145,
name: "Throwing Mastiff (Shieldbreaker Troop)",
display_name: "Throwing Mastiff",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 110
)
UnitOption.create!(
id: 231,
name: "Two-Handed Weapon (Ogre Warlord on Foot)",
display_name: "Two-Handed Weapon",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 350
)
UnitOption.create!(
id: 221,
name: "Two-Handed Weapon (Sergeant on Foot)",
display_name: "Two-Handed Weapon",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 344
)
UnitOption.create!(
id: 330,
name: "Two-Handed Weapons (Abyssal Guard Regiment)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 497
)
UnitOption.create!(
id: 328,
name: "Two-Handed Weapons (Abyssal Guard Troop)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 496
)
UnitOption.create!(
id: 263,
name: "Two-Handed Weapons (Blacksoul Horde)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 403
)
UnitOption.create!(
id: 261,
name: "Two-Handed Weapons (Blacksoul Regiment)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 402
)
UnitOption.create!(
id: 259,
name: "Two-Handed Weapons (Blacksoul Troop)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 401
)
UnitOption.create!(
id: 146,
name: "Two-Handed Weapons (Dwarf Clansman Regiment)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 204
)
UnitOption.create!(
id: 147,
name: "Two-Handed Weapons (Dwarf Clansman Troop)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 203
)
UnitOption.create!(
id: 148,
name: "Two-Handed Weapons (Human Clansman Horde)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 202
)
UnitOption.create!(
id: 149,
name: "Two-Handed Weapons (Human Clansman Regiment)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 201
)
UnitOption.create!(
id: 150,
name: "Two-Handed Weapons (Human Clansman Troop)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 200
)
UnitOption.create!(
id: 327,
name: "Two-Handed Weapons (Lower Abyssal Horde)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 495
)
UnitOption.create!(
id: 323,
name: "Two-Handed Weapons (Lower Abyssal Regiment)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 494
)
UnitOption.create!(
id: 322,
name: "Two-Handed Weapons (Lower Abyssal Troop)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 493
)
UnitOption.create!(
id: 169,
name: "Two-Handed Weapons (Salamander Prime Horde (Forces of Nature))",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 263
)
UnitOption.create!(
id: 168,
name: "Two-Handed Weapons (Salamander Prime Regiment (Forces of Nature))",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 262
)
UnitOption.create!(
id: 167,
name: "Two-Handed Weapons (Salamander Prime Troop (Forces of Nature))",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 261
)
UnitOption.create!(
id: 213,
name: "Two-Handed Weapons (Warrior Horde)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 331
)
UnitOption.create!(
id: 214,
name: "Two-Handed Weapons (Warrior Legion)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 332
)
UnitOption.create!(
id: 212,
name: "Two-Handed Weapons (Warrior Regiment)",
display_name: "Two-Handed Weapons",
points: 0,
is_spell: false,
is_unique: false,
unit_id: 330
)
UnitOption.create!(
id: 415,
name: "Undead Giant Rats (Revenant Horde (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 634
)
UnitOption.create!(
id: 414,
name: "Undead Giant Rats (Revenant Regiment (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 633
)
UnitOption.create!(
id: 413,
name: "Undead Giant Rats (Revenant Troop (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 632
)
UnitOption.create!(
id: 418,
name: "Undead Giant Rats (Skeleton Archer Horde (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 646
)
UnitOption.create!(
id: 417,
name: "Undead Giant Rats (Skeleton Archer Regiment (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 645
)
UnitOption.create!(
id: 416,
name: "Undead Giant Rats (Skeleton Archer Troop (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 644
)
UnitOption.create!(
id: 412,
name: "Undead Giant Rats (Skeleton Spearman Horde (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 631
)
UnitOption.create!(
id: 411,
name: "Undead Giant Rats (Skeleton Spearman Regiment (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 630
)
UnitOption.create!(
id: 410,
name: "Undead Giant Rats (Skeleton Spearman Troop (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 629
)
UnitOption.create!(
id: 406,
name: "Undead Giant Rats (Skeleton Warrior Horde (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 625
)
UnitOption.create!(
id: 405,
name: "Undead Giant Rats (Skeleton Warrior Regiment (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 624
)
UnitOption.create!(
id: 404,
name: "Undead Giant Rats (Skeleton Warrior Troop (Undead))",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 623
)
UnitOption.create!(
id: 408,
name: "Undead Giant Rats (Zombie Horde)",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 627
)
UnitOption.create!(
id: 409,
name: "Undead Giant Rats (Zombie Legion)",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 628
)
UnitOption.create!(
id: 407,
name: "Undead Giant Rats (Zombie Regiment)",
display_name: "Undead Giant Rats",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 626
)
UnitOption.create!(
id: 476,
name: "Undead Horse (Cursed High Priest)",
display_name: "Undead Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 457,
name: "Undead Horse (Necromancer)",
display_name: "Undead Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 485,
name: "Undead Horse (Revenant Champion (Empire of Dust))",
display_name: "Undead Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 484
)
UnitOption.create!(
id: 478,
name: "Undead Horse (Revenant King (Undead))",
display_name: "Undead Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 668
)
UnitOption.create!(
id: 481,
name: "Undead Horse (Undead Army Standard Bearer (Empire of Dust))",
display_name: "Undead Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 481
)
UnitOption.create!(
id: 480,
name: "Undead Horse (Undead Army Standard Bearer (Undead))",
display_name: "Undead Horse",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 676
)
UnitOption.create!(
id: 475,
name: "Undead Horse (Vampire Lord)",
display_name: "Undead Horse",
points: 35,
is_spell: false,
is_unique: false,
unit_id: 665
)
UnitOption.create!(
id: 348,
name: "Veil of Shadows (2) [1] (Abyssal Warlock)",
display_name: "Veil of Shadows (2)",
points: 25,
is_spell: true,
is_unique: true,
unit_id: 527
)
UnitOption.create!(
id: 403,
name: "Veil of Shadows (2) [1] (Wip the Outcast)",
display_name: "Veil of Shadows",
points: 25,
is_spell: true,
is_unique: true,
unit_id: 622
)
UnitOption.create!(
id: 151,
name: "Veteran Command (Men-at-Arms Spearman Horde)",
display_name: "Veteran Command",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 55
)
UnitOption.create!(
id: 152,
name: "Veteran Command (Men-at-Arms Spearman Regiment)",
display_name: "Veteran Command",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 54
)
UnitOption.create!(
id: 153,
name: "Veteran Command (Men-at-Arms Spearman Troop)",
display_name: "Veteran Command",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 53
)
UnitOption.create!(
id: 154,
name: "Veteran Command (Men-at-Arms Swordsman Horde)",
display_name: "Veteran Command",
points: 15,
is_spell: false,
is_unique: false,
unit_id: 52
)
UnitOption.create!(
id: 155,
name: "Veteran Command (Men-at-Arms Swordsman Regiment)",
display_name: "Veteran Command",
points: 10,
is_spell: false,
is_unique: false,
unit_id: 51
)
UnitOption.create!(
id: 156,
name: "Veteran Command (Men-at-Arms Swordsman Troop)",
display_name: "Veteran Command",
points: 5,
is_spell: false,
is_unique: false,
unit_id: 50
)
UnitOption.create!(
id: 384,
name: "War Wagon (War Drum)",
display_name: "War Wagon",
points: 30,
is_spell: false,
is_unique: false,
unit_id: 604
)
UnitOption.create!(
id: 369,
name: "Weakness (2) (Horror)",
display_name: "Weakness (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 566
)
UnitOption.create!(
id: 447,
name: "Weakness (2) (Necromancer on Foot)",
display_name: "Weakness (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 673
)
UnitOption.create!(
id: 258,
name: "Weakness (2) (Siren)",
display_name: "Weakness (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 397
)
UnitOption.create!(
id: 244,
name: "Weakness (2) (Thuul Aquamage)",
display_name: "Weakness (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 393
)
UnitOption.create!(
id: 158,
name: "Weakness (2) (Wiz on Foot)",
display_name: "Weakness (2)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 44
)
UnitOption.create!(
id: 273,
name: "Weakness (3) (Cumulative) (Hex Caster)",
display_name: "Weakness (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 434
)
UnitOption.create!(
id: 313,
name: "Weakness (3) (Cursed High Priest on Foot)",
display_name: "Weakness (3)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 274,
name: "Weakness (3) to replace Hex (Hexcaster)",
display_name: "Weakness (3) to replace Hex",
points: 0,
is_spell: true,
is_unique: false,
unit_id: 434
)
UnitOption.create!(
id: 184,
name: "Wind Blast (4) (Druid on Foot)",
display_name: "Wind Blast (4)",
points: 15,
is_spell: true,
is_unique: false,
unit_id: 294
)
UnitOption.create!(
id: 296,
name: "Wind Blast (5) (Enslaved Guardian Horde)",
display_name: "Wind Blast (5)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 472
)
UnitOption.create!(
id: 295,
name: "Wind Blast (5) (Enslaved Guardian Regiment)",
display_name: "Wind Blast (5)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 471
)
UnitOption.create!(
id: 249,
name: "Wind Blast (5) (Thuul Mythican)",
display_name: "Wind Blast (5)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 394
)
UnitOption.create!(
id: 202,
name: "Wind Blast (5) (Unicorn (Forces of Nature))",
display_name: "Wind Blast (5)",
points: 20,
is_spell: true,
is_unique: false,
unit_id: 302
)
UnitOption.create!(
id: 314,
name: "Wind Blast (6) (Cursed High Priest on Foot)",
display_name: "Wind Blast (6)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 487
)
UnitOption.create!(
id: 159,
name: "Wind Blast (6) (Elven Archmage on Foot)",
display_name: "Wind Blast (6)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 191
)
UnitOption.create!(
id: 179,
name: "Wind Blast (6) (Greater Air Elemental (Forces of Nature))",
display_name: "Wind Blast (6)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 289
)
UnitOption.create!(
id: 161,
name: "Wind Blast (6) (Ice-Queen)",
display_name: "Wind Blast (6)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 235
)
UnitOption.create!(
id: 347,
name: "Wind Blast (6) (Seductress)",
display_name: "Wind Blast (6)",
points: 30,
is_spell: true,
is_unique: false,
unit_id: 526
)
UnitOption.create!(
id: 162,
name: "Wind Blast (6) (War Wizard on Foot (Basileans))",
display_name: "Wind Blast (6)",
points: 25,
is_spell: true,
is_unique: false,
unit_id: 96
)
UnitOption.create!(
id: 341,
name: "Wings (Abyssal Champion)",
display_name: "Wings",
points: 45,
is_spell: false,
is_unique: false,
unit_id: 520
)
UnitOption.create!(
id: 177,
name: "Wings (Beast of Nature)",
display_name: "Wings",
points: 40,
is_spell: false,
is_unique: false,
unit_id: 288
)
UnitOption.create!(
id: 342,
name: "Wings (Unicorn (Forces of Nature))",
display_name: "Wings",
points: 25,
is_spell: false,
is_unique: false,
unit_id: 302
)
UnitOption.create!(
id: 383,
name: "Wip's Playmates [1]",
display_name: "Wip's Playmates",
points: 15,
is_spell: false,
is_unique: true,
unit_id: 591
)
