import React from 'react';
import './styles/main.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MainContent from './components/mainContent';

function App() {
  return (
    <div>
        <Header/>
        {/* <Main/> */} 
        <MainContent />
        <Footer/>
    </div>
  );
}

export default App;
