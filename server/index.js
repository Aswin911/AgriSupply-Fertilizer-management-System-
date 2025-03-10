const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

const farmersRoute = require('./routes/Farmers.js');

app.use('/farmers', farmersRoute);


db.sequelize.sync().then(() => {
    app.listen(3001,()=>{
        console.log('\n\nConnected to Database!!!\n');
        console.log("Server running in port 3001");
        
    })
})

