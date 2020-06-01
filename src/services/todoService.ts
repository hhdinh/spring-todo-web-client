import axios from 'axios';
import Todo from "./Todo";
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;

const base_url = 'https://project-todo-hdinh.herokuapp.com/api/todos';

export const getTodos = async () => {
    try {
        let response = await axios.get(base_url);
        // let {data} = await axios.get(base_url);
        console.log("Response", response)
        console.log("Data", response.data)
        // console.log("Data", data)
        return response.data;
    } catch (error) {
        return error;
    }
};

export const postTodo = async (todo: Todo) => {
    try {
        let response = await axios.post(base_url, todo);
        console.log("Response", response)
        console.log("Data", response.data)
        return response.data;
    } catch (error) {
        return error;
    }
}

export const updateTodoById = async (todo: Todo) => {
    try {
        let response = await axios.put(`${base_url}/${todo.id}`, todo);
        console.log("Response", response)
        console.log("Data", response.data)
        return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteTodoById = async (id: number) => {
    try {
        let response = await axios.delete(`${base_url}/${id}`);
        console.log("Response", response)
    } catch (error) {
        return error;
    }
}