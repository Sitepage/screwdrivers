$(document).ready(function () {

    $('.panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
        return false;

    });
    
    $('.slider_block').slick({
        nextArrow: '<button type="button" class="slick_btn slick-next"></button>', 
        prevArrow: '<button type="button" class="slick_btn slick-prev"></button>', 
        infinite:true, 
        dots:false,
        slidesPerRow: 1,
        rows: 2,
    });

    $('.header-btn').on('click', function(){
        $('.menu ul').slideToggle();
      });
    
});
