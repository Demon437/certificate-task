import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisterQuestion = () => {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [question, setQuestion] = useState('');

    const fetchCategories = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/categories');
            setCategories(res.data);
        } catch (err) {
            console.error('Error fetching categories:', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryId || !question) {
            alert('Please fill all fields');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/questions', 
                { 
                question_text: question,
                category_id: categoryId
            });
            alert('Question submitted!');
            setQuestion('');
            setCategoryId('');
        } catch (err) {
            console.error(err);
            alert('Error submitting question');
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Register Question</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="w-full border px-4 py-2 rounded"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full border px-4 py-2 rounded"
                        placeholder="Enter your question"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegisterQuestion;
