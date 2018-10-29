const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/contollers');
const app = express();
app.use(bodyParser.json())
const port = 5000;

app.get(`/api/posts`, mc.readPost)
app.post(`/api/posts`, mc.createPost)
app.put(`/api/posts/:id`, mc.updatePost)
app.delete(`/api/posts/:id`, mc.deletePost)


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})