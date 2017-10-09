(function(global) {
  RGZ = {};

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
    $(e).find(".tile-text").removeClass("hidden").css({
      "top": "40vh",
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
    $(".tile-text").addClass("hidden").css({
      "top": "45vh",
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

  global.$RGZ = RGZ;
})(window);
