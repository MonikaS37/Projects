//query selector method
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
    console.log(event.pageX);
    console.log(event.pageY);

    //manipulating styles using style.setProperty()
    btnEl.style.setProperty("--xPos",x + "px");
    btnEl.style.setProperty("--yPos",y + "px");

});
//to get button position=> btnEl.offsetToP
//event.pageY => event position on button or position of mouse on button in y axis

