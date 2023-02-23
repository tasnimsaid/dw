




const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



setInterval(() => {
   const time = new Date();
   const month = time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   
   const hour = time.getHours();
   const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
   const minutes = time.getMinutes();
   const ampm = hour >=12 ? 'PM' : 'AM'

   timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

   dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
   document.getElementById('dayous').innerHTML = days[day]
}, 1000);



const today = new Date().getDay(); // Get the current day of the week as a number (0-6)
const greetingElement = document.getElementById("greeting"); // Get the element where we'll display the greeting

if (today === 0) {
  // Sunday
  
  document.getElementById("peinty1").innerHTML="الشمس";
  document.getElementById("peinty2").innerHTML="الزهرة";
  document.getElementById("peinty3").innerHTML="عطارد";
  document.getElementById("peinty4").innerHTML="القمر";
  document.getElementById("peinty5").innerHTML="زحل";
  document.getElementById("peinty6").innerHTML="المشتري";
  document.getElementById("peinty7").innerHTML="المريخ";
  document.getElementById("peinty8").innerHTML="الشمس";
  document.getElementById("peinty9").innerHTML="الزهرة";
  document.getElementById("peinty10").innerHTML="عطارد";
  document.getElementById("peinty11").innerHTML="القمر";
  document.getElementById("peinty12").innerHTML="زحل";
  document.getElementById("peinty13").innerHTML="المشتري";
  document.getElementById("peinty14").innerHTML="المريخ";
  document.getElementById("peinty15").innerHTML="الشمس";
  document.getElementById("peinty16").innerHTML="الزهرة";
  document.getElementById("peinty17").innerHTML="عطارد";
  document.getElementById("peinty18").innerHTML="القمر";
  document.getElementById("peinty19").innerHTML="زحل";
  document.getElementById("peinty20").innerHTML="المشتري";
  document.getElementById("peinty21").innerHTML="المريخ";
  document.getElementById("peinty22").innerHTML="الشمس";
  document.getElementById("peinty23").innerHTML="الزهرة";
  document.getElementById("peinty24").innerHTML="عطارد";
  document.getElementById("doaa_1").innerHTML="د1";
  document.getElementById("doaa_2").innerHTML="د2";
  document.getElementById("doaa_3").innerHTML="د3";
  document.getElementById("doaa_4").innerHTML="د4";
  document.getElementById("doaa_5").innerHTML="د5";
  document.getElementById("doaa_6").innerHTML="د6";
  document.getElementById("doaa_7").innerHTML="د7";
  document.getElementById("doaa_8").innerHTML="د8";
  document.getElementById("doaa_9").innerHTML="د9";
  document.getElementById("doaa_10").innerHTML="د10";
  document.getElementById("doaa_11").innerHTML="د11";
  document.getElementById("doaa_12").innerHTML="د12";
  document.getElementById("doaa_13").innerHTML="د6";
  document.getElementById("doaa_14").innerHTML="د7";
  document.getElementById("doaa_15").innerHTML="د8";
  document.getElementById("doaa_16").innerHTML="د9";
  document.getElementById("doaa_17").innerHTML="د10";
  document.getElementById("doaa_18").innerHTML="د11";
  document.getElementById("doaa_19").innerHTML="د12";
  document.getElementById("doaa_20").innerHTML="د1";
  document.getElementById("doaa_21").innerHTML="د2";
  document.getElementById("doaa_22").innerHTML="د3";
  document.getElementById("doaa_23").innerHTML="د4";
  document.getElementById("doaa_24").innerHTML="د3 +د5";

 

  greetingElement.innerHTML = "Hello, it's Sunday at five o'clock!";
} else if (today === 1) {
  // Monday
  document.getElementById("peinty1").innerHTML="القمر";
  document.getElementById("peinty2").innerHTML="زحل";
  document.getElementById("peinty3").innerHTML="المشتري";
  document.getElementById("peinty4").innerHTML="المريخ";
  document.getElementById("peinty5").innerHTML="الشمس";
  document.getElementById("peinty6").innerHTML="الزهرة";
  document.getElementById("peinty7").innerHTML="عطارد";
  document.getElementById("peinty8").innerHTML="القمر";
  document.getElementById("peinty9").innerHTML="زحل";
  document.getElementById("peinty10").innerHTML="المشتري";
  document.getElementById("peinty11").innerHTML="المريخ";
  document.getElementById("peinty12").innerHTML="الشمس";
  document.getElementById("peinty13").innerHTML="الزهرة";
  document.getElementById("peinty14").innerHTML="عطارد";
  document.getElementById("peinty15").innerHTML="القمر";
  document.getElementById("peinty16").innerHTML="زحل";
  document.getElementById("peinty17").innerHTML="المشتري";
  document.getElementById("peinty18").innerHTML="المريخ";
  document.getElementById("peinty19").innerHTML="الشمس";
  document.getElementById("peinty20").innerHTML="الزهرة";
  document.getElementById("peinty21").innerHTML="عطارد";
  document.getElementById("peinty22").innerHTML="القمر";
  document.getElementById("peinty23").innerHTML="زحل";
  document.getElementById("peinty24").innerHTML="المشتري";

  document.getElementById("doaa_1").innerHTML="د4";
  document.getElementById("doaa_2").innerHTML="د5";
  document.getElementById("doaa_3").innerHTML="د6";
  document.getElementById("doaa_4").innerHTML="د7";
  document.getElementById("doaa_5").innerHTML="د8";
  document.getElementById("doaa_6").innerHTML="د9";
  document.getElementById("doaa_7").innerHTML="د10";
  document.getElementById("doaa_8").innerHTML="د11";
  document.getElementById("doaa_9").innerHTML="د12";
  document.getElementById("doaa_10").innerHTML="د1";
  document.getElementById("doaa_11").innerHTML="د2";
  document.getElementById("doaa_12").innerHTML="د3";
  document.getElementById("doaa_13").innerHTML="د9";
  document.getElementById("doaa_14").innerHTML="د10";
  document.getElementById("doaa_15").innerHTML="د11";
  document.getElementById("doaa_16").innerHTML="د12";
  document.getElementById("doaa_17").innerHTML="د1";
  document.getElementById("doaa_18").innerHTML="د2";
  document.getElementById("doaa_19").innerHTML="د3";
  document.getElementById("doaa_20").innerHTML="د4";
  document.getElementById("doaa_21").innerHTML="د5";
  document.getElementById("doaa_22").innerHTML="د6";
  document.getElementById("doaa_23").innerHTML="د7";
  document.getElementById("doaa_24").innerHTML="د5 & د8";
} else if (today === 2) {
  // Tuesday
  
  document.getElementById("peinty1").innerHTML="المريخ";
  document.getElementById("peinty2").innerHTML="الشمس";
  document.getElementById("peinty3").innerHTML="الزهرة";
  document.getElementById("peinty4").innerHTML="عطارد";
  document.getElementById("peinty5").innerHTML="القمر";
  document.getElementById("peinty6").innerHTML="زحل";
  document.getElementById("peinty7").innerHTML="المشتري";
  document.getElementById("peinty8").innerHTML="المريخ";
  document.getElementById("peinty9").innerHTML="الشمس";
  document.getElementById("peinty10").innerHTML="الزهرة";
  document.getElementById("peinty11").innerHTML="عطارد";
  document.getElementById("peinty12").innerHTML="القمر";
  document.getElementById("peinty13").innerHTML="زحل";
  document.getElementById("peinty14").innerHTML="المشتري";
  document.getElementById("peinty15").innerHTML="المريخ";
  document.getElementById("peinty16").innerHTML="الشمس";
  document.getElementById("peinty17").innerHTML="الزهرة";
  document.getElementById("peinty18").innerHTML="عطارد";
  document.getElementById("peinty19").innerHTML="القمر";
  document.getElementById("peinty20").innerHTML="زحل";
  document.getElementById("peinty21").innerHTML="المشتري";
  document.getElementById("peinty22").innerHTML="المريخ";

  document.getElementById("peinty23").innerHTML="الشمس";
  document.getElementById("peinty24").innerHTML="الزهرة";

  document.getElementById("doaa_1").innerHTML="د7";
  document.getElementById("doaa_2").innerHTML="د8";
  document.getElementById("doaa_3").innerHTML="د9";
  document.getElementById("doaa_4").innerHTML="د10";
  document.getElementById("doaa_5").innerHTML="د11";
  document.getElementById("doaa_6").innerHTML="د12";
  document.getElementById("doaa_7").innerHTML="د1";
  document.getElementById("doaa_8").innerHTML="د2";
  document.getElementById("doaa_9").innerHTML="د3";
  document.getElementById("doaa_10").innerHTML="د4";
  document.getElementById("doaa_11").innerHTML="د5";
  document.getElementById("doaa_12").innerHTML="د6";
  document.getElementById("doaa_13").innerHTML="د12";
  document.getElementById("doaa_14").innerHTML="د1";
  document.getElementById("doaa_15").innerHTML="د2";
  document.getElementById("doaa_16").innerHTML="د3";
  document.getElementById("doaa_17").innerHTML="د4";
  document.getElementById("doaa_18").innerHTML="د5";
  document.getElementById("doaa_19").innerHTML="د6";
  document.getElementById("doaa_20").innerHTML="د7";
  document.getElementById("doaa_21").innerHTML="د8";
  document.getElementById("doaa_22").innerHTML="د9";
  document.getElementById("doaa_23").innerHTML="د10";
  document.getElementById("doaa_24").innerHTML="د11";
} else if (today === 3) {
    //Wednesday 
    document.getElementById("peinty1").innerHTML="عطارد";
    document.getElementById("peinty2").innerHTML="القمر";
    document.getElementById("peinty3").innerHTML="زحل";
    document.getElementById("peinty4").innerHTML="المشتري";
    document.getElementById("peinty5").innerHTML="المريخ";
    document.getElementById("peinty6").innerHTML="الشمس";
    document.getElementById("peinty7").innerHTML="الزهرة";
    document.getElementById("peinty8").innerHTML="عطارد";
    document.getElementById("peinty9").innerHTML="القمر";
    document.getElementById("peinty10").innerHTML="زحل";
    document.getElementById("peinty11").innerHTML="المشتري";
    document.getElementById("peinty12").innerHTML="المريخ";
    document.getElementById("peinty13").innerHTML="الشمس";
    document.getElementById("peinty14").innerHTML="الزهرة";
    document.getElementById("peinty15").innerHTML="عطارد";
    document.getElementById("peinty16").innerHTML="القمر";
    document.getElementById("peinty17").innerHTML="زحل";
    document.getElementById("peinty18").innerHTML="المشتري";
    document.getElementById("peinty19").innerHTML="المريخ";
    document.getElementById("peinty20").innerHTML="الشمس";
    document.getElementById("peinty21").innerHTML="الزهرة";
    document.getElementById("peinty22").innerHTML="عطارد";
    document.getElementById("peinty23").innerHTML="القمر";
    document.getElementById("peinty24").innerHTML="زحل";

    document.getElementById("doaa_1").innerHTML="د10";
    document.getElementById("doaa_2").innerHTML="د11";
    document.getElementById("doaa_3").innerHTML="د12";
    document.getElementById("doaa_4").innerHTML="د1";
    document.getElementById("doaa_5").innerHTML="د2";
    document.getElementById("doaa_6").innerHTML="د3";
    document.getElementById("doaa_7").innerHTML="د4";
    document.getElementById("doaa_8").innerHTML="د5";
    document.getElementById("doaa_9").innerHTML="د6";
    document.getElementById("doaa_10").innerHTML="د7";
    document.getElementById("doaa_11").innerHTML="د8";
    document.getElementById("doaa_12").innerHTML="د9";
    document.getElementById("doaa_13").innerHTML="د3";
    document.getElementById("doaa_14").innerHTML="د4";
    document.getElementById("doaa_15").innerHTML="د5";
    document.getElementById("doaa_16").innerHTML="د6";
    document.getElementById("doaa_17").innerHTML="د7";
    document.getElementById("doaa_18").innerHTML="د8";
    document.getElementById("doaa_19").innerHTML="د9";
    document.getElementById("doaa_20").innerHTML="د10";
    document.getElementById("doaa_21").innerHTML="د11";
    document.getElementById("doaa_22").innerHTML="د12";
    document.getElementById("doaa_23").innerHTML="د1";
    document.getElementById("doaa_24").innerHTML="د2";
  }else if (today === 4) {
    // Thursday
    document.getElementById("peinty1").innerHTML="المشتري";
  document.getElementById("peinty2").innerHTML="المريخ";

  document.getElementById("peinty3").innerHTML="الشمس";
  document.getElementById("peinty4").innerHTML="الزهرة";
  document.getElementById("peinty5").innerHTML="عطارد";
  document.getElementById("peinty6").innerHTML="القمر";
  document.getElementById("peinty7").innerHTML="زحل";
  document.getElementById("peinty8").innerHTML="المشتري";
  document.getElementById("peinty9").innerHTML="المريخ";
  document.getElementById("peinty10").innerHTML="الشمس";
  document.getElementById("peinty11").innerHTML="الزهرة";
  document.getElementById("peinty12").innerHTML="عطارد";
  document.getElementById("peinty13").innerHTML="القمر";
  document.getElementById("peinty14").innerHTML="زحل";
  document.getElementById("peinty15").innerHTML="المشتري";
  document.getElementById("peinty16").innerHTML="المريخ";
  document.getElementById("peinty17").innerHTML="الشمس";
  document.getElementById("peinty18").innerHTML="الزهرة";
  document.getElementById("peinty19").innerHTML="عطارد";
  document.getElementById("peinty20").innerHTML="القمر";
  document.getElementById("peinty21").innerHTML="زحل";
  document.getElementById("peinty22").innerHTML="المشتري";
  document.getElementById("peinty23").innerHTML="المريخ";
  document.getElementById("peinty24").innerHTML="الشمس";

  document.getElementById("doaa_1").innerHTML="";
  document.getElementById("doaa_2").innerHTML="د2";
  document.getElementById("doaa_3").innerHTML="د3";
  document.getElementById("doaa_4").innerHTML="د4";
  document.getElementById("doaa_5").innerHTML="د5";
  document.getElementById("doaa_6").innerHTML="د6";
  document.getElementById("doaa_7").innerHTML="د7";
  document.getElementById("doaa_8").innerHTML="د8";
  document.getElementById("doaa_9").innerHTML="د9";
  document.getElementById("doaa_10").innerHTML="د10";
  document.getElementById("doaa_11").innerHTML="د11";
  document.getElementById("doaa_12").innerHTML="د12";
  document.getElementById("doaa_13").innerHTML="د3";
  document.getElementById("doaa_14").innerHTML="د4";
  document.getElementById("doaa_15").innerHTML="";
  document.getElementById("doaa_16").innerHTML="د6";
  document.getElementById("doaa_17").innerHTML="د7";
  document.getElementById("doaa_18").innerHTML="د8";
  document.getElementById("doaa_19").innerHTML="د9";
  document.getElementById("doaa_20").innerHTML="";
  document.getElementById("doaa_21").innerHTML="د11";
  document.getElementById("doaa_22").innerHTML="د12";
  document.getElementById("doaa_23").innerHTML="د1 & د2";
  document.getElementById("doaa_24").innerHTML="";
  }else if (today === 5) {
    // Friday
    document.getElementById("peinty1").innerHTML="الزهرة";
    document.getElementById("peinty2").innerHTML="عطارد";
    document.getElementById("peinty3").innerHTML="القمر";
    document.getElementById("peinty4").innerHTML="زحل";
    document.getElementById("peinty5").innerHTML="المشتري";
    document.getElementById("peinty6").innerHTML="المريخ";
  
    document.getElementById("peinty7").innerHTML="الشمس";
    document.getElementById("peinty8").innerHTML="الزهرة";
    document.getElementById("peinty9").innerHTML="عطارد";
    document.getElementById("peinty10").innerHTML="القمر";
    document.getElementById("peinty11").innerHTML="زحل";
    document.getElementById("peinty12").innerHTML="المشتري";
    document.getElementById("peinty13").innerHTML="المريخ";
    document.getElementById("peinty14").innerHTML="الشمس";
    document.getElementById("peinty15").innerHTML="الزهرة";
    document.getElementById("peinty16").innerHTML="عطارد";
    document.getElementById("peinty17").innerHTML="القمر";
    document.getElementById("peinty18").innerHTML="زحل";
    document.getElementById("peinty19").innerHTML="المشتري";
    document.getElementById("peinty20").innerHTML="المريخ";
    document.getElementById("peinty21").innerHTML="الشمس";
    document.getElementById("peinty22").innerHTML="الزهرة";
    document.getElementById("peinty23").innerHTML="عطارد";
    document.getElementById("peinty24").innerHTML="القمر";

    document.getElementById("doaa_1").innerHTML="د4";
    document.getElementById("doaa_2").innerHTML="";
    document.getElementById("doaa_3").innerHTML="د5 & د6";
    document.getElementById("doaa_4").innerHTML="د7";
    document.getElementById("doaa_5").innerHTML="د8";
    document.getElementById("doaa_6").innerHTML="د9";
    document.getElementById("doaa_7").innerHTML="";
    document.getElementById("doaa_8").innerHTML="د11";
    document.getElementById("doaa_9").innerHTML="د12";
    document.getElementById("doaa_10").innerHTML="د1";
    document.getElementById("doaa_11").innerHTML="د2";
    document.getElementById("doaa_12").innerHTML="د3";
    document.getElementById("doaa_13").innerHTML="د6";
    document.getElementById("doaa_14").innerHTML="د7";
    document.getElementById("doaa_15").innerHTML="د8";
    document.getElementById("doaa_16").innerHTML="د9";
    document.getElementById("doaa_17").innerHTML="د10";
    document.getElementById("doaa_18").innerHTML="د11";
    document.getElementById("doaa_19").innerHTML="د12";
    document.getElementById("doaa_20").innerHTML="د1";
    document.getElementById("doaa_21").innerHTML="د2";
    document.getElementById("doaa_22").innerHTML="د3";
    document.getElementById("doaa_23").innerHTML="د4";
    document.getElementById("doaa_24").innerHTML="د5";
  }else if (today === 6) {
    // Saturday
    document.getElementById("peinty1").innerHTML="زحل";
    document.getElementById("peinty2").innerHTML="المشتري";
    document.getElementById("peinty3").innerHTML="المريخ";
    document.getElementById("peinty4").innerHTML="الشمس";
    document.getElementById("peinty5").innerHTML="الزهرة";
    document.getElementById("peinty6").innerHTML="عطارد";
    document.getElementById("peinty7").innerHTML="القمر";
    document.getElementById("peinty8").innerHTML="زحل";
    document.getElementById("peinty9").innerHTML="المشتري";
    document.getElementById("peinty10").innerHTML="المريخ";
  
    document.getElementById("peinty11").innerHTML="الشمس";
    document.getElementById("peinty12").innerHTML="الزهرة";
    document.getElementById("peinty13").innerHTML="عطارد";
    document.getElementById("peinty14").innerHTML="القمر";
    document.getElementById("peinty15").innerHTML="زحل";
    document.getElementById("peinty16").innerHTML="المشتري";
    document.getElementById("peinty17").innerHTML="المريخ";
    document.getElementById("peinty18").innerHTML="الشمس";
    document.getElementById("peinty19").innerHTML="الزهرة";
    document.getElementById("peinty20").innerHTML="عطارد";
    document.getElementById("peinty21").innerHTML="القمر";
    document.getElementById("peinty22").innerHTML="زحل";
    document.getElementById("peinty23").innerHTML="المشتري";
    document.getElementById("peinty24").innerHTML="المريخ";

    document.getElementById("doaa_1").innerHTML="د7";
    document.getElementById("doaa_2").innerHTML="د8";
    document.getElementById("doaa_3").innerHTML="د9";
    document.getElementById("doaa_4").innerHTML="د10";
    document.getElementById("doaa_5").innerHTML="د11";
    document.getElementById("doaa_6").innerHTML="د12";
    document.getElementById("doaa_7").innerHTML="د1";
    document.getElementById("doaa_8").innerHTML="د2";
    document.getElementById("doaa_9").innerHTML="د3";
    document.getElementById("doaa_10").innerHTML="د4";
    document.getElementById("doaa_11").innerHTML="د5";
    document.getElementById("doaa_12").innerHTML="د6";
    document.getElementById("doaa_13").innerHTML="د9";
    document.getElementById("doaa_14").innerHTML="د10";
    document.getElementById("doaa_15").innerHTML="د11";
    document.getElementById("doaa_16").innerHTML="د12";
    document.getElementById("doaa_17").innerHTML="";
    document.getElementById("doaa_18").innerHTML="د2";
    document.getElementById("doaa_19").innerHTML="د3";
    document.getElementById("doaa_20").innerHTML="د1 & د4";
    document.getElementById("doaa_21").innerHTML="د5";
    document.getElementById("doaa_22").innerHTML="د6";
    document.getElementById("doaa_23").innerHTML="د7";
    document.getElementById("doaa_24").innerHTML="د8";
  }else {
  // Any other day
  greetingElement.innerHTML = "Hello, it's another day of the week!";
}