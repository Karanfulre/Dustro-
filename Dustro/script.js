// script.js (optional)
// Add any JavaScript functionality here, such as animations, interactions, or data handling.

// Example: A simple animation to highlight stats on hover
const stats = document.querySelectorAll('.about-stats .stat');

stats.forEach(stat => {
    stat.addEventListener('mouseover', () => {
        stat.classList.add('highlight');
    });

    stat.addEventListener('mouseout', () => {
        stat.classList.remove('highlight');
    });
}); 







function navigateTo(url) {
    window.location.href = url; // Navigate to the specified URL
}
