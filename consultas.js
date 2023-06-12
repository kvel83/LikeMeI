const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5433,
    password: 'Alonso01',
    database: 'likeMe',
    allowExitOnIdle: true
    });



    const getPosts = async () => {
        const { rows } = await pool.query("SELECT * FROM posts");
        return rows;
    }

    const postPosts = async (titulo, img , descripcion, likes) => {
        try {
            const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
            const values = [titulo, img, descripcion, likes];
            const result = await pool.query(consulta, values);
            const message = "post agregado exitosamente";
            return message;
        } catch (error) {
            error.json({
                message: "Error al insertar registro"
            });
        }


    }

    module.exports = {
        getPosts,
        postPosts
    }