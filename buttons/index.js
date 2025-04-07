let container = document.querySelector('#container')
let button = document.querySelectorAll('.btn')

  // button[1].style.backgroundColor = 'red'
  
  button.forEach((item)=>{
    item.addEventListener('click',(event)=>{
    

      button.forEach((btn)=>{
        btn.style.backgroundColor=''
      })
      
      item.style.backgroundColor='red'
      
      
    })
  })


