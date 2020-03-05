const Mock = require('mockjs')
const Random = Mock.Random
module.exports={
    "GET /api/mockdata" :(req,res)=>{
        res.send({
            color:Random.color(),
            name:"kiana",
            arr:[1,2,3,4]
        })
        
    }
}