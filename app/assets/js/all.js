$(document).ready(function() {
  $(window).scroll(function() {
    const scrolled = $(this).scrollTop();
    const windowHeight = $(window).height();
    const gearBg = $('.gear-bg').offset().top;
    const strippedBg = $('.stripped-bg').offset().top;
    const jumbotron = $('.jumbotron').offset().top;

    if (scrolled + windowHeight >= gearBg) {
      $('.gear-bg').css("background-position",`-${parseInt($(this).scrollTop()*0.1)}px center`);
    }

    if (scrolled + windowHeight >= strippedBg) {
      $('.stripped-bg').css("background-position",`-${parseInt($(this).scrollTop()*0.1)}px center`);
    }

    // if (scrolled + windowHeight >= jumbotron) {
    //   $('.jumbotron').css("background-position",`center -${parseInt($(this).scrollTop()*0.2)}px`);
    // }
  })
});