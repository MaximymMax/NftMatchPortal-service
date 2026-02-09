// Floating Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const floatingMenu = document.getElementById('floatingMenu');

    if (menuToggle && floatingMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            floatingMenu.classList.toggle('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!floatingMenu.contains(e.target)) {
                floatingMenu.classList.remove('open');
            }
        });
    }
});
