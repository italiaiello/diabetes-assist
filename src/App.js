import React, { useState } from 'react';
import DailyInfo from './components/DailyInfo/DailyInfo';
import Navigation from './components/Navigation/Navigation';
import OtherPages from './components/OtherPages/OtherPages';

import './App.css';

import ReactCalendar from './components/Calendar/calendar';

const App = () => {

  const [route, setRoute] = useState('home')

  const onRouteChange = (route) => {
    setRoute(route);
  }

  return (
    <div className="App">
      {
        route === 'home' ?
          <div>
            <div className="homePage">
            <ReactCalendar />
            <DailyInfo />
            </div>
            <Navigation onRouteChange={onRouteChange} />
          </div>
        :
        <OtherPages route={route} onRouteChange={onRouteChange} />
      }
    </div>
  );
}

export default App;
