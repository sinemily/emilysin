$( document ).ready(function() {

  $('a.expand').on('click', function() {
    $('ol.show-hide').show();
    $(this).parent().find('a.expand').hide();
    $(this).parent().find('a.collapse').show();
  });

  $('a.collapse').on('click', function() {
    $('ol.show-hide').hide();
    $(this).parent().find('a.collapse').hide();
    $(this).parent().find('a.expand').show();
  });

});
