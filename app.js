const express = require('express')
require('dotenv').config()
const guideRoute = require('./routes/guide-route')
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express()

app.use('/bootstrap', express.static(path.join(__dirname, "node_modules/bootstrap/dist")))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "/views")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('/view')
})

// app.use('/', guideRoute)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))