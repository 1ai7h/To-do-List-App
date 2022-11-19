import './App.css';
import Form from './components/form';
import Todo from './components/todo'
function App() {
  return (
    <div className="App">
      <header>
        <h1>Laith's Todo List</h1>
        </header>
        <Form />
        <Todo />
    </div>
  );
}

export default App;
    