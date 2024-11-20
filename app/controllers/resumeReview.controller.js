const db = require("../models");
const ResumeReview = db.resumeReview;
const genericController = require('./genericController.js');
const ResumeReviewController = genericController(ResumeReview, [], ['studentId']);

// New method to get resume review by ID
ResumeReviewController.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await ResumeReview.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find ResumeReview with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving ResumeReview with id=" + id
        });
    }
};

module.exports = ResumeReviewController;