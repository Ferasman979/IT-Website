// form-handler.js
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("f1zZU6E-Cz5ZumipR");

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_apq4q6l', 'template_2cmi6o5', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message, please try again.');
            });
    });
});
