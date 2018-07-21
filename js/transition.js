var div_btn = $('.btn button');
var box = $('.box');

div_btn.on('click', function(){
  $(this).toggleClass('box-act');
});