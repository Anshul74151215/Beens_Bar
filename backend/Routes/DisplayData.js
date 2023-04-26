const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try{
        res.send([global.foodData2,global.foodCategory])
    }catch(error){
        console.log(error,message);
        res.send("server err...")
    }
})
module.exports = router;