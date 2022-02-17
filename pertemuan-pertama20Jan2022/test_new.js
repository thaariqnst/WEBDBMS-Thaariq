//! JavaScript sangat case-sensitive, perhatikan besar kecil huruf

//* Identifier
// identifier adalah penamaan dalam variable, function dan parameter
// gunakan camel case dalam identifier
// angka tidak bisa digunakan di depan identifier
// tidak boleh menggunakan bahasa yang sudah ada default di js

//* Statement
// statement adalah suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
let name = "Hello World!" //? statement dasar
// console.log(name) //

//* Expression
// expression merupakaan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu
let firstNum = 9
let secondNum = 2
let result = first+second

if(result>1){
    console.log(`Hasil dari ${first} + ${second} adalah `, result)
}

//* Scope
// scope adalah cakupan kode agar bisa mengakses atau membatasi

//* Global scope
// adalah cakupan diseluruh kode
var a = `Hallo Rekan rekan`
//
//* Local Scope
//adalah cakupan kode dalam 1 function
//* Block Scope
// cakupan kode dalan 1 blok (kurawal didalam function)

function first(){
    console.log(a)
    if(true){
        let b = `Halo john`
    }
    console.log(b) //? tidak terpanggil karena block scope
}

function second(){
    a = `Nilainya sudah diubah`
    console.log(a)
}

// Const sama seperti val dalam kotlin, tidak bisa diubah value nya
const aKendaraan = `mobil`
function kendaraan (){
    console.log(aKendaraan)

    if(true){
        const b = `motor`
        console.log(b)
    }
    
}
kendaraan()