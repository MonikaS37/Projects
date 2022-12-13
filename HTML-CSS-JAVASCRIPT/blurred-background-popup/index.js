const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const popupbtnEl = document.querySelector(".popup-btn");
const inputEl = document.querySelector("input");

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
    if(inputEl.value != " "){
        inputEl.value = " ";
    }
});

popupbtnEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
    if(inputEl.value != " "){
        inputEl.value = " ";
    }
});