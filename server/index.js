const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const authRoute = require('./routes/Auth.js');
const farmersRoute = require('./routes/Farmers.js');
const fertilizersRoute = require('./routes/Fertilizers.js'); 
const feedbackRoute = require('./routes/Feedback.js');
const usersRoute = require('./routes/Users.js'); 
const manufacturersRoute = require('./routes/Manufacturers.js'); 
const ordersRoute = require('./routes/Orders.js');

app.use('/auth', authRoute)
app.use('/farmers', farmersRoute);
app.use('/fertilizers', fertilizersRoute);
app.use('/feedback', feedbackRoute);
app.use('/users', usersRoute);
app.use('/manufacturers', manufacturersRoute);
app.use('/orders', ordersRoute);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('\n\nConnected to Database!!!\n');
        console.log("Server running in port 3001");
    });
});