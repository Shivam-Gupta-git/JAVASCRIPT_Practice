let btn = document.querySelectorAll(".box1b")
let slide = document.querySelectorAll(".box1a")

btn.forEach((bst)=>{
   bst.addEventListener("mouseenter",()=>{
    slide.style.transform = `(translateX)${100}%`
   })
})