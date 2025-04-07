
let menuList = document.querySelector('#menuList');
menuList.style.transform = `translateX(${0}%)`;
function toggleMenu(){
  if(menuList.style.transform  == `translateX(${0}%)`)
  {
    menuList.style.transform = `translateX(-${100}%)`;
  }
  else{
    menuList.style.transform = `translateX(${0}%)`;
  }
}

