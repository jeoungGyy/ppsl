var str = '';

str += '<div class="evaluationBody">';
str += '  <div class="context">';
str += '    <p>페이지의 내용이나 사용편의성에 대해 만족하십니까?</p>';
str += '    <ul class="groupBox">';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="evaradio1" name="evaradio" checked>';
str += '          <label for="evaradio1">매우만족</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="evaradio2" name="evaradio">';
str += '          <label for="evaradio2">만족</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="evaradio3" name="evaradio">';
str += '          <label for="evaradio3">보통</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="evaradio4" name="evaradio">';
str += '          <label for="evaradio4">불만족</label>';
str += '        </div>';
str += '      </li>';
str += '      <li>';
str += '        <div class="radioBox">';
str += '          <input type="radio" id="evaradio5" name="evaradio">';
str += '          <label for="evaradio5">매우 불만족</label>';
str += '        </div>';
str += '      </li>';
str += '    </ul>';
str += '  </div>';
str += '  <div class="btn">';
str += '    <button type="button" class="button h40 blue">확인</button>';
str += '  </div>';
str += '</div>';


document.write(str);



