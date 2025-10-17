export const contactEmails = process.env.CONTACT_EMAIL
  ?.split(',')
  .map(email => email.trim()) // removes spaces just in case
  .filter(Boolean) || []; // removes empty entries if any
