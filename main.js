'use strict';
// const titleAni = document.querySelector("#section1 .title__container");


// document.addEventListener("scroll", () => {

//   // if (window.scrollY >= titleAni.getBoundingClientRect().top) {
//   //   alert("hi");
//   // }

// });
const navbar = document.querySelector("#navbar");
navbar.addEventListener("mouseover", () => {
  navbar.style.height = "auto";
});
navbar.addEventListener("mouseout", () => {
  navbar.style.height = "72px";
});

// animation trigger
const animationTrigger = ".gsap__ani .grey__box";
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  let fadeinContainer = gsap.timeline({
    scrollTrigger: {
      trigger: '#section1 .title__container',
      start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,

    }
  });
  fadeinContainer.from('#section1 .title__container', { opacity: 0, y: "100%" })
  fadeinContainer.to('#section1 .title__container', { duration: 1, opacity: 1, y: "0%", stagger: 0.3, })

  // img--bg animation
  gsap.registerPlugin(ScrollTrigger);


  // 1번째 이미지 배경 애니메이션
  let imgBgAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,
    }
  });
  imgBgAni.from('.gsap__ani .grey__box', { opacity: 0, x: "-100%", delay: 0.3 })
  imgBgAni.to('.gsap__ani .grey__box', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  // img animation

  gsap.registerPlugin(ScrollTrigger);

  let imgAni = gsap.timeline({
    scrollTrigger: {
      // trigger: '.gsap__ani img',
      trigger: animationTrigger,
      start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,

    }
  });
  imgAni.from('.gsap__ani img', { opacity: 0, x: "-100%", delay: 0.6 })
  imgAni.to('.gsap__ani img', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  // 1번째 이미지 배경 애니메이션

  // 두 번째 애니메이션
  let imgSecondBgAni = gsap.timeline({
    scrollTrigger: {
      // trigger: '.gsap__ani--reverse .grey__box',
      trigger: animationTrigger,
      start: 'top 30%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,
    }
  });
  imgSecondBgAni.from('.gsap__ani--reverse .grey__box', { opacity: 0, x: "100%", delay: 0.3 })
  imgSecondBgAni.to('.gsap__ani--reverse .grey__box', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  // img animation

  gsap.registerPlugin(ScrollTrigger);

  let imgSecondAni = gsap.timeline({
    scrollTrigger: {
      // trigger: '.gsap__ani--reverse img',
      trigger: animationTrigger,
      start: 'top 30%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,

    }
  });
  imgSecondAni.from('.gsap__ani--reverse img', { opacity: 0, x: "100%", delay: 0.6 })
  imgSecondAni.to('.gsap__ani--reverse img', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })

  //세 번째 애니메이션
  let imgThirdBgAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 10%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,
    }
  });
  imgThirdBgAni.from('.third__ani .grey__box', { opacity: 0, x: "-100%", delay: 0.3 })
  imgThirdBgAni.to('.third__ani .grey__box', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  // img animation

  gsap.registerPlugin(ScrollTrigger);

  let imgThirdAni = gsap.timeline({
    scrollTrigger: {
      // trigger: '.gsap__ani img',
      trigger: animationTrigger,
      start: 'top 10%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,

    }
  });
  imgThirdAni.from('.third__ani img', { opacity: 0, x: "-100%", delay: 0.6 })
  imgThirdAni.to('.third__ani img', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  //세 번째 애니메이션

  let slideList = document.querySelectorAll(".best__slide");
  let currentSlideCount = document.querySelector(".current--slide");
  let totalSlideCount = document.querySelector(".total--slide");
  totalSlideCount.innerText = slideList.length;


  var swiper = new Swiper(".best__item__contianer", {
    slidesPerView: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'progressbar',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
    on: {
      activeIndexChange: function () {


        currentSlideCount.innerText = this.realIndex + 1;


      }
    }
  });
});//지우면안됨

