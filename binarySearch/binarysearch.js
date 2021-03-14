

function binarySearch(arr,value){
    let left=0;
    let right=arr.length-1;
    
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if(arr[mid]===value){
            return mid;
        }else if(arr[mid]<value){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([1,4,5,37,50,63,78,99],99))














/*Time complexity=O(logn)*/