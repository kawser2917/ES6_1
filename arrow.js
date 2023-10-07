// regular Function or function declarartion
function add(a,b){
    return a+b
}

// function expression
const add1 = function(a,b){
    return a+b
}

// Arrow function
const add2 = (a,b) => a + b



// const result = add(10,30)
// const result = add1(10,30)
const result = add2(10,30)
console.log(result)