const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//variable de entorno global de Heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


/* 
app.get('/', (req, res) => {
    let salida = {
        nombre: 'Pepe',
        edad: 33,
        url: req.url
    };

    res.send(salida);
    // res.send('Hello World')
})

 */

/* 
Sin helper
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Pepe',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
           anio: new Date().getFullYear()
    });
}) */

//Con helper getAnio
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jePe roBles'
    });
})
app.get('/about', (req, res) => {
    res.render('about');
})







app.get('/data', (req, res) => {

    res.send('Hello Data')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en e puerto ${port}`);
})