import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
    {
      id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
      text: "todo example",
      done: false,
    },
    {
      id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
      text: "first todo item",
      done: false,
    },
  ];
  
  const todoSlice = createSlice({
    name: "todo",
    initialState: initTodos,
    reducers: {
      addTodo: (state, action) => {
        const todoText = action.payload;
        const todo = {
          id: Date.now(),
          text: todoText,
          done: false,
        }
        state.push(todo);
      },
      deleteTodo: (state, action) => {
        const id = action.payload;
        return state.filter((todo) => todo.id !== id); ///returns all list without the matching id
      },
      toggleTodo: (state, action) => {
        const id = action.payload;
        // return state.map((todo) => 
        //     todo.id === id ? {...todo, done: !todo.done} : todo
        // );
        return state.map((todo) => {
            if(todo.id === id) {
                const updatedTodo = { ...todo, done: !todo.done };
                return updatedTodo;
            }
            return todo;
        });
      },
    },
  });
  
  export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
  export default todoSlice;