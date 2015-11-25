var rotated = false;
$('.header-bottom').on('click', function() {
  if(rotated === false) {
    $('.perspective-wrapper').addClass('rotated');
      rotated = true;
  } else {
    $('.perspective-wrapper').removeClass('rotated');
      rotated = false;
  }
  console.log('rotate');
});