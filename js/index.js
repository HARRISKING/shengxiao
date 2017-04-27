var sx = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
$('.btn').on('click',function(){

  var date = new Date();
  var yearLen = date.getFullYear()-2008;
  // yearLen代表今年的属相，即数组sx中的属相下标
  var val = $('input').val();
  if(yearLen<=12){
    calculate();
  }else{
    // 这里的bug
    yearLen = (date.getFullYear()-2008)%12;
    calculate();
  }
  function calculate(){
    if(yearLen<(val%12) && (val%12)!==0){
      let sx1=12-(val%12)+yearLen;
      $('.words').html(sx[sx1]);
      let urls = 'url(./pic/' + sx1 + '.jpg)';
      $('.output').css('background-image',urls);
      $('.output').css('background-repeat','no-repeat');

    }else if(yearLen>=(val%12) && (val%12)!==0){
      let sx1 =yearLen-(val%12);
      $('.words').html(sx[sx1]);
      let urls = 'url(./pic/' + sx1 + '.jpg)';
      $('.output').css('background-image',urls);
      $('.output').css('background-repeat','no-repeat');

    }else if((val%12)===0){
      let sx1 = yearLen;
      $('.words').html(sx[sx1]);
      let urls = 'url(./pic/' + sx1 + '.jpg)';
      $('.output').css('background-image',urls);
      $('.output').css('background-repeat','no-repeat');
    }
  }
})
