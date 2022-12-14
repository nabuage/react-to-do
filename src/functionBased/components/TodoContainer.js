import React, { useEffect, useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes, Switch } from "react-router-dom";

const TodoContainer = () => {
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState(getInitialTodos());
    

    const handleChange = (id) => {
        setTodos(prevState => 
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo;
            })
        );
    }

    const delTodo = (id) => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ]);
    }

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    const setUpdate = (updatedTitle, id) => {
        // setTodos(
        //     todos.map(todo => {
        //         if (todo.id === id) {
        //             todo.title = updatedTitle
        //         }
        //         return todo;
        //     })
        // );

        setTodos(prevState => 
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: updatedTitle
                    }
                }

                return todo;
            })
        );
    }

    // useEffect(() => {
    //     console.log("useEffect");

    //     const temp = localStorage.getItem("todos");
    //     const loadedTodos = JSON.parse(temp);

    //     if (loadedTodos) {
    //         setTodos(loadedTodos);
    //     }
    // }, []);

    function getInitialTodos() {
        const temp = localStorage.getItem("todos");
        const savedTodos = JSON.parse(temp);

        return savedTodos || [];
    }

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);

    return (
        <div className="container">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo} 
                setUpdate={setUpdate}
                />
        </div>
    );
}

export default TodoContainer;