import React, { useState } from 'react';
import "../produtos/produtos.css"
import { Images } from './images';

import { TextField } from '@material-ui/core';


const Input = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setInput({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
          <Images/><br/>
      <TextField id="outlined-basic" label="Nome do produto" variant="outlined"  onChange={setInput}/><br/><br/>
        <button type="submit" className='btn-add'>
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default Input;