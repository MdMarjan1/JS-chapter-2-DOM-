let a1 = document.getElementsByTagName('h1')
// console.log(a1)

let a2 = document.getElementsByTagName('li')
for(let li of a2){
    // console.log(li.innerText)
}

let a3 = document.getElementsByTagName('h1')
for(let li1 of a3){
    // console.log(li1.innerText)
}
//-----------------------------------------------


let a4 = document.getElementById('id22')
// console.log(a4.innerHTML = 'BuriGonga')

let a5 = document.getElementsByClassName('cl22')
// console.log(a5)
for(let a6 of a5){
    // console.log(a6.innerText)
}

let a7 = document.getElementsByClassName('cl22')
for(let a8 of a7){
    a8.style.backgroundColor = 'red'
    a8.style.color = 'white' 
    a8.style.padding = '1rem'
    a8.style.fontSize = '1.5rem'
    // console.log(a8.innerText)

}
//------------------------------------------------

