const express = require('express');
const Users = require('./models/Post');
const News = require('./models/News');
const handlebars = require("express-handlebars");
const bodyparser = require('body-parser');
const app = express();
const { Op } = require("sequelize");

var session = require('express-session');
var alert = require('alert');
const { render } = require('ejs');

app.use(session({secret: 'siclo123'}));
app.use(express.urlencoded({extended: false}));
app.use('/css', express.static('css'));

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));

//################# Rotas get

app.get("/cadastro1", function(req,res){
    res.render("cadastro1");
});

app.get("/editarPerfil", function(req,res){
    Users.findAll({where:{email: req.session.email}}).then(function(usuarios){
        res.render("editarPerfil", {usuarios: usuarios});
    }).catch((err) => {
        res.render("Inicio");
    })
});

app.get("/", (req, res)=>{
    if(req.session.email){
        Users.findAll({where:{email: req.session.email}}).then(function(usuario){
            res.redirect("/Inicio/1")
        });
    }else{
        res.render("inicio");
    }
});

app.get("/sobreInicio", function(req, res){
    if(req.session.email){
        res.render("sobreInicio", {login: true});
    }else{
        res.render("sobreInicio", {login: null});
    }
});

app.get("/Inicio", function(req, res){
    if(req.session.email){
        Users.findAll({where:{email: req.session.email}}).then(function(usuario){
            res.redirect("/Inicio/1")
        });
    }else{
        res.render("Inicio");
    }
});

app.get("/Inicio/:id", async function(req, res){
    if(req.session.email){
        const auxi = await Users.findAll({where:{id: req.params.id}});
        const det = auxi[0].detalhe;
        const jorge =  auxi[0].nome;
        Users.findAll({where:{email: req.session.email}}).then(function(usuario){
            var mais = Number(req.params.id) + 1;
            var menos = Number(req.params.id) - 1;
            res.render('logado', {usuario: usuario, det: det, jorge:jorge, mais: mais, menos: menos});
        });
    }else{
        res.render("Inicio");
    }
});

app.get("/empresas", function(req, res){
    Users.findAll({where:{representa: 'Empresa'}}).then(function(usuarios){
        res.render('empresas', {usuarios: usuarios})
    });
});

app.get("/instituicoes", function(req, res){
    Users.findAll({where:{representa: 'Instituição'}}).then(function(usuarios){
        res.render('instituicoes', {usuarios: usuarios})
    });
});

app.get("/perfil", function(req, res){
    if(req.session.email){
        Users.findAll({where:{email: req.session.email}}).then(function(usuarios){
            res.render("perfil", {usuarios: usuarios});
        });
    }else{
        res.render("inicio");
    }
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect('/');
});

app.get("/detalhe/:nome", function(req, res){
    Users.findAll({where:{nome: req.params.nome}}).then(function(usuarios){
        res.render("detalhe", {usuarios: usuarios});
    });
});

// ############# Rotas post

app.post("/", async function(req, res){
    var a = await Users.count({where:{email: {[Op.eq]: req.body.email}, senha: {[Op.eq]: req.body.senha}}});
    if(a == 1){
        req.session.email = req.body.email
        res.redirect("/Inicio/1");
    }else{
        alert('Usuario não encontrado ou Senha incorreta');
        res.render("login");
    }
});

app.post("/Excluirconta", function(req, res){
    if(req.session.email){
        Users.delete({
            
        })
    }
})

app.post("/editarPerfil", async function(req, res){
    Users.findOne({where:{email: req.body.email}}).then((usuarios) => {
        usuarios.nome = req.body.nome,
        usuarios.telefone = req.body.telefone,
        usuarios.endereco = req.body.endereco,
        usuarios.produto = req.body.produto
        usuarios.save();
        res.redirect("/perfil");
    });
    
});

app.post("/cadastrado", function(req, res){
    Users.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        representa: req.body.representa,
        regiao: req.body.regiao,
        senha: req.body.senha,
        detalhe: req.body.detalhe,
        produto: req.body.produto
    }).then(function(){
        alert('Usuario criado com sucesso');
        req.session.email = req.body.email
        res.redirect("/Inicio/1");
    }).catch(function(erro){
        res.send("ERRO:" + erro);
    });

})

app.listen(3000);