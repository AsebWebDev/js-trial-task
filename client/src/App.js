import React from 'react';
import ShowProfiles from './components/ShowProfiles'
import Header from './components/Header'
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <ShowProfiles/>
    </div>
  );
}

export default App;
