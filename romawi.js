function romawi(n) {
  var balik = ""
  var decimal = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var roman = ["I", "IV","V","IX","X", "XL", "L", "XC", "C","CD","D","CM","M"];
    for (i = 12; i >= 0 ; i--){
      while (n >= decimal[i]){
        balik = balik + roman[i];
        n = n - decimal[i];
      }
    }
    return balik;
  }
console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("——————|—————-————|———————");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
