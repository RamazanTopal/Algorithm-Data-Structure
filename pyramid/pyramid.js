


function pyramid(n){
    for(let i=1;i<=n;i++){
        const padding=" ".repeat(n-i);
        const hashes="#".repeat(i*2-1);

        console.log(padding+hashes+padding);
    }
}


pyramid(5);