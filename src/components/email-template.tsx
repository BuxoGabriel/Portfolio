import * as React from 'react';

interface EmailTemplateProps {
    sender: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  sender, message
}) => (
  <div>
    <h1>Email From, {sender}!</h1>
    <p>{message}</p>
  </div>
);
