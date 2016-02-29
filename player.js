var locations = [
  "Evergreen Forest", 
  "Garden of Thall", 
  "Oblivion Sewer", 
  "Orbal Dungeon of Death", 
  "Pool of Solitude", 
  "Galadril Foundry", 
  "Ruins of Snake"
];

var weapons = [
    
    {
      name: "Crossbow Of Death", 
      range: 30,
      speed: 20,
      hp: -20
    },
    {
      name: "Longsword of Culling",
      str: 40,
      hp: -10
    },
    {
      name: "Mighty Longsword",
      str: 50,
      speed: -10
    },
    {
      name: "Shortsword of the Noob",
      str: 10,
      speed: 5
    },
    {

      name: "Shortsword of the Calling",
      str: 20,
      hp: 20,
      speed: 20

    },
    {
      name: "Axe of Decimation",
      str: 50,
      speed: 30
    },
    {

      name: "Wand Of Justice!",
      mana: 10,
      hp: 25

    },
    {
      name: "Blessed Soulbound Staff",
      hp: 10,
      mana: 15,
    },
    {
      name: "Wand of Darkest Night",
      hp: -20,
      mana: 30
    }
    
];

function Player(classType, name) {
  this.name = name;
  this.hp = 100;
  this.classType = classType;
  if(classType == "Ranger") {
    this.str = 40;
    this.mana = 10;
    this.range = 30;
  } else if(classType == "Warrior") {
    this.str = 60;
    this.mana = 5;
    this.range = 10;
  } else {
    this.str = 20;
    this.mana = 50;
    this.range = 20;
  }
}

var utils = {
  print: function(player) {
    console.log(player.name.toUpperCase() + "\n" +
                ":::::::::STATS:::::::::\n" +
                "Class: " + player.classType +
                "\nHP: " + player.hp +
                "\nMana: " + player.mana +
                "\nStrength: " + player.str +
                "\nRange: " + player.range + "\n"
               );
  },
  randomizer: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  newStats: function(player, weapon) {
    utils.print(player);
    
  },
  explore: function(player) {
    var weapon = utils.randomizer(weapons);
    var weaponName = weapon.name;
    var location = utils.randomizer(locations);
    console.log("Exploring...");
    setTimeout(function() {
      console.log(player.name + " found the " + weaponName + " at the " + location + "!");
      utils.newStats(player, weapon);
    }, 2000);
  }
};

var krull = new Player("Warrior", "Krull");
var abigail = new Player("Mage", "Abigail");


utils.explore(krull);







