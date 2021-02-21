// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


const express = require('express')
const app = express()
const port = 8000;

app.get('/',(req,res)=>{
res.send('this is homepage')
})
app.get('/hitesh',(req,res)=>{
    res.send('this is hitesh')
})
app.listen(port,()=>{
    console.log("server is running");
})
