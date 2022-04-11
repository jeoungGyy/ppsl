$(document).ready(function () {
  
	common = {
    mobile_size: 767,

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
      var $header = $(".header");
			var $gnb = $header.find(".gnb");
			var $depth1 = $(".gnb .depth1");
			var $depth2 = $(".gnb .depth2");
      var $subMenuBlind = $(".subMenuBlind");
      var menu_change = Boolean;

      $(".header .gnb, .subMenuBlind").on({
        "mouseenter": function () {
          setTimeout(menuchk, 300);
          menu_change = true;
        },
        "mouseleave": function () {
          setTimeout(menuchk, 300);
          menu_change = false;
        }
      });
      $gnb.find(">ul li a").on({
        "focus": function () {
          setTimeout(menuchk, 100);
          menu_change = true;
        },
        "blur": function () {
          setTimeout(menuchk, 100);
          menu_change = false;
        }
      });

      function menuchk(){
        if(menu_change === true) {
          var _menu_height = $depth2.map(function () {
            return $(this).height();
          }).get();
          var _menu_height_value = Math.max.apply(null, _menu_height);
          $depth1.addClass('active');
          $depth2.height(_menu_height_value);
          $subMenuBlind.height(_menu_height_value);
          TweenMax.to($header, 0.1, { height: _menu_height_value + 104, onComplete:function() {
            $depth1.addClass('show');
          }});
        } else {
          $subMenuBlind.height('');
          $depth1.removeClass('show');
          $depth2.height('');
          TweenMax.to($header, 0.1, { height: '', onComplete:function() {
            $depth1.removeClass('active');
          }});
        }
      }

      /* 3뎁스 메뉴 있는 것 체크 - 화살표 아이콘 달아주기위해 사용 */
			$.each($depth2.find(">li >a"), function(index, item) {
				if($(this).siblings("ul").length) {
					$(this).addClass("menu_exist");
				}
			});
		},
		/* 메뉴 활성화 */
		menu_active: function () {
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
            $(this).addClass("active").attr('title', '메뉴 선택').parents("ul").siblings("a").addClass("active arrow").attr('title', '메뉴 선택');
						var lnb_title = $(this).parents(".depth2").siblings("a").text();
						var lnb_clone = $(this).parents(".depth2").clone();
            var lnb_title_clone2 = $(this).parents(".depth2").siblings("a").clone();
            // var lnb_title_clone3 = $(this).parents(".depth3").siblings("a").clone();
            var this_clone = $(this).clone();

						$lnbBody.find("h2").text(lnb_title).siblings(".lnb").append(lnb_clone);
						$location.append(lnb_title_clone2).append(this_clone);

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
				$lnbBody.find(".menu_exist").attr('title', '메뉴 축소');
				$lnbBody.find(".menu_exist.arrow").attr('title', '메뉴 확장');
				$lnbBody.find(".menu_exist").on("click", function(e){
					e.preventDefault();
					if(!$(this).hasClass("arrow")) {
						$lnbBody.find(".menu_exist").removeClass("arrow").attr('title', '메뉴 축소').siblings("ul").slideUp(100);
						$(this).addClass("arrow").attr('title', '메뉴 확장').siblings("ul").slideDown(100);
					}
				});
			}
		},
	},

  /* 레이어 팝업 */
  layerPopup = {
    init: function () {
      var $layerLink = $('.layerLink');

      $layerLink.on('click', function(){
        var _target = $("#" + $(this).attr("aria-controls"));
        var _target_aria = $(this).attr("aria-controls");
        layerPopup.open(this, _target, _target_aria);
      });
    },
    open: function (_this, _target, _target_aria) {
      //전체메뉴일 경우
      if(_target_aria === 'allMenu_pop') {
        var gnb_clone = $(".gnb").clone();
        var $allMenu = $(".allMenu");
        $allMenu.append(gnb_clone);
      }

      $('body').addClass('noScroll');
      _target.addClass('active').focus();
      TweenLite.to(_target, 0.3, {onComplete:function() {
        _target.addClass('show').find('.layerClose').off().on({
          'click': function() {
            layerPopup.close(_this, _target, _target_aria);
          },
          'keydown': function(e) {
            var _keyCode = e.keyCode || e.which;
            if(_keyCode === 9) {
              if(!e.shiftKey) {
                e.preventDefault();
                _target.focus();
              }
            }
          }
        });
        // 레이어 팝업 외부 클릭 시 창닫기
        $(document).off().on('click', function (e){
          if(_target.has(e.target).length === 0) {
            layerPopup.close(_this, _target, _target_aria);
          }
        });
      }});
    },
    close: function (_this, _target, _target_aria) {
      $(document).off();
      _target.removeClass("show");
      TweenLite.to(_target, 0.3, {onComplete:function() {
        //전체메뉴일 경우
        if(_target_aria === 'allMenu_pop') {
          var $allMenu = $(".allMenu");
          $allMenu.find(".gnb").remove();
        }

        $('body').removeClass('noScroll');
        _target.removeClass("active");
        _this.focus();
        _this = null;
        _target = null;
      }});
    },
  }

  layerPopup.init();
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