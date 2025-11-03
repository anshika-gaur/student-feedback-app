import React from 'react';

function Card({ name, course, feedback }) {
  return (
    <div>
      <h3>{name}</h3>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Feedback:</strong> {feedback}</p>
    </div>
  );
}

export default Card;
