
function reverse(str){
    if(str===str.split("").reverse().join("")){
        return "palindrom";
    }
    else{
        return "not palindrome";
    }
    
  }
  console.log(reverse("madam"));
  