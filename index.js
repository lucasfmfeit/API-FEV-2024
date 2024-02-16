const express = require("express");
const app = express();
const data = [
    {
        nome:"Ronaldo",
        pais:"Brasil",
        posicao:"Atacante"
    },
    {
        nome:"Kaká",
        pais:"Brasil",
        posicao:"Meio Campo"
    },
    {
        nome:"Buffon",
        pais:"Italia",
        posicao:"Goleiro"
    }
]

app.get("/players",(request,response)=>{
    return response.json(data)
})

app.listen(3000,()=>{
    console.log("Servidor rodando!")
})