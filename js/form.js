function sendContact() {
    var valid;  
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
        url: "contact_mail.php",
        data:'userName='+$("#userName").val()+'&userEmail='+$("#userEmail").val()+'&subject='+$("#subject").val()+'&content='+$(content).val(),
        type: "POST",
        success:function(data){
        $("#mail-status").html(data);
        },
        error:function (){}
        });
    }
}

function validateContact() {
    var valid = true;   
    $(".demoInputBox").css('background-color','');
    $(".form-info").html('');
    
    if(!$("#userName").val()) {
        $("#userName-info").html("(required)");
        $("#userName").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val()) {
        $("#userEmail-info").html("(required)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#subject").val()) {
        $("#subject-info").html("(required)");
        $("#subject").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#content").val()) {
        $("#content-info").html("(required)");
        $("#content").css('background-color','#FFFFDF');
        valid = false;
    }
    
    return valid;
}