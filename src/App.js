import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Content from './components/Content';
import Newsletter from './components/Newsletter';
import Signup from './components/Signup';
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
    <Navbar /> 
    <Main />
    <Content />
    <Newsletter />
    <Signup />
    <Listings />
    </div>
  );
}

export default App;
