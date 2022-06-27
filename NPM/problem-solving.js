const numbers = [1,2,150,8,750,89,3,4,1980]

const largestNumber = (values) => {
    let highest = 0;
    for (let i=0; i<values.length; i+=1){
    if (values [i] > highest){
        highest = values[i];
    }    
    }
    return highest;
}
console.log(largestNumber(numbers));

const lettersWithStrings = (["chicken!,hotdogs, Pizza!,turkey"])

const specialChar = ("!") => {
    let
}