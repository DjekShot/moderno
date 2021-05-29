$(function(){

    $(".rate-star").rateYo({
        rating: 3.6,
        starWidth: "12px",
        readOnly: true
      });

    $('.product-slider-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
    });
    
    var mixer = mixitup('.products__inner-box');

});