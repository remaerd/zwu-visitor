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
  //department
  getDepartment: (req, res, next) => {
    connection.query(sqlMap.getDepartment, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result
      })
    })
  }
};