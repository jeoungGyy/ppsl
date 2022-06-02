$(document).ready(function () {
  
	common = {
    mobile_size: 767,

		init: function () {
      common.groupBox();
			common.selectBox();
			common.searchReset();
			common.menu();
			common.menu_active();
			common.calendar();
			common.snsBtnToggle();
			common.initial();
		},
    /* 라디오, 체크박스 */
		groupBox: function () {
      $('.groupBox input').iCheck({
        checkboxClass: 'icheckbox',
        radioClass: 'iradio',
      });
		},
     /* 셀렉트박스 */
		selectBox: function () {
      var select = $('select');
      select.change(function() {
        var _result = $(this).val();
        if(_result) {
          $(this).addClass('lineBlack');
        }
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
      var $megaMenuBg = $(".megaMenuBg");
      var $subMenuBlind = $(".subMenuBlind");
      var $blind = $('.blind');
      var menu_change = Boolean;

      $(".header .gnb, .subMenuBlind, .megaMenuBg").on({
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
          $megaMenuBg.height(_menu_height_value + 69).addClass('active');;
          $subMenuBlind.height(_menu_height_value + 70);
          $blind.addClass('active');
          TweenMax.to($header, 0, { height: _menu_height_value + 174, onComplete:function() {
            $header.addClass('active');
            $depth1.addClass('show');
            $blind.addClass('show');
            $megaMenuBg.addClass('show');
          }});
        } else {
          $subMenuBlind.height('');
          $depth1.removeClass('show');
          $depth2.height('');
          $blind.removeClass('show');
          $megaMenuBg.removeClass('show active');
          TweenMax.to($header, 0, { height: '', onComplete:function() {
            $header.removeClass('active');
            $depth1.removeClass('active');
            $blind.removeClass('active');
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
            var lnb_title_clone3 = $(this).parents(".depth3").siblings("a").clone();
            var this_clone = $(this).clone();

						$lnbBody.find("h2").text(lnb_title).siblings(".lnb").append(lnb_clone);
            if(_depth.length == 3) {
              $location.append(lnb_title_clone2).append(lnb_title_clone3).append(this_clone);
            } else {
              $location.append(lnb_title_clone2).append(this_clone);
            }

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
        setTimeout(function() {
          $lnbBody.find(".menu_exist.active").next().slideDown(200);
        }, 10);
				$lnbBody.find(".menu_exist").on("click", function(e){
					e.preventDefault();
					if(!$(this).hasClass("arrow")) {
						$lnbBody.find(".menu_exist").removeClass("arrow active").attr('title', '메뉴 축소').siblings("ul").slideUp(200);
						$(this).addClass("arrow active").attr('title', '메뉴 확장').siblings("ul").slideDown(200);
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
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        firstDay: 7,
        changeYear: true,
        changeMonth: true,
        yearRange: '-100:+10',
        hideIfNoPrevNext: true,
        showMonthAfterYear: true,
        beforeShow: function(input) {
          visible = true;
          var _inputOffset = $(input).offset()
          setTimeout(function() {
            $('#ui-datepicker-div').css('top', _inputOffset.top + 36);
          });
        },
        onSelect: function( date ) {
          date && $(this).next().addClass('active');
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
    /* Loaction SNS Button Toggle */
		snsBtnToggle: function () {
      var $shareBtn = $('.shareBtn');
      var $snsBox = $('.snsBox');

      $shareBtn.on("click", function () {
        if($(this).hasClass('active')) {
          $(this).removeClass('show');
          setTimeout(function() {
            $shareBtn.removeClass('active').attr('title', '페이지 공유 닫힘');
          }, 500);
        } else {
          $(this).addClass('active');
          setTimeout(function() {
            $shareBtn.addClass('show').attr('title', '페이지 공유 열림');
          }, 10);
          
          $snsBox.find("li:last-child").on("keydown", function (e) {
            var _keyCode = e.keyCode || e.which;

            if(_keyCode === 9) {
              if(!e.shiftKey) {
                e.preventDefault();
                $shareBtn .focus();
              }
            }
          });
        };
      });
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

          console.log('모바일');

          /* 모바일 토글 버튼 slideDownUp */
          var $toggleGroup = $('button.toggleGroup');
          $toggleGroup.off().on('click', function() {
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

          console.log('피씨');

          $controlBox.removeAttr('style');
          $targetHidden.removeAttr('style');

          /* LNB depth3 display:none 제거 */
          var $lnbTag = $('.lnb .depth2 >li >a.active');

          $lnbTag.next().removeAttr('style');
        }
      }).trigger("resize");
		},
	},


  active = {
    /* BODY 확대, 축소 */
    size : 1.0,
    zoom: function(v) {
      var tempSize = this.size;
      
      if (v == 0) {
        this.size = 1.0;
      } else {
        tempSize += v * 0.1;
      }
      
      if (tempSize < 0.8 || tempSize > 1.5) {
        return;
      }else{
        this.size = tempSize;
      }
      
      $('body').css('zoom', this.size);
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
        $(document).width() <= 767 && layerPopup.mobile();
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
    mobile: function () {
      /* 모바일 depth1 링크 제거 */
      var $depth1 = $('.allMenu .depth1');
      var $depth1Link = $depth1.find('>li >a');
      var $depth1First = $depth1.find('>li:first-child .depth2');
      var $depth2 = $depth1.find('.depth2');

      $depth1First.show()
      $depth1Link.filter('.active').each(function(i) {
        console.log($(this).attr("data-menu"))
        if($(this).attr("data-menu") === 'depth_1' ||  $(this).attr("data-menu") === 'depth_8') { 
          return false;
        }
        $depth1First.hide()
      });

      $depth1Link.on('click', function(e) {
        e.preventDefault();
        $depth1Link.removeClass("active");
        $depth2.hide();
        $(this).addClass('active').next().show();
      });
    },
  },
  /* 통합검색 */
  totalSearch = {
    init: function () {
      var $allSearchBtn = $('.allSearchBtn');
      var $detailTwBtn = $('.detailTwBtn');
      var $tbSearch = $('.tbSearch');
      var $searchResetBtn = $tbSearch.find('.searchResetBtn');
      var $searchScrollBody = $('.searchScrollBody');
      
      $allSearchBtn.on('click', function(e){
        e.preventDefault();
        totalSearch.open($(this));
      });
      $detailTwBtn.on('click', function(e){
        e.preventDefault();
        totalSearch.detailToggle($(this));
      });

      // 통합검색 인풋 글자 체크
      $tbSearch.find('input').on('change keyup paste', function() {
        if($(this).val()) {
          $(this).parent().addClass('btnShow');
          $searchScrollBody && $searchScrollBody.slideDown(200)

          $searchResetBtn.on('click', function() {
            $(this).siblings('input').val('').parent().removeClass('btnShow');
            $searchScrollBody && $searchScrollBody.slideUp(200)
          });
        } else {
          $(this).parent().removeClass('btnShow');
          $searchScrollBody && $searchScrollBody.slideUp(200)
        }
      });
    },
    open: function (_this) {
      var $totalBody = $('.totalBody');
      var $tbPopular = $('.tbPopular');
      var $blind = $('.blind');

      if(!_this.hasClass('active')) {
        // $('body').addClass('noScroll');
        _this.addClass('active').attr('title', '통합검색 메뉴 닫기');
        $tbPopular.addClass('hidden');
        $blind.addClass('active');
        $totalBody.addClass('active').focus();
        TweenLite.to($totalBody, 0.3, {onComplete:function() {
          $blind.addClass('show');
          $totalBody.addClass('show');
          
          // 레이어 팝업 외부 클릭 시 창닫기
          $blind.on('click', function (e){
            totalSearch.close(_this);
          });
        }});
      } else {
        totalSearch.close(_this);
      }
    },
    close: function (_this) {
      var $totalBody = $('.totalBody');
      var $tbPopular = $('.tbPopular');
      var $blind = $('.blind');

      // $('body').removeClass('noScroll');
      _this.removeClass('active').attr('title', '통합검색 메뉴 열기');;
      $tbPopular.removeClass('hidden');
      $blind.removeClass('show');
      $totalBody.removeClass('show');
      TweenLite.to($totalBody, 0.3, {onComplete:function() {
        $blind.removeClass('active');
        $totalBody.removeClass('active');
      }});
    },
    detailToggle: function (_this) {
      var $detailTwBtn = $('.detailTwBtn');
      var $twHiddenGroup = $('.twHiddenGroup');

      _this.toggleClass('active');
      if($detailTwBtn.hasClass('active')) {
        _this.attr('title', '상세검색 열림');
        $twHiddenGroup.slideDown(200);
      } else {
        _this.attr('title', '상세검색 닫힘');
        $twHiddenGroup.slideUp(200);
      }
    },
  },
  /* 아코디언 */
  accodion = {
		init: function () {
			var $accordionBtn = $('.accordionBtn');
			
			$accordionBtn.off().on({
				'click': function() {
					var _target = $("#" + $(this).attr("aria-controls"));
					accodion.open(this, _target);
				},
			});
		},
		open: function (_this, _target) {
			var $accordionBtn = $('.accordionBtn');
			var $accopanel = $('.accopanel');

			if(_target.css('display') === "none") {
				$accopanel.slideUp(200).attr('tabindex', -1);
				_target.slideDown(200).attr('tabindex', 0);

				TweenLite.to(_target, .2, {onComplete:function() {
					$accordionBtn.removeClass('active').attr({'aria-expanded': false, 'title': '축소됨'}).find('.invisible').remove();
					$(_this).addClass('active').attr({'aria-expanded': true, 'title': '확장됨'}).prepend('<span class="invisible">현재 단계</span>');
				}});
			}
		},
	}





  common.init();
  layerPopup.init();
  totalSearch.init();
  accodion.init();
});
