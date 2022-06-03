//const mysql
const mysql = require('mysql');
//const dbConfig
const dbConfig = require('./db');
//const sqlMap
const sqlMap = require('./sqlMap');
//const connection
const connection = mysql.createConnection(dbConfig)

//
module.exports = {
  //getAllApplicationById
  getAllApplicationById: function (req, res, next) {
    connection.connect();
    let querySql = sqlMap.getAllApplicationById;
    connection.query(querySql, function(err,result){
      if(err){
        console.log('error');
      } else{
        let data;
        if(result.length) {
          data = result;
        }
        res.send(data);
      }
    })
  }
};