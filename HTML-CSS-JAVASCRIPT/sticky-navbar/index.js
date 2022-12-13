const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(window.scrollY);
console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);


window.addEventListener('scroll', ()=> {

    //   scrollY 430 > 546 - 70 - 50
    // scrollY > 426
    if(window.scrollY > bottomContainerEl.offsetTop   - navbarEl.offsetHeight - 50){
        navbarEl.classList.add('active');
    }
    else{
        navbarEl.classList.remove('active');
    }
});

 //console.log(window.scrollY);
   //this number is different when we have a differernt zoom level
   //depending on the zoom level it is changing