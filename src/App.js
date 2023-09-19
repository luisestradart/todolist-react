import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButtom } from './TodoButtom';
import { TodoItem } from './TodoItem';



import './App.css';
import react from 'react';


const defaultTodos = [
  { text: "cortar la cebosha", completed: false },
  { text: "no cortar la cebosha", completed: false },
  { text: "yo nocortar la cebosha", completed: false },
  { text: " esta vez cortar la cebosha", completed: false },

]

function App() {
  return (
    <react.Fragment>

    <TodoCounter completed={16} total={25} />
    <TodoSearch />

    <TodoList >
      {defaultTodos.map(todo => (
        <TodoItem key={todo.text} />
      ))}
    </TodoList>


    <TodoButtom />

    </react.Fragment>

  );
}



export default App;
