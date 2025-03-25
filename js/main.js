document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log('Form submitted:', data);
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const projectId = this.getAttribute('data-project-id');
            loadProjectDetails(projectId);
        });
    });

    function loadProjectDetails(projectId) {
        // Placeholder for loading project details dynamically
        console.log('Loading details for project:', projectId);
        // Implement AJAX or fetch request to get project details
    }
});