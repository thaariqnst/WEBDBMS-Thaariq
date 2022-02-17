//TODO  Buatlah server dengan nama variable nama sendiri
//TODO Buat Respon halaman home, about, form 404(case sensisitive)
//TODO buat respon mengirim data
"anda berhasil menambahkan data, jike methodnya POST"

const torik = require("http")
const nasution = torik.createServer((req,res) =>{
    let url,
    method,
    dataResponse

    res.setHeader("Content-Type","application/json")
    url = req.url
    method = req.method ?? "get";

    // ROUTING
    if(url === "/"){
        dataResponse = {
            data: 'Ini adalah halaman homepage'
        }
    }else if(url.toLowerCase() === "/about"){
        //akses untuk method post
        if(method.toUpperCase() === "POST"){
            dataResponse ={
                data: "Anda Berhasil menambahkan data"
            }
        }else{
            dataResponse ={
                data: "Maaf ubah terlebih dahulu menjadi method POST"
            }
        }
    }else{
        dataResponse ={
            data: "404 not found"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})
nasution.listen(5600)