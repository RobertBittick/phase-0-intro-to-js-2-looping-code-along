// Code your solutions in this file
    const cards = [
     "Thank you, Guadalupe, for the wonderful surprise gift!",
     "Thank you, Ollie, for the wonderful surprise gift!",
     "Thank you, Aki, for the wonderful surprise gift!",
 ]; 
function writeCards() {
   for (let i = 0; i < 3; i++) {
     console.log(cards[i]);
   }
 
   return cards;
 }

 function countDown() {
    let count = [1,2,3,4,5,6,7,8,9,10,11];
    for (let i = count.length - 1; i >= 0; i--) {
        console.log(--count[i]);
    }
}