import * as React from 'react';

import { TodosApi, TodosContainer, useTodos, useSelectedTodo } from './todos';
import todos from './test/todos.json';

const todosApi = new TodosApi(todos);

function App() {
  return (
    <TodosContainer api={todosApi}>
      <h1>react-sweet-state</h1>
      <SelectedTodo />
      <Todos />
      <GetTodosButton />
    </TodosContainer>
  );
}

function Todos() {
  const [{ status, data, error }, { selectTodoById }] = useTodos();
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
            {data.map(({ id, title }) => (
              <li key={id}>
                <button onClick={() => selectTodoById(id)}>Select</button>{' '}
                {title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function SelectedTodo() {
  const [{ id, title }] = useSelectedTodo();
  return (
    <div>
      <h2>Selected todo</h2>
      <p>
        Title: {title}
        <br />
        <small>id: {id}</small>
      </p>
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
