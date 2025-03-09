// Particle.js Configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#3b82f6" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Authentication Management
document.addEventListener('DOMContentLoaded', function() {
    const authLink = document.getElementById('authLink');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (authLink) {
        if (isAuthenticated) {
            authLink.textContent = 'Logout';
            authLink.href = '#';
            authLink.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('isAuthenticated');
                window.location.reload();
            });
        } else {
            authLink.textContent = 'Login / Register';
            authLink.href = 'auth.html';
        }
    }
});

// Check if user is authorized
function checkAuth() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

// Handle login and registration
if (window.location.pathname.includes('auth.html')) {
    window.handleLogin = function(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        const password = event.target.querySelector('input[type="password"]').value;
        
        // Here you would normally make an API call to verify credentials
        // For demo purposes, we'll just set authenticated
        localStorage.setItem('isAuthenticated', 'true');
        alert('Please check your email for verification link.');
        window.location.href = 'index.html';
    };

    window.handleRegister = function(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        const password = event.target.querySelector('input[type="password"]').value;
        const confirmPassword = event.target.querySelectorAll('input[type="password"]')[1].value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Here you would normally make an API call to create account
        // For demo purposes, we'll just show verification message
        alert('Please check your email for verification link.');
        event.target.style.display = 'none';
        document.querySelector('.verification-message').style.display = 'block';
    };
}

// Initialize Analytics Chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Progress',
                data: [30, 55, 75, 90],
                borderColor: '#2563eb',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});

// GSAP Animations
gsap.from(".feature-card", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".feature-card",
        start: "top center"
    }
});
