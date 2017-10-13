(function(global) {
  RGZ = {};

  RGZ.nav = 0;

  var insertHtml = function(selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  document.addEventListener("DOMContentLoaded", function(event) {
    if (history.state != null) {
      if (history.state.state != null) {
        switch (history.state.state) {
          case 0:
            RGZ.navi(0);
            break;
          case 1:
            RGZ.navi(1);
            break;
          case 2:
            RGZ.navi(2);
            break;
          case 3:
            RGZ.navi(3);
            break;
          default:
            break;
        }
        if (history.state.state > 0) {
          $("#navi-landing").css({
            "opacity": "0"
          });
          setTimeout(function() {
            $("#navi-menu").css({
              "opacity": "1"
            });
          }, 600);
          $("#navi-menu div span").removeClass("active");
          $("#navi-" + ((history.state.state == 1) ? "book" : ((history.state.state == 2) ? "stat" : "info")) + " span").addClass("active");
        }
      }
    } else {
      history.replaceState({
        state: 0
      }, null, null);
      RGZ.loadPage(0);
      RGZ.footMouseOver();
      setTimeout(RGZ.footMouseOut, 1500);
    }
  });

  window.onpopstate = function(event) {
    if (event.state != null) {
      if (event.state.state != null) {
        switch (event.state.state) {
          case 0:
            RGZ.navi(0);
            break;
          case 1:
            RGZ.navi(1);
            break;
          case 2:
            RGZ.navi(2);
            break;
          case 3:
            RGZ.navi(3);
            break;
          default:
            break;
        }
        if (event.state.state > 0) {
          $("#navi-landing").css({
            "opacity": "0"
          });
          setTimeout(function() {
            $("#navi-menu").css({
              "opacity": "1"
            });
          }, 600);
          $("#navi-menu div span").removeClass("active");
          $("#navi-" + ((event.state.state == 1) ? "book" : ((event.state.state == 2) ? "stat" : "info")) + " span").addClass("active");
        }
      }
    }
  };

  RGZ.tileMouseOver = function(e) {
    $(".tile").removeClass("col-4").addClass("col-3").css({
      "max-width": "25%"
    });
    $(e).removeClass("col-3").addClass("col-6").css({
      "background-color": "#E5EEC1",
      "max-width": "50%"
    });
    $(e).find(".tile-title").css({
      "top": "-15vh",
      "color": "#333",
      "font-size": "4vh"
    });
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
    $(".tile").removeClass("col-3 col-6").addClass("col-4").css({
      "max-width": "33.333333%"
    });
    $(".tile-title").css({
      "top": "0",
      "color": "#F4F8E6",
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
      "background-color": "#589662"
    });
    $("#stat").css({
      "background-color": "#3EACA8"
    });
    $("#info").css({
      "background-color": "#547A82"
    });
  };

  RGZ.fillBookContent = function() {
    $("#book-content>.content-box-loader").css({
      "opacity": "1"
    });
    $(".content-box-content").css({
      "opacity": "0"
    });
    setTimeout(function() {
      insertHtml("#book-content>.content-box-content", `
        <div style="padding: 10vh; text-align: center">book content</div>
      `);
      $(".content-box-loader").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#book-content>.content-box-content").css({
          "opacity": "1"
        });
      }, 200);
    }, 2000); //this delay only simulating network response
  };

  RGZ.fillStatContent = function() {
    $("#stat-content>.content-box-loader").css({
      "opacity": "1"
    });
    $(".content-box-content").css({
      "opacity": "0"
    });
    setTimeout(function() {
      insertHtml("#stat-content>.content-box-content", `
        <div style="padding: 10vh; text-align: center">stat content</div>
      `);
      $(".content-box-loader").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#stat-content>.content-box-content").css({
          "opacity": "1"
        });
      }, 200);
    }, 2000); //this delay only simulating network response
  };

  RGZ.fillInfoContent = function() {
    $("#info-content>.content-box-loader").css({
      "opacity": "1"
    });
    $(".content-box-content").css({
      "opacity": "0"
    });
    setTimeout(function() {
      insertHtml("#info-content>.content-box-content", `
        <div style="padding: 10vh; text-align: center">info content</div>
      `);
      $(".content-box-loader").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#info-content>.content-box-content").css({
          "opacity": "1"
        });
      }, 200);
    }, 2000); //this delay only simulating network response
  };

  RGZ.loadPage = function(n) {
    if (n < 0 || n > 3) return;
    switch (n) {
      case 0:
        $(".content-box").css({
          "opacity": "0"
        });
        setTimeout(function() {
          $(".content-box").addClass("hidden");
          $(".tile").addClass("col-4").removeClass("col-3 col-6 col-12").css({
            "max-width": "33.333333%"
          });
        }, 400);
        break;
      case 1:
        if (RGZ.nav == 1) break;
        if (RGZ.nav == 0)
          setTimeout(function() {
            $("#book-content").removeClass("hidden").css({
              "opacity": "1"
            });
          }, 1000);
        else {
          $(".content-box").css({
            "opacity": "0"
          });
          $("#book-content").removeClass("hidden").css({
            "opacity": "1"
          });
          setTimeout(function() {
            $("#stat-content, #info-content").addClass("hidden");
          }, 400);
        }
        RGZ.fillBookContent();
        break;
      case 2:
        if (RGZ.nav == 2) break;
        if (RGZ.nav == 0)
          setTimeout(function() {
            $("#stat-content").removeClass("hidden").css({
              "opacity": "1"
            });
          }, 1000);
        else {
          $(".content-box").css({
            "opacity": "0"
          });
          $("#stat-content").removeClass("hidden").css({
            "opacity": "1"
          });
          setTimeout(function() {
            $("#book-content, #info-content").addClass("hidden");
          }, 400);
        }
        RGZ.fillStatContent();
        break;
      case 3:
        if (RGZ.nav == 3) break;
        if (RGZ.nav == 0)
          setTimeout(function() {
            $("#info-content").removeClass("hidden").css({
              "opacity": "1"
            });
          }, 1000);
        else {
          $(".content-box").css({
            "opacity": "0"
          });
          $("#info-content").removeClass("hidden").css({
            "opacity": "1"
          });
          setTimeout(function() {
            $("#stat-content, #book-content").addClass("hidden");
          }, 400);
        }
        RGZ.fillInfoContent();
        break;
      default:
        break;
    }
    RGZ.nav = n;
  };

  RGZ.navi = function(n) {
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
      $(".tile-img").removeClass("gone");
      setTimeout(function() {
        $(".tile>div").removeClass("gone");
        $(".tile-title").css({
          "opacity": "1",
          "top": "0",
          "color": "#F4F8E6",
          "font-size": "3vh",
          "letter-spacing": "2px",
          "-webkit-transition": "top 0.4s ease, font-size 0.4s ease, color 0.4s ease",
          "-moz-transition": "top 0.4s ease, font-size 0.4s ease, color 0.4s ease",
          "transition": "top 0.4s ease, font-size 0.4s ease, color 0.4s ease"
        });
        $(".tile-line").css({
          "opacity": "1",
          "width": "0",
          "-webkit-transition": "width 0.5s ease 0.4s",
          "-moz-transition": "width 0.5s ease 0.4s",
          "transition": "width 0.5s ease 0.4s"
        });
        $(".tile-text").css({
          "top": "45vh",
          "-webkit-transition": "top 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          "-moz-transition": "top 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          "transition": "top 0.6s ease 0.2s, opacity 0.6s ease 0.2s"
        });
        $(".tile-button").css({
          "top": "59vh",
          "-webkit-transition": "top 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease",
          "-moz-transition": "top 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease",
          "transition": "top 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease"
        });
        $("#book").css({
          "background-color": "#589662"
        });
        $("#stat").css({
          "background-color": "#3EACA8"
        });
        $("#info").css({
          "background-color": "#547A82"
        });
        $(".tile").attr("onmouseover", "$RGZ.tileMouseOver(this);");
        $(".tile").attr("onmouseout", "$RGZ.tileMouseOut();");
      }, 400);
      RGZ.loadPage(0);
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
          $("#navi-menu").css({
            "opacity": "1"
          });
        }, 600);
        setTimeout(function() {
          $(".tile-img").addClass("gone");
        }, 1400);
      }
      $("#navi-menu div span").removeClass("active");
      $("#navi-" + ((n == 1) ? "book" : ((n == 2) ? "stat" : "info")) + " span").addClass("active");
      RGZ.loadPage(n);
      setTimeout(function() {
        $(".tile").css({
          "max-width": "0"
        });
        $("#" + ((n == 1) ? "book" : ((n == 2) ? "stat" : "info"))).removeClass("col-6").addClass("col-12").css({
          "max-width": "100%",
          "background-color": "#E5EEC1"
        });
        $(".tile-title, .tile-line, .tile-text, .tile-button").addClass("gone");
      }, 400);
      console.log("❤");
    }
    if (history.state)
      if (history.state.state != n) history.pushState({
        state: n
      }, null, null);
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
