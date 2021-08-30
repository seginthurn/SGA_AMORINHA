import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const NewStudentForm = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.root} label="Nome Completo"/>
            <TextField className={classes.root} label="Data de Nascimento"/>
            <TextField className={classes.root} label="Nome do Responsável pela criança"/>
            {/* <TextField className={classes.root} label="Telefone de contato do responsável"/>
            <TextField className={classes.root} label="Em caso de emergência, avisar:"/>
            <TextField className={classes.root} label="Telefone para emergências"/>
            <TextField className={classes.root} label="Possui restrição alimentar?"/>
            <TextField className={classes.root} label="Descrição de restrição alimentares"/>
            <TextField className={classes.root} label="Autoriza o uso de fotos e vídeos da criança para uso escolar?"/>
            <TextField className={classes.root} label="Autorizados para buscar aluno"/>
            <TextField className={classes.root} label="Turma"/>
            <TextField className={classes.root} label="Observações Adicionais"/> */}
        </form>
    );
}

export default NewStudentForm;