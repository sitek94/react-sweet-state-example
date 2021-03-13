import { TodosApi } from './api';
import { TodosContainer, useTodos } from './store';

const todos = ['Read a book', 'Clean up the room', 'Go to the gym', 'Learn JS'];

const api = new TodosApi(todos);

function TodosProvider({ children }) {
  return <TodosContainer api={api}>{children}</TodosContainer>;
}

export { TodosProvider, useTodos };
