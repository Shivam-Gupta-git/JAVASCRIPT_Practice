
let lengthp = document.querySelector('#length-number')
let upper = document.querySelector('#uppercase')
let lower = document.querySelector('#lowercase')
let number = document.querySelector('#number')
let symbol = document.querySelector('#symbol')
let passinp = document.querySelector('#pass-input')
let generate = document.querySelector('#generate')

// console.log(passinp)
// console.log(lengthp.value)
// console.log(upper.checked)
// console.log(lower.checked)
// console.log(number.checked)
// console.log(symbol.checked)
// console.log(generate)

let uppercasestr = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';
let lowercasestr = 'abcdefghijklmnopqurstuvwxyz';
let numberstr = '0123456789';
let symbolstr = '!@#$%&*'
let password = '';

generate.addEventListener("click",()=>{
    let str = '';
    if(upper.checked){
       str += uppercasestr;
    }
    if(lower.checked){
        str += lowercasestr;
    }
    if(number.checked){
        str += numberstr;
    }
    if(symbol.checked){
        str += symbolstr;
    }
    // console.log(str,"str")
    // let password = '';
    for(let i = 0; i < lengthp.value; i++){
        let index = Math.floor(Math.random() * str.length);
        password += str[index];
        
    }
    //  console.log(password, "password")
     passinp.value = password;
     
})