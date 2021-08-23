'use strict'

const { listar_todos_os_livros, listar_um_livro } = require('../controllers/livroController')

module.exports = function(app){
    var livroController = require('../controllers/livroController')

    app.route('/livro')
    .get(livroController.listar_todos_os_livros)
    .post(livroController.adiciona_um_livro)
    
    app.route('/livro/:livroId')
    .get(livroController.listar_um_livro)
    .put(livroController.update_um_livro)
    .delete(livroController.remove_um_livro)
}