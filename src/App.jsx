
import React from 'react';
// import Counter from './components/Counter';
import ReduxCounter from './components/reduxToolkit/ReduxCounter';
import TestingReduxThunk from './components/redux thunk/TestingReduxThunk';
function App() {
  return (
    <div className="App">
      {/* <Counter /> Render the Counter component */}
      {/* <ReduxCounter/> */}
      <TestingReduxThunk/>
    </div>
  );
}
export default App;
