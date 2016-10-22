$(document).ready(function() {
  $('button').on('click', function() {
    $(this).addClass('animated rollOut');
    $('header, main, aside, footer').fadeIn('slow');
  });
});
