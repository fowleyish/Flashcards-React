import React from 'react';
import axios from 'axios';
import '../App.css';
import Flashcard from './Flashcard';

const App = () => {
  return (
    <div id="flashcardApp">
      <div className="stackScroller">
        
      </div>
      <div className="activeDeckSection">
        <h1 id="flashcardsTitle">Flashcards App</h1>
      </div>
    </div>
  );
}

export default App;
