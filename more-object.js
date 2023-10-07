const actor = {
    name: "Shahrukh Khan",
    age: 50,
    city: "mumbai",
    phone: "01768952917",
    industry: "Bollywood"
}

const keys = Object.keys(actor) //return an array of the object properties
const value = Object.values(actor) //
delete actor.industry // it will delete the idustry 
// Another way to delete
const{inDustry, ...newActor} = actor //it will also delete or we can say will create new object

Object.freeze(actor) //after that we can not do any operation like update,delete
delete actor.name

console.log(keys)
console.log(value)
console.log(actor)