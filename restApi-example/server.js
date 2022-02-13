const http = require("http");
const users = require("./data/users");
const posts = require("./data/posts");

const server = http.createServer((req, res)=>{
    console.log(req.url);

    //Userlar dönecek.
    if (req.url === "/users") {
      //Headar datalarını set ediyoruz.
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url === "/posts"){
        //Posts geriye dönülecek ve çalışacak.
        //Headar datalarını set ediyoruz.
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(posts));
        res.end();
    }
    else {
        //404 hata kodu dönülecek.
        res.writeHead(404, "Content-Type", "application/json")
        res.end(JSON.stringify({ message : "Hatalı İstek ."}));
    }


});

//Server App için Port.
const PORT = 5555;

//Server run olduğunda Çalışır.
server.listen(PORT, ()=>console.log(`server ${PORT} portu üzerinde çalışmaya başladı.`));