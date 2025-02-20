// Gestion du chatbot
document.addEventListener('DOMContentLoaded', () => {
    const openChatbotBtn = document.getElementById('openChatbot');
    const closeChatbotBtn = document.getElementById('closeChatbot');
    const chatbox = document.getElementById('chatbox');

    openChatbotBtn.addEventListener('click', () => {
        chatbox.classList.remove('hidden');
        openChatbotBtn.style.display = 'none';
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbox.classList.add('hidden');
        openChatbotBtn.style.display = 'block';
    });
});

// Animations au scroll
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.offre').forEach(element => {
        element.classList.add('opacity-0');
        observer.observe(element);
    });
};

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        // Simulation d'envoi du formulaire
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Réinitialisation du formulaire
        form.reset();
        
        // Message de confirmation
        alert('Votre message a été envoyé avec succès !');
    } catch (error) {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
});

// Style pour l'animation de fade-in
const style = document.createElement('style');
style.textContent = `
    .opacity-0 {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Initialiser les animations
observeElements();

document.querySelectorAll(".choisir-coach").forEach(button => {
    button.addEventListener("click", function() {
        let selectedCoach = this.getAttribute("data-coach");
        localStorage.setItem("selectedCoach", selectedCoach);
        alert("Vous avez choisi " + selectedCoach + " pour votre session !");
    });
});

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
    testimonials.forEach(t => t.style.display = "none");
    testimonials[index].style.display = "block";
    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 3000);
showTestimonial();
