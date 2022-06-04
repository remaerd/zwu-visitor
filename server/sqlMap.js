const sqlMap = {
  getDepartment: 'select * from reviewers where departmentId = ?',
  addDepartment: 'insert into departments (name, campus) values (?, ?)',
}
module.exports = sqlMap;