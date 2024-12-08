const db = require("../models");
const Resume = db.resume;
const genericController = require('./genericController.js');
const ResumeController = genericController(Resume, [], ['resumeReviewId', 'studentId']);

ResumeController.uploadImage = async (req, res) => {
  const { image } = req.body;
  const { id } = req.params;

  try {
    const resume = await Resume.findByPk(id);
    if (!resume) {
      return res.status(404).send('Resume not found');
    }

    resume.image = image;
    await resume.save();

    res.send('Image saved successfully');
  } catch (err) {
    console.error('Failed to save image', err);
    res.status(500).send('Failed to save image with controller');
  }
};

module.exports = ResumeController;