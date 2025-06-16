CREATE DATABASE IF NOT EXISTS task_db;
USE task_db;

-- Table: certificate_categories
CREATE TABLE IF NOT EXISTS certificate_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Table: certificate_questions
CREATE TABLE IF NOT EXISTS certificate_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_text TEXT NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES certificate_categories(id)
);

-- Sample data (optional)
INSERT INTO certificate_categories (name) VALUES ('HTML'), ('CSS'), ('JavaScript');

INSERT INTO certificate_questions (question_text, category_id) VALUES
('What is semantic HTML?', 1),
('What is the difference between class and id in CSS?', 2),
('What is the difference between var, let, and const?', 3);
