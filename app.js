const express = require('express');
const cors = require('cors')
const { unautRoutes } = require('./routes/auth/unauthRoutes');
const { autRoutes } = require('./routes/ristrictedRoutes/authenticatedRoutes');
require('./database/mongoConfig');

const app = express();

app.use(express.json());
app.use(cors(''));
app.use('/unAuth', unautRoutes);
app.use('/auth', autRoutes);

app.listen(3000, async () => {
    console.log(`Server is running on 3000`)
})