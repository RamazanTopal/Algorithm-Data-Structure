  



function vowels(str){
    str=str.toLowerCase();
    const vowels="aeiou".split("");
    let count=0;

    for(var i=0;i<str.length;i++){
        let char=str[i];

        for(j=0;j<vowels.length;j++){
            const vowel=vowels[j];
            if(char===vowel){
                count++;
            }
        }



    }
    return count;
}

console.log(vowels("merhaba "));