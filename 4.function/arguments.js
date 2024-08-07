function tambah(){
    hasil = 0 
    for(i=0;i<arguments.length;i++){
        hasil += arguments[i]
    }
    return hasil 


}
var coba = tambah(1,2,3,4,5)
alert(coba)