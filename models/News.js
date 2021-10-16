const db = require('./database.js');

const News = db.sequelize.define('novidade',{
    nome:{
        type: db.Sequelize.STRING
    },
    representa:{
        type: db.Sequelize.TEXT
    }
});

module.exports = News;