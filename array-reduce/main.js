const nums = [2, 45, 76, 89, 456, 345]

const result1 = nums.reduce(function(final, num){
    final += num
    return final
})
console.log(result1)

const numbers = [5, 6, 7,]

const result2 = numbers.reduce(function(final, current){
    return final + current
},[])

console.log(result2)

const voters = [
    {name:'Bill', age: 45, voted: true},
    {name: 'Rashan', age: 43, voted: true},
    {name: 'Tony', age: 25, voted: false},
    {name: 'Thomas', age: 60, voted: false},
    {name: 'Kevin', age: 75, voted: true},
    {name: 'Larry', age: 64, voted: false},
    {name: 'Andrew', age: 21, voted: false},
    {name: 'Paris', age: 95, voted: true},
    {name: 'Gray', age: 27, voted: false},
    {name: 'Matt', age: 33, voted: true},
    {name: 'Lewis', age: 69, voted: false},
]

const totalVotes = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
},0)

console.log(totalVotes)

const items = [
    {title: "Mercedes G Wagon", price: 140000},
    {title: "Harley motorcycle", price: 20000},
    {title: "PS5", price: 500},
    {title: "Yezzy", price: 250},
    {title: "dog", price: 1000},
    {title: "fish tank", price: 1000},
]

const shoppingSpreeTotal = items.reduce(function(a, b){
    return a + b.price
},0)

console.log(shoppingSpreeTotal)

const arrs = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
    ]

const flattenArrs = arrs.reduce(function(final, arr){
    return final.concat(arr)


},[]);
    console.log(flattenArrs)

const votes =[
    {name:'Josh', age: 25, voted: true},
    {name:'Wanye', age: 56, voted: false},
    {name:'Robert', age: 43, voted: false},
    {name:'Phil', age: 75, voted: true},
    {name:'Chris', age: 87, voted: true},
    {name:'Sally', age: 21, voted: false},
    {name:'Tina', age: 36, voted: true},
    {name:'Terri', age: 22, voted: true},
]

const voterResults = votes.reduce(function(final, vote){
    if(vote.age >= 18 && vote.age <= 25 && vote.voted)
    {
       final.numYoungVoted++;
    }
    if(vote.age >= 18 && vote.age <= 25)
        final.numYoungPeople++
    {
    if(vote.age >= 26 && vote.age <= 36 && vote.voted){
        final.numMidYoungVoted++;
    }
    if(vote.age >= 26 && vote.age <= 36){
        final.numMidYoungPeople++
    }
    if(vote.age >= 36 && vote.age <= 55 && vote.voted){
        final.numOldVoted++;
    }
    if(vote.age >=36 && vote.age <= 55){
        final.numOldPeople++
    }
    }
    
    return final
    
},{numYoungVoted: 0, numOldVoted: 0, numMidYoungVoted: 0, numYoungPeople: 0, numMidYoungPeople: 0, numOldPeople: 0})
  console.log(voterResults)

  