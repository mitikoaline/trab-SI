const express = require('express');
const app = express()
const Post = require('./models/Post')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/css', express.static('css'));
app.get("/cadastro", function(req,res){
    res.sendFile(__dirname + "/html/cadastro.html");
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
    // console.log(req.body); DEBUG
})

app.listen(3000);