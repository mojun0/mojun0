function m1(){ 
    var m1 = parseInt(document.getElementById("time_1m").value);
    var hours   = Math.floor(m1 / 3600);
    var minutes = Math.floor((m1 - (hours * 3600)) / 60);
    var seconds = m1 - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    document.getElementById('alltime').innerHTML = hours+'시간'+minutes+'분'+seconds;
    }
  
   function m5(){ 
    var m5 = parseInt(document.getElementById("time_5m").value);
    var hours   = Math.floor(m5 / 60);
    var minutes = Math.floor((m5 - (hours * 1440)) / 60);
    //var seconds = m5 - (hours * 60) - (minutes * 60);

    document.getElementById('alltime').innerHTML = hours+'시간'+minutes+'분';//+seconds;
    }
  
   function m10(){
    var m10 = parseInt(document.getElementById("time_10m").value);
    var m_10 = m10 * 10;
     document.getElementById('alltime').innerHTML = m_10 + "분";
    }
  
   function m15(){
    var m15 = parseInt(document.getElementById("time_15m").value);
    var m_15 = m15 * 15;
     document.getElementById('alltime').innerHTML = m_15 + "분";
    }
  
   function m30(){ 
    var m30 = parseInt(document.getElementById("time_30m").value);
    var m_30 = m30 * 30;
     document.getElementById('alltime').innerHTML = m_30 + "분";
    }
  
   function m60(){ 
    var m60 = parseInt(document.getElementById("time_60m").value);
    var m_60 = m60 * 60;
     document.getElementById('alltime').innerHTML = m_60 + "분";
    }      
   
   function h3(){ 
    var h3 = parseInt(document.getElementById("time_3h").value);
    var h_3 = h3 * 180;
     document.getElementById('alltime').innerHTML = h_3 + "분";
    }      

   function h8(){
    var h8 = parseInt(document.getElementById("time_8h").value);
    var h_8 = h8 * 480;
     document.getElementById('alltime').innerHTML = h_8 + "분";
    }      

   function h12(){ 
    var h12 = parseInt(document.getElementById("time_12h").value);
    var h_12 = h12 * 720;
     document.getElementById('alltime').innerHTML = h_12 + "분";
    }
   
   function h24(){ 
    var h24 = parseInt(document.getElementById("time_24h").value);
    var h_24= h24 * 1440;
     document.getElementById('alltime').innerHTML = h_24 + "분";
    }   

   function d3(){ 
    var d3 = parseInt(document.getElementById("time_3d").value);
    var d_3 = d3 * 4320;
     document.getElementById('alltime').innerHTML = d_3 + "분";
    }   

   function d7(){ 
    var d7 = parseInt(document.getElementById("time_7d").value);
    var d_7 = d7 * 10080;
     document.getElementById('alltime').innerHTML = d_7 + "분";
    }   

   function d30(){ 
    var d30 = parseInt(document.getElementById("time_30d").value);
    var d_30 = d30 * 43200;
     document.getElementById('alltime').innerHTML = d_30 + "분"; 
    }