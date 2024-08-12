var penumpang = ["nazar",undefined,"abil"]
var tambahPenumpang = function(namaPenumpang,penumpang){
    // jika angkot kosong
    if(penumpang.length == 0 ){ 
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang) 
        // kembalikan isi array dan keluar dari function\
        return penumpang
    }
    else {
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
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahan 
                console.log(namaPenumpang + " sudah ada dalam angkot")
                // kembalikan isi arrar dan keluar dari function 
                return penumpang
            }
            // jika seluruh isi kursi sudah terisi 
            else if(i == penumpang.length - 1){
                // tambahkan penumpang diakhir array
                penumpang.push(namaPenumpang) 
                //kembalikan isi arrar dan keluar dari function
                return penumpang
            }
        }
    } 

}
