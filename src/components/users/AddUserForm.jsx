import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userSlice';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');

  const validate = () => {
    if(!name.trim()) 
        return 'Name is required';

    if(!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) 
        return 'Valid email required';

    if(!phone.trim()) 
        return 'Phone is required';
    return '';
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if(v) {
         setErr(v); 
        return; 
    }
    dispatch(addUser({name,email,phone,company: { name: 'Self Added' }}));
    setName(''); setEmail(''); setPhone(''); setErr('');
  };

  return (
    <div style={{marginBottom:16}}>
      <form onSubmit={onSubmit} style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8}}>
        <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
        <div>
          <button className="btn" type="submit">Add User</button>
        </div>
      </form>
      {err && <div style={{color:'#b91c1c', marginTop:8}}>{err}</div>}
    </div>
  );
};



export default AddUserForm;
