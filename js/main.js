$(document).ready(function() {

  $('#content-one').show();
  $('#content-two').hide();
  $('#content-three').hide();
  $('#content-four').hide();
  $('#content-five').hide();
  $('#content-six').hide();

  // DENTAL BRACES
  $('#tab-one').hover(function() {
    $('#tab-one').addClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');
    $('#tab-six').removeClass('active');

    $('#content-one').show();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').hide();
    $('#content-six').hide();
  })

  // DENTAL IMPLANTS
  $('#tab-two').hover(function() {
    $('#tab-one').removeClass('active');
    $('#tab-two').addClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');
    $('#tab-six').removeClass('active');

    $('#content-one').hide();
    $('#content-two').show();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').hide();
    $('#content-six').hide();
  })

  // COSMETIC DENTISTRY
  $('#tab-three').hover(function() {
    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').addClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');
    $('#tab-six').removeClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').show();
    $('#content-four').hide();
    $('#content-five').hide();
    $('#content-six').hide();
  })

  // CHILDREN’S DENTAL
  $('#tab-four').hover(function() {
    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').addClass('active');
    $('#tab-five').removeClass('active');
    $('#tab-six').removeClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').show();
    $('#content-five').hide();
    $('#content-six').hide();
  })

  // TEETH CLEANING
  $('#tab-five').hover(function() {
    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').addClass('active');
    $('#tab-six').removeClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').show();
    $('#content-six').hide();
  })

  // TEETH CLEANING
  $('#tab-six').hover(function() {
    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');
    $('#tab-six').addClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').hide();
    $('#content-six').show();
  })









});
