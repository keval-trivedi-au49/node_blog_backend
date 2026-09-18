const express = require('express');
const cors = require('cors');

const { unautRoutes } = require('./routes/auth/unauthRoutes');
const { autRoutes } = require('./routes/ristrictedRoutes/authenticatedRoutes');
const { connectMongoDB } = require('./database/mongoConfig');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Blog backend is running'
    });
});

app.use('/unAuth', unautRoutes);
app.use('/auth', autRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectMongoDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();