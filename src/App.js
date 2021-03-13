import { createStore, createHook } from 'react-sweet-state';

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

const useCounter = createHook(Store);

function App() {
  const [{ count }, { increment }] = useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
