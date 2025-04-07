let textarea = document.querySelector("#textarea")
let button = document.querySelector("#count")
let output = document.querySelector("#output")

button.addEventListener("click",()=>{
    if(textarea.value === ''){
     output.innerHTML = "Please Enter some letters"
    }
    else{
        let value = textarea.value;
        let count = 0;
        for(let i=0;  i < value.length; i++){
            if(value[i] === "a" || value[i] === "e" || value[i] === "i" || value[i] === "o"){
                count++;
            }    
        }
        output.innerHTML = `The number of vowels are ${count}`
    }

})