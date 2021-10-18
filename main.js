

// $('.navbar__menu').hover(function(){
//  $('#header,#navbar').addClass('on');  
// },function(){
//   $('#header,#navbar').removeClass('on');  
// });

// 키자마자 조건
if ($(window).width() >= 1150) {
  $('#header').addClass('pc_menu')

} else {
  $('#header').removeClass('pc_menu')
}
$(window).on("resize", function () {
  if ($(window).width() >= 1150) {
    $('#header').addClass('pc_menu')
  } else {
    $('#header').removeClass('pc_menu')
  }
});
// $('.pc_menu .navbar__menu').on("mouseover", function () {
//   $('#header,#navbar').addClass('on');
// });
// $('.pc_menu .navbar__menu').on("mouseleave", function () {
//   $('#header,#navbar').removeClass('on');
// });

// 리사이징 했을 때 pc_menu 가 있으면 mouseover, mouseleave 기능 
$(document).on("mouseover", ".pc_menu .navbar__menu", function () {
  $('#header,#navbar').addClass('on');
})
$(document).on("mouseleave", ".pc_menu .navbar__menu", function () {
  $('#header,#navbar').removeClass('on');
})

// 스크롤 내렸을 때 10보다 크면 header 배경색 넣기
$(window).scroll(function () {
  let curr = $(window).scrollTop();
  if (curr >= 10) {
    $('#header').addClass('on');
  } else {
    $('#header').removeClass('on');
  }
});




const menuBtn = document.querySelector(".menu__btn");
const body = document.querySelector("body");
const nav = document.querySelector("#navbar");
const navbar = document.querySelector("#navbar nav");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("on");
  body.classList.toggle('hidden');
  nav.classList.toggle('show');
});

// // 1150px 이상에서 사용할 스크립트 } else { // 1024px 미만에서 사용할 스크립트 }

//해상도 1150px Global menu 클릭 이벤트
const globalBtn = document.querySelector(".response__global > li");
const globallist = document.querySelector(".response__global--none");

globalBtn.addEventListener("click", () => {
  globallist.classList.toggle('active')
});

// 모바일 서브메뉴 아코디언
$('#navbar .navbar__menu > li > a').click(function (event) {
  event.preventDefault();
  var submenu = $(this).next();
  submenu.toggleClass('subslidemenu');
  $('.subslidemenu').not(submenu).removeClass('subslidemenu');
  return false
});

// Top으로 auto Scroll하기
const topScrollBtn = document.querySelector(".arrowtop");
topScrollBtn.addEventListener("click", () => {
  let scrollTo = document.querySelector("#main__banner");
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});


//footer dorop Down menu

const dropBtn = document.querySelector(".dropdownbtn");
const dropdown = document.querySelector(".footer__dropdownmenu");
dropBtn.addEventListener("click", () => {
  dropdown.classList.toggle('show');
});



// animation trigger
// const animationTrigger = ".first__gsap__ani .grey__box";


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
    $(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/1KGSNIG6iiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
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
      //중지를 원할 때
      $('.main__vis .controls .guage span ').css({ width: 0 }).stop()
      $(this).removeClass('pause').text('재생')
    } else {
      //재생을 원할 때
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
    slidesPerView: 1,
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
    },
    breakpoints: {
      1150: {
        slidesPerView: 3,
      },

    }
  });


  // 
  var ww = $(window).width();
  var mySwiper = undefined;

  function initmobileswiper() {

    // console.log(typeof swiper);
    // window width가 768보다 작고 스와이퍼가 실행 되지 않았을 때 스와이퍼 실행!
    if (ww < 768 && mySwiper == undefined) {
      mySwiper = new Swiper(".news-swiper", {
        slidesPerView: 1.3,
      });
    }

    //이미 실행 된 스와이프는 object 제거해도 object
    // 타입이기 때문에 제거와 동시에 undefined로 수정 
    else if (ww > 768 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined
    }

  }

  initmobileswiper();

  $(window).on("resize", function () {
    console.log("hi");
    ww = $(window).width();
    initmobileswiper();
  })


});//지우면안됨

