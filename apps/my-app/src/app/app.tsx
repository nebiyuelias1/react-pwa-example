import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


const About = () => {
  return <h1>About</h1>;
};

const Home = () => {
  return <h1>Home</h1>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offline" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
