
/**
 * Header HTTP
 *  
 */
const http = require("http")

const server = http.createServer((req, res) => {

    let dataHeader, // akan menampung object header-request
    dataAutorization, // berisi properti dari object header
    splitData, // permisah atau pembatas antara value dan autorization
    dataUser, // kode dengan base64 to string dari user
    dataResponse;

    res.setHeader("Content-Type", "application/json");

    // ini untuk mendapatkan hasil respon berupa json
    dataHeader = req.headers;

    console.log(dataHeader);

    // get data otorisasi
    dataAutorization = dataHeader.authorization;

    // jika autorizationnya tidak terkirim maka akan menghasilkan :
    if(!dataAutorization){
        dataResponse = {
            data: "Undefined Autorization"
        };

        // send ke client dan return agar berhenti
        return res.end(JSON.stringify(dataResponse));
    }

    splitData = dataAutorization.split(" ");

    dataUser = splitData[1];

    userPass = Buffer.from(dataUser, "base64").toString();

    //create respon berisi nilai dan user pass
    dataResponse = {
        token : dataHeader.authorization,
        userPass
    };

    return res.end(JSON.stringify(dataResponse));
});

//server.listen(5500)