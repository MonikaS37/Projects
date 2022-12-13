const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    //creating element in javascript
    const colorContainerEl = document.createElement("div");
    //adding class name 
    colorContainerEl.classList.add("color-container");
    //appending to container
    containerEl.appendChild(colorContainerEl);
}


const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach(
        (colorContainerEl) => {
            const newColorCode = randonColor();
            //changing backgroundcolor
            colorContainerEl.style.backgroundColor = "#" + newColorCode;
            //for text
            colorContainerEl.innerText = "#" + newColorCode;
    });
}


function randonColor(){
    //hexadecimal characters
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        //generating random number
       const randonNum = Math.floor(Math.random() * chars.length);

        //assigning to colorcode
       colorCode += chars.substring(randonNum,randonNum + 1);
       //n   n-1
       
       //console.log(chars.length);
       //console.log(colorCode,randonNum);
    }
    return colorCode;
}