import React from 'react';
import './App.css';
import Components from './MyBooksStore/Components';
import Country from './Country';
import SomeFunk from './Learn Type Script/SomeFunk';
import AllComponents from './Context/AllComponents';
import Events from './DatePicker/Events';


const App: React.FC = () => {
  return (
    <>
      <Events />
      <AllComponents />
      <Country />
      <Components />
      <SomeFunk />
    </>
  );

};
export default App;
