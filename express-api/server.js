const express = require ("express");
const users =require ("./data/users.json");
const posts =require ("./data/posts.json");
const app = express();
//Userlar için GET isteği geldiğinde yapılacaklar.
app.get ("/users" ,(req,res) =>
{
    if(req.query.id)
    {
        // users'ın query string'i (http://localhost:1234/users?id=1) var ise filtrele ve getir.
        let selectedUser = users.filter (x => x.id == req.query.id);
        res.send(selectedUser);
    }
    else
    {
        // users'ın query string'i yok ise  (http://localhost:1234/users) bütün userları getir.
        res.send(users);
    }
});


//Postlar için GET isteği geldiğinde yapılacaklar.
app.get ("/posts/:postId" , (req,res)=>
{
    let postId= posts.filter (x =>x.id == req.params.postId);
    res.send (postId);
});
//
app.get("/posts" , (req,res) =>{
    res.send (posts);
});

const PORT=1234;
app.listen(PORT);
