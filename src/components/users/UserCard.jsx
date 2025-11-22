import React from 'react';
import Card from '../common/Card';

const UserCard = ({user, onDelete}) => {
  return (
    <Card>
      <h3 style={{margin:'0 0 8px 0'}}>{user.name}</h3>
      <div style={{fontSize:13, marginBottom:8}}>{user.email}</div>
      <div style={{fontSize:13, marginBottom:8}}>{user.phone}</div>
      <div style={{fontSize:13, color:'#555'}}>{user.company?.name}</div>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        <button className="btn" onClick={()=>onDelete(user.id)} style={{background:'#ff4d4f'}}>Delete</button>
      </div>
    </Card>
  );
};

export default UserCard;
