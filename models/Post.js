const db = require('./database.js')

const Post = db.sequelize.define('usuario', {
    email:{
        type: db.Sequelize.STRING
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

Post.sync({force:true});
module.exports = Post;