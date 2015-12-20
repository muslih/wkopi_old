(function() {
  $(document).ready(function() {
    var accessId, accessToken;
    accessId = '47401493';
    accessToken = '304071833.1677ed0.7344f1a2305f47a3ae42c019ff782e8a';
    $('#listgaleri').pongstgrm({
      accessId: accessId,
      accessToken: accessToken
    });
  });

  $(function() {
    var url;
    url = window.location.pathname;
    console.log(url);
    return $('nav a').each(function() {
      if ($(this).attr('href') === url) {
        return $(this).addClass('active');
      } else {
        return $('#nav li').first(function() {
          return a.addClass('active');
        });
      }
    });
  });

  $(function() {
    var head, link, logo;
    head = $('header');
    logo = $('#logo img');
    link = $('nav li').children();
    return $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return head.addClass('fill');
      } else {
        return head.removeClass('fill');
      }
    });
  });

  $(function() {
    return $('header .btn').click(function(e) {
      $('#menuResp').slideToggle();
      return console.log('waluh');
    });
  });

  $(function() {
    return $('#respToggle').click(function(e) {
      $('#respToggle i').fadeToggle();
      return $('#menuResp').fadeToggle();
    });
  });

  $(function() {
    $('nav li a[href*=#]').click(function(e) {
      var target;
      $('#menuResp').slideUp();
      $('#respToggle i').fadeToggle();
      e.preventDefault();
      target = void 0;
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 90
          }, 1000);
          false;
        }
      }
      if ($(this).attr('href') === '#home') {
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      }
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      return $("#toTop").fadeIn();
    } else {
      return $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function() {
    return $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });

  $(function() {
    $('.map').addClass('scrolloff');
    $('#gerai').on('mouseup', function() {
      $('.map').addClass('scrolloff');
    });
    $('#gerai').on('mousedown', function() {
      $('.map').removeClass('scrolloff');
    });
    return $('.map').mouseleave(function() {
      $('.map').addClass('scrolloff');
    });
  });

}).call(this);
