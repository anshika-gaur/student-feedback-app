import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Course:', course);
    console.log('Feedback:', feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
