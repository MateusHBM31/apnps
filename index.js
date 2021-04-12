const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Mateus!!")
})

app.get('/mensagem', function(req,res){
    res.send("Essa mensagem é automática!")
})

app.listen(3000,function(){
    console.log('Conexão Inicializada')
})