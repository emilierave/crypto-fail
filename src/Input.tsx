import React from 'react';
import InputProps from './type';

interface CustomInputProps {
    label?: string;
}
export const Input: React.FC<CustomInputProps & InputProps> = ({ label, ...props }) => {
    return (
        <div className="container">
            {label && <label>{label}</label>}
            <input {...props} />
        </div>
    )
}
export default Input;