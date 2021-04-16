import React, { FC } from 'react';
import CreateTask from '../../components/CreateTask';
import './Todos.scss';
import TodosList from './TodosList';
const className = 'todos';

const TODOS: FC = () => {
	return (
		<div className = {`${className}-box`}>
			<CreateTask />
			<hr style={{ width: '95%', borderColor: '#fff' }} />
			<TodosList />
		</div>
	);
};

export default TODOS;
