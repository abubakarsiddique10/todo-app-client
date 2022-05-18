import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<RequireAuth>
          <TodoApp></TodoApp>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
