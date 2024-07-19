import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/feedbacks/');
            setFeedbacks(response.data);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return (
        <div className="feedback-list">
            <h2>Feedbacks</h2>
            <ul>
                {feedbacks.map((feedback) => (
                    <li key={feedback.id}>
                        <strong>{feedback.name}</strong>
                        <p>{feedback.message}</p>
                        <small>{new Date(feedback.created_at).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackList;
