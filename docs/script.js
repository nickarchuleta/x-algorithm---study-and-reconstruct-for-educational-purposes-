// Route tab switching
document.querySelectorAll('.route-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const route = btn.getAttribute('data-route');

        // Remove active class from all buttons and containers
        document.querySelectorAll('.route-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.route-container').forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding container
        btn.classList.add('active');
        document.getElementById(`route-${route}`).classList.add('active');

        // Render the map for this route
        if (route === 'seattle-cabo') {
            renderSeattleCaboMap();
        } else {
            renderNorwayIbizaMap();
        }
    });
});

// Initialize the first map on load
window.addEventListener('load', () => {
    renderSeattleCaboMap();
});

// Simple SVG route visualization
function renderSeattleCaboMap() {
    const canvas = document.getElementById('map-seattle-cabo');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw simplified route visualization
    ctx.strokeStyle = '#4a90e2';
    ctx.lineWidth = 3;
    ctx.beginPath();

    // Seattle start
    const points = [
        { x: 100, y: 50, label: 'Seattle', color: '#4a90e2' },
        { x: 120, y: 120, label: 'Portland', color: '#50c878' },
        { x: 140, y: 200, label: 'Northern CA', color: '#f5a623' },
        { x: 160, y: 280, label: 'Central CA', color: '#f8a623' },
        { x: 180, y: 360, label: 'Cabo', color: '#e74c3c' }
    ];

    // Draw path
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(point => {
        ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    // Draw stops
    points.forEach((point, idx) => {
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(point.label, point.x + 15, point.y + 5);
    });

    // Add title
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0a0e27';
    ctx.fillText('SEATTLE → CABO ROUTE VISUALIZATION', canvas.width / 2, 30);

    // Add mileage info
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#666';
    ctx.fillText('Phase 1: 200mi | Phase 2: 250mi | Phase 3: 300mi | Phase 4: 250mi | Phase 5: 350mi', canvas.width / 2, canvas.height - 20);
}

function renderNorwayIbizaMap() {
    const canvas = document.getElementById('map-norway-ibiza');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw simplified route visualization
    ctx.strokeStyle = '#4a90e2';
    ctx.lineWidth = 3;
    ctx.beginPath();

    const points = [
        { x: 100, y: 50, label: 'Norway', color: '#4a90e2' },
        { x: 140, y: 120, label: 'Scandinavia', color: '#50c878' },
        { x: 160, y: 200, label: 'Central Europe', color: '#f5a623' },
        { x: 180, y: 280, label: 'Alps/Lakes', color: '#f8a623' },
        { x: 200, y: 360, label: 'Ibiza', color: '#e74c3c' }
    ];

    // Draw path
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(point => {
        ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    // Draw stops
    points.forEach((point, idx) => {
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(point.label, point.x + 15, point.y + 5);
    });

    // Add title
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0a0e27';
    ctx.fillText('NORWAY → IBIZA ROUTE VISUALIZATION', canvas.width / 2, 30);

    // Add mileage info
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#666';
    ctx.fillText('Phase 1: 300mi | Phase 2: 350mi | Phase 3: 450mi | Phase 4: 350mi | Phase 5: 550mi', canvas.width / 2, canvas.height - 20);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.info-card, .gear-card, .optimization-card, .rule').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Enhanced Europe optimization interactions
document.querySelectorAll('.optimization-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });
});

// Add dynamic content loading
function initializePageContent() {
    // Count stats
    const statElements = document.querySelectorAll('[data-stat]');
    statElements.forEach(el => {
        const value = el.getAttribute('data-stat');
        animateCounter(el, parseInt(value));
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Mobile menu toggle (if needed in future)
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        // Mobile specific setup
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializePageContent();
    setupMobileMenu();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    setupMobileMenu();
    // Re-render maps if visible
    if (document.getElementById('route-seattle-cabo').classList.contains('active')) {
        renderSeattleCaboMap();
    } else {
        renderNorwayIbizaMap();
    }
});
