// manipulasi array 
// var arr = ["maulana","nazar","ucok","riski","abil","gilang"]

// 1.menambahkan array 

// var arr = []
// arr[0]= "nazar"
// arr [1]= "maulana"
// arr[2]= "ucok"

// console.log(arr)

// 2. menghapus array 
// var arr = ["maulana","nazar","ucok"]
// arr[1] =  undefined

// console.log(arr)

// 3.menampilkan array 
// var arr = ["maulana","nazar","ucok"]

// for (var i = 0 ; i < arr.length; i++){
//     console.log(arr[i])
// }

// method pada array

// 1.join
// console.log(arr.join("\n\n"))

// 2.push dan pop adalah menambah dan menghapus elemen pada terakhir pada sebuah array
// arr.push("maul","naa","aaaa")
// arr.pop()


// 3.unshift dan shift adalah menmbahkan dan menghapus elemen awal pada sebuah arry 
// arr.unshift("abil","akas")
// arr.shift()

// 4.splice adlah menyambug
// splice(indexAwal,maudihapus berapa,elemenbaru1,elemenbaru2)
// arr.splice(0,3,"akas","riski")

// 5.slice adalah mengiris
//slice(awal,akhir)
// var arr2 = arr.slice(1,4)


// console.log(arr.join("\n\n"))
// console.log(arr2.join("\n\n"))


// 6.foreach 
// var angka = [1,2,3,4,5,6,7,8,9]
// var nama = ["maulana","nazar","ucok","riski","abil","gilang"]
// angka.forEach(function(i){
//     console.log(i)
// })

// nama.forEach(function(e,i){
//     console.log("mahasiswa nomor " + (i+1) + " adalah " + e)
// })

// 7.map 
// var angka = [1,2,3,4,5,6,7,8,9]

// var angka2 = angka.map(function(e){
//     return e *10
// })
// console.log(angka2.join(" - "))


// 8.sort 

// var angka = [5,2,,45,32,4,6,7,5,6]
// angka.sort(function(a,b){
//     return a-b
// })
// console.log(angka.join(" - "))


// 9. filter dan find 

var angka = [5,2,,45,32,4,6,7,5,6]
var angka2 = angka.filter(function(x){
    return x > 4
})

console.log (angka2.join( " - "))

var angka3 = angka.find(function(x){
    return x > 4
})
console.log (angka3)
