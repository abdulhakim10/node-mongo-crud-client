import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUsers from './components/AddUsers/AddUsers';
import Update from './components/Update/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/user/add',
      element: <AddUsers></AddUsers>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
