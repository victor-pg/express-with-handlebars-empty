const { Router } = require("express");
const router = Router();

router.get('/test',(req,res)=>{
    res.render('test',{
        title:'Test'
    })
})

module.exports=router;