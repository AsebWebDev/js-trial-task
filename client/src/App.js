import React, { useState } from 'react';
import ShowProfiles from './components/ShowProfiles'
import Header from './components/Header'
import './styles/App.scss';

function App() {
  let [switch1, setSwitch1] = useState(false)
  const toggleSwitch1 = () => setSwitch1(!switch1)

  return (
    <div id="App">
      <Header />
        <div className='custom-control custom-switch'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitches'
            checked={switch1}
            onChange={toggleSwitch1}
            readOnly
          />
          <label className='custom-control-label' htmlFor='customSwitches'>Sort by activity</label>
        </div>
      <ShowProfiles sorting={switch1 ? 'ACTIVITY' : 'DISTANCE'}/>
    </div>
  );
}

export default App;
