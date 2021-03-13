import { sleep } from '../utils';

/**
 * Time in ms to delay the api methods (for testing purposes)
 */
const DELAY = 1000;

export class TodosApi {
  constructor(data) {
    this.todos = data;
  }

  async getTodos() {
    await sleep(DELAY);

    if (Math.random() < 0.3) {
      return Promise.reject(`Ooops, no luck this time, try again...`);
    }

    return this.todos;
  }
}
