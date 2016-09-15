var config = require('../config');

var redis = require("redis"),
   // client = redis.createClient('6379', 'f209e5ac54f4444f.m.cnhza.kvstore.aliyuncs.com');
   // client.auth("f209e5ac54f4444f:WangXuXiao7229026", redis.print);
   client = redis.createClient(config.redis_port, config.redis_host);
   client.auth(config.redis_auth, redis.print);

module.exports = client;
