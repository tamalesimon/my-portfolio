import React, { lazy, Suspense } from 'react';
import './styles/main.css';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Spinner from './components/Spinner';

const MainContent = lazy(() => import ('./components/mainContent'));
const Header = lazy(() => import('./components/Header') );
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
        
          <Suspense fallback={<div className="container mx-auto mt-4">
            <Spinner/>
          </div>}>
              <>
              <Header/>
                  <MainContent />
              <Footer/>
              </> 
          </Suspense>     
        
    </div>
  );
}

export default App;
