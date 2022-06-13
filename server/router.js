//const express
const express = require("express");
const router = express.Router();
const api = require("./api");

// department
router.post("/departments", (req, res, next) => {
  api.addDepartment(req, res, next);
});
router.put("/departments/:id", (req, res, next) => {
  api.updateDepartment(req, res, next);
});
router.delete("/departments/:id", (req, res, next) => {
  api.deleteDepartment(req, res, next);
});
router.get("/departments/:id", (req, res, next) => {
  api.getDepartment(req, res, next);
});

//reviewers
router.post("/reviewers", (req, res, next) => {
  api.addReviewer(req, res, next);
});
router.put("/reviewers/:id", (req, res, next) => {
  api.updateReviewer(req, res, next);
});
router.delete("/reviewers/:id", (req, res, next) => {
  api.deleteReviewer(req, res, next);
});
router.get("/reviewers/:id", (req, res, next) => {
  api.getReviewer(req, res, next);
});

//applications
router.post("/applications", (req, res, next) => {
  api.addApplication(req, res, next);
});
router.put("/applications/:id", (req, res, next) => {
  api.updateApplication(req, res, next);
});
router.delete("/applications/:id", (req, res, next) => {
  api.deleteApplication(req, res, next);
});
router.get("/applications/:id", (req, res, next) => {
  api.getApplication(req, res, next);
});

//Validate
router.get("/validateReviewer/:id", (req, res, next) => {
  api.validateReviewer(req, res, next);
});

router.get("/validateApplication/:id", (req, res, next) => {
  api.validateApplication(req, res, next);
});

//all
router.get("/allApplications", (req, res, next) => {
  api.getAllApplications(req, res, next);
});
router.get("/allDepartments", (req, res, next) => {
  api.getAllDepartments(req, res, next);
});
router.get("/allReviewers", (req, res, next) => {
  api.getAllReviewers(req, res, next);
});
module.exports = router;
