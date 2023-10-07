const numbers = [10,20,30,40,50]

// For of loop in arrays
for(const num of numbers){
    console.log(num)
}
// For of loop in string

const nobab = "Shiraj Vai"
for(const no of nobab){
    console.log(no)
}
// Note: We can not use for...of in object directly so for object we will use for...in

const actor ={
    name: "Shahrukh Khan",
    city: "Mumbai",
    age:58,
    inDustry: "Bollywood"
}

for(const key in actor){
    const value = actor[key]
    console.log(key, value)
}
