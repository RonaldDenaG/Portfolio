import {ChangeEvent} from "react";
import React from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
interface FormData{
    name: string;
    email: string;
    message: string;
}

const Contact   = () => { 
    const [formData, SetFormData] = React.useState<FormData>({
        name: ' ',
        email: ' ',
        message: ' '
    });

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    SetFormData({...formData, [e.target.name]: e.target.value});
}

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent!');
        SetFormData ({name: '', email: '', message: ''});
    }
return (
    <Box>
        <form onSubmit={handleSubmit}>
        <Typography variant="h4">
            Contact!
        </Typography>
        <TextField label='Name'></TextField>
        <TextField label='Email'></TextField>
        <TextField label='Message'></TextField>
        <Button onClick={handleSubmit}>submit</Button>
        </form>
    </Box>
)

}

export {Contact}