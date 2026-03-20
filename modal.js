function openModal() {
    document.getElementById('reserveModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('reserveModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('reserveModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

document.getElementById('reserveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your reservation has been received! We will contact you shortly.');
    closeModal();
    this.reset();
});