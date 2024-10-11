$(document).ready(function(){
    $('.menu__list-item').mouseenter(function(){
        var linkPosition = $(this).find('.menu__list-link').position();
        var block = $(this).find('.hidden-block');
        block.css({
            top: linkPosition.top + $(this).find('.menu__list-link').outerHeight(),
            left: linkPosition.left
        });
        block.slideDown();
    }).mouseleave(function(){
        $(this).find('.hidden-block').slideUp();
    });
})

$(document).ready(function(){
    var hasBeenTrigged = false;

    $(window).on('scroll', function() {
        var elementTop = $('.how__does-inner').offset().top;
        var elementBottom = elementTop + $('.how__does-inner').outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (!hasBeenTrigged && elementBottom > viewportTop && elementTop < viewportBottom) {
            $(".how__does-item").each(function(index) {
                $(this).delay(400 * index).animate({
                    opacity: 1,
                    transform: 'translateY(0)'
                }, 800);
            });
            hasBeenTrigged = true; // Позначка, що анімація вже відбулася
        }
    });
});





const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('menu__list--active')
})

const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


