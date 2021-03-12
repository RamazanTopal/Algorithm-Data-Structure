


function maxChar(str){
    var maxCount=0;
    var charObject={};
    var maxChar="";

    for(var i=0;i<str.length;i++){
        var char=str[i];
        charObject[char]=charObject[char]+1 || 1;

        if(charObject[char]>0){
            
            maxChar=char;
            maxCount=charObject[char];
            
        }


        return "sayı"+maxChar;
    }

    maxChar(23232)



}