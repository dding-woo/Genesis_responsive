// 'use strict';

// $('.navbar__menu').hover(function(){
//  $('#header,#navbar').addClass('on');  
// },function(){
//   $('#header,#navbar').removeClass('on');  
// });
$('.navbar__menu').mouseover(function () {
  $('#header,#navbar').addClass('on');
});
$('.navbar__menu').mouseleave(function () {
  $('#header,#navbar').removeClass('on');
});



$(window).scroll(function () {
  let curr = $(window).scrollTop();
  if (curr >= 10) {
    $('#header').addClass('on');
  } else {
    $('#header').removeClass('on');
  }
});

// const navbar = document.querySelector("#navbar");
// navbar.addEventListener("mouseover", () => {
//   navbar.style.height = "auto";
// });
// navbar.addEventListener("mouseout", () => {
//   navbar.style.height = "72px";
// });
// Top으로 auto Scroll하기
const topScrollBtn = document.querySelector(".arrowtop__btn");
topScrollBtn.addEventListener("click", () => {
  let scrollTo = document.querySelector("#header");
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
// animation trigger
const animationTrigger = ".first__gsap__ani .grey__box";

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // section1 title애니메이션
  let fadeinContainer = gsap.timeline({
    scrollTrigger: {
      trigger: '#section1 .title__container',
      start: 'top 80%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,
      scrub: 1,
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
      start: 'top 80%',
      // end: '+=300',
      toggleActions: "restart none none none",
      // markers: true,
      scrub: 1,

    }
  });
  sectionThirdTitleAni.from('#section3 .title__container', { duration: 1, opacity: 0, y: "100%", })
  sectionThirdTitleAni.to('#section3 .title__container', { duration: 3, opacity: 1, y: "0%", stagger: 0.3, })
  // section 3 titleContainer 애니메이션

  // 1번째 이미지 배경 애니메이션

  $(window).scroll(function () {
    ani_curr = $(window).scrollTop();

    scroll_motion('#section1 .first', $(window).height() / 1.5);
    scroll_motion('#section1 .second', $(window).height() / 1.5);
    scroll_motion('#section1 .third', $(window).height() / 1.5);
  })

  // x  - 트리거  #section1 .sec01
  // z - offset $(window).height() / 1.5


  function scroll_motion(trigger, offset) {
    target = $(trigger).offset().top - offset;
    if (ani_curr > target) {
      $(trigger).addClass('on');
    }

  }
  $('.video__thumb').click(function (e) {
    e.preventDefault();
    $(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/qxbMHruxM_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  });


  //세 번째 애니메이션

  // video__section 애니메이션
  // let videoSectiopnAni = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#section3 .video__section",
  //     start: 'top 40%',
  //     // end: '+=300',
  //     toggleActions: "restart none none none",
  //     // markers: true,

  //   }
  // });
  // videoSectiopnAni.from('#section3 .video__section', { duration: 1, opacity: 0, y: "100%", })
  // videoSectiopnAni.to('#section3 .video__section', { duration: 3, opacity: 1, y: "0%", stagger: 0.3 })
  // thunb contianer 애니메이션


  var mainslide = new Swiper(".main__vis", {
    loop: true,
    on: {
      init: function () {
        ani();
      },
      slideChange: function () {
        ani();
      }
    },
    pagination: {
      el: ".main__vis-pagenation",
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
      }
    }
  });

  function ani() {
    $('.main__vis .controls .guage span ').css({ width: 0 }).stop().animate({ width: 100 + '%' }, 5000, function () {
      mainslide.slideNext();
    });
  }
  $('.controls .btn').click(function () {
    if ($(this).hasClass('pause')) {
      //재생이 되고 있는 상태
      $('.main__vis .controls .guage span ').css({ width: 0 }).stop()
      $(this).removeClass('pause').text('재생')
    } else {
      //재생이 중지된 상태
      ani();
      $(this).addClass('pause').text('정지')
    }
  });

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
      el: ".best__progressbar",
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

