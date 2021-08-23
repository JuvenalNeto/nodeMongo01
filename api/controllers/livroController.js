'use strict'
const { json } = require('express')
var mongoose = require('mongoose')
var livro = mongoose.model('livro')

//GET ALL
exports.listar_todos_os_livros = function(req, res){
    livro.find({}, function(err, livros){
        if(err){
            res.send(err)
        }
        res.json(livros)
    })
}

//GET ID
exports.listar_um_livro = function(req, res){
    livro.find({"_id" : req.params.livroId}, function(err, livro){
        if(err){
            res.send(err)
        }
        res.json(livro)
    })
}

//POST
exports.adiciona_um_livro = function(req, res){
    var novo_livro = new livro(req.body)
    novo_livro.save(function(err, livro){
        if(err){
            res.send(err)
        }
        res.json(livro)
    })
}

//PUT
exports.update_um_livro = function(req,res){
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body, {new: true},
        function(err, livro){
            if (err){
                res.send(err)
            }
            res.json(livro)
        })
}

//DELETE
exports.remove_um_livro = function(req, res){
    livro.remove({_id: req.params.livroId}, function(err, livro){
        if (err){
            res.send(err)
        }
        res.json({"mensagem": "livro deletado com sucesso"})
    })
}