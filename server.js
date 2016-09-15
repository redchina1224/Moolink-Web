
var config = require('./config');

var mysqlconn = require('./user_modules/user_mysql');

var redisclient = require('./user_modules/user_redis');

var webapp = require('./user_modules/user_webapp');

var udpserver = require('./user_modules/user_udp');


webapp.get('/device/:deviceid/get/', function(req, res){ 
//      var  actionSql = "SELECT * FROM "+req.params.table+" LIMIT " + ((req.params.indexdata-1)*10) + ",10";     
//查 query
// conn.query(actionSql,function (err, result) {
//         if(err){
//          // $("#dbif").text('[SELECT ERROR] - '+err.message);//("MYSQL:127.0.0.1<br>端口:3306");
//           //console.log('[SELECT ERROR] - ',err.message);
//           if(err.code === 'PROTOCOL_CONNECTION_LOST') conn.connect();
//           res.writeHead(200, {'Content-Type': 'application/json'});
//           return;
//         }  
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(''+JSON.stringify(result)+'');     
//         });

        //res.writeHead(200, {'Content-Type': 'application/json'});
        res.writeHead(200, {'Content-Type': 'text/plain'});
        //res.end("get:"+req.params.deviceid+"->"+req.params.action);   
        reskv(req.params.deviceid,res);
     }); 


webapp.get('/device/:deviceid/set/:sendmsg', function(req, res){ 
    var sendstr="sendstr:"+req.params.sendmsg;
    //server.send(testmsg, 0, testmsg.length, 10629,'60.163.137.41');
    udpsend(req.params.deviceid,sendstr,udpserver,res)
     }); 





    function setkv(key,value) {
//      client.auth("f209e5ac54f4444f:WangXuXiao7229026", redis.print);
    // 写入数据
    redisclient.set(key, value);
    redisclient.expire(key, 40);
 //   client.quit();
} 


   function reskv(key,res) {
//  client.auth("f209e5ac54f4444f:WangXuXiao7229026", redis.print);
    // 获取数据，返回String

    redisclient.get(key, function (err, reply) {
      if(reply==null)
      {res.write('{"d_code":"'+key+'","online":"false"}');}
    else
    {res.write(reply.toString());}  
      res.end();
    });

    // // 如果传入一个Buffer，返回也是一个Buffer
    // client.get(new Buffer("key"), function (err, reply) {
    //     console.log(reply.toString()); // print `<Buffer 4f 4b>`
    // });
 //   client.quit();
}


udpserver.on("message", function (msg, rinfo) {

var str = ''+msg+'';
try
{
  //var aaa = JSON.parse(str);

  var deviceinfo = JSON.parse(str);

  if(undefined!=deviceinfo.d_code)//&&deviceinfo.d_code.length>=12) 
  {
    deviceinfo["rip"]=rinfo.address.toString();
    deviceinfo["rport"]=rinfo.port.toString();
    deviceinfo["timestamp"]=new Date().getTime();
    deviceinfo["online"]="true";    
    //console.log(JSON.stringify(deviceinfo));
    setkv(deviceinfo.d_code,JSON.stringify(deviceinfo));

    if(deviceinfo["gettime"]=="true")
    {
    var myDate = new Date();
    var messageaa = new Buffer("gettime:"+myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()+"\r\n");
    udpserver.send(messageaa, 0, messageaa.length, rinfo.port, rinfo.address);
    }

     if(deviceinfo["log"]=="true"&&undefined!=deviceinfo.d_cntf)
    {
      //存入数据库
      var sqlstr="call updatadevinfo('"+deviceinfo.d_code+"', '"+deviceinfo.SW+"', '"+deviceinfo.d_cntf+"', '"+deviceinfo.RT+"', '"+deviceinfo.OT+"')";
      mysqlconn.query(sqlstr, function(err, rows, fields) {
       if (err) 
          {throw err;}
        else
        {
      //返回数据库错误信息
        var messageaa = new Buffer("logok:"+deviceinfo.d_cntf+"\r\n");
        udpserver.send(messageaa, 0, messageaa.length, rinfo.port, rinfo.address);
        }
//    console.log('The solution is: ', rows[0].solution);
      });

     }

  }
  else
  {  console.log("no d_code");}
}
catch(err)
{console.log("not json");}
//server.send(msg, 0, msg.length, rinfo.address);
//  server.send(msg, 0, msg.length, rinfo.port, rinfo.address);
});

   function udpsend(d_code,msg,server,res) {
//  client.auth("f209e5ac54f4444f:WangXuXiao7229026", redis.print);
    // 获取数据，返回String

    redisclient.get(d_code, function (err, reply) {
    if(reply!=null)
      {
    try
    {
    var deviceinfo = JSON.parse(reply.toString());

      var sendmsg = new Buffer(msg+"\0");
      server.send(sendmsg, 0, sendmsg.length, deviceinfo.rport,deviceinfo.rip);
      res.write('{"d_code":"'+d_code+'","online":"true","rip":"'+deviceinfo.rip+'","rport":"'+deviceinfo.rport+'"}');//  msg+"-->"+deviceinfo.rip+":"+deviceinfo.rport);
      }
      catch(err)
      {res.write("err:"+err);}
      }
      else
      {res.write('{"d_code":"'+d_code+'","online":"false"}');}  
      res.end();
    });

    // // 如果传入一个Buffer，返回也是一个Buffer
    // client.get(new Buffer("key"), function (err, reply) {
    //     console.log(reply.toString()); // print `<Buffer 4f 4b>`
    // });
 //   client.quit();
}
