import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'

let app=express()

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(3000,()=>{
    console.log('Up up and away')
})