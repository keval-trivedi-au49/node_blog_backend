const express = require('express');
const jwt = require('../../middlewares/jwt');
const { userDetails } = require('../../controllers/users/users');
const { getAllBlogs, createBlog } = require('../../controllers/users/blogs');

const app = express();

app.get('/userDetails', jwt, userDetails)
app.get('/blogs', jwt, getAllBlogs)
app.post('/add/blog', jwt, createBlog)

exports.autRoutes = app;