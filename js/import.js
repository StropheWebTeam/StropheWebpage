document.write('<script type="text/javascript" src="../js/original.js"></script>');
document.write('<script type="text/javascript" src="../slick/slick.js"></script>');
document.write('<script type="text/javascript" src="../slick/slick.min.js"></script>');

$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".variable").slick({
      dots: true,
      infinite: true,
      variableWidth: true
    });
  });