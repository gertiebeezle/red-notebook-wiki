// Search functionality
const searchBox = document.getElementById('searchBox');
let searchData = [];

// Initialize search data
function initSearch() {
    // This would be populated from all pages
    searchData = [
        { title: "Capitalist Realism", url: "pages/capitalist-realism.html", terms: ["fisher", "capitalism", "mental health", "neoliberalism"] },
        { title: "Body Without Organs", url: "pages/body-without-organs.html", terms: ["deleuze", "guattari", "bwo", "capitalism", "desire"] },
        { title: "Desiring Machines", url: "pages/desiring-machines.html", terms: ["deleuze", "production", "desire", "oedipus"] },
        { title: "Oedipus Complex", url: "pages/oedipus-complex.html", terms: ["freud", "patriarchy", "family", "repression"] },
        { title: "Media Theory", url: "pages/media-theory.html", terms: ["mcluhan", "medium", "technology"] },
        { title: "Nihilism", url: "pages/nihilism.html", terms: ["violence", "meaning", "school shootings"] },
        { title: "Fordism", url: "pages/fordism.html", terms: ["ford", "production", "assembly line", "capitalism"] },
        { title: "Patriarchy", url: "pages/patriarchy.html", terms: ["firestone", "gender", "reproduction", "family"] },
        { title: "Fascism", url: "pages/fascism.html", terms: ["nationalism", "oedipus", "repression", "project 2025"] }
    ];
}

if (searchBox) {
    searchBox.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
            performSearch(query);
        }
    });
}

function performSearch(query) {
    const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.terms.some(term => term.includes(query))
    );
    
    // Display results (could be enhanced with a dropdown)
    console.log('Search results:', results);
}

// Smooth scrolling for anchor links
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

// Highlight current section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    
    // Add copy button to code blocks if any
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.className = 'copy-button';
        button.onclick = () => {
            navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 2000);
        };
        block.parentElement.appendChild(button);
    });
});

// Add connection graph visualization function
function visualizeConnections() {
    // This could use D3.js or similar to show concept relationships
    console.log('Visualizing concept connections...');
}
