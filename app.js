const express = require ('express');
const content = require ('./content');
const app = express()
const port = 3001;

// console.log(content.blogPosts);

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res)=>{
    res.json(content.blogPosts);
});

app.listen(port, ()=>{
    console.log('Ascolto mode on')
});