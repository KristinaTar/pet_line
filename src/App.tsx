import React from 'react';
import './App.scss';

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const App: React.FC = () => {
  return (
    <div className="app__container">
      <Header />
      <MainContent />


    </div>
  );
};

export default App;

