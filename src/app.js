const path = require('path')
const express = require('express')
const app= express()
const publicDirectoryFile =path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates')

app.set('view engine','hbs')
app.set('views',viewsPath)

app.use(express.static(publicDirectoryFile))
app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather App',
        name: 'saurabh kanswal'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'saurabh kanswal',
        companyName: 'programmingrofl'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        message: 'this is help message S.O.S'
    })
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
    
})