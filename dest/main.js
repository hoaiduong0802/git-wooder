window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


// Test Hieght
// const pageY = document.addEventListener('scroll',function(){
//     console.log(window.pageYOffset)
// })
//Progress Bar
function progressBar(){
    let vh = window.innerHeight;
    let progress = document.querySelector("body .progressbar")
    let hBody = document.querySelector('body').clientHeight;
    let scrollY = window.pageYOffset;
    let percent = Number(scrollY / (hBody - vh) * 100)
    progress.style.width = percent + '%'
}
document.addEventListener('scroll',function(){
    progressBar()
})
//Select Language
function selectLang(){
    const lang = document.querySelector(".lang .lang__current");
    const langList = document.querySelector(".lang .lang__list")
    const langCurrent = document.querySelector(".lang .lang__current span")
    const langItems = document.querySelectorAll(".lang .lang__list ul li")
    lang.addEventListener('click', function(e){
        e.stopPropagation();
        langList.classList.toggle('active')
    })
    langItems.forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();
            let langText = this.textContent;
            let langCurrentinSpan = langCurrent.textContent;
            langCurrent.innerHTML = langText;
            this.innerHTML = langCurrentinSpan;
        })
    })
    document.addEventListener('click',function(e){
        langList.classList.remove('active')
    })
}
selectLang()
// let currentlang = langCurrent.getAttribute();
// console.log(currentlang);
// console.log(langCurrent)
// lang.addEventListener('click',function(){
//     langList.classList.toggle("visiblelang")
// })
//Background Header
const header = document.querySelector('header');
document.addEventListener('scroll',function(e){
    // e.stopPropagation();
    if (window.pageYOffset >= header.clientHeight){
        header.classList.add("bgheader");
    } else {
        header.classList.remove("bgheader");
    }
});
// Toggle Menu
// B1: Lấy giá trị của Button Menu, và lấy giá trị của Nav
// B2: Toggle Class của 2 button
function menuMobile(){
    const btnMenu = document.querySelector(".lang .btnmenu");
    const nav = document.querySelector("nav");

    btnMenu.addEventListener('click', function(){
        btnMenu.classList.toggle("active")
        nav.classList.toggle("active")
    })
    
    function hideNavbar(){
        btnMenu.classList.remove("active")
        nav.classList.remove("active")
    }
    window.addEventListener('resize',function(){
        let widthwindown = this.window.innerWidth
        if (widthwindown > 992){
            hideNavbar()
        }
    })
}
menuMobile()



//Back To Top
const footer = document.querySelector('footer .container-fluid');
const backtotop = document.querySelector("footer .container-fluid a");
const textToTop = document.querySelector("footer .container .right a")

document.addEventListener('scroll',function(){
    if (window.pageYOffset >= 600 && window.pageYOffset <= 4710){
        footer.classList.add("button__visible");
    } else {
        footer.classList.remove("button__visible")
    }
});
backtotop.addEventListener('click',function(e){
    e.preventDefault();
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // FireFox, Google, Edge,...
    window.scrollTo(0,0) ;
})
textToTop.addEventListener('click',function(element_toTop){
    element_toTop.preventDefault();
    window.scrollTo(0,0);
})
// Active Page | Tabs - Nav
// const active = document.querySelectorAll('.links')
// const section = document.querySelectorAll('section')
// const active = document.querySelector(".menu ul li a")
// console.log(active)
// document.addEventListener('scroll',function(){
//     if (window.pageYOffset >= 680){
//         active.classList.remove("current")
//     } else {
//         active.classList.add("current")
//     }
// })
// function activeMenu(){
//     let len=section.length;
//     li.forEach(ltx => ltx.classList.remove("active"));
//     li[len].classList.add("active");
// }
// activeMenu();
// window.addEventListener('scroll', activeMenu);

// Scroll To Section || Active Page & Tabs - Nav
const menu = document.querySelectorAll("header .menu ul li a");
let sections = [];
function removeClass(){
    menu.forEach(function(section_element){
        section_element.classList.remove('active')
    })
}

menu.forEach(function(element){
    let link = element.getAttribute('href')
    let className = link.replace('#','')
    let section = document.querySelector('.' + className);
    sections.push(section)
    element.addEventListener('click',function(e){
        e.preventDefault();
        let positionOfSection = section.offsetTop;
        window.scrollTo({
            top: positionOfSection - 59,
        })
        removeClass();
        element.classList.add("active")
    })
})
// let heightheader = document.querySelector("header").offsetHeight
window.addEventListener('scroll', function(){
    let positionScrollofSection = window.pageYOffset;
    // sections.forEach(function(section,index){
    //     if (positionScrollofSection > section.offsetTop - header.clientHeight && positionScrollofSection < section.offsetTop + section.offsetHeight){
    //         removeClass();
    //         menu[index].classList.add('active')
    //     } else {
    //             menu[index].classList.remove('active')
    //         }
    // })
    sections.forEach(function(section,index){
        if (positionScrollofSection > section.offsetTop - header.clientHeight){
        removeClass();
            // menu.forEach(function(section_element,index_element){
            //     if (index_element != index){
            //         section_element.classList.remove('active')
            //     }
            // })
            menu[index].classList.add('active')
        } else {
            menu[index].classList.remove('active')
        }
    })
})

//Nav Button
let navList = document.querySelectorAll(".nav ul li a")
let navActive = document.querySelector("nav")
let buttonClose = document.querySelector(".lang .btnmenu")
let navScrollList = [];

navList.forEach(function(elementNav){
    let link = elementNav.getAttribute('href');
    let className = link.replace('#','');
    let section = document.querySelector('.' + className);
    navScrollList.push(section);
    elementNav.addEventListener('click',function(navButton){
        navButton.preventDefault();
        let positionNav = section.offsetTop - 59;
        window.scrollTo({
            top:positionNav,
        })
        navActive.classList.remove("active")
        buttonClose.classList.remove("active")
    })
})


//Popup Video
let button_video = document.querySelectorAll(".play_button")
let expand_button = document.querySelectorAll(".video__item")
let popup_video = document.querySelector(".popup-video")
let close_video = document.querySelector(".popup-video .close")
let iframe = document.querySelector(".popup-video iframe")
expand_button.forEach(function(element){
    element.addEventListener('click',function(){
        let video_id = element.getAttribute("data-video-id");
        iframe.setAttribute('src','https://www.youtube.com/embed/'+ video_id +'?autoplay=1')
        popup_video.style.display="flex";
    })
})
close_video.addEventListener('click', function(){
    iframe.setAttribute('src','');
    popup_video.style.display = 'none'
})
document.querySelector('.popup-video').addEventListener('click',function(){
    iframe.setAttribute('src','');
    popup_video.style.display = 'none';
})

//News Toggle
let newsToggle = document.querySelector(".news__item-wrap .--button")
let newsButtons = document.querySelectorAll(".news__item-wrap .--button a")
let itemsNews = document.querySelectorAll(".news__item-wrap .news__box")
function removeSelect(){
    newsButtons.forEach(function(e){
        e.classList.remove('select');
    })
}

function removeActive(){
    itemsNews.forEach(function(e){
        e.classList.remove('active')
    })
}

newsButtons.forEach(function(e_newsButtons,index_newsButtons){
    let currentnewsButtons = 0;
    e_newsButtons.addEventListener('click',function(e){
        e.preventDefault();
        removeSelect();
        removeActive();
        e_newsButtons.classList.add("select");
        currentnewsButtons = index_newsButtons;
        itemsNews[currentnewsButtons].classList.add("active")
    })
})

//Slider Variable
// let sliderItem = document.querySelectorAll(".slider .slider__move")
// let numberSlider = document.querySelector(".slider__fixed-left  .number")
// let dotSlider = document.querySelectorAll(".slider__fixed-left ol li")
// let currentSlider = 0;
// //Slider 
// sliderItem.forEach(function(element,index){
//     if (element.classList.contains('active')){
//         currentSlider = index;
//     }
// })
//Slider btn--next + Slider Number + Dot Select
// document.querySelector(".btnctr.--next").addEventListener('click',function(){
//     if (currentSlider < sliderItem.length - 1){
//         sliderItem[currentSlider].classList.remove("active")
//         sliderItem[currentSlider +1].classList.add("active")
//         dotSlider[currentSlider].classList.remove("select")
//         dotSlider[currentSlider +1].classList.add("select")
//         currentSlider++;
//         numberSlider.innerHTML= (currentSlider + 1).toString().padStart(2,'0')
//     } else {
//         sliderItem[currentSlider].classList.remove("active")
//         sliderItem[0].classList.add("active")
//         dotSlider[currentSlider].classList.remove("select")
//         dotSlider[0].classList.add("select")
//         currentSlider = 0;
//         numberSlider.innerHTML= (currentSlider + 1).toString().padStart(2,'0')
//     }
// })

// Slider btn--prev + Slider Number + Dot Select
// document.querySelector(".btnctr.--prev").addEventListener('click',function(){
//     if (currentSlider > 0){
//         sliderItem[currentSlider].classList.remove("active")
//         sliderItem[currentSlider - 1].classList.add("active")
//         dotSlider[currentSlider].classList.remove("select")
//         dotSlider[currentSlider -1].classList.add("select")
//         currentSlider--
//         numberSlider.innerHTML= (currentSlider + 1).toString().padStart(2,'0')
//     } else {
//         sliderItem[currentSlider].classList.remove("active")
//         sliderItem[sliderItem.length - 1].classList.add("active")
//         dotSlider[currentSlider].classList.remove("select")
//         dotSlider[sliderItem.length - 1].classList.add("select")
//         currentSlider = sliderItem.length - 1
//         numberSlider.innerHTML= (currentSlider + 1).toString().padStart(2,'0')
//     }
// })
//Funtion Goto Page
// function goTo(index){
//     sliderItem[currentSlider].classList.remove("active")
//     sliderItem[index].classList.add("active")
//     dotSlider[currentSlider].classList.remove("select")
//     dotSlider[index].classList.add("select")
//     currentSlider = index
// }
//Select Page
// dotSlider.forEach(function(element,index){
//     element.addEventListener('click',function(){
//         sliderItem[currentSlider].classList.remove("active")
//         sliderItem[index].classList.add("active")
//         dotSlider[currentSlider].classList.remove("select")
//         dotSlider[index].classList.add("select")
//         currentSlider = index
//         numberSlider.innerHTML= (index + 1).toString().padStart(2,'0')
//     })
// })
// //Form Validator
// let inputName = document.querySelector('#fullname')
// let inputDateOfBirth = document.querySelector('#date')
// let inputGender = document.querySelector('#gender')
// let inputPassword = document.querySelector('#password')
// let inputEmail = document.querySelector('#email')
// let inputPhone = document.querySelector('#phone')
// let validateMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let submitButton = document.querySelector("#form .form-submit")

// submitButton.addEventListener('click',function(element){
//     element.preventDefault()
//     document.querySelectorAll('.error').forEach(function(item){
//         item.remove()
//     })
//     // let currentDay = new Date();
//     // let currentYear = currentDay.getFullYear();
//     // console.log(currentYear)
//     if (inputName.value == '' || inputName.value.length <= 4){
//         inputName.insertAdjacentHTML("afterend","<span class='error' style='color:red'>Vui lòng nhập lại</span>")
//     }
//     // Logic Check 
//         // var currentDay = new Date();
//         // var Check currentYear = currentDay.getFullYear(); 
//     if (inputDateOfBirth.value == ''){
//         inputDateOfBirth.insertAdjacentHTML("afterend","<span class='error' style='color:red'>Vui lòng nhập đầy đủ</span>")
//     }
//     if (inputGender.value != 'Nam' && inputGender.value !='Nu'){
//         inputGender.insertAdjacentHTML("afterend","<span class='error' style='color:red'>Vui lòng nhập lại</span>")
//     }
//     if (inputPassword.value.length < 6){
//         inputPassword.insertAdjacentHTML("afterend","<span class='error' style='color:red'>Vui lòng nhập lại</span>")
//     }
//     if (inputEmail.value == ''){
//         inputEmail.insertAdjacentHTML("afterend","<span class='error' style='color:red'>Vui lòng nhập lại</span>")
//     }
//     if (!!Number(inputPhone.value) == !!NaN){
//         inputPhone.insertAdjacentHTML("afterend","<span class='error' style='color:red'>Vui lòng nhập lại</span>")
//     } 
// })

// function validateEmail(element) {
//     var element = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return element.test(email);
// }
// validateEmail(inputEmail.value);
// console.log(validateEmail(inputEmail.value))

// slider
let $carousel= $('.slider__move-wrap');
$carousel.flickity({
//  option
cellAlign:'left',
prevNextButtons: false,
contain:true,
wrapAround:true,
autoPlay: true,
pageDots: true,
on:{
    ready: function(){
            let dots = $('.flickity-page-dots');
            paging = $('.slider__fixed-left');
            dots.appendTo(paging);
    },
    change: function(index){
        let number = $('.slider__fixed .number');
        let indexPage = index + 1;
        number.text(indexPage.toString().padStart(2,0))
    }
}
})

// prev
$('.slider__fixed-right .btnctr-prev').on('click', function() {
    $carousel.flickity('previous');
})
$('.slider__fixed-right .btnctr-next').on('click', function() {
    $carousel.flickity('next');
})

const btn = $('.slider__move-text a');
btn.on('click', function(e){
    e.preventDefault();
})
// //slider bottom
let $carouselBottom = $('.slider-bottom__flex')
$carouselBottom.flickity({
    //option
    prevNextButtons: false,
    cellAlign:'left',
    contain:true,
    // wrapAround:true,
    //page
    pageDots:false,
})
var $carouselProgessBar = $('.slider-bottom__flex').flickity();
var $progressBar = $('.slider-bottom__progress');

$carouselProgessBar.on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});

Fancybox.bind('[data-fancybox="gallery__img"]', {
    Toolbar: {
      autoEnable: true,
    },
  });
// Fancybox.bind('[data-fancybox="gallery__img"]', {

//     animated: false,
//     showClass: false,
//     hideClass: false,
  
//     Toolbar: false,
  
//     closeButton: "top",
//     click: false,
//     dragToClose: false,
  
//     Carousel: {
//       // Disable content slide animation
//       friction: 0,
  
//       // Disable touch guestures
//       Panzoom: {
//         touch: false,
//       },
  
//       Navigation: false,
//     },
  
//     Image: {
//       // Disable animation from/to thumbnail on start/close
//       zoom: false,
  
//       // Disable zoom on scroll event
//       wheel: false,
  
//       // Disable zoom on image click
//       click: false,
  
//       // Fit image horizontally only
//       fit: "contain-w",
//     },
  
//     // Center thumbnails only if draggable
//     Thumbs: {
//       minScreenHeight: 0,
//       Carousel: {
//         center: function () {
//           return this.elemDimWidth > this.wrapDimWidth;
//         },
//       },
//     },
//   });


