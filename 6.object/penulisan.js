// membuat object 

// leteral
var mhs = {
nama : "Nazar Maulana ",
jurusan : "Sistem Informasi",
umur: 19,
npm : 2309010105,
ipSemester : [3.70 , 3.65, 3.00 ],
alamat : {
    kota : "Medan", 
    jalan : "Jln.karya perbatasan",
    gang : "imam"
}

}

// funtion deklarasi 

function mahasiswaBaru(nama,jurusan,npm){
    var mahasiswa = {}
    mahasiswa.nama = nama 
    mahasiswa.jurusan = jurusan 
    mahasiswa.npm = npm 
    return mahasiswa 
}
var mhs2 = mahasiswaBaru("maulana","teknik",23091087)


// constructor 
// biasa diawali dengan huruf besar untuk menandakan bahwasannya ini contructor 

function Mahasiswa(nama,jurusan,npm){
    this.nama = nama
    this.jurusan = jurusan 
    this.npm = npm 
}
var mhs3 = new  Mahasiswa("ucok","ekonomi",232314143)
// untuk pemanggilannya harus disertai new 