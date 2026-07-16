// Dropdown Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContainer = document.querySelector('.dropdown');

    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function() {
            dropdownContainer.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdownContainer.contains(event.target)) {
                dropdownContainer.classList.remove('active');
            }
        });

        // Close dropdown when a link is clicked
        const dropdownLinks = document.querySelectorAll('.dropdown-content a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                dropdownContainer.classList.remove('active');
            });
        });
    }
});
