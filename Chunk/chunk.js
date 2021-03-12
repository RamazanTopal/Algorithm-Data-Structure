
function chunk1(array,size){
    
    let res=[];
    for(let i=0;i<array.length;i++){
        const item=array[i];
        const last=res[res.length-1];
        if(!last || last.length ===size){
            res.push([item]);
        }else{
            last.push(item)
        }
    }
    return res;
    
  }

  function chunk2(array, chunkSize) {
    const chunkedArr = [];
    let counter = 0;
    while(counter < array.length) {
      chunkedArr.push(array.slice(counter, counter + chunkSize));  
      counter += chunkSize;
    }
    return chunkedArr;
  }
  console.log(chunk2(["a","b","c","d","e"],2))
  
  