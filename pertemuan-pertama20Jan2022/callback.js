function tahun(motor) {
    return motor >= 2001
}

function cc(motor) {
    return motor >= 150
}


function kendaraan(mobil, kolbek) {
    // let a = kolbek(mobil)
    if (kolbek(mobil)) {
        console.log(`mobil ${mobil} ini bayar pajak`)
    } else {
        console.log(`mobil ${mobil} ini gaperlu bayar pajak`)
    }
    
}
kendaraan(200, cc)