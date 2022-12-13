const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateImage();
});

function updateImage(){
    //1 - 839 / 800
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;

    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
    
    //console.log(window.pageYOffset,1 - window.pageYOffset / 900,160 - window.pageYOffset / 12);
}