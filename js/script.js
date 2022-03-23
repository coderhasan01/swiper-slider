$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          speed: 1000,
        // Use pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
});