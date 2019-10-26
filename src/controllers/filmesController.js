const filmes = require('../models/filmes.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 6 || id <= 0) {
        res.redirect(301, "https://www.freecodecamp.org/")
    }
    res.status(200).send(filmes.find(filme => filme.id == id))
}

exports.getGenero = (req, res) => {
    const nomeGen = req.params.buscar;
    res.status(200).send(filmes.filter(filme => filme.Genero.indexOf(nomeGen) > -1))
}