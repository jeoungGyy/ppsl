var str = '';

str += '<nav class="skipnav">';
str += '  <a href="#contentLink">본문 바로가기</a>';
str += '  <a href="#menuLink">메뉴 바로가기</a>';
str += '</nav>';
str += '';
str += '<header class="header">';
str += '  <div class="global">';
str += '    <div class="area">';
str += '      <div>';
str += '        <span class="colorBlue">홍길동님 안녕하세요.</span> <button type="button" class="logOutBtn">로그아웃</button>';
str += '      </div>';
str += '      <div class="loginSpace">';
str += '        <span>로그인 유지</span> <span class="time">29:59</span> <button type="button" class="timeExtensionBtn">시간연장</button>';
str += '      </div>';
str += '      <div class="textSpace">';
str += '        <span>화면크기</span>';
str += '        <button type="button" class="fontSize increaseBtn"><i>확대</i></button>';
str += '        <button type="button" class="fontSize decreaseBtn"><i>축소</i></button>';
str += '      </div>';
str += '    </div>';
str += '  </div>';
str += '  <div class="menu">';
str += '    <div class="area">';
str += '      <h1><a href="#"><img src="../../images/common/ci.svg" alt="공적연금연계제도"></a></h1>';
str += '      <nav id="menuLink" class="gnb">';
str += '        <ul class="depth1">';
str += '          <li><a href="../guide/HO_01_01_01_01.html" data-menu="depth_1"><span>안내</span></a>';
str += '            <ul class="depth2">';
str += '              <li><a href="../guide/HO_01_01_01_01.html" data-menu="depth_1_1"><span>제도소개</span></a>';
str += '                <ul class="depth3">';
str += '                  <li><a href="../guide/HO_01_01_01_01.html" data-menu="depth_1_1_1"><span>연금연계제도</span></a></li>';
str += '                  <li><a href="../guide/HO_01_01_02_01.html" data-menu="depth_1_1_2"><span>용어집</span></a></li>';
str += '                  <li><a href="../guide/HO_01_01_03.html" data-menu="depth_1_1_3"><span>관계기관법령</span></a></li>';
str += '                </ul>';
str += '              </li>';
str += '              <li><a href="../guide/HO_01_02_01.html" data-menu="depth_1_2"><span>신청/청구안내</span></a>';
str += '                <ul class="depth3">';
str += '                  <li><a href="../guide/HO_01_02_01.html" data-menu="depth_1_2_1"><span>연계신청</span></a></li>';
str += '                  <li><a href="../guide/HO_01_02_02.html" data-menu="depth_1_2_2"><span>반납금납부</span></a></li>';
str += '                  <li><a href="../guide/HO_01_02_03_01.html" data-menu="depth_1_2_3"><span>연금종류 및 청구</span></a></li>';
str += '                </ul>';
str += '              </li>';
str += '              <li><a href="../guide/HO_01_03_01.html" data-menu="depth_1_3"><span>신고/절차안내</span></a>';
str += '                <ul class="depth3">';
str += '                  <li><a href="../guide/HO_01_03_01.html" data-menu="depth_1_3_1"><span>사망신고안내</span></a></li>';
str += '                  <li><a href="../guide/HO_01_03_02.html" data-menu="depth_1_3_2"><span>권리구제절차</span></a></li>';
str += '                </ul>';
str += '              </li>';
str += '              <li><a href="../guide/HO_01_04_01.html" data-menu="depth_1_4"><span>상담사례</span></a></li>';
str += '              <li><a href="../guide/HO_01_05_01.html" data-menu="depth_1_5"><span>찾아오시는길</span></a></li>';
str += '            </ul>';
str += '          </li>';
str += '          <li><a href="../consultation/HO_02_01_01.html" data-menu="depth_2"><span>상담</span></a>';
str += '            <ul class="depth2">';
str += '              <li><a href="../consultation/HO_02_01_01.html" data-menu="depth_2_1"><span>상담</span></a></li>';
str += '              <li><a href="../consultation/HO_02_02_01.html" data-menu="depth_2_2"><span>상담FAQ</span></a></li>';
str += '              <li><a href="../consultation/HO_02_03_01.html" data-menu="depth_2_3"><span>전산문의</span></a></li>';
str += '              <li><a href="../consultation/HO_02_04_01.html" data-menu="depth_2_4"><span>제도개선</span></a></li>';
str += '              <li><a href="../consultation/HO_02_05_01.html" data-menu="depth_2_5"><span>심사요청</span></a></li>';
str += '            </ul>';
str += '          </li>';
str += '          <li><a href="../apply/HO_02_06_01.html" data-menu="depth_3"><span>신청</span></a>';
str += '            <ul class="depth2">';
str += '              <li><a href="../apply/HO_02_06_01.html" data-menu="depth_3_1"><span>반납금 모의계산</span></a>';
str += '              <li><a href="../apply/HO_03_01_01.html" data-menu="depth_3_2"><span>연계신청</span></a></li>';
str += '              <li><a href="../apply/HO_03_05_01.html" data-menu="depth_3_3"><span>신청정보변경</span></a></li>';
str += '              <li><a href="../apply/HO_03_06_01.html" data-menu="depth_3_4"><span>신청상태조회</span></a></li>';
str += '            </ul>';
str += '          </li>';
str += '          <li><a href="../charge/HO_04_01_01.html" data-menu="depth_4"><span>청구</span></a>';
str += '            <ul class="depth2">';
str += '              <li><a href="../charge/HO_04_01_01.html" data-menu="depth_4_1"><span>연계연금청구</span></a></li>';
str += '              <li><a href="../charge/HO_04_02_01.html" data-menu="depth_4_2"><span>수급계좌변경</span></a></li>';
str += '              <li><a href="../charge/HO_04_03_01.html" data-menu="depth_4_3"><span>상태조회</span></a></li>';
str += '            </ul>';
str += '          </li>';
str += '          <li><a href="../inform/HO_05_01_01.html" data-menu="depth_5"><span>알림</span></a>';
str += '            <ul class="depth2">';
str += '              <li><a href="../inform/HO_05_01_01.html" data-menu="depth_5_1"><span>공지사항</span></a></li>';
str += '              <li><a href="../inform/HO_05_02_01.html" data-menu="depth_5_2"><span>자료실</span></a></li>';
str += '              <li><a href="../inform/HO_05_03_01.html" data-menu="depth_5_3"><span>연금연계소식</span></a></li>';
str += '              <li><a href="../inform/HO_05_04_01.html" data-menu="depth_5_4"><span>이용안내</span></a></li>';
str += '            </ul>';
str += '          </li>';
str += '          <li><a href="../mypage/HO_06_01_01.html" data-menu="depth_6"><span>마이페이지</span></a>';
str += '            <ul class="depth2">';
str += '              <li><a href="../mypage/HO_06_01_01.html" data-menu="depth_6_1"><span>나의현황</span></a>';
str += '                <ul class="depth3">';
str += '                  <li><a href="../mypage/HO_06_01_01.html" data-menu="depth_6_1_1"><span>신청청구현황</span></a></li>';
str += '                  <li><a href="../mypage/HO_06_01_02.html" data-menu="depth_6_1_2"><span>연금수령현황</span></a></li>';
str += '                  <li><a href="../mypage/HO_06_01_03.html" data-menu="depth_6_1_3"><span>반납금현황</span></a></li>';
str += '                  <li><a href="../mypage/HO_06_01_04.html" data-menu="depth_6_1_4"><span>상담내역</span></a></li>';
str += '                </ul>';
str += '              </li>';
str += '              <li><a href="../mypage/HO_06_02_01.html" data-menu="depth_6_2"><span>예상연금/반납금</span></a>';
str += '                <ul class="depth3">';
str += '                  <li><a href="../mypage/HO_06_02_01.html" data-menu="depth_6_2_1"><span>예상연금조회</span></a></li>';
str += '                  <li><a href="../mypage/HO_06_02_05.html" data-menu="depth_6_2_2"><span>예상반납금조회</span></a></li>';
str += '                </ul>';
str += '              </li>';
str += '              <li><a href="../mypage/HO_06_03_01.html" data-menu="depth_6_3"><span>증명서발급요청</span></a></li>';
str += '              <li><a href="../mypage/HO_06_04_01.html" data-menu="depth_6_4"><span>증명서</span></a></li>';
str += '            </ul>';
str += '          </li>';
str += '        </ul>';
str += '      </nav>';
str += '      <div class="btnsWrap">';
str += '        <button type="button" class="allSearchBtn"><i>통합검색</i></button>';
str += '        <button type="button" class="layerLink allMenuBtn" aria-controls="allMenu_pop"><i>전체 메뉴</i></button>';
str += '      </div>';
str += '    </div>';
str += '    <div class="subMenuBlind"></div>';
str += '  </div>';
str += '</header>';
str += '<div id="allMenu_pop" class="layerPopup" role="dialog" aria-modal="true" tabindex="0">';
str += '  <header class="sitemapHeader">';
str += '    <div class="area">';
str += '      <h1><a href="#"><img src="../../images/common/ci.svg" alt="공적연금연계제도"></a></h1>';
str += '    </div>';
str += '  </header>';
str += '  <div class="area">';
str += '    <div class="allMenu">';
str += '    </div>';
str += '    <button type="button" class="layerClose"><i>창 닫기</i></button>';
str += '  </div>';
str += '</div>';


document.write(str);

