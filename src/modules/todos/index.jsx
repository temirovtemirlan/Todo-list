import { useDispatch, useSelector } from "react-redux";
import { todosSelector, } from "../../store/selectors/todos";
import Todo from "./todo";
import AddTodo from "./addTodo";

import './main.scss';
import { setTodosAction } from "../../store/actions/todos";

function Todos() {

	const todos = useSelector(todosSelector); // достаем из todos редюсор - данные todos
	const activeTodos = todos?.filter(todo => !todo.completed).length;
	const completedTodos = todos?.filter(todo => todo.completed).length;
	const dispatch = useDispatch();


	const handleDeleteTodos = () => {
		if (!todos) return;
		dispatch(setTodosAction(null));
	}

	console.log(todos)

	return (
		<>
			<div className="todos__container">
				<div>
					<h2>Добро пожаловть,Темирлан</h2>
					<div className="todos__time-btn">
						<p>Вы выполнили задач {completedTodos || 0} из {activeTodos || 0}</p>
						<button className="todos__actions__btn" onClick={handleDeleteTodos}>Удалить все задачи!</button>
					</div>
				</div>

				<div className="todos__block">
				{
  !todos?.length ? (
    <p className="empty__text">В вашем списке ничего нет</p>
  ) : (
    todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)
  )
}

				</div>
				<AddTodo />
			</div>
		</>
	)
}

export default Todos;
