module.exports = function getZerosCount(number) {
  // your implementation

  var lim = 11; // 5^11 = 48828125

  var res = 0;
 
 for(var i = 1; i < lim+1; i++){
   
  var temp = 0;
  
  temp = Math.floor(number / Math.pow(5, i));

  if(temp === 0){
    break;
  } else {
    res += temp;
  }  
 }

 
  return res; 

}
