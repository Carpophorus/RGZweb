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

  RGZ.infoDemo = function(n) {
    if (n == 0) {
      $("#documentation").removeClass("gone");
      $("#accordion").addClass("gone");
    }
    if (n == 1) {
      $("#documentation").addClass("gone");
      $("#accordion").removeClass("gone");
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
      <div class="btn-group" data-toggle="buttons" style="width: 100%; padding: 10vh 30% 5vh 30%">
        <label class="btn btn-primary active" style="width: 20vw" onclick="RGZ.infoDemo(0);">
          <input type="radio" name="options" id="option1" autocomplete="off" checked>Dokumentacija
        </label>
        <label class="btn btn-primary"  style="width: 20vw" onclick="RGZ.infoDemo(1);">
          <input type="radio" name="options" id="option2" autocomplete="off">Pitanja
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
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Kako će u svojinskim evidencijama biti upisano pravo zakupa građevinskog zemljišta, kada je takvo pravo konstituisano u postupku kompletiranja građevinskih parcela pa se isto lice – investitor, na delu parcele vodi kao korisnik Gradskog građevinskog zemljišta a na delu kao zakupac? Kako će se formirati građevinska parcela u takvom slučaju?
              </a>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
            <div class="card-block">
              Odgovor na ovo pitanje iziskuje pribavljanje stručnog mišljenja nadležnog Ministarstva oko primene Zakona o planiranju i izgradnji. Odgovor će biti dostavljen naknadno.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingTwo">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Zašto se ne sprovode parcelacije zemljišta kada se građevinska parcela obrazuje od katastarskih parcele dva ili više različitih korisnika? Da li je moguće sprovesti takvu parcelaciju i utvrditi idealne sukorisničke delove na građevinskoj parceli, na osnovu čega bi takvi sukorisnici mogli ostvariti pravo na zajedničku izgradnju na parceli?
              </a>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="card-block">
              Građevinska parcela se može obeležiti na terenu i sprovesti na planovima i u operatu, ne menjajući upis dosadašnjih korisnika. Formiranje građevinske parcele se može uraditi nakon donošenja akta nadležnog organa o rešavanju imovinsko pravnih odnosa.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingThree">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Da li je RGZ u mogućnosti da u listu nepokretnosti i drugoj svojoj dokumentaciji upiše pravni stvarni oblik svojine na nepokretnostima?
              </a>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
            <div class="card-block">
              U katastar nepokretnosti može da se upiše svaki oblik svojine.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingFour">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Kakve su mogućnosti korišćenja ortofoto planova za održavanje premera i prvo (inicijalno) uknjiženje objekata koji do sada nisu evidentirani na katastarskim planovima i nisu uknjiženi?
              </a>
            </h5>
          </div>

          <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
            <div class="card-block">
              Prema postojećim propisima podaci sadržani na ortofoto planovima se ne mogu koristiti za održavanje premera i uknjižbu objekata koji do sada nisu evidentirani na katastarskim planovima.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingFive">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Na koji način će se dokazivati pravo svojine i korišćenja na zemljištu gde su izgrađeni objekti bez građevinske dozvole?
              </a>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive">
            <div class="card-block">
              Pravo svojine i korišćenja na zemljištu dokazuje se pred organom nadležnim za utvrđivanje tih prava. U katastru nepokretnosti se vrši upis već utvrđenih prava.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingSix">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Šta je osnov za izradu katastra nepokretnosti u katastarskim opštinama (gradsko građevinsko zemljište) gde je izvršena obnova premera koja nije potvrđena?
              </a>
            </h5>
          </div>
          <div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix">
            <div class="card-block">
              Kako odgovor na ovo pitanje zahteva dublje analize premera, kako starog tako i novog, stepen ažurnosti starog premera i kvaliteta održavanja i vreme izvršenja obnove premera, propisano je da se u ovakvim slučajevima radi projektno rešenje.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingSeven">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Da li je dozvoljeno štampanje izvoda iz lista nepokretnosti i to samo V2 lista bez A, B i V1 lista?
              </a>
            </h5>
          </div>

          <div id="collapseSeven" class="collapse" role="tabpanel" aria-labelledby="headingSeven">
            <div class="card-block">
              Dozvoljeno je izdavanje samo izvoda iz lista nepokretnosti odnosno samo izvoda iz V2 lista nepokretnosti sa naslovnom stranom.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingEight">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                Da li je u postupku održavanja katastra nepokretnosti dozvoljeno upisivanje prava svojine na objektu izgrađenom na području gradskog građevinskog zemljišta, za koji je izdata građevinska dozvola?
              </a>
            </h5>
          </div>
          <div id="collapseEight" class="collapse" role="tabpanel" aria-labelledby="headingEight">
            <div class="card-block">
              Na području gradskog građevinskog zemljišta u postupku održavanja katastra nepokretnosti za upis prava svojine na objektu neophodna je i upotrebna dozvola. Po osnovu građevinske dozvole može se upisati samo državina na objektu sa zabeleškom da za objekat nije izdata upotrebna dozvola pri čemu se kao datum upisa zabeleške upisuje datum pravosnažnosti rešenja kojim se dozvoljava upis držaoca objekta.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" role="tab" id="headingNine">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                Zbog uknjižbe preduzeća katastarska opština je podeljena i nalazi se u statusu katastar nepokretnosti i katastar zemljišta. Da li promene u delu KO koja je u statusu katastar nepokretnosti treba evidentirati u spisku promena za deo KO koja je u katastar zemljišta?
              </a>
            </h5>
          </div>
          <div id="collapseNine" class="collapse" role="tabpanel" aria-labelledby="headingNine">
            <div class="card-block">
              Vodi se poseban spisak promena za deo KO koja je u statusu katastar nepokretnosti.
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
          $(".content-box").addClass("hidden");
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
    } else {
      if (window.innerWidth < 990.5) {
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
        $("#" + ((n == 1) ? "book" : ((n == 2) ? "stat" : "info")) + "-mobile").css({
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

  global.$RGZ = RGZ;
})(window);
