const sqlMap = {
  getDepartment: 'select * from reviewers where departmentId = ?',
  addDepartment: 'insert into departments(name, campus) values (?, ?)',
  updateDepartment: 'update departments set name = ?, campus = ? where id = ?',
}
module.exports = sqlMap;