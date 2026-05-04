const express = require('express');
const { login } = require('../../controllers/auth/login/login');

const app = express();

app.post('/login', login)

exports.unautRoutes = app;