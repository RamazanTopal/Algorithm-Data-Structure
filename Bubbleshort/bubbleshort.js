

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function bubbleshort(array){
    for(let j=0;j<array.length;j++){
        for (let i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]){
                swap(array,i,i+1);
            }
                
        }
    }
    return array;
}

console.log(bubbleshort([42,2,25,3,111,17,27]))

//Time Complexity=O(n^2)