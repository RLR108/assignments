const form = document.getElementById("calculator")

const add = document.getElementById("addBtn")
add.addEventListener("click", function (e){
    e.preventDefault()
    const num1 = form.k.value
    const num2 = form.l.value
    let sum = Number(num1) + Number(num2)
    const result = document.getElementById('addResult')
    result.textContent = "addition result: " + " " + sum
    
})

const sub = document.getElementById("subtractBtn")
sub.addEventListener("click", function (e){
    e.preventDefault()
    const num3 = form.m.value
    const num4 = form.n.value
    let  answer= Number(num3) - Number(num4)
    const result = document.getElementById('subtractResult')
    result.textContent = "subtractResult: " + " " + answer
    
})

const multi = document.getElementById("multiplyBtn")
multi.addEventListener("click", function (e){
    e.preventDefault()
    const num3 = form.r.value
    const num4 = form.s.value
    let  answer= Number(num3) * Number(num4)
    const result = document.getElementById('multiplyResult')
    result.textContent = "multiplyResult: " + " " + answer
    
})