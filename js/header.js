function showOrHideMenu(mode){
    let ham = document.getElementById("hamburger");
    let style = window.getComputedStyle(ham);
    let display = style.getPropertyValue('display');
    console.log('hamburger.style.display:' + display)
    if(display == 'none' || display == '')
        return;
    
    let items = document.querySelectorAll('#header nav ul li:not(:first-child)');
    for(let i = 0;i < items.length;i++){
        items[i].style.display = mode;
    }
}


function load(){
    document.getElementById("hamburgerMenu").addEventListener("mouseover",
        () => showOrHideMenu('block'));

    let ul  = document.querySelector("#header nav ul")
    ul.addEventListener("mouseleave",
        () => showOrHideMenu('none'));
}

document.addEventListener("DOMContentLoaded",load);