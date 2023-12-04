function hideBookMe() {
    $("#book-me").fadeOut()
    $('main').css("filter", "none")
  }
  function showBookMe() {
    $('#book-me').fadeIn()
    $('main').css("filter", "blur(3px)")
  }
  function bookMe() {
    if (!$("#user-name").val()) {
      $("#user-name").css('border', '1px solid red')
      $("#user-name").on("input", () => {
        $("#user-name").css('border', 'none')
      })
    }
    else if (!$("#phone-number").val()) {
      $("#phone-number").css('border', '1px solid red')
      $("#phone-number").on("input", () => {
        $("#phone-number").css('border', 'none')
      })
    }
    else if (!$("#comments").val()) {
      $("#comments").css('border', '1px solid red')
      $("#comments").on("input", () => {
        $("#comments").css('border', 'none')
      })
    }
    else {
      $.ajax({
        "url": "https://eomwxkdtf4jhlh3.m.pipedream.net",
        "data": {
          "username": $("#user-name").val(),
          "phonenumber": $("#phone-number").val(),
          "comments": $("#comments").val()
        }
      }).done(() => {
        $('#book-me *').hide()
        $('#book-me').prepend($('<img>').attr('src', "done.svg").css("width", "100px"))
        window.setTimeout(() => {
          $("#book-me").fadeOut(1, () => {
            $('main').css("filter", "none")
            $('#book-me-buttons, #book-me-cancel').show()
          })

        }, 1000)

      })

    }

  }
  function init_footprint() {
    const start_x = 100;
    const start_y = 100;
    element = $('<img>')
    element.attr("src", "foot.png")
    element.addClass("foot");
    element.position(start_x, start_y)
    $('body').append(element)
    // footprint(element, start_x, start_y, 0)
    window.setTimeout(function () { footprint(element, start_x, start_y, 0) }, 200)
  }
  function footprint(element, x, y, direction) {
    var step_distance = 10;
    var direction = Math.random() * 90 - direction;
    var x = Math.sinh(direction) / step_distance;
    var y = Math.cosh(direction) / step_distance;
    element.position(x, y);
    window.setTimeout(function () { footprint(element, x, y, direction) }, 200)
    //calc direction
    //random new direction (no more than 90 degrees of)
    //calc dx xy
    //apply nx ny to elements
    //call new function with new parameters
  }
  function toggleLanguage() {
    $(".english , .dutch").toggle()
  }
  const SCROLLTIMER = 16 * 1000
  var SCROLLWIDTH = 2000
  i = 1
  $(document).ready(function () {
    scrollReviews()
    window.setInterval(scrollReviews, SCROLLTIMER)
    if (window.location.hostname.includes(".nl") || window.location.search.includes("nl")) {
      toggleLanguage()
    }
    // $("#reviews").scroll(() => window.clearInterval())

  })
  function scrollReviews() {
    SCROLLWIDTH *= -1
    var animation = $("#reviews").animate({ scrollLeft: SCROLLWIDTH }, SCROLLTIMER);
    $("#reviews").scroll(() => animation.stop())
  }
  function show(page) {
    const pages = ["main", "reviews-container", "pricing", "the-walk", "the-workshop"]
    for (var other_page of pages) {
      $("#" + other_page).hide()
    }
    $("#" + page).show()
    if (page == 'main') {
      $('#reviews-container').show()
    }

  }