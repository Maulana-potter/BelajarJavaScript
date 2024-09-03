const perpangkatan = (x,y) =>{
    return x * y 
}

const random = () =>{
   return Math.floor(Math.random()*1000)
}


// implisit arrow function => membuat suatu arrow function tanpa mengunakan 
// return jika prosesnya sangat sederhana dan apabila sintak cukup panjang 
// disarankan untuk menggunakan () tapi perlu diingat implisit arrow ini 
// digunakan hanya untuk 1 paling perntah saja
const acak = () =>(
    Math.floor(Math.random()*1000)
)

const pertambahan =(a,b) => a+b
