import React, { useState } from 'react';
import {Input} from './Input';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

interface AddInputFormProps {
    onChange?: (Input: string) => any;
}

export const AddInputForm: React.FC<AddInputFormProps> = ({onChange}) => {
    const [text, setText] = useState('BTC');
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onChange && text && onChange(text.toUpperCase().trim());
        setText('BTC');
    }
    return (
        <Box
                       component="form"
                       sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                       noValidate
                       autoComplete="off"
        >
                    <TextField
                        label="Cryptocurrency code"
                        value={text}
                        onChange ={(e) => setText(e.target.value)|| handleSubmit}></TextField>
                    <button>Add</button>
                <p>
                    Use of the service is subject to terms and conditions.
                </p>
        </Box>
    )
}
export default AddInputForm;
///// this one i have