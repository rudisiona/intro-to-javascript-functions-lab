// Excercise 1: maxOfTwoNumbers()

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



// Exercise 2: isAdult()

function isAdult(age){
if (age >= 18) {
  return 'Adult'
} else {
  return 'Minor'
}
}

console.log('Exercise 2 Result:', isAdult(21))



// Exercise 3: isCharAVowel()

function isCharAVowel(character){
  if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
    return true
  } else {
    return false
  }
}


console.log('Exercise 3 Result:', isCharAVowel("a"));



//Exercise 4: generateEmail()

function generateEmail(name, domain) {
  return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



// Exercise 5: greetUser()

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



// Exercise 6: maxOfThree()

function maxOfThree(x, y, z){
if (x > y && x > z){
  return x
} else if (y > x && y > z){
  return y
} else if (z > x && z > y){
  return z
}
}
          
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));




// Exercise 7: calculateTip()


function calculateTip(bill, tip) {
  const tipAmount = bill * (tip / 100)
  return tipAmount
}


console.log('Exercise 7 Result:', calculateTip(50, 20));




// Exercise 8: convertTemperature

function convertTemperature(temperature, unit){
  if (unit == "C"){
    const celsiusToFarenheit = (temperature * 1.8) + 32
    return celsiusToFarenheit
  } else if (unit == "F"){
    const farenheitToCelsius = (temperature - 32) * (5 / 9)
    return farenheitToCelsius
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));




// Exercise 9: basicCalculator

function basicCalculator(x, y, operation){
  if (operation === 'add'){
    return x + y
  } else if (operation === 'subtract'){
    return x - y
  } else if (operation === 'multiply'){
    return x * y
  } else if (operation === 'divide'){
    return x / y
  }
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));



