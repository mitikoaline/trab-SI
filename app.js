const express = require('express');
const app = express();
const Post = require('./models/Post');
var session = require('express-session');
const bodyparser = require('body-parser');
const { Op } = require("sequelize");

app.use(session({secret: 'siclo123'}));
app.use(express.urlencoded({extended: false}));

app.use('/css', express.static('css'));
app.get("/cadastro", function(req,res){
    res.sendFile(__dirname + "/html/cadastro.html");
});

app.post("/", async function(req, res){
    var a = await Post.count({where:{email: {[Op.eq]: req.body.email}, senha: {[Op.eq]: req.body.senha}}});
    if(a == 1){
        req.session.email = req.body.email
        res.send("Usuario logado");
    }else{
        res.send("Nenhum usuario logado");
    }
});

app.get("/", (req, res)=>{
    if(req.session.email){
        res.send("Usuario logado");
    }else{
        res.send("Nenhum usuario logado");
    }
});

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/html/login.html");
});

app.post("/cadastrado", function(req, res){
    Post.create({
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        representa: req.body.representa,
        regiao: req.body.regiao,
        senha: req.body.senha,
        detalhe: req.body.detalhe
    }).then(function(){
        res.send("Usuario criado com sucesso");
    }).catch(function(erro){
        res.send("ERRO:" + erro);
    });
    console.log(req.body);
})

app.listen(3000);