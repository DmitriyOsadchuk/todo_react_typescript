import { Store } from '../setore';
import { Task } from '../todos-service/interfaces';

export const selectorGetTodos = (store: Store): Array<Task> => {
	return store.todosRedux.tasks;
};
export const selectorGetIsLoading = (store: Store): boolean => {
	return store.todosRedux.isLoading;
};
export const selectorGetIsFetchedErr = (store: Store): boolean => {
	return store.todosRedux.isFetchedErr;
};
export const selectorGetShouldTodos_1 = (store: Store): Array<Task> => {
	return store.todosRedux.tasks.filter(task => !task.completed);
};
export const selectorGetCompletedTodos_1 = (store: Store): Array<Task> => {
	return store.todosRedux.tasks.filter(task => task.completed);
};
