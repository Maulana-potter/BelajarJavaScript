var penumpang = ["maulana","nazar","abil"]
var tambahPenumpang = function(namaPenumpang,penumpang){
    // jika angkot kosong 
    if(penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang)
        // kembalikan isi array dan keluar dari function\
        return penumpang 
    }
    else{
        // telusuli seluruh kursi dari awal 
        for(var i = 0 ; i <= penumpang.length ; i++){
            // jika ada kursi kosong
            if(penumpang[i]== undefined){     
                // tambahkan penumpang dikursi tersebut 
                penumpang[i] = namaPenumpang
                // kembalikan isi arrar dan keluar dari function 
                return penumpang
            }
            // jika udah ada nama 
            else if(penumpang[i]== namaPenumpang){
                // tampilkan pesan kesalahan 
                console.log(namaPenumpang +" nama sudah ada")  
                // kembalikan isi arrar dan keluar dari function
                return penumpang  
           }
            // jika seluruh isi kursi sudah terisi 
            else if( i == penumpang.length - 1 ){
                // tambahkan penumpang diakhir array
                penumpang.push(namaPenumpang)
                //kembalikan isi arrar dan keluar dari function
                return penumpang
            }
        }
    }          
}
var hapusPenumpang = function(namaPenumpang,penumpang){
    // jika angkot nya ksong 
    if(penumpang.length == 0){
        // tampilkan pesan dan
        // tidak mungkin ada penumpang turun 
        console.log("angkot kosong tidak mungkin ada penumpang turun")
        // kembalikan isi array dan keluar dari function
        return penumpang
    }
    else {
        // telusuri seluruh kursi dari awal 
        for(var i = 0 ; i <= penumpang.length ; i++){
            // jika nama penumpang sesuai
            if(penumpang[i] == namaPenumpang){ 
                // hapus penumpund dengan mengubah namanya menjadi undefined 
                penumpang[i] = undefined
                // kembalikan isi array dan keluar dari function
                return penumpang 
            }
            // jika tidak ada nama yang sesuai 
            else if(i == penumpang.length - 1){
                // tampikan pesan kesalahan
                console.log("tidak ada nama yang sesuai") 
                // kembalikan isi array dan keluar dari function
                return penumpang 
            }
        }
    }
}