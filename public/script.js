document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;

            if (passwordInput && (passwordInput.type === 'password' || passwordInput.type === 'text')) {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                this.classList.toggle('fa-eye', isPassword);
                this.classList.toggle('fa-eye-slash', !isPassword);
            }
        });
    });

    ['loginForm', 'signupForm'].forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log(`${formId.replace('Form', '')} attempt:`);
                window.location.href = "index.html";
            });
        }
    });
});