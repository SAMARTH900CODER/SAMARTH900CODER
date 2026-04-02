document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login form');
    const googleBtn = document.querySelectorAll('button')[document.querySelectorAll('button').length - 2];
    const phoneBtn = document.querySelectorAll('button')[document.querySelectorAll('button').length - 1];

    // Handle form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = loginForm.querySelector('input[name="username"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;
            console.log('Login attempt:', username);
            alert('Logging in as: ' + username);
        });
    }

    // Google authentication
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            console.log('Google login initiated');
            alert('Redirecting to Google authentication...');
        });
    }

    // Phone authentication
    if (phoneBtn) {
        phoneBtn.addEventListener('click', function() {
            console.log('Phone authentication initiated');
            alert('Enter your phone number for authentication');
        });
    }

    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Real-time data simulation
    setInterval(function() {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            const co2Level = Math.floor(Math.random() * 500) + 200;
            mapElement.textContent = 'Current CO2 Level: ' + co2Level + ' ppm';
        }
    }, 5000);

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    console.log('CO2 Emission Prediction System initialized');
});
