(function() {
    emailjs.init("yadhu krishna");  // Replace "YOUR_USER_ID" with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_98fw731', 'template_my7fiai', this)  // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual EmailJS service and template IDs
        .then(function() {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('Failed to send your message. Please try again later.');
        });
});