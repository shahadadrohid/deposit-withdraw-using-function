document.getElementById('submit-button').addEventListener('click', function () {

    // Get Email Input Value 
    const inputEmail = document.getElementById('input-email');
    const userEmail = inputEmail.value;

    // Get Password Input Value 
    const inputPassword = document.getElementById('input-password');
    const userPassword = inputPassword.value;

    if (userEmail == 'shahadad@gmail.com' && userPassword == 'shahadad') {
        window.location.href = 'bank.html';
    }
})