const express = require('express')
const app = express()
const port = 3000
ㄴ
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://yeoni2a:yh1207@todo-app.0e0r5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})