var jlmAngkot = 10 

for (var noAngkot = 1 ; noAngkot <= jlmAngkot ; noAngkot++){
    if(noAngkot <= 6 && noAngkot !== 5  ){
        console.log ("angkot No " + noAngkot + " beroperasi dengan baik")

    }else if (noAngkot === 5 || noAngkot === 8  || noAngkot === 10){
        console.log ("Angkot No " + noAngkot + " sedang lembur ")
    }else{
        console.log ("Angkot No " + noAngkot + " tidak beroperasi ")
    }
}