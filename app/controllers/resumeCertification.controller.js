
const db = require("../models");
const ResumeCertification = db.resumeCertification;
const genericController = require('./genericController.js');
const ResumeCertificationController = genericController(ResumeCertification);
module.exports = ResumeCertificationController;