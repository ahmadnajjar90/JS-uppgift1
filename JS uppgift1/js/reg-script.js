$(function(){

    function validateFirstname() {
        let value = $('#first-name').val()

        if(value === '') {
            $('#error-firstname').text('Please enter your name ');
        } 
        else if(value.length < 3 || value.length > 25) {
            $('#error-firstname').text('First name must be of more than 3 and less than 25 characters');
        }
        else {
            $('#error-firstname').text('');
            return true
        }
    }

    function validateLastname() {
        let value = $('#last-name').val()

        if(value === '') {
            $('#error-lastname').text('Please enter your lastname');
        } 
        else if(value.length < 3 || value.length > 25) {
            $('#error-lastname').text('Last name must be of more than 3 and less than 25 characters');
        }
        else {
            $('#error-lastname').text('');
            return true
        }
    }

    function validateEmail() {
        let value = $('#email').val()

        if(value === '') {
            $('#error-email').text('Please enter an Email');
        } 
        else if(value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            $('#error-email').text('');
            return true
        }
        else {
            $('#error-email').text('Email is not valid!');
        }
    }

    function validatepassword() {
        let value = $('#password').val()

        if(value === '') {
            $('#error-password').text('Please choose a password');
            return false
        } 
        else if(value.length < 8 || value.length > 20) {
            $('#error-password').text('Password must be of more than 3 and less than 20 characters');
            return false
        }
        else {
            $('#error-password').text('');
            return true
        }
    }

    function validateConfirm() {
        let value = $('#confirm').val()
        let pass = $('#password').val()

        if(value === '') {
            $('#error-confirm').text('Please confirm a password');
        } 
        else if(value !== pass){
            $('#error-confirm').text('Passwords do not match');
        }
        else {
            $('#error-confirm').text('');
            return true
        }
    }

    function validateRadio() {
        let years18 = $('#years18')
        let plus18 = $('#plus18')
        
        if(years18[0].checked == false && plus18[0].checked == false) {
            $('#error-radio').text('Please make a selection');
        }
        else {
            $('#error-radio').text('');
            return true
        }
    }

    function validateSelect() {
        let select = $('#gender').val();

        if(select == ""){
            $('#error-select').text('Please make a selection');
        }
        else{
            $('#error-select').text('');
            return true
        }
    }

    function validateTextarea() {
        let value = $('#description').val()

        if(value === '') {
            $('#error-textarea').text('Required');
        } 
        else if(value.length < 10) {
            $('#error-textarea').text('You must enter at least 10 characters');
        }
        else {
            $('#error-textarea').text('');
            return true
        }
    }

    function validateCheckbox() {
        let check = $('#terms')

        if(check[0].checked == false ){
            $('#error-checkbox').text('Terms and conditions are required');
        }
        else{
            $('#error-checkbox').text('');
            return true
        }
    }


    $('.reg-form').on('submit', function(e) {
        e.preventDefault();
        validateFirstname();
        validateLastname();
        validateEmail();
        validatepassword();
        validateConfirm();
        validateRadio();
        validateSelect();
        validateTextarea();
        validateCheckbox();


        if(validateFirstname() && validateLastname() && validateEmail() && 
        validatepassword() && validateConfirm() && validateRadio() &&
        validateSelect() && validateTextarea() && validateCheckbox() == true){
        window.open("reg-created.html","_self");
        }
    });
});