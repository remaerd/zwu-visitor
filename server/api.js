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
    const body = req.body;
    connection.query(sqlMap.getDepartment, [body.id], (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result
      })
    })
  },
  // addDepartment: (req, res, next) => {
  //   const body = req.body;
  //   connection.query(sqlMap.addDepartment, [body.name], (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     res.json({
  //       code: 200,
  //       data: result
  //     })
  //   })
  // },
  // updateDepartment: (req, res, next) => {
  //   const body = req.body;
  //   connection.query(sqlMap.updateDepartment, [body.name, body.id], (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     res.json({
  //       code: 200,
  //       data: result
  //     })
  //   })
  // },
  // deleteDepartment: (req, res, next) => {
  //   const body = req.body;
  //   connection.query(sqlMap.deleteDepartment, [body.id], (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     res.json({
  //       code: 200,
  //       data: result
  //     })
  //   })
  // }
};