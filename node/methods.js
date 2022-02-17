/**
 * 
 * Routing dengan methods
 * 
 */

const http = require("http")

const server = http.createServer((req,res) =>{
    let url, //digunakan untuk path url di request
    method, //digunakan untuk menampung jenis method
    dataResponse //data yang akan dikirim

    res.setHeader("Content-Type","application/json")
    url = req.url


    //jika method tidak ada isi, maka isi degnan method get
    method = req.method ?? "get";

    //routing
    if(url === "/"){
        dataResponse = {
            data: "Ini adalah halaman HomePage"
        }
    }else if(url === "/login"){
        //akses untuk method post
        if(method === "POST"){
            dataResponse ={
                data: "Anda Berhasil login menggunakan method POST"
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

server.listen(5500)