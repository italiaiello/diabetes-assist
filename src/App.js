import React from 'react';
import DailyInfo from './components/DailyInfo/DailyInfo';
import Navigation from './components/Navigation/Navigation';

import './App.css';

import ReactCalendar from './components/Calendar/calendar';

function App() {
  return (
    <div className="App">
      <div className="homePage">
        <ReactCalendar />
        <DailyInfo />
      </div>
      <Navigation />
    </div>
  );
}

export default App;
