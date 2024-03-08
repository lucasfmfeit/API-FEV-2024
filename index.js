const express = require("express");
const app = express();
let data = [
    {
        nome:"Ronaldo",
        pais:"Brasil",
        posicao:"Atacante",
        id:1,
    },
    {
        nome:"Kaká",
        pais:"Brasil",
        posicao:"Meio Campo",
        id:2
    },
    {
        nome:"Buffon",
        pais:"Italia",
        posicao:"Goleiro",
        id:3
    }

]
app.use(express.json())

app.get("/players",(request,response)=>{
    return response.json(data)
})

app.post("/players",(request, response)=>{
    const body = request.body
    const ultimo = data[data.length - 1]
    const id = ultimo.id + 1
    data.push({
        ...body, id
    })
    return response.json(data)
})

app.put("/players/:id",(request,response)=>{
    const id = request.params?.id
    const body = request.body
    data = data.map((item)=>{
        if(item.id===Number(id)){
            return {
                ...item,...body
            }
        }
        return item;
    })
    return response.json(data)
})

app.listen(3000,()=>{
    console.log("Servidor rodando!")
})

