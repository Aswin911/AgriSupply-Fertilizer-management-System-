const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

const home = require('./routes/Home.js')
app.use('/',home)

db.sequelize.sync().then(() => {
    app.listen(3001,()=>{
        console.log('\n\nConnected to Database!!!\n');
        console.log("Server running in port 3001");
        
    })
})

