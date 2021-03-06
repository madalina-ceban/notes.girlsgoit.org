$('#register').click(readInput);

function readInput(e) {

    e.preventDefault();

    let username = $('#username').val();
    let firstname = $('#first-name').val();
    let lastname = $('#last-name').val();
    let password = $('#password').val();
    let confirmPass = $('#confirm-password').val();

    if (password === confirmPass) {
        register(firstname, lastname, username, password);
    } else {
        $('.validation-error').text('new passwords do not match');
    }
}

$('#username').focus(handleFocus);

function handleFocus() {
    const errorField = $('.validation-error');
    errorField.removeClass('visible');
    errorField.empty();
}

$('#login').click(showLoginPage);

function showLoginPage() {
    // redirrect to login page
}



