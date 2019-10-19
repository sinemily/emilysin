$( document ).ready(function() {
  $('a.menu').on('click', function() {
    $('nav.site').removeClass('mobile-closed').addClass('mobile-open');
    $('a.menu').hide();
    $('a.close').show();
  });

  $('a.close, nav.site a').on('click', function() {
    $('nav.site').removeClass('mobile-open').addClass('mobile-closed');
    $('a.menu').show();
    $('a.close').hide();
  });


  $('a.expand').on('click', function() {
    $(this).parent().find('div.chevron-control').removeClass('expanded').addClass('collapsed');
    $(this).parent().find('p.chevron-control').removeClass('collapsed').addClass('expanded');
    $(this).parent().find('a.expand').hide();
    $(this).parent().find('a.collapse').show();
  });

  $('a.collapse').on('click', function() {
    $(this).parent().find('div.chevron-control').removeClass('collapsed').addClass('expanded');
    $(this).parent().find('p.chevron-control').removeClass('expanded').addClass('collapsed');
    $(this).parent().find('a.collapse').hide();
    $(this).parent().find('a.expand').show();
  });



  $("div.slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  }
  );

  $("div.slick-2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  }
  );


});
