const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('服务器开启成功')
});

const data = [
    {id:1,name:'吃饭',isCompleted:false},
    {id:1,name:'睡觉',isCompleted:true},
    {id:1,name:'打豆豆',isCompleted:false}
]

app.get('/ceshi', (req, res) => res.json(data))

app.get('/ceshi_jsonp',(req,res)=>res.jsonp(data))

var server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('Example app listening at %s', port)
});