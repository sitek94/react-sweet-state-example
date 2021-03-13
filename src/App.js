import * as React from 'react';

import { TodosApi, TodosContainer } from './todos';

import Todos from './components/todos';
import initialTodos from './test/todos.json';

const todosApi = new TodosApi(initialTodos);

function App() {
  return (
    <TodosContainer api={todosApi}>
      <h1>🍭 react-sweet-state</h1>
      <hr />
      <Todos />
    </TodosContainer>
  );
}

export default App;
