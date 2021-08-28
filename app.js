//引入express
const express = require('express')
const  compression = require('compression')
const  app =express()
app.use(compression())//在静态资源加载之前
app.use(express.static('./dist'))

app.listen(80,()=>{
    console.log('server running')
})