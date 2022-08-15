import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from './components/HooksCounter';
import DynamicHooksCounter from './components/DynamicHooksCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCounter id="1"/>
      <DynamicHooksCounter/>
    </div>
    </Provider>
  );
}

export default App;
