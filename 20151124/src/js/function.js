// v01
function appV(){
  return "0.0.1"; 
}
//一个随机数
function GetRandomNum(Min,Max){   
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
}   