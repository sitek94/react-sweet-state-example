import { createStore, createContainer, createHook } from 'react-sweet-state';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const actions = {
  fetchTodos: () => async ({ setState, getState }, { api }) => {
    if (getState().status === 'pending') return;

    setState({
      status: 'pending',
    });

    try {
      const todos = await api.getTodos();

      setState({
        status: 'success',
        data: todos,
      });
    } catch (e) {
      setState({
        status: 'error',
        error: e,
      });
    }
  },
};

const TodosStore = createStore({
  initialState,
  actions,
  name: 'todos',
});

export const TodosContainer = createContainer(TodosStore);
export const useTodos = createHook(TodosStore);
