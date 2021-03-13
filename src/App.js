import { TodosProvider, useTodos } from './todos';

function App() {
  return (
    <TodosProvider>
      <h1>react-sweet-state</h1>
      <Todos />
    </TodosProvider>
  );
}

function Todos() {
  const [{ status, data, error }, { load }] = useTodos();

  return (
    <div>
      {status === 'error' && (
        <>
          <h2>Something went wrong</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
      {status === 'pending' && (
        <>
          <h2>Loading...</h2>
          <p>Please wait, we're loading fetching the todos.</p>
        </>
      )}
      {status === 'idle' && (
        <>
          <h2>Chillin'</h2>
          <p>Waiting for some action...</p>
        </>
      )}
      {status === 'success' && (
        <>
          <h2>Todos</h2>
          <ul>
            {data.map((todo, i) => (
              <li key={i}>Todo {i + 1}</li>
            ))}
          </ul>
        </>
      )}
      <button onClick={load} disabled={status === 'pending'}>
        {status === 'pending' ? 'Loading' : 'Fetch todos'}
      </button>
    </div>
  );
}

export default App;
