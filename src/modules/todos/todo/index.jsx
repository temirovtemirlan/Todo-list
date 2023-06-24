import { useState, useRef } from "react"; // импортим useState 
import { useDispatch, useSelector } from "react-redux"; // 
import { todosSelector } from "../../../store/selectors/todos";
import { setTodosAction } from "../../../store/actions/todos";
import './index.scss';

function Todo({ id, completed, title, time }) {
	const [isDisabled, setIsDisabled] = useState(true);
	const [value, setValue] = useState(title);
	const todos = useSelector(todosSelector);
	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const handleChangeValue = (e) => {
		setValue(e.target.value);
	}

	const handleSubmitTodo = (e) => {
		e.preventDefault();

		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return {...todo, title: value};
			}
			return todo;
		});

		dispatch(setTodosAction([...newTodos]));

	}

	const handleChangeCompleted = () => {

		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return {...todo, completed: !completed};
			}
			return todo;
		});

		dispatch(setTodosAction([...newTodos]));	
		setIsDisabled(true);
	}

	const handleRemoveTodo = () => {
		if (!id) return ;

		const newTodos = todos.filter(todo => todo.id !== id);


		dispatch(setTodosAction([...newTodos]));
	};

	return (
		<div className="todos__item">
			<label className="todos__label">
				<input onChange={handleChangeCompleted} type="checkbox" checked={completed} />
				<form className="todos__form-input" onSubmit={handleSubmitTodo} onClick={() => setIsDisabled(!isDisabled)}>
					<input ref={inputRef} type="text" value={value} onChange={handleChangeValue} />
					<span className="todos__current-time">{time}</span>
				</form>
					<button className="delete__btn" onClick={handleRemoveTodo}>
					<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.734375 6.04808H3.45891M6.17637 6.04808V2.85628C6.17637 2.0986 6.7906 1.48438 7.54828 1.48438H12.0192C12.7769 1.48438 13.3911 2.0986 13.3911 2.85628V6.04808M6.17637 6.04808H3.45891M6.17637 6.04808H13.3911M13.3911 6.04808H16.1539M18.6589 6.04808H16.1539M16.1539 6.04808V20.8525C16.1539 21.6102 15.5396 22.2244 14.782 22.2244H4.83082C4.07314 22.2244 3.45891 21.6102 3.45891 20.8525V6.04808" stroke="#252525" strokeWidth="2"/>
</svg>

					</button>
			</label>
		</div>
	);
}

export default Todo;
