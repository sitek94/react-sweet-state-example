import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TodoList({ todos, onSelectById }) {
  return (
    <div>
      <h2>📋 Todos</h2>
      <List>
        {todos.map(({ id, title }) => (
          <Li key={id}>
            <button onClick={() => onSelectById(id)}>Select</button> {title}
          </Li>
        ))}
      </List>
    </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onSelectById: PropTypes.func.isRequired,
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  margin-bottom: 10px;
`;
