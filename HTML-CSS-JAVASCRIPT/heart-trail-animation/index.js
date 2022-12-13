const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", (event)=>{
    //console.log("moved");
    //console.log(event.offsetX);
    //console.log(event.offsetY);
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    //creating span element
    const spanEL = document.createElement("span");
    spanEL.style.left = xPos + "px";
    spanEL.style.top = yPos + "px";
    
    //random number of heart size
    const size = Math.random()*100;
    spanEL.style.width = size + "px";
    spanEL.style.height = size + "px";
    
    //appending span into bady
    bodyEl.appendChild(spanEL);

    setTimeout(() =>{
        spanEL.remove();
    },2000);
});