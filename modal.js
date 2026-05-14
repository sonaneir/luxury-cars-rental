// opens the modal
function openModal() {
    document.getElementById('reserveModal').classList.add('active'); // show modal
    document.body.style.overflow = 'hidden'; // stop page scroll
}

// closes the modal
function closeModal() {
    document.getElementById('reserveModal').classList.remove('active'); // hide modal
    document.body.style.overflow = ''; // allow scroll again
}

// click on background closes modal
document.getElementById('reserveModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Escape key closes modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// handle form submit
document.getElementById('reserveForm').addEventListener('submit', function(e) {
    e.preventDefault(); // stop reload
    alert('Your reservation has been received! We will contact you shortly.'); // confirm msg
    closeModal();
    this.reset(); // clear form
});