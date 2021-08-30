import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import '../Header/Header.css'



export default function Header(props){
    
    return(
        <div className="Header">
            <Button variant="contained" color="primary">{props.btnName}</Button>
            
        </div>
    );
}