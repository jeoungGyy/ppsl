var str = '';

str += '<div class="location">';
str += '  <i class="home"></i>';
str += '  <div class="locationDepth">';
str += '  </div>';
str += '  <button type="button" class="mBtn printBtn" onclick="print();" title="화면 인쇄"><i></i></button>';
str += '  <div class="snsBox">';
str += '    <button type="button" class="mBtn shareBtn" title="페이지 공유 닫힘"><i></i></button>';
str += '    <div class="snsLinks" role="tooltip">';
str += '      <ul>';
str += '        <li><button type="button" class="sBtn" title="공유"><img src="../../images/common/ico_kakaotalk.svg" alt=""><span>카카오톡</span></button></li>';
str += '        <li><button type="button" class="sBtn" title="공유"><img src="../../images/common/ico_facebook.svg" alt=""><span>페이스북</span></button></li>';
str += '        <li><button type="button" class="sBtn" title="공유"><img src="../../images/common/ico_twitter.svg" alt=""><span>트위터</span></button></li>';
str += '        <li><button type="button" class="sBtn" title="공유"><img src="../../images/common/ico_insta.svg" alt=""><span>인스타그램</span></button></li>';
str += '      </ul>';
str += '    </div>';
str += '  </div>';
str += '</div>';


document.write(str);


