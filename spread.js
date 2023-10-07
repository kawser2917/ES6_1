console.log(Math.max(10,20,40,60,70,90))

const numbers = [10,20,30,40,5,60,70,80]

const numberMax = Math.max(...numbers)

console.log(numberMax)

// Copying array and assign value with spread operatior

const friendsAge = [ 10,14,20,16,18]
const newFriend = friendsAge
const friends = [5,...friendsAge]
newFriend.push(45)
friends.push(60)


console.log(newFriend)
console.log(friendsAge)
console.log(friends)
