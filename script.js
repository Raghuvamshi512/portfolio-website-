gsap.from(".hero h2", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1, delay: 0.5, y: 50, opacity: 0 });
gsap.from(".cta-btn", { duration: 1, delay: 1, scale: 0.8, opacity: 0 });

gsap.utils.toArray("section").forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
    });
});
function openModal(id) {
    document.getElementById(`modal${id}`).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(`modal${id}`).style.display = 'none';
}

const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const nav = document.querySelector('nav');
const skillItems = document.querySelectorAll('.skills li');
const modalContent = document.querySelectorAll('.modal-content');

toggleButton.addEventListener('click', () => {
    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');

    // Toggle dark mode for skill items
    skillItems.forEach(skill => skill.classList.toggle('dark-mode'));

    // Toggle dark mode for modal content
    modalContent.forEach(modal => modal.classList.toggle('dark-mode'));

    // Debugging output
    console.log('Dark mode toggled:', body.classList.contains('dark-mode'));
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target section
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Show only the resume section when clicked
        if (targetId === 'resume') {
            document.querySelectorAll('section').forEach(section => {
                if (section.id === 'resume') {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }
    });
});
