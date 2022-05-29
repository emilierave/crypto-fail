import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.scss';

function InputForm() {
    const [value, setValue] = React.useState('BTC');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
        >
            <div>
                <p>
                <TextField
                    id="crypto-search"
                    label="CRYPTOCURRENCY CODE"
                    maxRows={1}
                    value={value}
                    onChange={handleChange}/>
                    <button>Add</button>
                    Use of the service is subject to terms and conditions.
                </p>
            </div>
        </Box>

    );
}
//export default InputForm;