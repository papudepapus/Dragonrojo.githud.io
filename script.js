var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursos:true,
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev' 
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
