import React from 'react';
import { useForm } from 'react-hook-form';
import "../cadastro/cadastro.css"
import Copyright from "../../components/Copyright"; 

import { TextField } from '@material-ui/core';
import Box from "@material-ui/core/Box";

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors },  setValue, setFocus } = useForm();
  
  console.log(errors);

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }
  
  return (
      <>
      <div className='cadastro'>
          <h1>Formulário de cadastro</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField id="outlined-basic" label="Nome" variant="outlined"  {...register("Nome", {required: true, maxLength: 80})}/><br/><br/>
      {errors.Nome && <p>*Campo obrigatório.</p>}
      <TextField id="outlined-basic" label="Email" variant="outlined"  {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/><br/><br/>
      {errors.Email && <p>*Campo obrigatório.</p>}
      <TextField id="outlined-basic" label="Telefone" variant="outlined" {...register("Telefone", {required: true, minLength: 6, maxLength: 12})}/><br/><br/>
      {errors.Telefone && <p>*Campo obrigatório.</p>}
      <TextField id="outlined-basic" label="CEP" variant="outlined"  {...register("cep", {required: true, maxLength: 80})} onBlur={checkCEP}/><br/><br/>
      {errors.cep && <p>*Campo obrigatório.</p>}
      <TextField id="outlined-basic" label="Rua" variant="outlined"  {...register("address")}/><br/><br/>
  
      <TextField id="outlined-basic" label="Número" variant="outlined"  {...register("addressNumber")}/><br/><br/>
     
      <TextField id="outlined-basic" label="Bairro" variant="outlined"  {...register("neighborhood")}/><br/><br/>
    
      <TextField id="outlined-basic" label="Cidade" variant="outlined"  {...register("city")}/><br/><br/>
      
      <TextField id="outlined-basic" label="Estado" variant="outlined"  {...register("uf")}/><br/><br/>
   
      <input type="submit" className='btn' />
    </form>
    <Box mt={8}>
        <Copyright />
      </Box>
    </div>
    </>
  );
}