function romawi(n) {
//write your code here
   var i, result, input , expected;
   input = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
   expected = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];
   result = "";
   for (i = 12; i >= 0; i--) {
       while (n >= input[i]) {
           result = result + expected[i];
           n = n - input[i];
       }
   }
return result;

}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("——————|—————-————|———————");
console.log("2     |  II      | ", romawi(2));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
console.log("1890  | MDCCCXC  | ", romawi(1890));
