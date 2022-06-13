const { validateApplication } = require("./api");

const sqlMap = {
  getDepartment: "select * from reviewers where departmentId = ?",
  addDepartment: "insert into departments(name, campus) values (?, ?)",
  updateDepartment: "update departments set name = ?, campus = ? where id = ?",
  deleteDepartment: "delete from departments where id = ?",
  getReviewer: "select * from applications where reviewerId = ?",
  addReviewer:
    "insert into reviewers(departmentId,status,name,tel,IdNumber,vehicleNumber,validationSecret) values (?,?,?,?,?,?,?)",
  updateReviewer:
    "update reviewers set departmentId = ?,status = ?,name = ?,tel = ?,IdNumber = ?,vehicleNumber = ?,validationSecret = ? where id = ?",
  deleteReviewer: "delete from reviewers where id = ?",
  getApplication: "select * from applications where id = ?",
  addApplication:
    "insert into applications(reviewerId,status,visitorName,visitorTel,visitorIdNumber,startTime,endTime,vehicleNumber,validationSecret) values (?,?,?,?,?,?,?,?,?)",
  updateApplication:
    "update applications set reviewerId = ?,status = ?,visitorName = ?,visitorTel = ?,visitorIdNumber = ?,startTime = ?,endTime = ?,vehicleNumber = ?,validationSecret = ? where id = ?",
  deleteApplication: "delete from applications where id = ?",
  validateReviewer: "select * from reviewers where id = ?",
  validateApplication: "select * from applications where id = ?",
  allApplications: "select * from applications",
  allDepartments: "select * from departments",
  allReviewers: "select * from reviewers",
};
module.exports = sqlMap;
