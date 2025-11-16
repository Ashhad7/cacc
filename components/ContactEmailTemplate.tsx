// components/ContactEmailTemplate.tsx
import React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#0077b6' }}>New Website Message</h1>
    <p>You received a new message from your CACC website contact form.</p>
    <hr />
    <p><strong>From:</strong> {name}</p>
    <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
    <hr />
    <h3 style={{ marginTop: '20px' }}>Message:</h3>
    {/* Use <pre> to preserve whitespace and newlines from the textarea */}
    <pre style={{ 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '14px', 
        whiteSpace: 'pre-wrap', 
        wordWrap: 'break-word',
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px'
      }}
    >
      {message}
    </pre>
  </div>
);