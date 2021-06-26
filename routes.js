const express = require('express');
const router = express.Router();

// a partir disso eu já consigo criar as minhas rotas
// invés de mandar uma send eu mando uma render com a pasta home das minhas views
router.get('/', (req, res) => res.render('home'));
router.get('/contato', (req, res) => res.render('contato'));
router.get('/receitas', (req, res) => res.render('receitas'));
router.get('/massa-fresca', (req, res) => res.render('receitas-ex/massa-fresca'));
router.get('/exagero', (req, res) => res.render('receitas-ex/exagero'));

/* CATEGORIAS */
router.get('/receitas/brasileira', (req, res) => res.render('categorias/brasileira'));
router.get('/receitas/italiana', (req, res) => res.render('categorias/italiana'));
router.get('/receitas/japonesa', (req, res) => res.render('categorias/japonesa'));
router.get('/receitas/mexicana', (req, res) => res.render('categorias/mexicana'));
router.get('/receitas/saudavel', (req, res) => res.render('categorias/saudavel'));
router.get('/receitas/lanches', (req, res) => res.render('categorias/lanches'));
router.get('/receitas/frutos-do-mar', (req, res) => res.render('categorias/frutos-do-mar'));
router.get('/receitas/vegetariana', (req, res) => res.render('categorias/vegetariana'));
router.get('/receitas/veganas', (req, res) => res.render('categorias/veganas'));
router.get('/receitas/doces', (req, res) => res.render('categorias/doces'));
router.get('/receitas/bebidas', (req, res) => res.render('categorias/bebidas'));


// Para eu ter acesso ao router eu preciso exportar 
module.exports = router;