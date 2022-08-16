import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from './components/HooksCounter';
import DynamicHooksCounter from './components/DynamicHooksCounter';
import Counter from './components/Counter';
import VariableCounter from './components/VariableCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <Counter/> */}
      <HooksCounter id="1"/>
      <DynamicHooksCounter/>
      <VariableCounter/>
      <VariableCounter dynamic/>
    </div>
    </Provider>
  );
}

export default App;
