const db = require('./database.js')

const Post = db.sequelize.define('usuario', {
    email:{
        type: db.Sequelize.STRING,
        unique: true
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.TEXT
    },
    representa:{
        type: db.Sequelize.STRING
    },
    regiao:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    detalhe:{
        type: db.Sequelize.TEXT
    }
});

const News = db.sequelize.define('novidade',{
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.TEXT
    }
});

Post.sync({force:true});
News.sync({force:true});

module.exports = Post, News;