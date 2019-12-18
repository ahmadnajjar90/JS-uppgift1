$(function(){

    function validateEmail() {
        let value = $('#email').val()

        if(value === '') {
            $('#error-email').text('You must enter an Email');
        } 
        else if(value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            $('#error-email').text('');
            return true
        }
        else {
            $('#error-email').text('You must enter a valid email');
        }


    }

    function validatePassword() {
        let value = $('#pass').val()

        if(value === '') {
            $('#error-password').text('You must enter a password');
        } 
        else if(value.length < 8){
            $('#error-password').text('You must enter at least 8 characters');
        }
        else {
            $('#error-password').text('');
            return true
        }
    }

    $('#form-log').on('submit', function(e) {
        e.preventDefault();
        validateEmail();
        validatePassword();


        if(validateEmail() && validatePassword() == true){
        window.open("html/welcom-login.html","_self");
        }
    });

});