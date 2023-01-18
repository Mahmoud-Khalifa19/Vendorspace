import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Content from './components/Content';
import Newsletter from './components/Newsletter';
function App() {
  return (
    <div className="App">
    <Navbar /> 
    <Main />
    <Content />
    <Newsletter />
    </div>
  );
}

export default App;
