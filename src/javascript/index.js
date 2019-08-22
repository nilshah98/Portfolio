import "../sass/main.scss";

// ===================================== All selectors go here ====================================
const body = document.body
const html = document.documentElement;
const navElements = document.getElementsByClassName("nav__items--item");
const greet = document.getElementsByClassName("about__greet")[0];
const root = document.documentElement;
const toggle = document.querySelectorAll("input[type=checkbox]")[0];
const resume = document.getElementsByClassName("resume")[0];
const carouselSlides = document.getElementsByClassName("carousel__slide");
const carouselButtonPrev = document.getElementsByClassName("carousel__button--prev")[0];
const carouselButtonNext = document.getElementsByClassName("carousel__button--next")[0];

const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
let currHeight = 0;


// ===================================== All helper functions go here =============================
let activate = (num) => {
    for(var i=0; i<navElements.length; i++){
        navElements[i].classList.remove("active");
    }
    
    navElements[num-1].classList.add("active");
}

let mode = (mode) => {
    if(mode == "morning"){
        root.style.setProperty('--color-white','#fff');
        root.style.setProperty('--color-black','#222');
        // root.style.setProperty('--color-primary','#6c63ff');
        // root.style.setProperty('--color-secondary','#f9812a');
        toggle.checked = false;
    }
    else{
        root.style.setProperty('--color-white','#222');
        root.style.setProperty('--color-black','#fff');
        // root.style.setProperty('--color-primary','#f9812a');
        // root.style.setProperty('--color-secondary','#6c63ff');
        toggle.checked = true;
    }
} 

let mod = (n, m) => {
    return ((n % m) + m) % m;
}


let moveCarousel = (move) => {
    for(var i=0; i<carouselSlides.length; i++){
        if(carouselSlides[i].classList.contains("active")){
            var active = i;
        }
    }
    
    carouselSlides[active].classList.remove("active");
    carouselSlides[mod(active+1,carouselSlides.length)].classList.remove("next")
    carouselSlides[mod(active-1,carouselSlides.length)].classList.remove("prev")
    
    if(move == "prev"){
        carouselSlides[mod(active-1,carouselSlides.length)].classList.add("active")
        carouselSlides[mod(active-2,carouselSlides.length)].classList.add("prev")
        carouselSlides[active].classList.add("next")
    }else{
        carouselSlides[mod(active+1,carouselSlides.length)].classList.add("active")
        carouselSlides[mod(active+2,carouselSlides.length)].classList.add("next")
        carouselSlides[active].classList.add("prev")
    }
}

// ===================================== All event listeners go here ==============================
window.addEventListener("scroll",(e) => {
    currHeight = window.pageYOffset;
    if(currHeight >= 0 && currHeight <= (height/8)){
        // Section 1
        activate(1);
    }
    else if((currHeight > (height/8)*1 && currHeight <= (height/8)*3)){
        // Section 2
        activate(2);
    }
    else if((currHeight > (height/8)*3 && currHeight <= (height/8)*5)){
        // Section 3
        activate(3);
    }
    else{
        // Sectio  4
        activate(4);
    }
})

document.addEventListener("DOMContentLoaded",(e) => {
    let today = new Date();
    let hour = today.getHours();
    
    if(hour >= 6 && hour < 12){
        greet.textContent = "Hey, good morning, early riser 🌅";
        mode("morning");
    }
    else if(hour >= 12 && hour < 18){
        greet.textContent = "Hola, good afternoon, visitor 🌞";
        mode("morning");
    }
    else if(hour >= 18){
        greet.textContent = "Hello, good evening, traveller 🌙";
        mode("night");
    }
    else if(hour >= 0 && hour < 6){
        greet.textContent = "Hey, good early morning, night owl 🦉";
        mode("night");
    }
})

document.addEventListener('visibilitychange',(e) => {
    if(document.hidden){
        document.title = "Notice me!";
    }
    else{
        document.title = "nilshah98 Portfolio";
    }
})

toggle.addEventListener("change",(e) => {
    if(toggle.checked){
        mode("night");
    }
    else{
        mode("morning");
    }
})

resume.addEventListener("click",(e) => {
    window.open('../src/assets/nilshah98-resume.pdf');
})

carouselButtonNext.addEventListener("click",(e) => {
    moveCarousel("next");
})

carouselButtonPrev.addEventListener("click",(e) => {
    moveCarousel("prev");
})
// ============================================ Everything else ===================================
