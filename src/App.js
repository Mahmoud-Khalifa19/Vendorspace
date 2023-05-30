import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Content from './components/Content';
import Newsletter from './components/Newsletter';
import Signup from './components/Signup';
import Events from './components/Events';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar /> 
    <Main />
    <Content />
    <Newsletter />
    <Signup />
    <Events />
    <Footer />
    </div>
  );
}

export default App;
