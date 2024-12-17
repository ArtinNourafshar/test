document.addEventListener('DOMContentLoaded', function() {
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();

    setTimeout(function() {
        welcomeModal.hide();
    }, 3000); // 3 sanieh

});
