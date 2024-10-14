(function () {
    emailjs.init("7oGMzkhKEiZwuARwn"); // Initialize EmailJS with your API key
})();

// Handle form submission and send email
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = 'service_apq4q6l';
    const templateID = 'template_2cmi6o5';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your message has been sent!');
        }, (err) => {
            alert('Failed to send message. Please try again.');
            console.log(JSON.stringify(err));
        });
});
