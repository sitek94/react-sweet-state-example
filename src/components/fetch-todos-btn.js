import { useTodos } from '../todos';

export default function FetchTodosBtn() {
  const [{ status }, { fetchTodos }] = useTodos();

  return (
    <button onClick={fetchTodos} disabled={status === 'pending'}>
      {status === 'pending' ? 'Loading' : 'Fetch todos'}
    </button>
  );
}
