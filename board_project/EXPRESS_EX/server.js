import express from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '1111',
    database: 'board'
});

connection.connect();

// 읽기
app.get('/', function (req, res) {
    res.send('hello')
})

// app.get('/posts/:id',  function (req, res) {
//     let { id } = req.params;
//     console.log(req.params.id)
//     console.log(req.params["id"])
// })

app.get('/qs', function (req, res) {
    let { id } = req.query;
    console.log(id);
})

app.get('/posts/:id', function (req, res){
    let { id } = req.params;
    let sql = `select * from posts where id = ${id}`;
    connection.query(sql, function (error, results) {
        if (error) {
            console.log(error)
        } else {
            let {title, views} = results[0];
            res.send({title, views});
        }
    })
})

// 쓰기
app.post('/posts', (req, res) => {
    let { id, title, views } = req.body;
    let sql = 'insert into posts (id, title, views) values(?, ?, ?)'
    connection.query(sql, [id, title, views], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            console.log(results)
        }
    })
})

// 수정하기
app.put('/posts/:id', (req, es) => {
    const { id } = req.params;
    const { title, views } = req.body;

    //views만 업데이트 
    let sql = 'update posts set views = ? where id = ?';
    connection.query(sql, [views, id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
        }
    })
})

app.listen(3003, () =>
    console.log("server is ready")
)

