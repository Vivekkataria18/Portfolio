function toggleProject(element) {
    element.parentNode.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    const domainButtons = document.querySelectorAll('.domain-btn');
    const projects = document.querySelectorAll('.project');

    domainButtons.forEach(button => {
        button.addEventListener('click', () => {
            const domain = button.dataset.domain;
            
            // Toggle active class on domain buttons
            domainButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects based on selected domain
            projects.forEach(project => {
                const projectDomains = project.getAttribute('data-domains').split(',');
                if (domain === 'All' || projectDomains.includes(domain.trim())) {
                    project.classList.add('active');
                } else {
                    project.classList.remove('active');
                }
            });
        });
    });
});
