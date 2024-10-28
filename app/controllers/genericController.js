const genericController = (model) => {
    console.log(model);
    
    return {
        getAll: async (req, res) => {
            try {
                const records = await model.findAll();
                res.status(200).json(records);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        getById: async (req, res) => {
            try {
                const record = await model.findByPk(req.params.id);
                if (!record) {
                    return res.status(404).json({ error: 'Record not found' });
                }
                res.status(200).json(record);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        create: async (req, res) => {
            try {
                const newRecord = await model.create(req.body);
                res.status(201).json(newRecord);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
        update: async (req, res) => {
            try {
                const [updated] = await model.update(req.body, {
                    where: { id: req.params.id }
                });
                if (!updated) {
                    return res.status(404).json({ error: 'Record not found' });
                }
                const updatedRecord = await model.findByPk(req.params.id);
                res.status(200).json(updatedRecord);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },
        delete: async (req, res) => {
            try {
                const deleted = await model.destroy({
                    where: { id: req.params.id }
                });
                if (!deleted) {
                    return res.status(404).json({ error: 'Record not found' });
                }
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        deleteAll: async (req, res) => {
            try {
                // Sequelize's `destroy` method with no `where` clause will delete all records
                const deleted = await model.destroy({ where: {} });
                res.status(204).json({ message: 'All records deleted successfully' });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
    };
};

module.exports = genericController;