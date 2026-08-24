import {ChangeEvent} from "react";
import React from "react";
import {Box, Button, TextField, Typography, Alert} from "@mui/material";
import emailjs from '@emailjs/browser';

interface FormData{
    name: string;
    email: string;
    message: string;
}

const Contact   = () => { 
    const [formData, SetFormData] = React.useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        SetFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        try {
            
            await emailjs.send(
                'service_pnvxd35',      
                'template_zw7jfqv',     
                {
                    to_email: 'ronalddenag@gmail.com', 
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'ETXy4gM9wumTUy8aJ'
            );
            setStatus('success');
            SetFormData({name: '', email: '', message: ''});
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        } finally {
            setLoading(false);
        }
    }

return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', py: 4, maxWidth: 600, mx: 'auto'}}>
        <Typography variant="h4">
            Contact!
        </Typography>
        
        {status === 'success' && <Alert severity="success">Message sent successfully!</Alert>}
        {status === 'error' && <Alert severity="error">Error sending message. Please try again.</Alert>}
        
        <form onSubmit={handleSubmit} style={{width: '100%', display: 'flex', flexDirection: 'column', gap: 16}}>
            <TextField 
                label='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField 
                label='Email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField 
                label='Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
            />
            <Button type="submit" variant="contained" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    </Box>
)

}

export {Contact}