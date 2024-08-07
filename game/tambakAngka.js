

// pilihan player 
var p = parseInt (prompt ("masukan angka dari 1-10 "))

// membangkitkan bilangan random 
 var comp = Math.random()*10

 if (comp <= 1) {
    comp = 1
 }else if (comp <= 2){
    comp = 2
 }else if (comp <= 3){
    comp = 3
 }else if (comp <= 4){
    comp = 4
 }else if (comp <= 5){
    comp = 5
 }else if (comp <= 6){
    comp = 6
 }else if (comp <= 7){
    comp = 7
 }else if (comp <= 8){
    comp = 8
 }else if (comp <= 9){
    comp = 9
 }else {
    comp = 10
 }
console.log(comp) 
 // menentukan rules
    var hasil = ""
    if (p === comp) {
        hasil = "tebakan benar"
    }else if ( p <= comp){
        hasil = "lebih besar"
    }else if (p>=comp){
        hasil = "lebih kecil"
    }else {
        hasil = "tolong masukan angka"
    }
   alert (hasil)