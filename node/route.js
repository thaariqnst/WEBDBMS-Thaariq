/**
 * Routing
 */

 const http = require("http")
const { listenerCount } = require("process")

const server = http.createServer((req, res)=>{
    let url,
    dataResponse

    res.setHeader("Content-Type","application/json")
    url = req.url

    // ROUTING
    if(url == "/"){
        dataResponse = {
            data: 'Ini adalah halaman homepage'
        }
    }else if(url === "/login"){
        dataResponse = {
            data:'Ini adalah halaman login'
        }
    }else if(url === "/register"){
        dataResponse = {
            data:'Ini adalah halaman register'
        }
    }else{
        dataResponse = {
            data: '404 not found'
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

// server.listen(5500)