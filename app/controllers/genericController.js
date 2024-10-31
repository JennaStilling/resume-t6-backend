const genericController = (model, associations = [], foreignKeys = []) => {
    return {
        create: async (req, res) => {
            try {
                // Assign foreign keys from route parameters to the request body
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        req.body[key] = req.params[key];
                    }
                });
                const record = await model.create(req.body);
                res.status(201).json(record);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        getAll: async (req, res) => {
            try {
                const query = { include: associations, where: {} };
                // Add foreign key filters if provided in the request parameters
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });
                const records = await model.findAll(query);
                res.status(200).json(records);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        getById: async (req, res) => {
            try {
                const query = { include: associations, where: { id: req.params.id } };
                // Add foreign key filters if provided in the request parameters
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });
                const record = await model.findOne(query);
                if (record) {
                    res.status(200).json(record);
                } else {
                    res.status(404).json({ error: 'Record not found' });
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        update: async (req, res) => {
            try {
                const query = { where: { id: req.params.id } };
                // Add foreign key filters if provided in the request parameters
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });
                const [updated] = await model.update(req.body, query);
                if (updated) {
                    const updatedRecord = await model.findOne({
                        where: { id: req.params.id },
                        include: associations,
                    });
                    res.status(200).json(updatedRecord);
                } else {
                    res.status(404).json({ error: 'Record not found' });
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        delete: async (req, res) => {
            try {
                const query = { where: { id: req.params.id } };
                // Add foreign key filters if provided in the request parameters
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });
                const deleted = await model.destroy(query);
                if (deleted) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ error: 'Record not found' });
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        deleteAll: async (req, res) => {
            try {
                const query = { where: {} };
                // Add foreign key filters if provided in the request parameters
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });
                const deletedCount = await model.destroy(query);
                res.status(200).json({ message: `${deletedCount} records deleted.` });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
    };
};

module.exports = genericController;

// Also need to change the specific controllers to accomodate for the foreign keys