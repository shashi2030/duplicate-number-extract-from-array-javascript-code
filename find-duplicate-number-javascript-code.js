var arr = [9,9,0,0,9,8,8,100,100],
result  = {};

for( var i = 0; i < arr.length; i++ ) {
  var val = arr[i],
    inc = ( result[val] || 0 ) + 1;    
    result[val] = inc;    
}


console.log(result);