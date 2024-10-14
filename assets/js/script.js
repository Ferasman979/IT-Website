
// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || 'Not provided',
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS and API Key
    emailjs.send('service_apq4q6l', 'template_2cmi6o5', formData, 'f1zZU6E-Cz5ZumipR')
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message: ' + error.text);
        });
});
