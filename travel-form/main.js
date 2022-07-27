const form = document.myForm
const submitBtn = document.getElementById("submitButton")

form.addEventListener("submit", function(e){
    e.preventDefault()
    const checkedInputs = []
    for(let i = 0; i < form.meal.length; i++){
        if(form.meal[i].checked){
            checkedInputs.push(form.meal[i].value)
            
        }

    }
    
    alert("First Name: " + this.firstName.value + " " +
    "Last Name: " + this.lastName.value + " " +
    "Age: " + this.age.value + " " +
    "Gender: " + this.gender.value + " " +
    "Destination: " + this.city.value + " " +
     "Meal: " + this.meal.value
)
})