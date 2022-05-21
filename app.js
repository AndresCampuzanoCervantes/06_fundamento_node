require('dotenv').config();
const express=require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home',{
        nombre:'Andres Campuzano',
        titulo: 'Curso de node'
})
});

app.get('/generic', (req, res) =>{
    res.render('generic',{
        nombre:'Andres Campuzano',
        titulo: 'Curso de node'
})
});


app.get('/elements', (req, res) =>{
    res.render('elements',{
        nombre:'Andres Campuzano',
        titulo: 'Curso de node'
})
});


app.get('*', (req, res) =>{
    res.send('404 | page not found')
})

app.listen(port, (req, res) =>{
    console.log(`Exaple app listening at http://localhost:${port}`)
})