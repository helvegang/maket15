new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensivity: 1,
        eventsTarget: ".swiper-container"
    },
    slidesPerView: 'auto',
    spaceBetween: 16
}


);

