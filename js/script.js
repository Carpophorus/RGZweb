(function(global) {
  RGZ = {};

  RGZ.nav = 0;
  RGZ.mobileButtonClicked = false;

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
        if (history.state.state > 0 && window.innerWidth > 990.5) {
          $("#navi-landing").css({
            "opacity": "0"
          });
          $("#navi-menu").removeClass("gone");
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
        if (event.state.state > 0 && window.innerWidth > 990.5) {
          $("#navi-landing").css({
            "opacity": "0"
          });
          $("#navi-menu").removeClass("gone");
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

  RGZ.mobileMenuTouchOutside = function() {
    if (!$("#navi-button").hasClass("collapsed"))
      $("#navi-button").click();
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

  RGZ.tileMobileClick = function(e) {
    if (RGZ.mobileButtonClicked) {
      RGZ.mobileButtonClicked = false;
      return;
    }
    if (!$(e).hasClass("clicked")) {
      $(".tile-mobile, .foot-mobile").css({
        "height": "8vh",
        "max-height": "8vh"
      });
      $(".tile-mobile>.tile-mobile-title").css({
        "top": "0",
        "color": "#F4F8E6"
      });
      $("#book-mobile").css({
        "background-color": "#589662"
      });
      $("#stat-mobile").css({
        "background-color": "#3EACA8"
      });
      $("#info-mobile").css({
        "background-color": "#547A82"
      });

      $(".tile-mobile-line, .tile-mobile-text, .tile-mobile-button").addClass("hidden");
      $(".tile-mobile-line").css({
        "width": "0"
      });
      $(".tile-mobile-text").css({
        "bottom": "15vh",
        "opacity": "0"
      });
      $(".tile-mobile-button").css({
        "bottom": "1vh",
        "opacity": "0"
      });

      $(e).css({
        "height": "68vh",
        "max-height": "68vh"
      });

      $(e).find(".tile-mobile-title").css({
        "top": "12vh",
        "color": "#333",
        "font-size": "3.3vh"
      });
      $(e).find(".tile-mobile-line").removeClass("hidden").css({
        "width": "90%"
      });
      $(e).find(".tile-mobile-text").removeClass("hidden").css({
        "bottom": "20vh",
        "opacity": "1"
      });
      $(e).find(".tile-mobile-button").removeClass("hidden").css({
        "bottom": "6vh",
        "opacity": "1"
      });

      $("#foot-mobile-logo, #foot-mobile-name").addClass("hidden").css({
        "opacity": "0",
        "bottom": "44.5vh",
        "-webkit-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "-moz-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "transition": "opacity 0.1s ease, bottom 0.1s ease"
      });
      $("#foot-mobile-container").addClass("hidden").css({
        "opacity": "0",
        "bottom": "0",
        "-webkit-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "-moz-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "transition": "opacity 0.1s ease, bottom 0.1s ease"
      });
      if (!$(e).hasClass("foot-mobile"))
        $(e).css({
          "background-color": "#E5EEC1"
        });
      else {
        $("#foot-mobile-logo, #foot-mobile-name").removeClass("hidden").css({
          "opacity": "1",
          "bottom": "49.5vh",
          "-webkit-transition": "opacity 0.6s ease 0.3s, bottom 0.6s ease 0.3s",
          "-moz-transition": "opacity 0.6s ease 0.3s, bottom 0.6s ease 0.3s",
          "transition": "opacity 0.6s ease 0.3s, bottom 0.6s ease 0.3s"
        });
        $("#foot-mobile-container").removeClass("hidden").css({
          "opacity": "1",
          "bottom": "3vh",
          "-webkit-transition": "opacity 0.6s ease 0.5s, bottom 0.6s ease 0.5s",
          "-moz-transition": "opacity 0.6s ease 0.5s, bottom 0.6s ease 0.5s",
          "transition": "opacity 0.6s ease 0.5s, bottom 0.6s ease 0.5s"
        });
      }

      $(".tile-mobile, .foot-mobile").removeClass("clicked");
      $(e).addClass("clicked");
    } else {
      $(".foot-mobile").css({
        "height": "8vh",
        "max-height": "8vh"
      });
      $("#foot-mobile-logo, #foot-mobile-name").addClass("hidden").css({
        "opacity": "0",
        "bottom": "44.5vh",
        "-webkit-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "-moz-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "transition": "opacity 0.1s ease, bottom 0.1s ease"
      });
      $("#foot-mobile-container").addClass("hidden").css({
        "opacity": "0",
        "bottom": "0",
        "-webkit-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "-moz-transition": "opacity 0.1s ease, bottom 0.1s ease",
        "transition": "opacity 0.1s ease, bottom 0.1s ease"
      });
      $(".tile-mobile").css({
        "height": "28vh",
        "max-height": "28vh"
      });
      $("#book-mobile").css({
        "background-color": "#589662"
      });
      $("#stat-mobile").css({
        "background-color": "#3EACA8"
      });
      $("#info-mobile").css({
        "background-color": "#547A82"
      });

      $(".tile-mobile-line, .tile-mobile-text, .tile-mobile-button").addClass("hidden");
      $(".tile-mobile-line").css({
        "width": "0"
      });
      $(".tile-mobile-text").css({
        "bottom": "15vh",
        "opacity": "0"
      });
      $(".tile-mobile-button").css({
        "bottom": "1vh",
        "opacity": "0"
      });

      $(".tile-mobile-title").css({
        "top": "11vh",
        "font-size": "3vh",
        "color": "#F4F8E6"
      });
      $(".tile-mobile, .foot-mobile").removeClass("clicked");
    }
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
    }, 3000); //this delay only simulating network response
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
        <div class="message-overlay">
          <div class="message-container message-error">
            <i class="message-icon fa fa-ban"></i>
            <div class="message-ct-container">
              <div class="message-code">404</div>
              <div class="message-text">Тражена функционалност није тренутно доступна.</div>
            </div>
          </div>
        </div>
      `);
      $(".content-box-loader").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#stat-content>.content-box-content").css({
          "opacity": "1"
        });
      }, 200);
    }, 3000); //this delay only simulating network response
  };

  RGZ.infoSwitch = function(n) {
    if (n == 0) {
      setTimeout(function() {
        $("#accordion").addClass("gone");
        $("#documentation").removeClass("gone");
        setTimeout(function() {
          $("#documentation").css({
            "opacity": "1"
          });
        }, 10);
      }, 400);
      $("#accordion").css({
        "opacity": "0"
      });
    }
    if (n == 1) {
      setTimeout(function() {
        $("#documentation").addClass("gone");
        $("#accordion").removeClass("gone");
        setTimeout(function() {
          $("#accordion").css({
            "opacity": "1"
          });
        }, 10);
      }, 400);
      $("#documentation").css({
        "opacity": "0"
      });
    }
  };

  RGZ.infoDocsDemo = function() {
    $("#docsaux").removeClass("gone");
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
      <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-primary active" onclick="RGZ.infoSwitch(0);">
          <input type="radio" name="options" id="option1" autocomplete="off" checked>ДОКУМЕНТАЦИЈА
        </label>
        <label class="btn btn-primary" onclick="RGZ.infoSwitch(1);">
          <input type="radio" name="options" id="option2" autocomplete="off">ПИТАЊА
        </label>
      </div>
      <div id="documentation">
        <select onchange="$RGZ.infoDocsDemo();">
          <option disabled selected value> -- izaberite dokumentaciju -- </option>
          <option value="1">Dokument 1</option>
          <option value="1">Predmet 1</option>
          <option value="1">Dokument 2</option>
          <option value="1">Zahtev 1</option>
        </select>
        <div id="docsaux" class="gone" style="padding: 5vh">
          formular 1 download, formular 1 opis
          <br><br>formular 2 download, formular 2 opis
          <br><br>predviđena taksa, napomena za specijalne slučajeve
        </div>
      </div>
      <div id="accordion" role="tablist" aria-multiselectable="true" class="gone">
        <div class="card">
          <div class="card-header" role="tab" id="headingOne">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseOne" data-target="#collapseOne" onclick="$RGZ.faqClicked(this);">
              Како ће у својинским евиденцијама бити уписано право закупа грађевинског земљишта када је такво право конституисано у поступку комплетирања грађевинских парцела, па се исто лице/инвеститор на једном делу парцеле води као корисник градског грађевинског земљишта, а на другом делу као закупац? Како ће се формирати грађевинска парцела у таквом случају?
            </div>
          </div>
          <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
            <div class="card-block">
              Одговор на ово питање изискује прибављање стручног мишљења надлежног Министарства око примене Закона о планирању и изградњи. Одговор ће бити достављен накнадно.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingTwo">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseTwo" data-target="#collapseTwo" onclick="$RGZ.faqClicked(this);">
              Зашто се не спроводе парцелације земљишта када се грађевинска парцела образује од катастарских парцела два или више различитих корисника? Да ли је могуће спровести такву парцелацију и утврдити идеалне сукорисничке делове на грађевинској парцели? На основу чега би такви сукорисници могли остварити право на заједничку изградњу на парцели?
            </div>
          </div>
          <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="card-block">
              Грађевинска парцела се може обележити на терену и спровести на плановима и у операту, не мењајући упис досадашњих корисника. Формирање грађевинске парцеле се може урадити након доношења акта надлежног органа о решавању имовинско-правних односа.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingThree">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseThree" data-target="#collapseThree" onclick="$RGZ.faqClicked(this);">
              Да ли је РГЗ у могућности да у листу непокретности и другој својој документацији упише правни стварни облик својине на непокретностима?
            </div>
          </div>
          <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
            <div class="card-block">
              У катастар непокретности може да се упише сваки облик својине.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingFour">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseFour" data-target="#collapseFour" onclick="$RGZ.faqClicked(this);">
              Какве су могућности коришћења ортофото планова за одржавање премера и прво (иницијално) укњижење објеката који до сада нису евидентирани на катастарским плановима и нису укњижени?
            </div>
          </div>
          <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
            <div class="card-block">
              Према постојећим прописима, подаци садржани на ортофото плановима се не могу користити за одржавање премера и укњижбу објеката који до сада нису евидентирани на катастарским плановима.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingFive">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseFive" data-target="#collapseFive" onclick="$RGZ.faqClicked(this);">
              На који начин ће се доказивати право својине и коришћења на земљишту где су изграђени објекти без грађевинске дозволе?
            </div>
          </div>
          <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive">
            <div class="card-block">
              Право својине и коришћења на земљишту доказује се пред органом надлежним за утврђивање тих права. У катастру непокретности се врши упис већ утврђених права.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingSix">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseSix" data-target="#collapseSix" onclick="$RGZ.faqClicked(this);">
              Шта је основ за израду катастра непокретности у катастарским општинама (градско грађевинско земљиште) где је извршена обнова премера која није потврђена?
            </div>
          </div>
          <div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix">
            <div class="card-block">
              Како одговор на ово питање захтева дубље анализе премера (како старог тако и новог), степена ажурности старог премера и квалитета одржавања и време извршења обнове премера, прописано је да се у оваквим случајевима ради пројектно решење.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingSeven">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseSeven" data-target="#collapseSeven" onclick="$RGZ.faqClicked(this);">
              Да ли је дозвољено штампање извода из листа непокретности, и то само <i>В2</i> листа без <i>А</i>, <i>Б</i> и <i>В1</i> листа?
            </div>
          </div>
          <div id="collapseSeven" class="collapse" role="tabpanel" aria-labelledby="headingSeven">
            <div class="card-block">
              Дозвољено је издавање само извода из листа непокретности, односно само извода из <i>В2</i> листа непокретности са насловном страном.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingEight">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseEight" data-target="#collapseEight" onclick="$RGZ.faqClicked(this);">
              Да ли је у поступку одржавања катастра непокретности дозвољено уписивање права својине на објекту изграђеном на подручју градског грађевинског земљишта, за који је издата грађевинска дозвола?
            </div>
          </div>
          <div id="collapseEight" class="collapse" role="tabpanel" aria-labelledby="headingEight">
            <div class="card-block">
               У поступку одржавања катастра непокретности, за упис права својине на објекту изграђеном на подручју градског грађевинског земљишта неопходна је и употребна дозвола. По основу грађевинске дозволе може се уписати само државина на објекту са забелешком да за објекат није издата употребна дозвола, при чему се као датум уписа забелешке уписује датум правоснажности решења којим се дозвољава упис држаоца објекта.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingNine">
            <div class="faq-link collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseNine" data-target="#collapseNine" onclick="$RGZ.faqClicked(this);">
              Због укњижбе предузећа, катастарска општина (КО) је подељена и налази се у статусу <i>катастар непокретности</i> и <i>катастар земљишта</i>. Да ли промене у делу КО која је у статусу <i>катастар непокретности</i> треба евидентирати у списку промена за део КО која је у статусу <i>катастар земљишта</i>?
            </div>
          </div>
          <div id="collapseNine" class="collapse" role="tabpanel" aria-labelledby="headingNine">
            <div class="card-block">
              Води се посебан списак промена за део КО која је у статусу <i>катастар непокретности</i>.
            </div>
          </div>
        </div>

      </div>
      `);
      $(".content-box-loader").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#info-content>.content-box-content").css({
          "opacity": "1"
        });
      }, 200);
    }, 3000); //this delay only simulating network response
  };

  RGZ.loadPage = function(n) {
    if (n < 0 || n > 3) return;
    switch (n) {
      case 0:
        $(".content-box").css({
          "opacity": "0"
        });
        setTimeout(function() {
          $(".content-box").addClass("gone");
          $(".tile").addClass("col-4").removeClass("col-3 col-6 col-12").css({
            "max-width": "33.333333%"
          });
          $(".tile-mobile").removeClass("clicked").css({
            "height": "28vh",
            "max-height": "28vh"
          });
        }, 400);
        break;
      case 1:
        if (RGZ.nav == 1) break;
        if (RGZ.nav == 0)
          setTimeout(function() {
            $("#book-content").removeClass("gone").css({
              "opacity": "1"
            });
          }, 1000);
        else {
          $(".content-box").css({
            "opacity": "0"
          });
          $("#book-content").removeClass("gone").css({
            "opacity": "1"
          });
          setTimeout(function() {
            $("#stat-content, #info-content").addClass("gone");
          }, 400);
        }
        RGZ.fillBookContent();
        break;
      case 2:
        if (RGZ.nav == 2) break;
        if (RGZ.nav == 0)
          setTimeout(function() {
            $("#stat-content").removeClass("gone").css({
              "opacity": "1"
            });
          }, 1000);
        else {
          $(".content-box").css({
            "opacity": "0"
          });
          $("#stat-content").removeClass("gone").css({
            "opacity": "1"
          });
          setTimeout(function() {
            $("#book-content, #info-content").addClass("gone");
          }, 400);
        }
        RGZ.fillStatContent();
        break;
      case 3:
        if (RGZ.nav == 3) break;
        if (RGZ.nav == 0)
          setTimeout(function() {
            $("#info-content").removeClass("gone").css({
              "opacity": "1"
            });
          }, 1000);
        else {
          $(".content-box").css({
            "opacity": "0"
          });
          $("#info-content").removeClass("gone").css({
            "opacity": "1"
          });
          setTimeout(function() {
            $("#stat-content, #book-content").addClass("gone");
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
        $("#navi-menu").addClass("gone");
      }, 600);
      $("#navi-button").css({
        "opacity": "0"
      });
      setTimeout(function() {
        $("#navi-button").addClass("hidden")
      }, 400);
      $(".tile-img, .tile-mobile-img").removeClass("gone");
      $("#foot-mobile").css({
        "height": "8vh",
        "max-height": "8vh"
      });
      setTimeout(function() {
        $(".tile>div, .tile-mobile>div").removeClass("gone");
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
        $(".tile-mobile-title").css({
          "opacity": "1",
          "top": "11vh",
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
        $(".tile-mobile-line").css({
          "opacity": "1",
          "width": "0",
          "-webkit-transition": "width 0.8s ease 0.4s",
          "-moz-transition": "width 0.8s ease 0.4s",
          "transition": "width 0.8s ease 0.4s"
        });
        $(".tile-text").css({
          "top": "45vh",
          "-webkit-transition": "top 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          "-moz-transition": "top 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          "transition": "top 0.6s ease 0.2s, opacity 0.6s ease 0.2s"
        });
        $(".tile-mobile-text").css({
          "bottom": "15vh",
          "-webkit-transition": "bottom 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          "-moz-transition": "bottom 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          "transition": "bottom 0.6s ease 0.2s, opacity 0.6s ease 0.2s"
        });
        $(".tile-button").css({
          "top": "59vh",
          "-webkit-transition": "top 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease",
          "-moz-transition": "top 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease",
          "transition": "top 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease"
        });
        $(".tile-mobile-button").css({
          "bottom": "1vh",
          "-webkit-transition": "bottom 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease",
          "-moz-transition": "bottom 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease",
          "transition": "bottom 0.6s ease 0.4s, opacity 0.6s ease 0.4s, background-color 0.4s ease, color 0.4s ease"
        });
        $("#book, #book-mobile").css({
          "background-color": "#589662"
        });
        $("#stat, #stat-mobile").css({
          "background-color": "#3EACA8"
        });
        $("#info, #info-mobile").css({
          "background-color": "#547A82"
        });
        $("#foot-mobile-title").removeClass("gone").css({
          "opacity": "1"
        });
        $(".tile").attr("onmouseover", "$RGZ.tileMouseOver(this);");
        $(".tile").attr("onmouseout", "$RGZ.tileMouseOut();");
      }, 400);
      RGZ.loadPage(0);
      RGZ.mobileButtonClicked = false;
    } else {
      if (window.innerWidth < 990.5) {
        if ($("#foot-mobile").hasClass("clicked"))
          $("#foot-mobile").click();
        RGZ.mobileButtonClicked = true;
        $("#navi-button").removeClass("hidden").css({
          "opacity": "1"
        });
      }
      if (RGZ.nav == 0) {
        if (window.innerWidth > 990.5)
          $("#navi-landing").css({
            "opacity": "0"
          });
        $(".tile-title, .tile-line, .tile-text, .tile-button").css({
          "opacity": "0",
          "-webkit-transition": "opacity 0.4s ease",
          "-moz-transition": "opacity 0.4s ease",
          "transition": "opacity 0.4s ease"
        });
        $(".tile-mobile-title, .tile-mobile-line, .tile-mobile-text, .tile-mobile-button").css({
          "opacity": "0",
          "-webkit-transition": "opacity 0.4s ease",
          "-moz-transition": "opacity 0.4s ease",
          "transition": "opacity 0.4s ease"
        });
        setTimeout(function() {
          $(".tile-mobile-line, .tile-mobile-text, .tile-mobile-button").addClass("hidden");
        }, 400);
        $("#foot-mobile-title").css({
          "opacity": "0"
        });
        $(".tile").removeAttr("onmouseover");
        $(".tile").removeAttr("onmouseout");
        $("#navi-menu").removeClass("gone");
        setTimeout(function() {
          $("#navi-menu").css({
            "opacity": "1"
          });
        }, 600);
        setTimeout(function() {
          $(".tile-img, .tile-mobile-img").addClass("gone");
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

        $(".tile-mobile, #foot-mobile").css({
          "height": "0",
          "max-height": "0"
        });
        $("#" + ((n == 1) ? "book" : ((n == 2) ? "stat" : "info")) + "-mobile").removeClass("clicked").css({
          "height": "100%",
          "max-height": "100%",
          "background-color": "#E5EEC1"
        });
        $(".tile-mobile-title, .tile-mobile-line, .tile-mobile-text, .tile-mobile-button").addClass("gone");
        $("#foot-mobile-title").addClass("gone");
      }, 400);
    }
    if (!$("#navi-button").hasClass("collapsed"))
      $("#navi-button").click();
    if (history.state)
      if (history.state.state != n) history.pushState({
        state: n
      }, null, null);
  };

  RGZ.footMouseOver = function() {
    $("#foot").css({
      "height": "29vh"
    });
    $("#foot-logo, #foot-title").removeClass("hidden").css({
      "opacity": "1"
    });
    $("#foot-text-left, #foot-text-right").removeClass("hidden").css({
      "bottom": "5.5vh",
      "opacity": 1
    });
  };

  RGZ.footMouseOut = function() {
    $("#foot").css({
      "height": "7vh"
    });
    $("#foot-logo, #foot-title").addClass("hidden").css({
      "opacity": "0"
    });
    $("#foot-text-left, #foot-text-right").addClass("hidden").css({
      "bottom": "0.5vh",
      "opacity": 0
    });
  };

  RGZ.faqClicked = function(e) {
    if ($(e).hasClass("faq-expanded"))
      $(".faq-link").removeClass("faq-expanded");
    else {
      $(".faq-link").removeClass("faq-expanded");
      $(e).addClass("faq-expanded");
    }
  };

  global.$RGZ = RGZ;
})(window);
