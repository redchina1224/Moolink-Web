
var config = require('../config');

var mysql = require('mysql');

var conn;
function handleError () {
    conn = mysql.createConnection({
    host: config.mysql_host,//    host: 'moolinkdat1.mysql.rds.aliyuncs.com',
    user: config.mysql_username,//user: 'canye',
    password: config.mysql_password,//password: 'canye7229026',
    database:config.mysql_datebase,
    port: config.mysql_port
    });


    //连接错误，2秒重试
    conn.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleError , 2000);
        }
    });

    conn.on('error', function (err) {
        console.log('db error', err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleError();
        } else {
            throw err;
        }
    });
}
handleError();


module.exports = conn;








