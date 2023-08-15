import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from 'redux/users/userOperation';

export const UserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(state => state.users);
  // console.log(users);
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="add">Add user</Link>
    </>
  );
};
