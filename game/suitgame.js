// menangkap pilihan player 
var tanya = true 
while(tanya){
    var p = prompt("gajah, semut , orang ")


// menangkap pilihan komputer 
// membangkitkan bilangan random
    var comp = Math.random()

    if(comp <= 0.34){
        comp="gajah"
    }else if(comp >0.34 && comp <= 0.66){
        comp = "semut" 
    }else{
        comp ="orang "
    }
    // menentukan rules
    hasil = "" 
    if(p == comp){
        hasil= "SERI"
    }else if ( p == "gajah"){
        hasil = (comp == "orang") ? "menang" : "kalah"
    }else if (p == "orang") {
        hasil = (comp == "semut") ? "menang" : "kalah"
    }else if (p == "semut"){
        hasil = (comp == "gajah") ? "menang" : "kalah"
    }
    else {
    hasil = " kamu memasukan nilai yang salah "
    }

    // tampilkan hasil 

    alert ("kamu memasukan nilai " + p + "\ncomputer memasukan nilai " + comp + "\nmaka hasil nya kamu :  " + hasil  )

    tanya = confirm ("lagi?")
}

alert ("terimah kasih telah bermain")