$(document).ready(function () {
  
	common = {
    mobile_size: 767,

		init: function () {
			common.initial();
			common.groupBox();
			common.searchReset();
			common.menu();
			common.menu_active();
			common.calendar();
			// common.header_slider();
			// common.aside_scroll();
			// common.family_site();
		},
    /* 초기화 */
		initial: function () {
      var fired = [];
      var $controlBox = $(".searchBody .controlBox");
      var $targetHidden = $(".targetHidden");
      

      $(window).off().on('resize', function () {
        if ($(this).width() <= 767 && !fired[0]) {
          fired[0] = true;
          fired[1] = false;

          /* 모바일 토글 버튼 slideDownUp */
          var $toggleGroup = $('button.toggleGroup');
          $toggleGroup.off().on('click', function() {
            console.log(1)
            if($(this).parents('.m_toggleArea').find('.target').css('display') === "none") {
              $(this).addClass('active').attr({'title': '확장됨'}).parents('.m_toggleArea').find('.target').slideDown(200);
            } else {
              $(this).removeClass('active').attr({'title': '축소됨'}).parents('.m_toggleArea').find('.target').slideUp(200);
            }
          });
        }
        else if ($(this).width() >= 768 && !fired[1]) {
          fired[0] = false;
          fired[1] = true;

          $controlBox.removeAttr('style');
          $targetHidden.removeAttr('style');
        }
      }).trigger("resize");
		},
    /* 라디오, 체크박스 */
		groupBox: function () {
      $('.groupBox input').iCheck({
        checkboxClass: 'icheckbox',
        radioClass: 'iradio',
      });
		},
    /* 인풋 글자 체크 */
		searchReset: function () {
      var $searchReset = $('.searchReset');
      var $searchResetBtn = $('.searchResetBtn');
      
      $searchReset.find('input').on('change keyup paste', function() {
        if($(this).val()) {
          $(this).parent().addClass('btnShow');
          $searchResetBtn.on('click', function() {
            $(this).siblings('input').val('').parent().removeClass('btnShow');
          });
        } else {
          $(this).parent().removeClass('btnShow');
        }
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
						$title.text("공적연금연계제도 - "+lnb_title+" - "+ $(this).text());

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
		/* jQueryUI 달력 */
		calendar: function () {
      /*
      left / right : move by day
      up / down : move by week
      page up / down : move by month
      control + page up / down : move by year
      control + home : move to current date
      enter : close datepicker and select currently highlighted date and place it in the input field ready for editing
      */
      
      var $date = $(".jQdate");
      var $datepicker = null;
      var visible = false;
      
      $.datepicker.setDefaults({
        dateFormat: 'yy.mm.dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['MON', 'THE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        dayNamesShort: ['MON', 'THE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        dayNamesMin: ['MON', 'THE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        firstDay: 1,
        showMonthAfterYear: true,
        beforeShow: function(input) {
          visible = true;
          var _inputOffset = $(input).offset()
          setTimeout(function() {
            $('#ui-datepicker-div').css('top', _inputOffset.top + 36);
          });
        },
        onClose: function() {
          visible = false;
        },
        showOn: "button",
        buttonText: "달력선택"
      });
      
      $date.datepicker(); // instantiate datepicker
      // $date.datepicker({
      //   onSelect: function (date) {
      //     $(this).trigger("focus");
      //   }
      // }).focus();
      
      $datepicker = $date.datepicker("widget");
      if ($datepicker.length == 0) {
        // console.log("no date picker");
        return false;
      }
      
      $date.on("keydown", function(e) {
        if (! visible) return true;
        var key = e.keyCode;
        var date, day, month, year, $datepicker;
        $datepicker = $(this).datepicker("widget");
        
        if (key >= 37 && key <= 40 && ! e.ctrlKey) {
        e.ctrlKey = true;
        $date.trigger (e);
        return false;
        } // if
        
        if (key >= 33 && key <=40) {
        day = $datepicker.find(".ui-state-hover").text();
        month = $datepicker.find(".ui-datepicker-month").text();
        year = $datepicker.find(".ui-datepicker-year").text();
        date = new Date (year + " " + month + " " + day);
        return false;
        } // if

        return true;
      }); // keydown
		},
	},
  

  /* 레이어 팝업 */
  layerPopup = {
    init: function () {
      var $layerLink = $('.layerLink');

      $layerLink.on('click', function(e){
        e.preventDefault();
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
  },

  common.init();
  layerPopup.init();
});
