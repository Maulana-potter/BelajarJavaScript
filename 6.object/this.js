// membuat object 

// function deklarasi 
// function halo() {
//     console.log(this)
//     console.log("halo")
// }
// halo()
// jika menggunakan function deklaration this mengembalikan object global 


// ===========================

// object literal 
// var obj = {nama:"nazar" ,umur :19}
// obj.halo = function (){
//     console.log(this)
//     console.log("halo")
// }
// obj.halo()
// jika menggunakan object literal, this mengembalikan object yang bersakutan(object itu sendiri)




// ==========================================


//  constractor
function Halo (){
    console.log(this)
     console.log("halo")
}
new Halo()
// menggunakan constactor, thisnya mengmbalikan object yang baru dibuat 