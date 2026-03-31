// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal-close');

// Get all certificate cards
const certificateCards = document.querySelectorAll('.certificate-card');

// Add click event to each card to open modal
certificateCards.forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('.certificate-image');
        if (img && img.src) {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

// Close modal when clicking on close button
closeModal.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Optional: Add loading animation for images
document.querySelectorAll('.certificate-image').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});
