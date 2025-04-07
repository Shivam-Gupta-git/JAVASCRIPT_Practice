let score = document.querySelector("#score")
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let input = document.querySelector("#input")
let submit = document.querySelector("#submit")

count = 0;
submit.addEventListener("click",()=>{
    let val = input.value;
    val = val.trim()
    val = Number(val)
    let mult = document.querySelector('#num1').textContent * document.querySelector('#num2').textContent
    mult = Number(mult);
 if(document.querySelector('#input').value === ''){
    alert("please enter a number")
 }
 else if(val === mult){
    count++;
    score.textContent = count;
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10);
 }
 else{
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10);

 }
})



