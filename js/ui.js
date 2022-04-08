$(document).ready(function () {

	common = {
		init: function () {
			common.initial();
			common.groupBox();
			common.menu();
			// common.menu_active();
			// common.header_slider();
			// common.aside_scroll();
			// common.layer_popup();
			// common.family_site();
		},
    /* 초기화 */
		initial: function () {
      var fired = [];
      var $controlBox = $(".searchBody .controlBox");

      $(window).on('resize', function () {
        if ($(this).width() <= 767 && !fired[0]) {
          fired[0] = true;
          fired[1] = false;
        }
        else if ($(this).width() >= 768 && !fired[1]) {
          fired[0] = false;
          fired[1] = true;
          
          $controlBox.removeAttr('style');
        }
      });
		},
    /* 메뉴 */
		groupBox: function () {
      // 라디오, 체크박스
      $('.groupBox input').iCheck({
        checkboxClass: 'icheckbox',
        radioClass: 'iradio',
      });
		},
		/* 메뉴 */
		menu: function () {
			var $gnb = $(".gnb");
			var $header = $(".header");
			var $depth1 = $(".gnb .depth1");
			var $depth2 = $(".gnb .depth2");
      var $subMenuBlind = $(".subMenuBlind");
      var menu_change = Boolean;

      $gnb.on({
        "mouseenter": function () {
          setTimeout(menuchk, 300);
          menu_change = true;
        },
        "mouseleave": function () {
          setTimeout(menuchk, 300);
          menu_change = false;
        }
      });

      $subMenuBlind.on({
        "mouseenter": function () {
          setTimeout(menuchk, 100);
          menu_change = true;
        },
        "mouseleave": function () {
          setTimeout(menuchk, 100);
          menu_change = false;
        }
      });

      function menuchk(){
        if(menu_change === true) {
          setTimeout(function () {
            var _menu_height = $depth2.map(function () {
              return $(this).height();
            }).get();
            var _menu_height_value = Math.max.apply(null, _menu_height);
            // TweenMax.to($gnb_blind, 0.2, { height: _menu_height_value + "", opacity: 1, ease: "Power4.ease" });
            // $gnb_menu_sub.css({"height": _menu_height_value, "opacity": 1});
            $header.height(_menu_height_value + 104);

            $depth1.addClass('active');
            setTimeout(function () {
              $depth1.addClass('show');
              $depth2.height(_menu_height_value);
              $subMenuBlind.height(_menu_height_value);
            }, 10);
          }, 10);

          // $gnb_menu.show().addClass("active");
          // $blind_common.addClass("active");
        } else {
          $header.height('');
          $subMenuBlind.height('');
          $depth1.removeClass('show');
          setTimeout(function () {
            $depth1.removeClass('active');
          }, 10);
        }
      }
		},
	},

	common.init();
});


/* 알림 */
inform = {
  toggleBtn: function () {
    var $controlBox = $(".searchBody .controlBox");
    var _this = $(event.currentTarget);

    if($controlBox.css('display') === "none") {
      $controlBox.slideDown(200);
      _this.addClass('active').attr({'title': '확장됨'});
    } else {
      $controlBox.slideUp(200);
      _this.removeClass('active').attr({'title': '축소됨'});
    }
  }
}