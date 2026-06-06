const express = require('express');
const path  = require('path');
const app = express();

// middleawres
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

// ejs format
app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/profile/:username', (req, res)=> {
    //             ^^^^ ye part dynamic matlab kuch bhi likh yaha and variable ki tarah trat hoga jisme kuch bhi aa sakta hain 
    
    res.send(`Welcome, ${req.params.username}`)
})

app.listen(3000, ()=>{
    console.log('Its running');
    
})