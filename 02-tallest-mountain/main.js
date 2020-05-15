/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
mntValue =[ 120 , 200 , 3000, 6400, 1200, 50]

let index = 0
let highestMnt = 0

while (index < mntValue.length){
   if ( mntValue[index] > highestMnt){
      highestMnt = mntValue[index]
   }
   index ++
}

console.log(highestMnt)