//0 加载express
const express = require('express')
const router = require('./router')
//1.调用express()得到一个app
const app = express()

app.use(router)
//3.监听端口号，启动web服务
app.listen(3000,()=>{
    console.log('running....')
})