import React from 'react';
import DailyInfo from './components/DailyInfo/DailyInfo';

import './App.css';

import ReactCalendar from './components/Calendar/calendar';

function App() {
  return (
    <div className="App">
      <ReactCalendar />
      <DailyInfo />
    </div>
  );
}

export default App;
