$(document).ready(function(){
    console.log('Calculation start'); // 스크립트 연결 확인
    $("#cal_btn").click(function(){
      var inputValue = $("input[name=time]").length; // 13개의 배열을 넣는건 성공
      var inValue = new Array(inputValue); // 인풋박스안에 숫자를 넣으면 그숫자는 배열이 된다
        for(var i=0; i<inputValue; i++){
          inValue[i] = $("input[name=time]").eq(i).val();
                 for(var j=0; j<inValue.length; j++){
                   switch(j){ //j가...
                      case 0: // 0이면 아래 문구들을 실행 
                        var m1 = inValue[j];
                        var m_1 = m1 * 1;
                        break; // case 빠져나감.
                      case 1:
                        var m5 = inValue[j];
                        var m_5 = m5 * 5 ;
                        break;
                      case 2:
                        var m10 = inValue[j];
                        var m_10 = m10 * 10 ; 
                        break;
                      case 3:
                        var m15 = inValue[j];
                        var m_15 = m15 * 15
                        break;
                      case 4:
                        var m30 = inValue[j];
                        var m_30 = m30 * 30;
                        break;
                      case 5:
                        var m60 = inValue[j];
                        var m_60 = m60 * 60;
                        break;
                      case 6:
                        var t3 = inValue[j];
                        var t_3 = t3 * 180;
                        break;
                      case 7:
                        var t8 = inValue[j];
                        var t_8 = t8 * 480;
                        break;
                      case 8:
                        var t15 = inValue[j];
                        var t_15 = t15 * 900;
                        break;
                      case 9:
                        var t24 = inValue[j];
                        var t_24 = t24 * 1440;
                        break;
                      case 10:
                        var d3 = inValue[j];
                        var d_3 = d3 * 4320;
                        break;
                      case 11:
                        var d7 = inValue[j];
                        var d_7 = d7 * 10080;
                        break;
                      case 12:
                        var d30 = inValue[j];
                        var d_30 = d30 * 43200;
                        break;
                   }
                    var timetotar = m_1 + m_5 + m_10 + m_15 + m_30 + m_60 + t_3 + t_8 + t_15 + t_24 + d_3 + d_7 + d_30;
                    console.log(timetotar)
                    var day = Math.floor(timetotar / 1440);
                    var hours = Math.floor((timetotar - (day * 1440)) / 60);
                    var minutes = (timetotar - (day * 1440) - (hours * 60));
                    document.getElementById("totar").innerHTML = 
                    parseInt(day) + '일' + parseInt(hours) + '시간' + parseInt(minutes) + '분';
                 }
          }});
      });
          // 2. 아래 코드들과 이기능들을 조금 더 업그레이드 해볼까요?
          // 2-1. 위에서 저장한 inValue값은 어디에서 사용되는걸까요?? inValue값을 사용해서 출력해보기!! - for문 사용 = 아래 코드들을 줄일 수 있어요!
          // 2-2. 계산하기 버튼을 클릭하면 버튼이 사라지죠?? 조금더 업그레이드 해볼까요? 계산한 후 값을 "변경"하면 계산하기 버튼이 다시 나타나도록 해보기!