const express = require('express')
// const {connecttoDb, getDb} = require('./db')
// const {ObjectId} = require('mongodb')
const app=express()
app.use(express.json())
//connect to db
let db
let collectionName='tab'


// app.listen(4000,()=>{
//     console.log("i get modify man...")
//     console.log("listening on 4000")
// })


// connecttoDb((err)=>{
//     if(!err){
//         app.listen(4000,()=>{
//             console.log("listening on 4000")
//         })
//         db=getDb()
//     }
// })

//routes
app.get('/sample1',(req,res)=>{
    res.status(500).json({error:"error find i m sample1"})
})
// app.get('/emp',(_req,res)=>{
//     let blist=[]

//     db.collection(collectionName).find()
//     .forEach(b=>blist.push(b))
//     .then(()=>{
//         res.status(200).json(blist)
//     })
//     .catch(()=>{
//         res.status(500).json({error:"error find"})
//     })

//     // res.json({msg:"welcome to api"})
// })

// app.get('/emp/:id',(_req,res)=>{
    
//     db.collection(collectionName)
//     .findOne({_id:ObjectId(_req.params.id)})
//     .then(doc => {
//         res.status(200).json(doc)
//     })
//     .catch(err=>{
//         res.status(500).json({error:"i m not able tp find"})
//     })
// })

// app.post('/emp',(req,res)=>{
//     const e = req.body
//     db.collection(collectionName)
//     .insertOne(e)
//     .then(result=>{
//         res.status(201).json(result)
//     })
//     .catch(err=>{
//         res.status(500).json({err:"Nt able to create"})
//     })
// })

// app.delete('/emp/:id',(req,res)=>{

//     if(ObjectId.isValid(req.params.id))
//     {
        
//         db.collection(collectionName)
//         .deleteOne({_id:ObjectId(req.params.id)})
//         .then(result=>{
//             res.status(201).json(result)
//         })
//         .catch(err=>{
//             res.status(500).json({err:"Nt able to delete a doc"})
//         })
//     }
//     else{
//         res.status.json({err:"check id please"})
//     }
// })
