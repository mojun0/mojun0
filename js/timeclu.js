
$(document).ready(function(){
    console.log('Calculation start'); // 스크립트 연결 확인
    $("#cal_btn").click(function(){
      $("#cal_btn").hide(); // 계산하기 버튼 클릭시 버튼이 사라짐
      alert("쥐님덕분에 계산기 좀 난잡하긴해도 드디어 완성했습니다 너무 감사해요 ㅠㅠㅠㅠ 사랑합니다 ! ");
      var inputValue = $("input[name=time]").length; // 13개의 배열을 넣는건 성공
      var inValue = new Array(inputValue); // 인풋박스안에 숫자를 넣으면 그숫자는 배열이 된다
        for(var i=0; i<inputValue; i++){
          inValue[i] = $("input[name=time]").eq(i).val();
          
          function inValue(){ 
            // 1분 인풋
            var tP = $("#time_1m").val();
            var day = Math.floor(tP / 1440);
            var hours = Math.floor((tP - (day * 1440)) / 60);
            var minutes = parseInt(tP - (day * 1440) - (hours * 60));
            // 5분 인풋
            var tP1 = $("#time_5m").val();
            var day1 = Math.floor((tP1 * 5) / 1440);
            var hours1 = Math.floor(((tP1 * 5) - (day1 * 1440)) / 60);
            var minutes1 = parseInt(tP1 * 5 - (day1 * 1440) - (hours1 * 60));
            // 10분 인풋
            var tP2 = $("#time_10m").val();
            var day2 = Math.floor((tP2 * 10) / 1440);
            var hours2 = Math.floor(((tP2 * 10) - (day2 * 1440)) / 60);
            var minutes2 = tP2 * 10 - (day2 * 1440) - (hours2 * 60);
            // 15분 인풋
            var tP3 = $("#time_15m").val();
            var day3 = Math.floor((tP3 * 15) / 1440);
            var hours3 = Math.floor(((tP3 * 15) - (day3 * 1440)) / 60);
            var minutes3 = tP3 * 15 - (day3 * 1440) - (hours3 * 60);
            // 30분 인풋                     
            var tP4 = $("#time_30m").val();
            var day4 = Math.floor((tP4 * 30) / 1440);
            var hours4 = Math.floor(((tP4 * 30) - (day4 * 1440)) / 60);
            var minutes4 = tP4 * 30 - (day4 * 1440) - (hours4 * 60);
            // 60분 인풋
            var tP5 = $("#time_60m").val();
            var day5 = Math.floor((tP5 * 60) / 1440);
            var hours5 = Math.floor(((tP5 * 60) - (day5 * 1440)) / 60);
            var minutes5 = tP5 * 60 - (day5 * 1440) - (hours5 * 60);
            // 3시간 인풋
            var tP6 = $("#time_3h").val();
            var day6 = Math.floor((tP6 * 180) / 1440);
            var hours6 = Math.floor(((tP6 * 180) - (day6 * 1440)) / 60);
            var minutes6 = tP6 * 180 - (day6 * 1440) - (hours6 * 60);
            // 8시간 인풋
            var tP7 = $("#time_8h").val();
            var day7 = Math.floor((tP7 * 480) / 1440);
            var hours7 = Math.floor(((tP7 * 480) - (day7 * 1440)) / 60);
            var minutes7 = tP7 * 480 - (day7 * 1440) - (hours7 * 60);
            // 12시간 인풋
            var tP8 = $("#time_12h").val();
            var day8 = Math.floor((tP8 * 720) / 1440);
            var hours8 = Math.floor(((tP8 * 720) - (day8 * 1440)) / 60);
            var minutes8 = tP8 * 720 - (day8 * 1440) - (hours8 * 60);
            // 24시간 인풋
            var tP9 = $("#time_24h").val();
            var day9= Math.floor((tP9 * 1440) / 1440);
            var hours9 = Math.floor(((tP9 * 1440) - (day9 * 1440)) / 60);
            var minutes9 = tP9 * 1440 - (day9 * 1440) - (hours9 * 60);
            // 3일 인풋
            var tP10 = $("#time_3d").val();
            var day10 = Math.floor((tP10 * 4320) / 1440);
            var hours10 = Math.floor(((tP10 * 4320) - (day10 * 1440)) / 60);
            var minutes10 = tP10 * 4320 - (day10 * 1440) - (hours10 * 60);
            // 7알 안퓻
            var tP11 = $("#time_7d").val();
            var day11 = Math.floor((tP11 * 10080) / 1440);
            var hours11 = Math.floor(((tP11 * 10080) - (day11 * 1440)) / 60);
            var minutes11 = tP11 * 10080 - (day11 * 1440) - (hours11 * 60);
            // 30일 인풋
            var tP12 = $("#time_30d").val();
            var day12 = Math.floor((tP12 * 43200) / 1440);
            var hours12 = Math.floor(((tP12 * 43200) - (day12 * 1440)) / 60);
            var minutes12 = tP12 * 43200 - (day12 * 1440) - (hours12 * 60);
            document.getElementById('alltime').innerHTML = 
            parseInt(day+day1+day2+day3+day4+day5+day6+day7+day8+day9+day10+day11+day12)
            +'일'+ 
            parseInt(hours+hours1+hours2+hours3+hours4+hours5+hours6+hours7+hours8+hours9+hours10+hours11+hours12)
            +'시간'+ 
            parseInt(minutes+minutes1+minutes2+minutes3+minutes4+minutes5+minutes6+minutes7+minutes8+minutes9+minutes10+minutes11+minutes12)
            +'분';
          }
          inValue();
        }
  });
  });