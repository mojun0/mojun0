$(document).ready(function(){
    console.log('Calculation start'); // 스크립트 연결 확인
    $("#cal_btn").click(function(){
      $("#cal_btn").hide();
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
        
        
        
        
        
        //   function inValue(){ 
        //     // 1분 인풋
        //     var tP = $("#time_1m").val();
        //     var day = Math.floor(tP / 1440);
        //     var hours = Math.floor((tP - (day * 1440)) / 60);
        //     var minutes = parseInt(tP - (day * 1440) - (hours * 60));
        //     // 5분 인풋
        //     var tP1 = $("#time_5m").val();
        //     var day1 = Math.floor((tP1 * 5) / 1440);
        //     var hours1 = Math.floor(((tP1 * 5) - (day1 * 1440)) / 60);
        //     var minutes1 = parseInt(tP1 * 5 - (day1 * 1440) - (hours1 * 60));
        //     // 10분 인풋
        //     var tP2 = $("#time_10m").val();
        //     var day2 = Math.floor((tP2 * 10) / 1440);
        //     var hours2 = Math.floor(((tP2 * 10) - (day2 * 1440)) / 60);
        //     var minutes2 = tP2 * 10 - (day2 * 1440) - (hours2 * 60);
        //     // 15분 인풋
        //     var tP3 = $("#time_15m").val();
        //     var day3 = Math.floor((tP3 * 15) / 1440);
        //     var hours3 = Math.floor(((tP3 * 15) - (day3 * 1440)) / 60);
        //     var minutes3 = tP3 * 15 - (day3 * 1440) - (hours3 * 60);
        //     // 30분 인풋                     
        //     var tP4 = $("#time_30m").val();
        //     var day4 = Math.floor((tP4 * 30) / 1440);
        //     var hours4 = Math.floor(((tP4 * 30) - (day4 * 1440)) / 60);
        //     var minutes4 = tP4 * 30 - (day4 * 1440) - (hours4 * 60);
        //     // 60분 인풋
        //     var tP5 = $("#time_60m").val();
        //     var day5 = Math.floor((tP5 * 60) / 1440);
        //     var hours5 = Math.floor(((tP5 * 60) - (day5 * 1440)) / 60);
        //     var minutes5 = tP5 * 60 - (day5 * 1440) - (hours5 * 60);
        //     // 3시간 인풋
        //     var tP6 = $("#time_3h").val();
        //     var day6 = Math.floor((tP6 * 180) / 1440);
        //     var hours6 = Math.floor(((tP6 * 180) - (day6 * 1440)) / 60);
        //     var minutes6 = tP6 * 180 - (day6 * 1440) - (hours6 * 60);
        //     // 8시간 인풋
        //     var tP7 = $("#time_8h").val();
        //     var day7 = Math.floor((tP7 * 480) / 1440);
        //     var hours7 = Math.floor(((tP7 * 480) - (day7 * 1440)) / 60);
        //     var minutes7 = tP7 * 480 - (day7 * 1440) - (hours7 * 60);
        //     // 12시간 인풋
        //     var tP8 = $("#time_12h").val();
        //     var day8 = Math.floor((tP8 * 720) / 1440);
        //     var hours8 = Math.floor(((tP8 * 720) - (day8 * 1440)) / 60);
        //     var minutes8 = tP8 * 720 - (day8 * 1440) - (hours8 * 60);
        //     // 24시간 인풋
        //     var tP9 = $("#time_24h").val();
        //     var day9= Math.floor((tP9 * 1440) / 1440);
        //     var hours9 = Math.floor(((tP9 * 1440) - (day9 * 1440)) / 60);
        //     var minutes9 = tP9 * 1440 - (day9 * 1440) - (hours9 * 60);
        //     // 3일 인풋
        //     var tP10 = $("#time_3d").val();
        //     var day10 = Math.floor((tP10 * 4320) / 1440);
        //     var hours10 = Math.floor(((tP10 * 4320) - (day10 * 1440)) / 60);
        //     var minutes10 = tP10 * 4320 - (day10 * 1440) - (hours10 * 60);
        //     // 7알 안퓻
        //     var tP11 = $("#time_7d").val();
        //     var day11 = Math.floor((tP11 * 10080) / 1440);
        //     var hours11 = Math.floor(((tP11 * 10080) - (day11 * 1440)) / 60);
        //     var minutes11 = tP11 * 10080 - (day11 * 1440) - (hours11 * 60);
        //     // 30일 인풋
        //     var tP12 = $("#time_30d").val();
        //     var day12 = Math.floor((tP12 * 43200) / 1440);
        //     var hours12 = Math.floor(((tP12 * 43200) - (day12 * 1440)) / 60);
        //     var minutes12 = tP12 * 43200 - (day12 * 1440) - (hours12 * 60);
        //     
        //     document.getElementById('alltime').innerHTML = 
        //     parseInt(day+day1+day2+day3+day4+day5+day6+day7+day8+day9+day10+day11+day12)
        //     +'일'+ 
        //     parseInt(hours+hours1+hours2+hours3+hours4+hours5+hours6+hours7+hours8+hours9+hours10+hours11+hours12)
        //     +'시간'+ 
        //     parseInt(minutes+minutes1+minutes2+minutes3+minutes4+minutes5+minutes6+minutes7+minutes8+minutes9+minutes10+minutes11+minutes12)
        //     +'분';
        //   }
        //   inValue();
        //