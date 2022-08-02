$(document).ready(function() {
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error = true;
    var password_error = true;
    var confirm_password_error = true;

    $('#username').keyup(function () {
        username_validation();

    });

    function username_validation(){
        var username_val = $('#username').val();
        if(username_val.length ==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be Empty!');
            $('#usernamevalidation').css('color','red');
            var Error = false;
            return false;

        }else{
            $('#usernamevalidation').hide();
        }
        if(username_val.length <4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Should Contain Atleast 4 Characters!');
            $('#usernamevalidation').css('color','red');
            var Error = false;
            return false;

        }else{
            $('#usernamevalidation').hide();
        }
        if(username_val.length >10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Should Be Less Than 10 Characters!');
            $('#usernamevalidation').css('color','red');
            var Error = false;
            return false;

        }else{
            $('#usernamevalidation').hide();
        
    }
    }
    


});