var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',//    host: 'moolinkdat1.mysql.rds.aliyuncs.com',
    user: 'root',//user: 'canye',
    password: 'wxx7229026',//password: 'canye7229026',
    database:'hntemp',
    port: 3306
});




var bodyParser = require('body-parser');

var express = require('express'),
    app = express(),


    server = require('http').createServer(app),



 //   io = require('socket.io').listen(server),
    users = [];
//specify the html we will use
app.use('/', express.static(__dirname + '/www'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


app.get('/mysql/get/:table/:indexdata/', function(req, res){ 
      var  actionSql = "SELECT * FROM "+req.params.table+" LIMIT " + ((req.params.indexdata-1)*10) + ",10";     
//查 query
conn.query(actionSql,function (err, result) {
        if(err){
         // $("#dbif").text('[SELECT ERROR] - '+err.message);//("MYSQL:127.0.0.1<br>端口:3306");
          //console.log('[SELECT ERROR] - ',err.message);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') conn.connect();
          res.writeHead(200, {'Content-Type': 'application/json'});
          return;
        }  
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(''+JSON.stringify(result)+'');     
        });
     }); 

app.get('/mysql/stdzin/:days/:indexdata/', function(req, res){ 
      var  actionSql = "SELECT * FROM stin WHERE DAY>="+req.params.days+" LIMIT " + ((req.params.indexdata-1)*10) + ",10";     
//查 query
conn.query(actionSql,function (err, result) {
        if(err){
         // $("#dbif").text('[SELECT ERROR] - '+err.message);//("MYSQL:127.0.0.1<br>端口:3306");
          //console.log('[SELECT ERROR] - ',err.message);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') conn.connect();
          res.writeHead(200, {'Content-Type': 'application/json'});
          return;
        }  
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(''+JSON.stringify(result)+'');     
        });
     }); 

app.get('/mysql/stdzincount/:days/', function(req, res){ 
      var  actionSql = "select COUNT(*) as count FROM stin WHERE DAY>="+req.params.days+"";     
//查 query
conn.query(actionSql,function (err, result) {
        if(err){
         // $("#dbif").text('[SELECT ERROR] - '+err.message);//("MYSQL:127.0.0.1<br>端口:3306");
          //console.log('[SELECT ERROR] - ',err.message);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') conn.connect();
          res.writeHead(200, {'Content-Type': 'application/json'});          
          return;
        }  
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(''+JSON.stringify(result)+'');     
        });
     }); 


app.get('/mysql/count/:table/', function(req, res){ 
      var  actionSql = "select COUNT(*) as count from "+req.params.table+"";     
//查 query
conn.query(actionSql,function (err, result) {
        if(err){
         // $("#dbif").text('[SELECT ERROR] - '+err.message);//("MYSQL:127.0.0.1<br>端口:3306");
          //console.log('[SELECT ERROR] - ',err.message);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') conn.connect();
          res.writeHead(200, {'Content-Type': 'application/json'});          
          return;
        }  
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(''+JSON.stringify(result)+'');     
        });
     }); 


app.post('/mysql/post/:fun/', function(req, res){ 

    if("updatadevicelistinfo"===req.params.fun)
    {
      var  actionSql = "call updatadevicelistinfo('"+req.body.request.devid+"','"+req.body.request.devcode+"','"+req.body.request.devarea+"')";     
    }
    else if("updatacardlistinfo"===req.params.fun)
    {
      var  actionSql = "call updatacardlistinfo('"+req.body.request.cardid+"','"+req.body.request.cardcode+"','"+req.body.request.carduserid+"')"; 
    }
    else if("updatauserlistinfo"===req.params.fun)
    {
      var  actionSql = "call updatauserlistinfo('"+req.body.request.userid+"','"+req.body.request.username+"','"+req.body.request.userno+"','"+req.body.request.userunit+"')"; 
      console.log(req.body.request);
    }

    else
    {var  actionSql = "select COUNT(*) as count from "+req.params.table+""; }
          
//查 query
conn.query(actionSql,function (err, result) {
        if(err){
         // $("#dbif").text('[SELECT ERROR] - '+err.message);//("MYSQL:127.0.0.1<br>端口:3306");
          //console.log('[SELECT ERROR] - ',err.message);
          if(err.code === 'PROTOCOL_CONNECTION_LOST') conn.connect();
          res.writeHead(200, {'Content-Type': 'application/json'});
          return;
        }  
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(''+JSON.stringify(result)+'');     
        });


     }); 




//bind the server to the 80 port
//server.listen(3000);//for local test
server.listen(process.env.PORT || 3000);//publish to heroku
//server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);//publish to openshift
//console.log('server started on port'+process.env.PORT || 3000);
//handle the socket
// io.sockets.on('connection', function(socket) {
//     //new user login
//     socket.on('login', function(nickname) {
//         if (users.indexOf(nickname) > -1) {
//             socket.emit('nickExisted');
//         } else {
//             socket.userIndex = users.length;
//             socket.nickname = nickname;
//             users.push(nickname);
//             socket.emit('loginSuccess');
//             io.sockets.emit('system', nickname, users.length, 'login');
//         };
//     });
//     //user leaves
//     socket.on('disconnect', function() {
//         users.splice(socket.userIndex, 1);
//         socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
//     });
//     //new message get
//     socket.on('postMsg', function(msg, color) {
//         socket.broadcast.emit('newMsg', socket.nickname, msg, color);
//     });
//     //new image get
//     socket.on('img', function(imgData, color) {
//         socket.broadcast.emit('newImg', socket.nickname, imgData, color);
//     });
// });







//conn.connect();














