const form = document.badGuys

const add = document.getElementById("addButton")
 add.onclick = function (){
    const num1 = document.getElementById("goom").value
    const num2 = document.getElementById("bomb").value
    const num3 = document.getElementById("cheep").value
    const result = document.getElementById("result")
    result.textContent = (Number(num1 * 5) + Number(num2 * 7) + Number(num3 * 11))
}