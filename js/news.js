const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('menu__list--active')
})


$('.skill__bar').each(function (){
    $(this).find('.skill__bar-bar').animate({
        width:$(this).attr('data-percent')
    }, 2000)
});

$(document).ready(function() {
    $('.details-btn').click(function() {
        $(this).siblings('.details').slideToggle();
    });
});
