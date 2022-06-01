//const mysql
const mysql = require('mysql');
//const dbConfig
const dbConfig = require('./db');
//const sqlMap
const sqlMap = require('./sqlMap');
//const pool
const pool = mysql.createPool(dbConfig.mysql);

//
module.exports = {
  //getAllApplicationById
  getAllApplicationById: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      connection.query(sqlMap.getAllApplicationById, function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        res.json(result);
        connection.release();
      });
    });
  }
};