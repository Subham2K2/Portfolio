const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')
const router = require('./routes/user-auth')
const connectDB = require('./utils/db')

//Useage of CORS
var corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials: true
}
app.use(cors(corsOptions))

app.use(express.json())
app.use("/api/auth", router)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening at port no ${PORT}`)
    })
})