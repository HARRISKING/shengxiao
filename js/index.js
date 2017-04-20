var sx = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
$('.btn').on('click',function(){
  var date = new Date();
  var nowYear = date.getFullYear()-2008;
  var val = $('input').val();
  if(nowYear<=12){
    calculate();
  }else{
    let nowYear = (a-2008)%12-1;
    calculate();
  }
  function calculate(){
    if(nowYear<(val%12) && (val%12)!==0){
      let sx1=nowYear-(val%12)+12;
      $('.words').html(sx[sx1]);
      let urls = 'url(./pic/' + sx1 + '.jpg)';
      $('.output').css('background-image',urls);
      $('.output').css('background-repeat','no-repeat');

    }else if(nowYear>=(val%12) && (val%12)!==0){
      let sx1 =(val%12)-1;
      $('.words').html(sx[sx1]);
      let urls = 'url(./pic/' + sx1 + '.jpg)';
      $('.output').css('background-image',urls);
      $('.output').css('background-repeat','no-repeat');

    }else if((val%12)===0){
      let sx1 = nowYear;
      $('.words').html(sx[sx1]);
      let urls = 'url(./pic/' + sx1 + '.jpg)';
      $('.output').css('background-image',urls);
      $('.output').css('background-repeat','no-repeat');
    }
  }
})
