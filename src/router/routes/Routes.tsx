import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home'
import Counter from '../../pages/counter/Counter';
import Todo from '../../pages/todo/Todo';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/counter' element={<Counter />} />
    <Route path='/todo' element={<Todo />} />
  </Routes>
);

export default AppRoutes;