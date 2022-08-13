import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {
  const initialState = [
    {
      id: 1,
      count: 0
    },
    {
      id: 2,
      count: 0
    }
  ]

  const [counters, setCounters] = useState(initialState);

  const totalCount = () => {
    return counters.reduce((total, counter) => total + counter.count, 0);
  }

  const increment = (id) => {
    const updatedCounter = counters.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1
        }
      } else {
        return {...c};
      }
    })
    setCounters(updatedCounter);
  }

  const decrement = (id) => {
    const updatedCounter = counters.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1
        }
      } else {
        return {...c};
      }
    })
    setCounters(updatedCounter);
  }
  return (
    <div className="App">
      {
        counters.map(count => <Counter
          key={count.id}
          id={count.id}
          count={count.count}
          increment={increment}
          decrement={decrement}
        />)
      }
      <Stats count={totalCount()}/>
    </div>
  );
}

export default App;
