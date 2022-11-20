import React, { useState } from 'react';
import Header from './components/Header';
import fullStack from './assets/fs.png';

const ReactMemo = () => {
 const[sayac, setSayac]=useState(0)
 const[resim,setResim]=useState()
  return (
    <div>
      <Header  resim={resim}/>
      <p>Count: {sayac}</p>
      <button onClick={()=>setSayac(sayac+1)}>Increase</button>
      <button onClick={()=>setResim(fullStack)} >FullStack</button>
    </div>
  );
};

export default ReactMemo;
