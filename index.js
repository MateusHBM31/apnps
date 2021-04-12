const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Mateus!!")
})

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automática!")
})

app.get('/layout', function(req,res){
    res.send("Esse é meu novo Layout!")
})

app.listen(3000,function(){
    console.log('Conexão Inicializada')
})
