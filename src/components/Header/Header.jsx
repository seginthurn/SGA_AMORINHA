import React, {useState} from 'react';
import ButtonRegister from '../Buttons/ButtonRegister/ButtonRegister';
import '../Header/Header.css'


export default function Header(){
    return(
        <div className="Header">
            <ButtonRegister/>
        </div>
    );
}