const emailjs = require('emailjs-com');

exports.handler = async (event, context) => {
  // Parse the incoming form data
  const { name, email, phone, message } = JSON.parse(event.body);

  // Define your EmailJS service ID, template ID, and API key
  const serviceId = 'service_apq4q6l'; // Replace with your EmailJS service ID
  const templateId = 'template_2cmi6o5'; // Replace with your EmailJS template ID
  const apiKey = '"f1zZU6E-Cz5ZumipR"'; // Replace with your EmailJS API key

  // Define the template parameters (form data to be sent in the email)
  const templateParams = {
    user_name: name,
    user_email: email,
    phone: phone,
    message: message,
  };

  try {
    // Send the email using EmailJS
    const response = await emailjs.send(serviceId, templateId, templateParams, apiKey);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email failed to send' }),
    };
  }
};
