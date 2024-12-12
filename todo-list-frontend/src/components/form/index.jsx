import React from "react";
import { Formcontainer, Input, Button } from "./styles";

function Form({input,Setinput}){
    return (
        <Formcontainer>
            <Input
            value={input}
            onChange={(e)=>Setinput(e.target.value)}
            type='text'
            role='input'
            />
            <Button type='submit'>Add</Button>
        </Formcontainer>
    )
}

export default Form;