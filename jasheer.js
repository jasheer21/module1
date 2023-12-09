let menu=document.getElementById('menu')
let navbar=document.getElementById('navbar')
menu.onclick=()=>{
    menu.classList.toggle('menu-btn')
    navbar.classList.toggle('open')
}