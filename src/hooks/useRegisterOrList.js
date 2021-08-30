import React, { useState } from 'react';

export default useRegisterOrList = () => {
    const [visible, setVisible] = useState<'register' | 'list'>('list');

    return({
        registerVisible: visible === 'register',
        listVisible: visible === 'list',
        showRegister: () => setVisible('register'),
        showList: () => setVisible('list'),

    })

}