"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodoStore(
    (state) => state
  );
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroupItem>
          <Button variant="warning" onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click"> Update </Button>
          <Button variant="success" onClick={() => addTodo(todo)}
                  id="wd-add-todo-click"> Add </Button>
          <FormControl value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        </ListGroupItem>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <Button variant="primary" onClick={() => setTodo(todo)}
                    id="wd-set-todo-click"> Edit </Button>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click"> Delete </Button>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr/>
    </div>
  );
}