import { useState } from 'react';
import { Input } from './component/Input';
import { Container } from './component/Container';

export const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });
  const [tasks, setTask] = useState('');

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyDown =(e)=>{
    if (e.key === "Enter") {
      addTask()
    }
  }

  const addTask = () => {
    if (tasks.trim()) { 
      setTodos([...todos, { text: tasks, completed: false }]);
      setTask(''); 
    }
  };

  const completedTask = (index) => {
  const updatedTodo =  todos.map((todo, i) =>(
      i === index ? { ...todo, completed: !todo.completed } : todo
  ))
    setTodos(updatedTodo)
  }

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="container">
        <h3>Todo App</h3>
        <Input 
        change={handleChange} 
        click={addTask} 
        value={tasks}
        press={handleKeyDown}
        />
     {todos.length === 0 ? (
      <div className="noTask">
        <img src="/todo.jpg" alt="No task image" />
        <p className='title'>No Task</p> 
        <p className="text">Add a task to continue</p>
      </div>
        ) : (
          <Container task={todos} deleteTask={deleteTask} completedTask={completedTask}  />
        )}
      
      </div>
    </>
  );
};
