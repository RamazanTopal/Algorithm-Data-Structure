

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function selectionshort(array){
 
    for (let i = 0; i < array.length; i++) {
            let swapIndex=i;
            for(let j=i+1;j<array.length;j++){
                if(array[j]<array[swapIndex]){
                    swapIndex=j;
                }   
            }   
            swap(array,i,swapIndex);      
    }
    
    return array;
}

console.log(selectionshort([42,2,25,3,111,17,27]))
//Time Complexity=O(n^2)