
// const [users, setUsers] = useState([]);
// const [formData, setFormData] = useState({ name: '', email: '' });

// const fetchUsers = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/users');
//     setUsers(response.data);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// };

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setFormData({ ...formData, [name]: value });
// };

// const handleCreateUser = async () => {
//   try {
//     await axios.post('http://localhost:5000/api/users', formData);
//     setFormData({ name: '', email: '' });
//     fetchUsers();
//   } catch (error) {
//     console.error('Error creating user:', error);
//   }
// };

// const handleUpdateUser = async (id) => {
//   try {
//     await axios.put(`http://localhost:5000/api/users/${id}`, formData);
//     setFormData({ name: '', email: '' });
//     fetchUsers();
//   } catch (error) {
//     console.error('Error updating user:', error);
//   }
// };

// const handleDeleteUser = async (id) => {
//   try {
//     await axios.delete(`http://localhost:5000/api/users/${id}`);
//     fetchUsers();
//   } catch (error) {
//     console.error('Error deleting user:', error);
//   }
// };

// useEffect(() => {
//   fetchUsers();
// }, []);

// return (
//   <div>
//     <h1>User Management</h1>
//     <div>
//       <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
//       <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
//       <button onClick={handleCreateUser}>Create</button>
//     </div>
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           {user.name} | {user.email}
//           <button onClick={() => handleUpdateUser(user.id)}>Update</button>
//           <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );