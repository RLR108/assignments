const arr = [800, 25, 789, 1, 2005, 20005]

arr.sort(function(a, b){
    return a - b
})

console.log(arr)

const arr2 = [1800, 215, 1789, 11, 20505, 2065005]

arr2.sort(function(a, b){
    return b - a
})

console.log(arr2)

const arr3 = ["pig", "alligator", "horse", "fish", "ox"]

arr3.sort(function(a, b){
    return a.length - b.length
})

console.log(arr3)

const arr4 = ["bird", "fish", "goat", "zebra", "chicken"]
arr4.sort(function(a, b){
    return a === b ? 0 : a < b ? -1 : 1;

})
console.log(arr4)

const arr5 = [
    {name:"tim", age:20},
    {name:"kevin", age: 30},
    {name:"nick", age:50},
    {name:"tina", age: 10},
    {name:"charles", age: 5},
]

arr5.sort(function(a,b){
    return a.age - b.age
    
})
console.log(arr5)