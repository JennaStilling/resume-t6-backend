const db = require("../models");
const User = db.user;
const genericController = require('./genericController.js');
const userController = genericController(User);

userController.getByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ where: { email } });  // Use Sequelize's findOne
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = userController;