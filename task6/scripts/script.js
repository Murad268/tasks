function clickHamburger(trigger, menuClass, activeClass, menuActive) {
   const button = document.querySelector(trigger);
   const menu = document.querySelector(menuClass);
   button.addEventListener("click", () => {
      button.classList.toggle(activeClass);
      menu.classList.toggle(menuActive);
   
   })
}

clickHamburger(".navbar__hamburger", ".menu", 'navbar__hamburger__clicked', 'menu__active');





$('.slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots: true,
   prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left"></i></button>',
   nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right"></i></button>',
   responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }
    ]
 });

 $(".acordeon").on("click", ".acordeon-cabecera", function() {
   $(this).toggleClass("active").next().slideToggle();
   $(".acordeon-cabecera i").toggleClass("active__arr");
   $(this).toggleClass("acc__title__active")
 });

// const sliderWidth = parseInt(document.querySelector('.carusel__slider').clientWidth);
// const marginRight = parseInt(getComputedStyle(document.querySelector('.carusel__wrapper')).columnGap);
// const innerr = document.querySelector('.carusel__inner').clientWidth;
// const inner = document.querySelector('.carusel__wrapper');
// const left = document.querySelector(".slider_left");
// const right = document.querySelector(".slider_right");
// const slidersLength = document.querySelectorAll(".carusel__slider").length;
// const sliders = document.querySelectorAll(".carusel__slider");
// const lastOffset = ((sliderWidth+marginRight)*slidersLength)-(sliderWidth+marginRight);
// let offset = 0;
// let points = Math.ceil((innerr/(sliderWidth+marginRight))/slidersLength)

// function lefting() {
//    if(offset>=lastOffset) {
//       offset=0
//    } else {
//       offset+= (sliderWidth+marginRight);

//       console.log(lastOffset)
//       console.log(offset)
//    }
//    inner.style.transform = `translateX(-${offset}px)`;
   
// }

// function righting() {
//       if(offset>0) {
//          offset+= -(sliderWidth+marginRight);

//          console.log(lastOffset)
//          console.log(offset)
//       } else {
//          offset=lastOffset
//          console.log(lastOffset)
//          console.log(offset)
//       }
   
//       inner.style.transform = `translateX(-${offset}px)`;
// }


// left.addEventListener("click", righting)
// right.addEventListener("click",lefting)
// inner.addEventListener("touchstart", righting);


// for(let i = 0; i <=points; i++) {
//    let inner =  document.createElement("div");
//    inner.classList.add("slider__point");
//    document.querySelector(".slider__points").appendChild(inner);

// }

// document.querySelectorAll(".slider__point").forEach((el, i) => {
   
   
//    document.querySelectorAll(".slider__point")[0].classList.add('slider__point__active')
//    el.addEventListener("click", (e) => {
//       offset=(sliderWidth+marginRight)*i*3
//       inner.style.transform = `translateX(-${offset}px)`;
//       document.querySelectorAll(".slider__point").forEach((elem, i) => {
//          elem.classList.remove('slider__point__active');
//       })

//       e.target.classList.add('slider__point__active')
//    })
// })