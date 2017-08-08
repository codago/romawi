
var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
function romawi(value) {
  if (value <= 0 || value >= 4000) return value;
    var romanNumeral = "";
    for (var i=0; i<roman.length; i++) {
      while (value >= decimal[i]) {
        value -= decimal[i];
        romanNumeral += roman[i];
      }
    }
    return romanNumeral;
}





console.log("Script Testing untuk Konversi Romawi\n");

console.log("input | expected | result");

console.log("——————|—————-————|———————");

console.log("4     | IV       | ", romawi(4));

console.log("9     | IX       | ", romawi(9));

console.log("13    | XIII     | ", romawi(13));

console.log("1453  | MCDLIII  | ", romawi(1453));

console.log("1646  | MDCXLVI  | ", romawi(1646));
