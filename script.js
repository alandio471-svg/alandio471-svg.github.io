document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const ctaButton = document.getElementById('cta-button');

    // Animasi Fade-in saat halaman dimuat
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'all 1s ease-out';

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);

    // Event listener untuk tombol
    ctaButton.addEventListener('click', () => {
        alert('Terima kasih telah berkunjung! Mari kita buat sesuatu yang luar biasa.');
    });

    // Efek scroll pada Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 10%';
            navbar.style.borderBottom = '1px solid #eee';
        } else {
            navbar.style.padding = '2rem 10%';
            navbar.style.borderBottom = 'none';
        }
    });
});