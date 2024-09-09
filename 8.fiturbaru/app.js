function kali(a,b=5){
    return a*b;
}

const tambah = (a,b = 10) => a+b


// diatas adalah cara mengatur default value apabila value tidak 
// diatur maka suda ada nilai tetap nya 


// spread operator 
const nilai = [1,2,3,4,5]
console.log(Math.max(...nilai))
// =>mengubah arry atau object menjadi deret value argument funtion

const nomor = [1,2,3,4,5]
const nama = ["abil","gilang",'akas','rian',"ucon"]
const campuran = [...nomor , ...nama]
// => spread operator juga bisa menggabungkan 2 arry 


const user = {
    name :"nazar",
    email:'nazar55ava@umsu.com' ,
    
}
const userinput = {
    password :'12345'
}
const login = {
    ...user , ...userinput
}
// => spread operator juga bisa menggabungkan 2 object 




// rest param
const sumAll = function(...nums){
    total = 0 
    for(let n of nums) total +=n
    return total 
}
const nambahTrus = (...nums) =>{
    return nums.reduce((total,score) =>{
        return total +score
    })
}

const pemenang = (emas,silver,perunggu,...sisa) =>{
    console.log(`pemenang emas  adalah ${emas}`)
    console.log(`pemenang silver  adalah ${silver}`)
    console.log(`pemenang PERUNGGU  adalah ${perunggu}`)
    console.log(`sisa peserta  adalah ${sisa}`)
}
// =>bisa juga jadi rest parameter 




// Destructing

const [emas,silver,perunggu,...sisa]= nama //=> unboxing arry 
const {name ,email}= user //=> unboxing object



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
    const siswa = students.map(({nama,umur,kelas,nilai}) => {
        return `${nama} ${umur} ${kelas} ${nilai }` })