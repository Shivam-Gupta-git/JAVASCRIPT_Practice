let main = document.querySelectorAll(".box")
let count = 0;
 main.forEach((slide, index)=>{
    slide.style.left = `${index*100}%`
 })

 function myFun(){
   main.forEach((image)=>{
    image.style.transform = `translateX(-${count*100}%)`
   })
 }
 setInterval(()=>{
    count++;
    if(count == main.length){
        count=0;
    }
    myFun()
 },2000)