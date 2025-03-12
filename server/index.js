const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

const farmersRoute = require('./routes/Farmers.js');
const fertilizersRoute = require('./routes/Fertilizers.js'); // Add this line


app.use('/farmers', farmersRoute);
app.use('/fertilizers', fertilizersRoute); // Add this line


db.sequelize.sync().then(() => {
    app.listen(3001,()=>{
        console.log('\n\nConnected to Database!!!\n');
        console.log("Server running in port 3001");
        
    })
})

