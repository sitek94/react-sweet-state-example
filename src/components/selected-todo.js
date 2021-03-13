import { useSelectedTodo } from '../todos';

export default function SelectedTodo() {
  const [todo] = useSelectedTodo();
  return (
    <div>
      <h2>➡️ Selected todo preview</h2>
      {todo ? (
        <>
          <p>
            Title: {todo.title}
            <br />
            id: {todo.id}
          </p>
          <img alt="Something random" src={getRandomPhotoUrl()} />
        </>
      ) : (
        <p>You have to select a todo first</p>
      )}
    </div>
  );
}

function getRandomPhotoUrl() {
  return `https://picsum.photos/200/300?random=${new Date().getTime()}`;
}
