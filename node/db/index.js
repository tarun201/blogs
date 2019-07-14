var mysql = require('mysql');
var config = require('../config/index.js');
var db = function(){};
var conn = null;

var pool = mysql.createPool({
  connectionLimit : 10,
  host     : config.host,
  user     : config.user,
  password : config.passwd,
  database : config.db
});

db.getconn = function(cb){
	pool.getConnection(function(err, connection){
		cb(err, connection);
	});
};

module.exports = db;
