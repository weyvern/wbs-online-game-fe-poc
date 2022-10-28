import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import Lobby from './components/Lobby';
import Create from './components/Create';
import Join from './components/Join';
import Game from './components/Game';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Lobby />} />
          <Route path='create' element={<Create />} />
          <Route path='join' element={<Join />} />
          <Route path='game/:id' element={<Game />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
