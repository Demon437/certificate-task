const db = require('../db');

exports.getAllQuestions = (req, res) => {
    db.query(
        `SELECT q.id, q.question_text, c.name AS category 
     FROM certificate_questions q 
     JOIN certificate_categories c ON q.category_id = c.id`,
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        }
    );
};

exports.addQuestion = (req, res) => {
    const { question_text, category_id } = req.body;
    db.query(
        'INSERT INTO certificate_questions (question_text, category_id) VALUES (?, ?)',
        [question_text, category_id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Question added successfully', id: result.insertId });
        }
    );
};
