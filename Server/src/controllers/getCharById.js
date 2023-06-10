/*const axios = require('axios');

const getCharById = (res, id) =>{
   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then(({data}) => {
        const {name, gender, species, origin, image, status} =data;
        const character = {id, name, gender, species, origin, image, status}

        res.writeHead(200, { 'Content-type': 'application/json'});
        return res.end(json.stringgify(character));
   })
   .catch((err) => {
    res.writeHead(500, {'Content-type': 'text-plain'})
    return res.end(err.message)
   })
}*/
const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const {id} = req.params;
    axios(URL + id)
    .then(({data}) => {
        const {name, gender, species, origin, image, status} =data;
        const character = {id, name, gender, species, origin, image, status}
        //res.status(200).json(character)
        return character.name ? res.status(200).json(character): res.status(404).send('Not found')
    })
    .catch((err) => { return res.status(500).send(err.message) })
}

module.exports = getCharById
