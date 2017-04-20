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
      $('.output').html(sx[sx1]);
    }else if(nowYear>=(val%12) && (val%12)!==0){
      let sx1 =(val%12)-1;
      $('.output').html(sx[sx1]);

    }else if((val%12)===0){
      let sx1 = nowYear;
      $('.output').html(sx[sx1]);

    }
  }
})
