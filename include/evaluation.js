var str = '';

str += '<div class="evaluationBody">';
str += '  <div class="context">';
str += '    <p>페이지의 내용이나 사용편의성에 대해 만족하십니까?</p>';
str += '    <ul class="groupBox">';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="radio1" name="radio" checked>';
str += '          <label for="radio1">매우만족</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="radio2" name="radio">';
str += '          <label for="radio2">만족</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="radio3" name="radio">';
str += '          <label for="radio3">보통</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="radio4" name="radio">';
str += '          <label for="radio4">불만족</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="radio5" name="radio">';
str += '          <label for="radio5">매우 불만족</label>';
str += '        </div>';
str += '      </li>';
str += '    </ul>';
str += '  </div>';
str += '  <div class="btn">';
str += '    <button type="button" class="button h40 blue">확인</button>';
str += '  </div>';
str += '</div>';


document.write(str);



