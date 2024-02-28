$('#course-slider').owlCarousel({
    loop:true,
    margin: 20,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
            margin:15,
        },
        1000:{
            items:3
        },
        1440: {
            items:3
        }
    }
})

$('#test-slider').owlCarousel({
    loop:true,
    center:true,
    nav:true,
    dots:true,
    dotsEach:3,
    responsive:{
        0:{
            items:1,
            margin:5,
        },
        600:{
            items:2,
            margin:20,
        },
        1000:{
            items:2,
            margin:30,
        },
        1440: {
            items:3,
            margin:40,
        }
    }
})

// new WOW().init();
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  AOS.init();
