import mysql from 'mysql';

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3307,
  user     : 'root',
  database : 'board',
  password : '1111'
});
 
connection.connect();
 
connection.query('SELECT * from posts', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();