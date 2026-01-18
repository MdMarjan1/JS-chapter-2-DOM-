let a1 = document.getElementsByTagName('h1')
console.log(a1)

let a2 = document.getElementsByTagName('li')
for(let li of a2){
    console.log(li.innerText)
}

let a3 = document.getElementsByTagName('h1')
for(let li1 of a3){
    console.log(li1.innerText)
}
//-----------------------------------------------


let a4 = document.getElementById('id22')
console.log(a4.innerHTML = 'BuriGonga')

let a5 = document.getElementsByClassName('cl22')
console.log(a5)
for(let a6 of a5){
    console.log(a6.innerText)
}

let a7 = document.getElementsByClassName('cl22')
for(let a8 of a7){
    a8.style.backgroundColor = 'red'
    a8.style.color = 'white' 
    a8.style.padding = '1rem'
    a8.style.fontSize = '1.5rem'
    a8.style.textAlign = 'center'
    console.log(a8.innerText)

}
//------------------------------------------------

let a8 = document.querySelectorAll('#id23 li')
for(let a9 of a8){
    console.log(a9.innerHTML)
}

let a10 = document.querySelector('#id23 li')
console.log(a10.innerHTML)

let a11 = document.getElementById('id23')
let a12 = a11.getAttribute('id')
console.log(a12)

let a14 = document.getElementById('id22')
let a15 = a14.getAttribute('class')
console.log(a15)

let a16 = document.getElementById('id22')
a16.classList
console.log(a16)

a16.classList.add('marjan70')
console.log(a16)

a16.classList.remove('pg11')
console.log(a16)

let a17 = document.getElementById('dl10')
a17.setAttribute('id','jk55')

let a18 = document.getElementById('jk55')
let a19 = a18.innerText = 'AMI KLKE JABO NA 01920'
console.log(a19);

let a20 = document.getElementsByClassName('alv100')[0].innerHTML = '<h2>Italy</h2>'
console.log(a20);

// let a21 = document.getElementsByClassName('alv100')
// let a23 = a21.innerText
// console.log(a21)

let a21 = document.getElementsByClassName('alv100')[0].innerText
console.log(a21)