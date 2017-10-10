(function(global) {
  RGZ = {};

  RGZ.nav = 0;

  var insertHtml = function(selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  RGZ.tileMouseOver = function(e) {
    $(".tile").removeClass("col-4");
    $(".tile").addClass("col-3");
    $(e).removeClass("col-3").addClass("col-6").css({
      "background-color": "#E5EEC1"
    });
    $(e).find(".tile-title").css({
      "top": "-15vh",
      "color": "#333",
      "font-size": "4vh"
    });
    // if ($(e).attr("id") == "book") $(e).find(".tile-title").css({
    //   "color": "#6EBC7C",
    //   "font-size": "3.5vh"
    // });
    // else if ($(e).attr("id") == "stat") $(e).find(".tile-title").css({
    //   "color": "#3EACA8",
    //   "font-size": "3.5vh"
    // });
    // else if ($(e).attr("id") == "info") $(e).find(".tile-title").css({
    //   "color": "#547A82",
    //   "font-size": "3.5vh"
    // });
    $(e).find(".tile-line").removeClass("hidden").css({
      "width": "60%"
    });
    $(e).find(".tile-text").removeClass("hidden").css({
      "top": "40vh",
      "opacity": "1"
    });
    $(e).find(".tile-button").removeClass("hidden").css({
      "top": "54vh",
      "opacity": "1"
    });
  };

  RGZ.tileMouseOut = function() {
    $(".tile").removeClass("col-3 col-6").addClass("col-4");
    $(".tile-title").css({
      "top": "0",
      "color": "#E5EEC1",
      "font-size": "3vh"
    });
    $(".tile-line").addClass("hidden").css({
      "width": "0"
    });
    $(".tile-text").addClass("hidden").css({
      "top": "45vh",
      "opacity": "0"
    });
    $(".tile-button").addClass("hidden").css({
      "top": "59vh",
      "opacity": "0"
    });
    $("#book").css({
      "background-color": "#6EBC7C"
    });
    $("#stat").css({
      "background-color": "#3EACA8"
    });
    $("#info").css({
      "background-color": "#547A82"
    });
  };

  RGZ.navi = function(n) {
    //TODO: put history
    if (n < 0 || n > 3) return;
    else if (n == 0) {
      $("#navi-menu").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#navi-landing").css({
          "opacity": "1"
        });
      }, 600);
      //get current nav and make index.html accordingly with col-12
      //col-4 on all tiles immediately on insert html
      RGZ.nav = 0;
    } else {
      if (RGZ.nav == 0) {
        $("#navi-landing").css({
          "opacity": "0"
        });
        $(".tile-title, .tile-line, .tile-text, .tile-button").css({
          "opacity": "0",
          "-webkit-transition": "opacity 0.4s ease",
          "-moz-transition": "opacity 0.4s ease",
          "transition": "opacity 0.4s ease"
        });
        $(".tile").removeAttr("onmouseover");
        $(".tile").removeAttr("onmouseout");
        setTimeout(function() {
          $(".tile").css({
            "max-width": "0"
          });
          $("#" + ((n == 1) ? "book" : ((n == 2) ? "stat" : "info"))).removeClass("col-6").addClass("col-12").css({
            "max-width": "inherit",
            "background-color": "#E5EEC1"
          });
          $(".tile-title, .tile-line, .tile-text, .tile-button").addClass("gone");
        }, 400);
        setTimeout(function() {
          $("#navi-menu").css({
            "opacity": "1"
          });
        }, 600);
      }
      $("#navi-menu div span").removeClass("active");
      $("#navi-" + ((n == 1) ? "book" : ((n == 2) ? "stat" : "info")) + " span").addClass("active");
      //expand first, others are width=0
      //replace html
      RGZ.nav = n;
      console.log("❤");
    }
  };

  RGZ.footMouseOver = function() {
    $("#foot").css({
      "height": "23vh"
    });
    $("#foot-logo, #foot-title").removeClass("hidden").css({
      "opacity": "1"
    });
    $("#foot-text-left, #foot-text-right").removeClass("hidden").css({
      "top": "7vh",
      "opacity": 1
    });
  };

  RGZ.footMouseOut = function() {
    $("#foot").css({
      "height": "3vh"
    });
    $("#foot-logo, #foot-title").addClass("hidden").css({
      "opacity": "0"
    });
    $("#foot-text-left, #foot-text-right").addClass("hidden").css({
      "top": "10vh",
      "opacity": 0
    });
  };

  global.$RGZ = RGZ;
})(window);
