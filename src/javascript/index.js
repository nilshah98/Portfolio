import "../sass/main.scss";

console.log("Hi")

// All selectors go here
const body = document.body
const html = document.documentElement;
const navElements = document.getElementsByClassName("nav__items--item");

const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
let currHeight = 0;


// All helper functions go here
let activate = (num) => {
    for(var i=0; i<navElements.length; i++){
        navElements[i].classList.remove("active");
    }

    navElements[num-1].classList.add("active");
}

window.addEventListener("scroll",(e)=>{
    currHeight = window.pageYOffset;
    if(currHeight >= 0 && currHeight <= (height/8)){
        // Section 1
        activate(1);
        console.log("1");
    }
    else if((currHeight > (height/8)*1 && currHeight <= (height/8)*3)){
        // Section 2
        activate(2);
        console.log("2");
    }
    else if((currHeight > (height/8)*3 && currHeight <= (height/8)*5)){
        // Section 3
        activate(3);
        console.log("3");
    }
    else{
        // Sectio  4
        activate(4);
        console.log("4");
    }
})
