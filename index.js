const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { getPosts, postPosts } = require('./consultas');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT,()=> console.log(`Server initialized in port http://localhost:${PORT}`));

app.get('/posts', async(req,res) => {
    const rows = await getPosts();
    res.json(rows);
})

app.post('/posts', async(req,res) => {
    const {titulo, img, descripcion, likes} = req.body;
    const rows = await postPosts(titulo, img, descripcion, likes);
    res.json({titulo, img, descripcion, likes});
})



