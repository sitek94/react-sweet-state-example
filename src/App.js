import { createStore, createSubscriber } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    count: 0,
  },
  actions: {
    increment: () => ({ setState, getState }) => {
      setState({ count: getState().count + 1 });
    },
  },
  name: 'main',
});

const CounterSubscriber = createSubscriber(Store);

function App() {
  return (
    <CounterSubscriber>
      {({ count }, { increment }) => (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={increment}>increment</button>
        </div>
      )}
    </CounterSubscriber>
  );
}

export default App;
