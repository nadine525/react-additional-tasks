import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { UserPage } from 'pages/UserPages';
import { UserDetailsPage } from 'pages/UserDetailsPage';
import { EditUser } from 'pages/EditUser';
import AddUserPage from 'pages/AddUserPage';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='users' element={<UserPage />} />
          <Route path='users/:id' element={<UserDetailsPage />} /> 
          <Route path='users/add' element={<AddUserPage />} />
          <Route path='users/:id/edit' element={<EditUser />} />
        </Route>

     </Routes>
  );
};
export default App;
