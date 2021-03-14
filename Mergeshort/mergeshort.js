





function mergeshort(left, right) {
    let arr = []
    
    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}

console.log(mergeshort([5,3,2],[25,1,34,4,8]));