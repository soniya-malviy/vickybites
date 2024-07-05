// JavaScript for handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    // Display form data (you can handle submission logic here)
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });
});
