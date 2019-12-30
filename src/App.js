import React, { useState } from 'react';
import DailyInfo from './components/DailyInfo/DailyInfo';
import Navigation from './components/Navigation/Navigation';
import OtherPages from './components/OtherPages/OtherPages';
import StartScreen from './components/StartScreen/StartScreen';

import './App.css';

import ReactCalendar from './components/Calendar/calendar';

const App = () => {

  const [route, setRoute] = useState('start')
  const [fetchData, setFetchData] = useState(false)

  const onRouteChange = (route) => {
    route === 'meal' ? setFetchData(true) : setFetchData(false)
    setRoute(route);
  }

  return (
    <div className="App">
      {
        route === 'start' ?
        <StartScreen onRouteChange={onRouteChange} />
        :
        (
        route === 'home' ?
          <div>
            <div className="homePage">
            <ReactCalendar />
            <DailyInfo />
            </div>
            <Navigation onRouteChange={onRouteChange} />
          </div>
        :
        <OtherPages route={route} onRouteChange={onRouteChange} fetchData={fetchData} />
        )
      }
    </div>
  );
}

export default App;
