let items = document.querySelectorAll(".accordeonItem")

items.forEach(el => {
    el.addEventListener('click', () => {
        let body = el.querySelector(".body")
        body.classList.toggle("show")
        el.querySelector("button").classList.toggle("button")
        el.querySelector(".box").classList.toggle("show")
        el.querySelector(".head").classList.toggle("show")

    })
});




let li = document.querySelectorAll(".slick-dots li")
let star = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
</svg>`


function fillLi() {
    li.forEach(i => {
        i.innerHTML = star
    });
}
fillLi()



let inputBlocks = document.querySelectorAll(".inputBlock")
let forms = document.querySelectorAll(".form")

 




function ChangeState(value){
    

    inputBlocks.forEach(el =>{
        if(el.classList.contains(value.id)){
            el.querySelector(".circle_2").classList.remove('dn')
        }
        else{
            el.querySelector(".circle_2").classList.add('dn')
        }
    })

    forms.forEach(el =>{
        if(el.classList.contains(value.id)){
            el.classList.remove("dn")
            el.classList.add("active")
        }
        else{
            el.classList.add("dn")
            el.classList.remove("active")
        }
    })
}


let nav = document.querySelector("nav")
let burger = document.querySelector('.burger')
let links = document.querySelector("nav .links")
let button  = document.querySelector("nav .button ")
let body = document.querySelector("body")

burger.addEventListener('click', () => {
    links.classList.add("showe")
    console.log(links)

    setTimeout(() => {
        body.classList.add("noScrol")
    }, 300);

})

document.addEventListener('click', (e) => {
    document.querySelectorAll(".links a").forEach(el => {
        if (e.target != el && e.target != burger) {
            links.classList.remove("showe")


            body.classList.remove("noScrol")
        }
    })
})



let header = document.querySelector('header .container')
let header_left_side = document.querySelector('header .container .left_side')
let header_right_side = document.querySelector('header .container .right_side')




function checkScreenSize() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth > 998) {
      // 'Экран больше 1124px';
        header.append(header_right_side)

    } else {
      // 'Экран меньше или равен 1124px';
      header_left_side.append(header_right_side)

    }
  }
  
  // Обработчик события изменения размера окна
  window.addEventListener('resize', () => {
    const screenSizeMessage = checkScreenSize();
    console.log(screenSizeMessage);
  });
  
  // Вызов функции при загрузке страницы
  const initialScreenSizeMessage = checkScreenSize();


