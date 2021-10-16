const db = require('./database.js')

const Users = db.sequelize.define('usuario', {
    nome:{
        type: db.Sequelize.STRING
    },
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
    },
    produto:{
        type: db.Sequelize.TEXT
    }
});

// Users.sync({force:true});
Users.create({
    nome: 'Atini',
    email: 'atini@gmail.com',
    telefone: '(61)933542633',
    endereco: 'Ceilândia Norte, Quadra CNR 1 Conjunto B',
    representa: 'Instituição',
    regiao: 'Ceilandia',
    senha: 'atini123',
    detalhe:'Atini é uma organização sem fins lucrativos, sediada em Brasília – DF, reconhecida internacionalmente por sua atuação pioneira na defesa do direito das crianças indígenas. A Atini é formada por líderes indígenas, antropólogos, linguistas, advogados, religiosos, políticos e educadores, e nutre profundo respeito pelas culturas indígenas. Possuindo uma sede que abriga crianças, adultos e idosos indígenas, a organização está sempre em necessidade de receber doações de cestas básicas e outros alimentos. As doações de outros itens como os de higiene pessoal também são bem vindas.',
    produto: 'Proteínas, Cestas Básicas e Itens de higiene pessoal.'
})


Users.create({
    nome: 'Extra',
    email: 'extra@extra.com',
    telefone: '61933256867',
    endereco: 'SQN 408 Brasilia',
    representa: 'Empresa',
    regiao: 'Plano Piloto',
    senha: 'teste123',
    detalhe: 'Extra é uma rede varejista brasileira, formada por lojas multiformato, que incluem supermercados, hipermercados e minimercados operados pelo GPA que também opera os supermercados da rede premium Pão de Açúcar. A bandeira surgiu com hipermercados em 1989, quando substituiu a marca Jumbo, existente desde a década de 1970. Atualmente, a rede varejista está localizada em diversos pontos espalhados pelo país, com mais de 80 lojas funcionais, que estão sempre a disposição do público.',
    produto: 'Ovos, Leite, Arroz, Feijão, Frango'
});

Users.create({
    nome: 'vivendas',
    email: 'vivendas@vivendas.com',
    telefone: '61932872837',
    endereco: 'CL 416 BLOCO C LT C',
    representa: 'Empresa',
    regiao: 'Santa Maria',
    senha: 'teste123',
    detalhe: 'A rede de supermercados Vivendas está localizada especialmente no Distrito Federal. Com uma grande quantidade de lojas espalhadas por diversas cidades. Atualmente, essa rede vem crescendo rapidamente e ganhando uma notável presença no mercado. A rede Vivendas entrou para a comunidade Siclo com o intuito de se comprometer a ajudar todas as instituições em necessidade. Suas lojas se especializam em produtos gerais, variando de alimentos à alguns utensílios domésticos. Com isso, os supermercados Vivendas garantem doações de sextas básicas completas, entre outros alimentos e itens que não estão contidos em uma cesta básica tradicional.',
    produto: 'Ovos, Leite, cesta basica'
});

Users.create({
    nome: 'Pão de Açúcar',
    email: 'paodeacucar@paodeacucar.com',
    telefone: '6193345362',
    endereco: 'SQN 406 Brasilia',
    representa: 'Empresa',
    regiao: 'Plano Piloto',
    senha: 'teste123',
    detalhe: 'Pão de Açúcar é uma rede de supermercados pertencente ao GPA, fundada na cidade de São Paulo. Hoje é um tipo de "supermercado de vizinhança"',
    produto: 'Ovos, Leite, Arroz, Feijão'
});

Users.create({
    nome: 'Lar dos Velinhos',
    email: 'lardosvelinhos@gmail.com',
    telefone: '6193213162',
    endereco: 'Quadra 404 conjunto 10 casa 15',
    representa: 'Instituição',
    regiao: 'Samambaia',
    senha: 'teste123',
    detalhe: 'Nós do Lar dos Velinhos buscamos sempre ajudar e acolher as pessoas de idade avançada, com a ajuda de pessoas de bem e de empresas doadoras, estamos abertos e ajudando muitas pessoas',
    produto: 'Leite, Arroz, Verduras, Frutas'
});


module.exports = Users;