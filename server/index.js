import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import users from './routes/users'

let app=express()

app.use(bodyParser.json())

app.use('/users',users)

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(8080,()=>{console.log('Up up and away')})