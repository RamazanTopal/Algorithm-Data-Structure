

function linearSearchIndexOf(arr,val){
    /* for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i;
        }
    }
    return -1; */
    return arr.indexOf(val);
}

function linearSearchIncludes(arr,val){
    /* for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return true;
        }
    }
    return false; */
    return arr.includes(val);
}
function linearSearchFind(arr,cb){
   /*  for(let i=0;i<arr.length;i++){
        if(cb(arr[i])===true){
            return arr[i];
        }
    }
    return undefined; */
    return arr.find(cb);
}


/*Time complexity=O(n)*/
