import express from 'express'

let router=express.Router()

router.post('/',(req,res)=>{
    res.json(req.body)
})

export default router
