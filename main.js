'use strict';
const navbar = document.querySelector("#navbar");
navbar.addEventListener("mouseover", () => {
  navbar.style.height = "auto";
});
navbar.addEventListener("mouseout", () => {
  navbar.style.height = "72px";
});

// animation trigger
const animationTrigger = ".first__gsap__ani .grey__box";

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // section1 title애니메이션
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
  // section1 title애니메이션

  // section 2 title 애니메이션
  let titleAni = gsap.timeline({
    scrollTrigger: {
      trigger: '#section2 .title__container ',
      // start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,

    }
  });
  titleAni.from('#section2 .title__container .title', { opacity: 0, y: "100%" })
  titleAni.to('#section2 .title__container .title', { duration: 1, opacity: 1, y: "0%", stagger: 0.3, })
  // section 2 title 애니메이션

  // section 2 subtitle 애니메이션
  let subTitleAni = gsap.timeline({
    scrollTrigger: {
      trigger: '#section2 .title__container ',
      // start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,

    }
  });
  subTitleAni.from('#section2 .title__container .sub__title', { opacity: 0, y: "100%", delay: 0.3 })
  subTitleAni.to('#section2 .title__container .sub__title', { duration: 1, opacity: 1, y: "0%", stagger: 0.3, })
  // section 2 subtitle 애니메이션

  // section 3 titleContainer 애니메이션
  let sectionThirdTitleAni = gsap.timeline({
    scrollTrigger: {
      trigger: '#section3 .title__container ',
      start: 'top 70%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,

    }
  });
  sectionThirdTitleAni.from('#section3 .title__container', { duration: 1, opacity: 0, y: "100%", })
  sectionThirdTitleAni.to('#section3 .title__container', { duration: 3, opacity: 1, y: "0%", stagger: 0.3, })
  // section 3 titleContainer 애니메이션

  // 1번째 이미지 배경 애니메이션
  let firstimgBgAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,
    }
  });
  firstimgBgAni.from('.first__gsap__ani .grey__box', { opacity: 0, x: "-100%", delay: 0.3 })
  firstimgBgAni.to('.first__gsap__ani .grey__box', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })

  let firstimgAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 50%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,
    }
  });
  firstimgAni.from('.first__gsap__ani img', { opacity: 0, x: "-100%", delay: 0.6 })
  firstimgAni.to('.first__gsap__ani img', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  // 1번째 이미지 배경 애니메이션

  // 두 번째 애니메이션
  let imgSecondBgAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 30%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,
    }
  });
  imgSecondBgAni.from('.second__gsap__ani--reverse .grey__box', { opacity: 0, x: "100%", delay: 0.3 })
  imgSecondBgAni.to('.second__gsap__ani--reverse .grey__box', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  let imgSecondAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 30%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,

    }
  });
  imgSecondAni.from('.second__gsap__ani--reverse img', { opacity: 0, x: "100%", delay: 0.6 })
  imgSecondAni.to('.second__gsap__ani--reverse img', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  // 두 번째 애니메이션

  //세 번째 애니메이션
  let imgThirdBgAni = gsap.timeline({
    scrollTrigger: {
      trigger: animationTrigger,
      start: 'top 10%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,
    }
  });
  imgThirdBgAni.from('.third__ani .grey__box', { opacity: 0, x: "-100%", delay: 0.3 })
  imgThirdBgAni.to('.third__ani .grey__box', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })


  let imgThirdAni = gsap.timeline({
    scrollTrigger: {

      trigger: animationTrigger,
      start: 'top 10%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,

    }
  });
  imgThirdAni.from('.third__ani img', { opacity: 0, x: "-100%", delay: 0.6 })
  imgThirdAni.to('.third__ani img', { duration: 3, opacity: 1, x: "0%", stagger: 0.3 })
  //세 번째 애니메이션

  // video__section 애니메이션
  let videoSectiopnAni = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3 .video__section",
      start: 'top 40%',
      // end: '+=300',
      toggleActions: "restart none none none",
      markers: true,

    }
  });
  videoSectiopnAni.from('#section3 .video__section', { duration: 1, opacity: 0, y: "100%", })
  videoSectiopnAni.to('#section3 .video__section', { duration: 3, opacity: 1, y: "0%", stagger: 0.3 })
  // thunb contianer 애니메이션

  //section 2 슬라이드 count and autoplay
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

