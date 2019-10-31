const filmes = require('../models/filmes.json')

exports.get = (req, res) => {
    res.status(200).send(filmes)
}

exports.getById = (req, res) => {
    const id = req.params.id
    res.status(200).send(filmes.find(filme => filme.id == id))
}

exports.getGenero = (req, res) => {
    const genero = req.params.nome
    const filGen = filmes.filter(filme => filme.Genero.indexOf(genero) > -1)
    res.status(200).send(filGen)
}

exports.getFilmeLong = (req, res) => {
    const longo = filmes.filter(filme => filme.DuracaoMinuto > 120)
    res.status(200).send(longo)
}
