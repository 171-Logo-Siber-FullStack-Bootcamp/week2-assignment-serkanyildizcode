

//HTTP ve kisileri import eder.
const http = require("http");
const kisiler = require("./data.json")

//Server'ı ayağa kaldırdıgımız bölüm. Get,Post,Put,Delete,Trace,Option... gibi http reqleri işler ve gereğini yapar.
const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");//Bu ksıımdaki"Content type" zarfımızın üzerinde yazan adres kısmı olarak düşünülebilir. Diğer kısım default bu şekilde kullanılıyor.
    response.write(JSON.stringify(kisiler));
    response.end();

})

//Port numarası.
const PORT = 5000;

//Server çalıştıgında yapılacaklar.
server.listen(PORT, ()=>console.log(`server ${PORT} portu üzerinde çalışmaya başladı.`));
