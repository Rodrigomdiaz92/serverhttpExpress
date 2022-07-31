const Contenedor = require('./Contenedor');
const express = require('express');
const product = new Contenedor('./productos.txt');
const app = express();



app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Hola mundo</h1>');
})  //post, put,delete, patch, options

app.get('/productos', async(req, res) => {
    let allProducts = await product.getAll();    
    res.send(allProducts);
})

app.get('/productosRandom', async(req, res) => {
    const idToSearch = Math.ceil(Math.random()*3);
    let productById = await product.getById(idToSearch);    
    res.send(productById);
})

const server = app.listen(8080, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => console.log(`Error en servidor ${error}`));