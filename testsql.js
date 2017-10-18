var sql = require('mysql');

var connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
});
connection.connect();

var sqlstring = "SELECT 1 + 1 AS solution";

connection.query(sqlstring, function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log('the solution is:', results[0].solution);
});

var sqlstring = 'select * from websites';
connection.query(sqlstring, function (error, results, fields) {
    if (error) {
        console.log('------err:%s------', error.message);
    }
    console.log('------查询所有数据------');
    console.log(results);
});

var addsql = 'insert into websites(Id,name,url,alexa,country) values(0,?,?,?,?)';
var addparam = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];

connection.query(addsql, addparam, function (error, results, fields) {
    if (error) {
        console.log('------err:%s------', error.message);
    }
    console.log('------添加一条数据------');
    console.log(results);
});

var updatesql = 'update websites set name=?,url=? where id=?';
var updateparam = ['菜鸟移动站', 'https://m.runoob.com', 6];

connection.query(updatesql, updateparam, function (error, results, fields) {
    if (error) {
        console.log('------err:%s------', error.message);
    }
    console.log('------更新一条数据------');
    console.log(results);
});

var deletesql = 'delete from websites where id=6';
connection.query(deletesql, function (error, results, fields) {
    if (error) {
        console.log('------err:%s------', error.message);
    }
    console.log('------删除一条数据------');
    console.log(results);
});