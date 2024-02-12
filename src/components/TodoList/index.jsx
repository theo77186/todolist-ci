import { useState } from "react";
import InputForm from "./InputForm";
import { addTodoItem, deleteTodoItem, setDoneState } from "./utils/todoList";
import ListDisplay from "./ListDisplay";

const TodoList = () => {
    let [todoList, setTodoList] = useState([]);
    const addNote = (note) => {
        console.log(`added note ${note}`);
        setTodoList(addTodoItem(todoList, note));
    };
    const deleteNote = (index) => {
        setTodoList(deleteTodoItem(todoList, index))
    }
    const checkNote = (index, value) => {
        console.log(value);
        setTodoList(setDoneState(todoList, index, value));
    }
    // TODO: add header and footer
    return <>
        <InputForm addCallback={addNote} />
        <ListDisplay todoList={todoList} onDelete={deleteNote} onCheck={checkNote} />
    </>
};

export default TodoList;
