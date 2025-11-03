import React from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FeedbackForm />
      <Card name="samira" course="React Basics" feedback="Great course!" />
    </div>
  );
}

export default App;
