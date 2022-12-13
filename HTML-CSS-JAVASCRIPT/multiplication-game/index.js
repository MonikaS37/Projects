// To have functionality
//creating random number
//to get only whole number use Math.ceil
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
//converting string into int
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEl.innerText = 'score: ' + score;

questionEl.innerText = 'What is ' + num1 + ' multiply by '+ num2 +' ?';
//${num1} not working in js



//checking correct answer
const correctAns = num1 * num2 ;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    //+ used to convert string into int
    if(userAns === correctAns){
        score++
        updatelocalStorage();
    }
    else{
        score--
        updatelocalStorage();
    }
});

//putting store in local storage 
// advantage -> speed
function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
