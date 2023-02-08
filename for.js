// !1
// !1

// !1

// !1

// !1

const first =document.querySelector(".first")
function getRandomInt() {
    return Math.floor(Math.random() * 10);
}
    first.innerHTML = 
 ` 
 <mark>Завдання 1: Рандомне число = ${getRandomInt()}</mark>`;


// *2
// *2
// *2
// *2
// *2
// *2

const boxfirstDiv = document.querySelector(".boxfirst");
const boxDiv = document.querySelector(".box");
function changeNumber(a,b){
    boxfirstDiv.innerHTML = 
 ` Завдання 2: 
 <mark>Перша змінна a = ${a}</mark>
  <mark>Друга змінна b = ${b}</mark>`;
  let c=a;
  a=b;
  b=c;
  boxDiv.innerHTML = 
 ` 
 <span>Кінцвевий результат</span>
 <mark>a = ${a}</mark>
  <mark>b = ${b}</mark>`;
  
}
changeNumber(5,10);
// ?3
// ?3
// ?3
// ?3
// ?3
// ?3
// ?3
// ?3
const questThree = document.querySelector(".quest3");
function trueFalse(numb){
let krab = numb%2===0?"true":"false" ;
return krab;
}
questThree.innerHTML=`Завдання 3: <mark>${trueFalse(2)}</mark>`;
// todo4
// todo4
// todo4
// todo4
// todo4
// todo4
// todo4
// todo4
const questFour = document.querySelector(".quest4");
const btnPrompt = document.querySelector(".btn_prompt")
function gcd(){

    let i;

if ( numOne > numTwo){
    i = numOne;
} else { i = numTwo}

while( i > 1){
    if(numOne%i === 0 && numTwo%i === 0){
        break;
       
    }
    i--
    
}
return i;
}

btnPrompt.addEventListener(`click`, ()=>{
  numOne = +prompt('Enter the first number:');
  numTwo = +prompt('Enter the second number:');
  questFour.innerHTML = `Завдання 4: <mark>${gcd()}</mark>`;
})