import { TodosApi, TodosContainer, useTodos } from './todos';

const todos = ['Read a book', 'Clean up the room', 'Go to the gym', 'Learn JS'];
const todosApi = new TodosApi(todos);

function App() {
  return (
    <TodosContainer api={todosApi}>
      <h1>react-sweet-state</h1>
      <GetTodosButton />
      <Todos />
    </TodosContainer>
  );
}

function Todos() {
  const [{ status, data, error }] = useTodos();

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
    </div>
  );
}

function GetTodosButton() {
  const [{ status }, { fetchTodos }] = useTodos();

  return (
    <button onClick={fetchTodos} disabled={status === 'pending'}>
      {status === 'pending' ? 'Loading' : 'Fetch todos'}
    </button>
  );
}

export default App;
