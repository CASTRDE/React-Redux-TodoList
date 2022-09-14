import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoItem = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    return (
        <div>
            <span>{todo.text}</span>
            <span onClick={onDelete}> &times;</span>
        </div>
    );
}

export default TodoItem;