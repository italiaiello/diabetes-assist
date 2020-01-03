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
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    diagnosis: ''
  })

  const onRouteChange = (route) => {
    route === 'meal' ? setFetchData(true) : setFetchData(false)
    setRoute(route);
  }

  const loadUser = (data) => {
    console.log(data)
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      age: data.age,
      weight: data.weight,
      height: data.height,
      diagnosis: data.diagnosis
    })
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
            <DailyInfo onRouteChange={onRouteChange} userName={user.name}/>
            </div>
            <Navigation onRouteChange={onRouteChange} />
          </div>
        :
        <OtherPages route={route} onRouteChange={onRouteChange} fetchData={fetchData} loadUser={loadUser} />
        )
      }
    </div>
  );
}

export default App;
