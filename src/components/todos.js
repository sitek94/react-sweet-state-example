import * as React from 'react';
import styled from 'styled-components';

import { useTodos } from '../todos';

import FetchTodosBtn from './fetch-todos-btn';
import SelectedTodo from './selected-todo';
import StatusBox from './status-box';
import TodoList from './todo-list';

export default function Todos() {
  const [{ status, data }, { selectTodoById }] = useTodos();
  return (
    <Container>
      <Col w={300}>
        <StatusBox status={status} />
        <FetchTodosBtn />
        {status === 'success' && (
          <TodoList todos={data} onSelectById={selectTodoById} />
        )}
      </Col>
      <Col>
        <SelectedTodo />
      </Col>
    </Container>
  );
}

const Col = styled.div`
  min-width: 300px;
`;

const Container = styled.div`
  display: flex;
  column-gap: 25px;
`;
