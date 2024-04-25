let input = document.querySelector('input');
let colorBox = document.querySelectorAll('.color-box');
let listed = document.querySelector('#listed')
let saveBtn = document.querySelector('#btn-save')
let deleteBtn = document.querySelector('#btn-delete')

colorBox.forEach(function(color){
    color.addEventListener('click', function(event){
        console.log(color)
        let mainColor = event.target.style.backgroundColor
        input.style.backgroundColor = mainColor
    })
    
})
function removeInput() {
    input.value = '';
    input.style.backgroundColor = 'white'
    inputBgColor = 'white'
}
function addNote(){
    newP = document.createElement("p")
    newP.className = "card-text p-3"
    newP.innerHTML = input.value
    newDiv = document.createElement("div")
    newDiv.className = "card shadow-sm rounded"
    let inputBgColor = input.style.backgroundColor
    newDiv.style.backgroundColor = inputBgColor
    newDiv.appendChild(newP)
    console.log(newDiv)
    listed.append(newDiv)
    removeInput()
}

deleteBtn.addEventListener('click', removeInput)

saveBtn.addEventListener('click', addNote)

input.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        addNote()
    }
})





colorBox.forEach(function(color){
    let bgColor = color.getAttribute('background-color')
    input.style.backgroundColor = bgColor
    card.style.backgroundColor = bgColor
})