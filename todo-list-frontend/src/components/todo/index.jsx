import React from 'react';
import { useState } from 'react';
import Form from '../form/index.jsx';
import {Container} from './styles.jsx'

function Todo() {
    const [input,Setinput] = useState('');
    return (
        <Container>
            <h2>
            To-do list
            </h2>
            <Form
            input={input}
            Setinput={Setinput}
            />
        </Container>
    )
}

export default Todo