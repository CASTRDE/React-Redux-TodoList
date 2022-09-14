import { useSelector } from "react-redux/es/exports";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const todoList = useSelector((state) => state.todoList);

    console.log(todoList);
    return <TodoGroup todoList={todoList}/>;
};

export default TodoList;