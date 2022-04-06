$(document).ready(function () {

	common = {
		init: function () {
			common.groupBox();
			common.menu();
			// common.menu_active();
			// common.header_slider();
			// common.aside_scroll();
			// common.layer_popup();
			// common.family_site();
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
			var $subMenuBlind = $(".subMenuBlind");
			var $depth2 = $(".depth2");
      var menu_change = Boolean;

      $gnb.on({
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
            // var _menu_height_value = Math.max.apply(null, _menu_height);
            // TweenMax.to($gnb_blind, 0.2, { height: _menu_height_value + "", opacity: 1, ease: "Power4.ease" });
            // $gnb_menu_sub.css({"height": _menu_height_value, "opacity": 1});
            console.log(_menu_height)
          }, 10);

          // $gnb_menu.show().addClass("active");
          // $blind_common.addClass("active");
        } else {
          // $gnb_menu.hide().removeClass("active");
          // $blind_common.removeClass("active");
          // TweenMax.to($gnb_blind, 0.8, { height: 0, opacity: 0, ease: "Expo.easeOut" });
          // $gnb_menu_sub.css({"height": "", "opacity": 0});
        }
      }
		},
	},

	common.init();
});