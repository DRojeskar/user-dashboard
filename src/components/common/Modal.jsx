import React from 'react';
import './modal.css';
const Modal = ({visible, onClose, children}) => {
  if(!visible) return null;


  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', display:'flex',
      alignItems:'center', justifyContent:'center', zIndex:9999
    }}>


      <div style={{background:'#fff', padding:20, borderRadius:12, minWidth:300}}>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
          <button onClick={onClose} style={{border:'none', background:'transparent', cursor:'pointer'}}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};


export default Modal;
