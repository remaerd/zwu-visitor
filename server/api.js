//const mysql
const mysql = require("mysql");
//const dbConfig
const dbConfig = require("./db");
//const sqlMap
const sqlMap = require("./sqlMap");
//const connection
const connection = mysql.createConnection(dbConfig);

//
module.exports = {
  //department
  addDepartment: (req, res, next) => {
    connection.query(
      sqlMap.addDepartment,
      [req.query.name, req.query.campus],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          code: 200,
          data: result,
        });
      }
    );
  },
  updateDepartment: (req, res, next) => {
    connection.query(
      sqlMap.updateDepartment,
      [req.query.name, req.query.campus, req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          code: 200,
          data: result,
        });
      }
    );
  },
  deleteDepartment: (req, res, next) => {
    connection.query(sqlMap.deleteDepartment, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result,
      });
    });
  },
  getDepartment: (req, res, next) => {
    connection.query(sqlMap.getDepartment, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result,
      });
    });
  },
  //reviewers
  addReviewer: (req, res, next) => {
    connection.query(
      sqlMap.addReviewer,
      [
        req.query.departmentId,
        req.query.status,
        req.query.name,
        req.query.tel,
        req.query.IdNumber,
        req.query.vehicleNumber,
        req.query.validationSecret,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          code: 200,
          data: result,
        });
      }
    );
  },
  updateReviewer: (req, res, next) => {
    connection.query(
      sqlMap.updateReviewer,
      [
        req.query.departmentId,
        req.query.status,
        req.query.name,
        req.query.tel,
        req.query.IdNumber,
        req.query.vehicleNumber,
        req.query.validationSecret,
        req.params.id,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          code: 200,
          data: result,
        });
      }
    );
  },
  deleteReviewer: (req, res, next) => {
    connection.query(sqlMap.deleteReviewer, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result,
      });
    });
  },
  getReviewer: (req, res, next) => {
    connection.query(sqlMap.getReviewer, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result,
      });
    });
  },
  //applications
  addApplication: (req, res, next) => {
    connection.query(
      sqlMap.addApplication,
      [
        req.query.reviewerId,
        req.query.status,
        req.query.visitorName,
        req.query.visitorTel,
        req.query.visitorNumber,
        req.query.startTime,
        req.query.endTime,
        req.query.vehicleNumber,
        req.query.validationSecret,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          code: 200,
          data: result,
        });
      }
    );
  },
  updateApplication: (req, res, next) => {
    connection.query(
      sqlMap.updateApplication,
      [
        req.query.reviewerId,
        req.query.status,
        req.query.visitorName,
        req.query.visitorTel,
        req.query.visitorNumber,
        req.query.startTime,
        req.query.endTime,
        req.query.vehicleNumber,
        req.query.validationSecret,
        req.params.id,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          code: 200,
          data: result,
        });
      }
    );
  },
  deleteApplication: (req, res, next) => {
    connection.query(sqlMap.deleteApplication, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result,
      });
    });
  },
  getApplication: (req, res, next) => {
    connection.query(sqlMap.getApplication, req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        code: 200,
        data: result,
      });
    });
  },
};
