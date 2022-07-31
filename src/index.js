module.exports = function towelSort (matrix) {
    let arrResult = [];
    if (matrix === undefined) {
      arrResult = [];
    } else {
    for (let i=0; i < matrix.length; i++) {
        if(i % 2 == 0) {
            arrResult = arrResult.concat(...matrix[i])
        } else {
            arrResult = arrResult.concat(...matrix[i].reverse())
        }
      
        
    }}
    
  
  
  return arrResult;
  }
