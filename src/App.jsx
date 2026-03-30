import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from("Todo").select();

      if (todos) {
        setTodos(todos);
      }
    }

    getTodos();
  }, []);

  async function addTodo(title) {
    const { data, error } = await supabase
      .from("Todo")
      .insert({ title, completed: false })
      .select()
      .single();

    if (error) {
      console.error("Failed to add todo:", error.message);
      return;
    }

    setTodos((currentTodos) => [...currentTodos, data]);
  }

  async function toggleTodo(id, completed) {
    const { error } = await supabase
      .from("Todo")
      .update({ completed })
      .eq("id", id);

    if (error) {
      console.error("Failed to update todo:", error.message);
      return;
    }

    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  async function deleteTodo(id) {
    const { error } = await supabase.from("Todo").delete().eq("id", id);

    if (error) {
      console.error("Failed to delete todo:", error.message);
      return;
    }

    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
