
function fizzBuzz(sayi){
    
    for(var i=0;i<=sayi;i++){
        if(i%3==0 && i%5==0){
            console.log("fizzBuzz");
        }
        else if(i%3==0){
            console.log("fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
    
  }
  console.log(fizzBuzz(25));
  