// Excercise 1

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



// Exercise 2

function isAdult(age){
if (age >= 18) {
  return 'Adult'
} else {
  return 'Minor'
}
}

console.log('Exercise 2 Result:', isAdult(21))



// Exercise 3

function isCharAVowel(character){
  if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
    return true
  } else {
    return false
  }
}


console.log('Exercise 3 Result:', isCharAVowel("a"));



//Exercise 4

function generateEmail(name, domain) {
  return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



// Exercise 5

function greetUser(name, timeOfDay,){
if (timeOfDay === "morning") {
  return `Good morning, ${name}`
} else if (timeOfDay === "afternoon") {
 return `Good afternoon, ${name}`
} else if (timeOfDay === "night") {
  return `Good night, ${name}`
}
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"))