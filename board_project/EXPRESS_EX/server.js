import express from 'express';
import mysql from 'mysql';


const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '1111',
    database : 'board'
  });



app.get('/', function (req, res) {
    res.send('hello')
})

// app.get('/posts/:id',  function (req, res) {
//     let { id } = req.params;
//     console.log(req.params.id)
//     console.log(req.params["id"])
// })

app.get('/qs',  function (req, res) {
    let { id } = req.query;
    console.log(id);
})

app.post('/posts', (req, res) => {
    console.log("post request")
    console.log(req.body);
    let {id, title, views} = req.body;
    res.send(id);
})

app.listen(3003, () =>
    console.log("server is ready")
)

