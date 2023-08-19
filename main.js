const express = require('express')
const app = express()
const routes=require('./routes/routes')
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/v1/api',routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})