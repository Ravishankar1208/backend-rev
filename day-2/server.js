const express = require('express')

const app = express()


app.get('/',(req, res)=>{
  res.send("hello ravi aadi ka gand maar le")
})

app.listen(3000,()=>{
  console.log("server is running");
  
})