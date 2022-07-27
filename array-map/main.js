const arr = [50,25,35,785];

const doubleNumbers = arr.map(function(num){
    return num *2;
});
  
  console.log(doubleNumbers);
  
  
  
  const arr2 = [2, 3, 6, 7];

  const stringItUp = arr2.map(function(num2){
    return num2.toString() 
  })
console.log(stringItUp)
  

const names = ["john", "tom", "harold", "wayne"];

const capitalizeNames = names.map(w => w.charAt(0).toUpperCase() + w.slice(1));

console.log(capitalizeNames)


const patients = [
      {
          name: "Angelina Jolie",
          age: 80
      },

      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
]
  
const nameOnly = patients.map(function(patient){
    return patient.name
})

console.log(nameOnly)

const age = 35;
const visitors = [

      {
          name: "Jesse James",
          age: 80
      },
      {
          name: "Elis Johnson",
          age: 25
      },
      {
          name: "Perry House",
          age: 34
          
      },
      {
          name: "Kevin Wright",
          age: 65
      },
      {
          name: "Bill Zambrano",
          age: 100
      }]
 
      const matrixVisitors = visitors.map(function(visitor){
        if  (visitor.age < 35) {
            return (visitor.name + " can go to The Matrix.");
          } else {
            return (visitor.name + " is under age.")
        };
          
      })
    

      console.log(matrixVisitors)
 
 
      const tenants = [
          {
              name: "Alice Johnson",
              age: 75
          },
          {
              name: "Emmaunal Jefferies",
              age: 2
          },
          {
              name: "Prince Hick",
              age: 45
          },
          {
              name: "Karl Wilson",
              age: 100
          },
          {
              name: "Bobby Zitz",
              age: 95
          }
      ]
      
      const readyToPutInTheDom = tenants.map(function(tenant){
            return ("<h1>" + tenant.name + "</h1>" + "<h2>" + tenant.age + "</h2>"); 
      });
      
      console.log(readyToPutInTheDom)