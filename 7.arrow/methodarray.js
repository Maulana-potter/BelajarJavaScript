const angka =[1,2,3,4,5,6,7,8,9]

const angkaGnjil = angka.filter(n=>{
    return n % 2 === 1 
})

const students = [
{
    nama : "nazar" ,
    umur :18,
    kelas : 3 ,
    nilai : 80 ,
},
{
    nama : "abil" ,
    umur :17,
    kelas : 2 ,
    nilai : 85 ,
},
{
    nama : "ucup" ,
    umur :18,
    kelas : 3 ,
    nilai : 70 ,
},
{
    nama : "malik" ,
    umur :15,
    kelas : 1 ,
    nilai : 90 ,
},
{
    nama : "maul" ,
    umur :16,
    kelas : 2 ,
    nilai : 75 ,
},

]

const lulus = students.every((student)=>student.nilai>=70)//=>mengebalikan nilai bolean (sifatnya mirip dengan AND)

const tua = students.some((student)=>student.umur>=17)//=>mengebalikan nilai bolean (sifatnya mirip dengan OR)
const murid = students.filter((student)=>student.umur>=17) //=>memfilter nilai 
const siswa = murid.map((student) => student.nama)
const usia = murid.map((student) => student.umur)

const nilaiSiswa = [90,89,78,78,89,98]

const total = nilaiSiswa.reduce((total,score)=>{
    return total + score 
})//=>melakukan proses sebanyak element milik suatu arry, nilainya single value