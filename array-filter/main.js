
//function fiveAndGreaterOnly(arr) {
    // your code here
 // }
  // test
 // console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  
 const arr = [10, 2, 5, 20]

 const fiveAndGreaterOnly = arr.filter(function(num){
    if(num >= 5){
      return true
    }
 })

 console.log(fiveAndGreaterOnly)

 const arr2 = [20, 33, 57, 64, 122]

 const evensOnly = arr2.filter(function(num){
    if(num % 2 === 0){
      return true
    }
 })

 console.log(evensOnly)

 const arr3 = ["pig", "chicken", "horse", "boar", "elephant"]

 const fiveCharactersOrFewer = arr3.filter(function(mam){
    if(mam.length <= 5){
      return true
    }
 })

 console.log(fiveCharactersOrFewer)

 const friends = [
  {name: "john", member: "yes"},
  {name: "tom", member: "no"},
  {name: "rashan", memeber: "no"},
  {name: "jeff", member: "yes"}
 ]

 const peopleWhoBelongToTheIlluminati = friends.filter(function(friend){
    if(friend.member === "yes"){
      return friend
    }
 })

 console.log(peopleWhoBelongToTheIlluminati)

 const visitors = [
  {name: "john", age: 70},
  {name: "tom", age:50},
  {name: "rashan", age: 17},
  {name: "jeff", age: 15}
 ]

 const ofAge = visitors.filter(function(visitor){
    if(visitor.age >= 18){
      return visitor
    }
 })

 console.log(ofAge)

 