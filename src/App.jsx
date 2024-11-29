
import React from 'react';
// import Counter from './components/Counter';
import ReduxCounter from './components/reduxToolkit/ReduxCounter';
import TestingReduxThunk from './components/redux thunk/TestingReduxThunk';
import Show from './components/usefetch/Show';
function App() {
  return (
    <div className="App">
      {/* <Counter /> Render the Counter component */}
      {/* <ReduxCounter/> */}
      {/* <TestingReduxThunk/> */}
      <Show/>
    </div>
  );
}
export default App;
