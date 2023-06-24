import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { todosSelector } from '../../../store/selectors/todos';
import { setTodosAction } from "../../../store/actions/todos";

import './addTodo.css'

const AddTodo = () => {

    const [ value, setValue ] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(todosSelector);

	const currentDate = () => {
		const currentDate = new Date();

		const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false,
		};

		const dateFormat = new Intl.DateTimeFormat("ru-RU", options);

		return dateFormat.format(currentDate)
	}

	const currentDateTime = currentDate();
	console.log(currentDateTime);

    const handleFormSubmit = (e) => {

		e.preventDefault();
		console.log(Date.now())
		if (!value) return ; // 
		if ( Array.isArray(todos) ) {
			dispatch(setTodosAction([
				...todos,
				{ id: Date.now(), title: value, completed: false, time: currentDateTime }		
			]));
		} 		
		else {
			dispatch(setTodosAction([
                { id: Date.now(), title: value, completed: false, time: currentDateTime  }           
            ]));
		}

		setValue(''); // Обнуление value
	};

	const handleChangeInput = (e) => {
		setValue(e.target.value); // Обновляем состояние value при изменении ввода
	};

	// const handleSendToRedux = () => {
	// 	if (!hello) {
	// 		dispatch(setHelloAction("hello world"));
	// 	}
	// 	else {
	// 		dispatch(setHelloAction());
	// 	}
	// }

    return (
        <>
		<form className="todos__form" onSubmit={handleFormSubmit}>
			<input className="todos__input-add" value={value} onChange={handleChangeInput} type="text" />
			<button className="todos__actions__btn" type="submit">Добавить</button>
		</form>
        </>
    )
}

export default AddTodo;