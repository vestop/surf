$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrow slider-right" src="images/arrow-right.svg" alt="">',
    prevArrow: '<img class="slider-arrow slider-left" src="images/arrow-left.svg" alt="">',
    asNavFor: '.slider__dots',

  });

  $('.slider__dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    nextArrow: '<img class="slider-arrow slider-right" src="images/arrow-right.svg" alt="">',
    prevArrow: '<img class="slider-arrow slider-left" src="images/arrow-left.svg" alt="">',
    asNavFor: '.surf__map',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: false,
        }
      },
    ]
  });
  $('.surf__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.surf__slider',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
  });

  $('.travel__slider, .sleep__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrow slider-right" src="images/arrow-right.svg" alt="">',
    prevArrow: '<img class="slider-arrow slider-left" src="images/arrow-left.svg" alt="">',
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg"></div><div class="quantity-button quantity-down"><img src="images/minus.svg"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function () {
    var parents = $(this).parents('.item-slider__info');
    let summ = ($('.guests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
    $('.summ', parents).html('$' + summ.toFixed(1));
  });


  $('.quantity').each(function () {
    var parents = $(this).parents('.item-slider__info');
    let summ = ($('.guests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
    $('.summ', parents).html('$' + summ.toFixed(1));
  });


  $(".menu-btn").click(function () {
    $(".overlay").fadeToggle(200);
    $(this).toggleClass('btn-open').toggleClass('btn-close');
  });

  $('.overlay').on('click', function () {
    $(".menu-btn").toggleClass('btn-open').toggleClass('btn-close');
  });

  $('.menu-mobile').on('click', function () {
    $(".overlay").fadeToggle(200);
    $(".menu-btn").toggleClass('btn-open').toggleClass('btn-close');
  });



  new WOW().init();

  $(window).on('load', function () {

    new WOW().init();
  });

})