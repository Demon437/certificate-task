const db = require('../db');

exports.getAllCategories = (req, res) => {
    db.query('SELECT * FROM certificate_categories', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.addCategory = (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO certificate_categories (name) VALUES (?)', [name], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Category added successfully', id: result.insertId });
    });
};
