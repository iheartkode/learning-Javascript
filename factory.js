// 'use strict'
// const dog = () => {
//   const sound = "woof";
//   return {
//     talk: () => console.log(sound)
//   }
// }

// const meeshak = dog();
// meeshak.talk();

var product = function(price, id, quantity) {
  return {
    show: function() {
      console.log("Name: " + id + 
                  "\nPrice: " + price + 
                  "\nOn Hand: " + quantity);
    }
  }
}

