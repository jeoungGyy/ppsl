$(document).ready(function () {

	common = {
		init: function () {
			common.initial();
			common.groupBox();
			common.menu();
			common.menu_active();
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
    /* 라디오, 체크박스 */
		groupBox: function () {
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
		/* 메뉴 활성화 */
		menu_active: function () {
			var $header = $(".header");
			var $gnb = $(".gnb >ul");
			var $lnbBody = $(".lnbBody");
			var $location = $(".location .locationDepth");
			var $title = $(".mainTitle");
			var fired = [];

			if(typeof depth !== "undefined") {

				/* 메인 헤더 라인 삭제 */
				// if(depth === "main") {
				// 	$header.addClass("no_line");

				// 	return false;
				// }

				$.each($gnb.find("a"), function(index, item) {
					var _item = $(this).attr("data-menu");
					if(!_item) {
						console.log("메뉴에 depth 값이 없거나, 콘텐츠 depth 값이 올바르지 않습니다.");
						return false;
					}

					var _depth = _item.split("_");
					var _depthShift = _depth.shift();
					if(_depth.join("") === depth.join("")) {
						$(this).addClass("active").parents().parents().siblings("a").addClass("active arrow").parents(".gnb_menu").siblings("a").addClass("active");
						var lnb_clone = $(this).parents(".depth2").clone();
						var lnb_title = $(this).parents(".depth2").siblings("a").text();

            var lnb_title_a = $(this).parents(".depth2").siblings("a").clone();

            console.log(lnb_title_a)

						$lnbBody.find("h2").text(lnb_title).siblings(".lnb").append(lnb_clone);
						$location.append(lnb_title_a);
						$location.append($(this));

						//페이지타이틀
						$title.text("국민취업지원제도 - "+lnb_title+" - "+ $(this).text());

						return false;
					}
				});
			} else {
				//페이지타이틀(deth없는경우)
				console.log("페이지타이틀(deth없는경우)");
			}

			/* LNB 아코디언 */
			if ($(window).width() > common.mobile_size && !fired[0]) {
				/*
					20210604 2레벨 메뉴 클릭시 펼침/닫기 제거
					- LNB만 적용되도록 수정했습니다.
				*/
				// $lnb.find(".menu_exist").attr('title', '메뉴 축소');
				// $lnb.find(".menu_exist.arrow").attr('title', '메뉴 확장');
				// $lnb.find(".menu_exist").on("click", function(e){
				// 	e.preventDefault();
				// 	if(!$(this).hasClass("arrow")) {
				// 		$lnb.find(".menu_exist").removeClass("arrow").attr('title', '메뉴 축소').siblings("ul").slideUp(100);
				// 		$(this).addClass("arrow").attr('title', '메뉴 확장').siblings("ul").slideDown(100);
				// 	}
				// });
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