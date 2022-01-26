const express = require('express')
const axios= require('axios')
const route = require('./routes');



const app = express();

app.get('/enviarDados', (req, resp)=>{
    resp.send('enviar Dados')
})



app.listen(1000, ()=>{console.log('Rodando');})