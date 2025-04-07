
let textElement = document.querySelector('#textElement');
let addTextElement = document.querySelector('.add');
let containtBox = document.querySelector('.containt-box');
addTextElement.addEventListener('click',()=>{
    if(textElement.value.length == 0){
        alert ('Please Enter a Task')
    }
    else{
        containtBox.innerHTML += `
        <div class="ElementBox">
        <div class="containtElement">${textElement.value}</div>
        <button class="delete">Delete</button>
        </div>
        `
        let deleteIcon = document.querySelectorAll('.delete');
        for(let i = 0; i < deleteIcon.length; i++){
            deleteIcon[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        textElement.value = '';
    }
})