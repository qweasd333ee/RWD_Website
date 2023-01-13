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
        slidesToScroll: 1,
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
});

// 註冊套件
gsap.registerPlugin(ScrollTrigger)

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#firstPage',
    start: 'top 90%',
    end: 'bottom 90%',
    toggleActions: 'play none none none',
    scrub: 2,
    markers: true
  },
  defaults: {
    duration: 1,
    ease: 'power1'
  }
})

tl1
  .from('.col', {
    opacity: 0
  })
  .from('.text-2', {
    opacity: 0
  }, '-=0.5')
  .from('.text-3', {
    opacity: 0
  }, '-=0.5')
  .from('.text-4', {
    opacity: 0
  }, '-=0.5')
  .from('.text-5', {
    opacity: 0
  }, '-=0.5')