import React, { useState } from 'react';
import StudentList from '../pages/StudentList';
import StudentRegister from '../pages/StudentRegister';

export default function useTabelaOuForm (){
    const [nome, setNome] = useState(<StudentList/>);

    return({
        nome: nome,
        setMarcos: () => setNome(<StudentList/>) ,
        setPaulo: () => setNome(<StudentRegister/>),
    })
}