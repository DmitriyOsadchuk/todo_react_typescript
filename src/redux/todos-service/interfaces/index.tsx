export interface Task {
    title: string;
    id: number;
    completed?: boolean;
    userId?: number;
  }

//actions
export interface IGetTodos {
	type: string;
}
export interface IGetTodos_SUCCESS {
	type: string;
	payload: Array<Task>;
}
export interface IGetTodos_FAILED {
	type: string;
}
export interface ITodos {
	isLoading: boolean;
	tasks: Array<Task>;
	isFetchedErr: boolean;
}
