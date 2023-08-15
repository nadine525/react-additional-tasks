import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { deleteUser } from 'redux/userSlice';

export const UsersList = () => {
  const searchUser = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <ul>
      {searchUser.map(({ name, age, id }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <button type="button" onClick={() => dispatch(deleteUser(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
