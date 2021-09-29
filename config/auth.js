const localstrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

require("../models/database")
const Usuario = mongoose.model("usuario")

module.exports = function(passport){
    passport.use(new localstrategy({usernameField:'email'}), (email, senha, done) =>{
        Usuario.findOne({email: email}).then((usuario) => {
            if(!usuario){
                return done(null, false, {message: "Conta inexistente"})
            }

            bcrypt.compare(senha, usuario.senha, (erro, accept) => {
                if(accept){
                    return done(null, user)
                }else{
                    return done(null, false, {message: "Senha incorreta"})
                }

            })
        })
    })

    passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, usuario) => {
            done(err, user)
        })
    })

}