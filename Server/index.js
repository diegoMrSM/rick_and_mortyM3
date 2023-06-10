const  http = require("http");
const PORT = 3001;
const characters = require('./src/utils/data')

http.createServer((req, res) => {
    const {url }= req;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(url.includes("/rickandmorty/character")){
        const id = Number(url.split('/').pop())
        const character = characters.find((char) => {
            return char.id === id
        })
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(character))
    }

}).listen(PORT, 'localhost')