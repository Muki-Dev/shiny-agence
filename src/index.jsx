import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Freelance from './pages/Freelance';
import Results from './pages/Results';
import './index.css';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/freelance" element={<Freelance />}/>
        <Route path="/results" element={<Results />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
