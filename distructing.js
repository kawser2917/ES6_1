// Object distructing 
const actor = {
    name: "Shahrukh Khan",
    age: 58,
    phone : "01768952917",
    industry: "Bollywood"
}

const {phone, age, name:nam} = actor

// console.log(phone)
// console.log(age)
// console.log(nam)

// array destructuring
const numbers = [10,20,30,40,50,60]

const [first,second] = numbers
console.log(first, second)