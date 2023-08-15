import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/userOperation';
import { useNavigate } from 'react-router-dom';

export default function AddUserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      avatar: event.target.elements.avatar.value,
    };
    console.log(newUser);

    const getUserData = async () => {
      const data = await dispatch(addUser(newUser)).unwrap();
      console.log(data);
      return data;
    };
    const userId = await getUserData().then(value => {
      console.log(value.id);
      return value.id;
    });
    navigate(`/users/${userId}`, { replace: true });

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>

      <label>
        Phone
        <input type="text" name="phone" />
      </label>

      <label>
        Avatar
        <input type="url" name="avatar" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
