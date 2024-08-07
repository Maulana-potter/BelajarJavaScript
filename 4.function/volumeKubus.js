function jumlahVolumeDuaKubus(a,b){
    var volumeA, volumeB,total

    volumeA = a*a*a
    volumeB = b*b*b
    total = volumeA + volumeB

    return total
}

alert(jumlahVolumeDuaKubus(10,5))