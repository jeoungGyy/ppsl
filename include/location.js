var str = '';

str += '<div class="location">';
str += '  <i class="home"></i>';
str += '  <div class="locationDepth">';
str += '  </div>';
str += '  <button type="button" class="mBtn printBtn" onclick="print();"><i>화면 인쇄</i></button>';
str += '  <div class="snsBox">';
str += '    <button type="button" class="mBtn shareBtn" aria-describedby="snsShareBox" title="페이지 공유 닫힘"><i>페이지 공유</i></button>';
str += '    <div id="snsShareBox" class="snsLinks" role="tooltip">';
str += '      <ul>';
str += '        <li><button type="button" class="sBtn"><img src="../../images/common/ico_kakaotalk.svg" alt="카카오톡"><span>카카오톡</span></button></li>';
str += '        <li><button type="button" class="sBtn"><img src="../../images/common/ico_facebook.svg" alt="페이스북"><span>페이스북</span></button></li>';
str += '        <li><button type="button" class="sBtn"><img src="../../images/common/ico_twitter.svg" alt="트위터"><span>트위터</span></button></li>';
str += '        <li><button type="button" class="sBtn"><img src="../../images/common/ico_insta.svg" alt="인스타그램"><span>인스타그램</span></button></li>';
str += '      </ul>';
str += '    </div>';
str += '  </div>';
str += '</div>';


document.write(str);


