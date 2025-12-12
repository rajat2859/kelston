const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: { delay: 5000 },
    // Use our custom pagination container instead of the default swiper pagination
    pagination: {
        el: '.swiper-custom-pagination',
        clickable: true,
        // Render custom bullet markup (gives us a custom-looking dot)
        renderBullet: function (index, className) {
            return '<span class="custom-bullet ' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
});