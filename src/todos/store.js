import { createStore, createContainer, createHook } from 'react-sweet-state';

// Initial state
const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

// Generic actions
const setStatus = status => ({ setState }) => {
  setState({ status });
};

const setData = data => ({ setState }) => {
  setState({
    status: 'success',
    data,
  });
};

const setError = error => ({ setState }) => {
  setState({
    status: 'error',
    error,
  });
};

// Actions
const actions = {
  fetchTodos: () => async ({ getState, dispatch }, { api }) => {
    if (getState().status === 'pending') return;

    dispatch(setStatus('pending'));

    try {
      const todos = await api.getTodos();

      dispatch(setData(todos));
    } catch (error) {
      dispatch(setError(error));
    }
  },
};

// Store
const TodosStore = createStore({
  initialState,
  actions,
  name: 'todos',
});

export const TodosContainer = createContainer(TodosStore);
export const useTodos = createHook(TodosStore);
