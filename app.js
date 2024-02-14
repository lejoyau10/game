const express = require('express')
const path = require('path')
const app = express()
// setup middleware
app.use(express.static('./src'))
// home page
// app.get('/', (req, res)=>{
// res.sendFile(path.resolve(__dirname,'./src/index.html'))
// })
// // About Page
// app.get('/about', (req, res)=>{
//   res.sendFile(path.resolve(__dirname,'./src/about.html'))
//   })

app.all('*',(req, res)=>{
  res.status(404).send('ressoure not found')
})
app.listen(5000, ()=>{
  console.log('list in p5000');
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.listen
// app.use
