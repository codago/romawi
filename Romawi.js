
function romawi(n) {

    var roman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    var numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

    var tempRoman = " ";
    var valueSubstraction = 0;

    for(var i=numbers.length-1;i>=0;i--){
         if(n === numbers[i]){return roman[numbers.indexOf(n)]
         }
    }

    for(var i=numbers.length-1;i>=0;i--){
        while(n>=numbers[i]){
            valueSubstraction = n-numbers[i];
            if(n>3){
            tempRoman += roman[numbers.indexOf(numbers[i])];
            }else if(n<4){
                tempRoman += "I";
            }
            n = valueSubstraction;
        }
    }
return tempRoman;
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("——————|—————-————|———————");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
