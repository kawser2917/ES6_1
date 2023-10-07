const add = (a,b) => a+b;

const getAge = (person) => person.age

const getThird = numbers => numbers[2]

const getMessage = () => "Hello World"

const mulOperation = (a,b,c) =>{
    const sum = a+b
    const mul = sum*c
    return mul
}

const student = {
    name:"Kawser Ahmed",
    age: 24
}

const sum = add(10,20)
const age = getAge(student)
const number = getThird([10,20,30,40])
const dim = mulOperation(10,2,3)

console.log(sum)
console.log(age)
console.log(number)
console.log(dim)
console.log(getMessage())
