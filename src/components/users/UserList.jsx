import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../../store/slices/userSlice';
import UserCard from './UserCard';

const UserList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.users);
  const [query, setQuery] = useState('');
  



  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



  const handleDelete = (id) => {
    if(window.confirm('Are you sure to delete?')) {
      dispatch(deleteUser(id));
    }
  };




  const filtered = list.filter(u => {
    const q = query.toLowerCase();
    return u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.phone?.toLowerCase().includes(q) || u.company?.name?.toLowerCase().includes(q);
  });

  

  return (
    <div>
      <div style={{marginBottom:12, display:'flex', gap:8}}>
        <input placeholder="Search by name, email, phone or company" className="input" value={query} onChange={e=>setQuery(e.target.value)} />
      </div>

      {loading && <div>Loading users...</div>}
      {error && <div style={{color:'#b91c1c'}}>Error: {error}</div>}

      <div className="grid" style={{marginTop:12}}>
        {filtered.map(user => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
