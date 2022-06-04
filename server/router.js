//const express
const express = require('express');
const router = express.Router();
const api = require('./api');

// department
router.get('/departments/:id', (req, res, next) => {
  api.getDepartment(req, res, next);
});
// router.post('/departments', (req, res, next) => {
//   api.addDepartment(req, res, next);
// });
// router.put('/departments/:id', (req, res, next) => {
//   api.updateDepartment(req, res, next);
// });
// router.delete('/departments/:id', (req, res, next) => {
//   api.deleteDepartment(req, res, next);
// });



module.exports = router;