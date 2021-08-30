import React, { useState } from 'react';
import './App.css';
import useTabelaOuForm from './hooks/useTabelaOuForm';
import Button from '@material-ui/core/Button';
import StudentList from './pages/StudentList';
import StudentRegister from './pages/StudentRegister';

function App() {

  const {nome, setMarcos, setPaulo} = useTabelaOuForm();

  function validaPagina(){
    if(nome === <StudentList/>){
      setPaulo();
    }else if(nome === <StudentRegister/>){
      setMarcos();
    }
  }

  return (
    <>
    <div>{nome}</div>
    <Button variant="contained" color="primary" onClick={() => validaPagina()}>Mudar Nome</Button>

    </>
  );
}

export default App;
