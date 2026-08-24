import {ChangeEvent} from "react";
import React from "react";
import {Button, TextField, Typography, Alert, Paper} from "@mui/material";
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
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        SetFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            
            await emailjs.send(
                'service_zudqkre',
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
            const emailjsError = error as { text?: string; status?: number };
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : emailjsError.text || `EmailJS request failed${emailjsError.status ? ` (${emailjsError.status})` : ''}.`
            );
            setTimeout(() => setStatus('idle'), 3000);
        } finally {
            setLoading(false);
        }
    }

return (
    <Paper
        elevation={0}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 3, md: 4 },
            px: { xs: 2, sm: 3 },
            maxWidth: 720,
            mx: 'auto',
            borderRadius: 4,
            border: '1px solid rgba(16, 66, 112, 0.14)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(245,250,255,0.95) 100%)',
        }}
    >
        <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
            Contact
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 0.5 }}>
            Tell me about your project or collaboration idea.
        </Typography>
        
        {status === 'success' && <Alert severity="success">Message sent successfully!</Alert>}
        {status === 'error' && <Alert severity="error">{errorMessage || 'Error sending message. Please try again.'}</Alert>}
        
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
            <Button type="submit" variant="contained" disabled={loading} sx={{ py: 1.2, borderRadius: 2 }}>
                {loading ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    </Paper>
)

}

export {Contact}