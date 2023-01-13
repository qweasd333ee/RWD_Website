// 輪播圖
$('.carousel').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})

// 漢堡 menu
$('.navbarBtn').on('click', function () {
  console.log($('.navbarBtn i').attr('class'))
  if ($('.navbarBtn i').attr('class') === 'fa-solid fa-align-justify') {
    $('.navbarBtn i').removeClass('fa-solid fa-align-justify')
    $('.navbarBtn i').addClass('fa-regular fa-rectangle-xmark')
    $('.navbarMenu').removeClass('display-none')
    $('.navbarMenu').addClass('display-block')
  } else {
    $('.navbarBtn i').removeClass('fa-regular fa-rectangle-xmark')
    $('.navbarBtn i').addClass('fa-solid fa-align-justify')
    $('.navbarMenu').removeClass('display-block')
    $('.navbarMenu').addClass('display-none')
  }
  
  $(this).addClass('open')
})

$('.navbarMenu a').on('click', function () {
  $('.navbarMenu a').removeClass('active')
  $(this).addClass('active')
})

// 註冊套件
gsap.registerPlugin(ScrollTrigger)

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#firstPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 0.7,
    ease: 'power4'
  }
})

tl1
  .fromTo('#firstPage .text-1', { opacity: 0 }, { opacity: 1 })
  .fromTo('#firstPage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#firstPage .text-3', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#firstPage .text-4', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#firstPage .text-5', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#secondPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 0.7,
    ease: 'power4'
  }
})

tl2
  .fromTo('#secondPage .text-1', { opacity: 0 }, { opacity: 1 })
  .fromTo('#secondPage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .secPageFirstPic', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .secPageSecondPic', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .text-3', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .text-4', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .secPageThirdPic', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .secPageFourthPic', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#secondPage .text-5', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#thirdPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 0.8,
    ease: 'power4'
  }
})

tl3
  .fromTo('#thirdPage .thirdPagePic', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#thirdPage .text-1', { opacity: 0 }, { opacity: 1 })
  .fromTo('#thirdPage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#thirdPage .text-3', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#thirdPage .text-4', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#thirdPage .text-5', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#forthPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 0.8,
    ease: 'power4'
  }
})

tl4
  .fromTo('#forthPage .text-1', { opacity: 0 }, { opacity: 1 })
  .fromTo('#forthPage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#forthPage .text-3', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '#fivePage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 0.8,
    ease: 'power4'
  }
})

tl5
  .fromTo('#fivePage .fivePagePic', { opacity: 0 }, { opacity: 1 })
  .fromTo('#fivePage .text-1', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#fivePage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '#sixPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 1,
    ease: 'power4'
  }
})

tl6
  .fromTo('#sixPage .col:nth-child(1)', { opacity: 0 }, { opacity: 1 })
  .fromTo('#sixPage .col:nth-child(2)', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sixPage .col:nth-child(3)', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sixPage .col:nth-child(4)', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sixPage .col:nth-child(5)', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sixPage .col:nth-child(6)', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: '#sevenPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none'
    // markers: true
  },
  defaults: {
    duration: 0.8,
    ease: 'power4'
  }
})

tl7
  .fromTo('#sevenPage .sevenPagePic', { opacity: 0 }, { opacity: 1 })
  .fromTo('#sevenPage .text-1', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sevenPage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sevenPage .text-3', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sevenPage .text-4', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#sevenPage .text-5', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: '#eightPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none',
    // markers: true
  },
  defaults: {
    duration: 0.8,
    ease: 'power4'
  }
})

tl8
  .fromTo('#eightPage .text-1 h1', { opacity: 0 }, { opacity: 1 })
  .fromTo('#eightPage .text-1 p', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#eightPage .carousel', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#eightPage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#eightPage .eightPageCard', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: '#ninePage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none',
    // markers: true
  },
  defaults: {
    duration: 0.8,
    ease: 'power4'
  }
})

tl9
  .fromTo('#ninePage .text-1', { opacity: 0 }, { opacity: 1 })
  .fromTo('#ninePage .text-2', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('#ninePage .text-3', { opacity: 0 }, { opacity: 1 }, '-=0.5')

const tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: '#tenPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none',
    // markers: true
  },
  defaults: {
    duration: 1,
    ease: 'power4'
  }
})

tl10.fromTo('#tenPage .row:nth-child(1)', { opacity: 0 }, { opacity: 1 }).fromTo('#tenPage .row:nth-child(2)', { opacity: 0 }, { opacity: 1 }, '-=0.5')
