console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Zoe',
  lastName: 'Copoulos',
  hasSiblings: 'false',
  shoeCount: 100,
  // I think I found a use for infinity because I have a LOT of shoes
  favThreeFoods: [
    'baklava',
    'spanakopita',
    'pad thai'
  ]
};

console.log('A little about me:', me); 

//end me  (lol mood)

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

//initial try below

//let fullName = me.firstName  + me.lastName

//console.log (fullName)

//logging correct except no space between
//come back when you figure out what you did(n't do)
//thinking about it before coming back, I could build this into the values but I feel like there's a better wya to do it
//I CAME BACK , see below

let fullName = `${me.firstName} ${me.lastName}`

// it was me not using the money, I am naturally frugal

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

// this is all wrong
//function oneFavFood {
  //return me.favThreeFoods [0]
  //return me.favThreeFoods [1]
//}
 
//console.log(oneFavFood[0])
//console.log(oneFavFood[1])
 
// it was once again a money problem
let favFoods = me.favThreeFoods
console.log(`First fave food is ${favFoods[0]}`)
console.log(`Last fave food is ${favFoods[2]}`)

// end oneFavFood
// 




/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(`Shoe count is ${me.shoeCount}`)
me.shoeCount++
console.log(`New shoe count is ${me.shoeCount}`)

/*this one thing is making this flow a lot easier, maybe this is the thing I missed that was not allowing me to move on from 
the things I was grasping
one of many things I am sure
*/

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Black'
console.log (`I also have a favorite color: ${me.favoriteColor}`)

