const express = require('express')
const app = express()
const router = express.Router()
const filmesController = require('./src/controllers/filmesController')

router.get('/filmes', filmesController.get)
router.get('/filmes/longos', filmesController.getFilmeLong)
// router.get('/filmes/lancamento', filmesController.getdataLanc)
router.get('/filmes/:id', filmesController.getById)
router.get('/filmes/genero/:nome', filmesController.getGenero)

module.exports = router;

