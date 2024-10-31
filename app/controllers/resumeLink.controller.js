
const db = require("../models");
const ResumeLink = db.resumeLink;
const genericController = require('./genericController.js');
const ResumeLinkController = genericController(ResumeLink, [], ['resumeId', 'linkId']);
module.exports = ResumeLinkController;