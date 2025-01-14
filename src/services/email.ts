import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

interface EmailData {
  form_type: 'developer' | 'innovator' | 'contact';
  [key: string]: any;
}

// Generates a subject line based on the form type
function getSubjectLine(formType: EmailData['form_type']): string {
  const subjects: Record<string, string> = {
    developer: 'Developer Inquiry',
    innovator: 'Innovator Inquiry',
    contact: 'Contact Form Submission',
  };
  return subjects[formType] || 'General Inquiry';
}

// Formats the email message, excluding specific fields
function formatMessage(data: Record<string, any>): string {
  const excludedFields = ['form_type', 'subject']; // Fields to exclude from the message body
  return Object.entries(data)
    .filter(([key]) => !excludedFields.includes(key) && data[key]) // Exclude empty values
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}

export async function sendEmail(data: EmailData): Promise<void> {
  // Validate form_type early
  if (!['developer', 'innovator', 'contact'].includes(data.form_type)) {
    
    throw new Error(`Invalid form_type: ${data.form_type}`);
  }

  // Prepare the email template data
  const templateData = {
    form_type: data.form_type,
    subject: getSubjectLine(data.form_type),
    message: formatMessage(data),
    fullName: data.fullName || data.name || 'Anonymous',
    email: data.email || 'no-reply@example.com',
    experienceLevel: data.experienceLevel || '',
    portfolioURL: data.portfolioURL || '',
    skills: Array.isArray(data.skills) ? data.skills.join(', ') : data.skills || '',
    motivation: data.motivation || '',
    projectTitle: data.projectTitle || '',
    projectDescription: data.projectDescription || '',
    deadline: data.deadline || '',
    industry: data.industry || '',
    projectStage: data.projectStage || '',
    budget: data.budget || '',
    challenges: data.challenges || '',
    requiredResources: data.requiredResources || '',
    collaborationMode: data.collaborationMode || '',
    confidentialityAgreement: data.confidentialityAgreement || '',
    inquiryType: data.inquiryType || '',
  };


  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateData,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status !== 200) {
      
      throw new Error(`Failed to send email: ${response.text}`);
    }

    
  } catch (error) {
    
    throw new Error('Failed to send email. Please try again later.');
  }
}
