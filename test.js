var users = [{username:"sara",password:"s123"}];
function signup()
{
    var user_name = document.getElementById('name_text').value;
    var pass_word = document.getElementById('pass_text').value;
    var confirm = document.getElementById('confirm_text').value;
    var phone = document.getElementById('phone_text').value;
    var age = document.getElementById('age_text').value;
    var email = document.getElementById('email_text').value;
    if(user_name == ""||pass_word =="" || confirm =="" || phone =="" || age == "" || email ==""){
        alert('please fill the empty field');
    }
    else if(phone.length != 11){
        alert('invalid phone number');
    }
    else if(confirm != pass_word){
        alert('invalid confirm password');
    }
    else{
        var obj = {username:user_name,password:pass_word};
        users.push(obj);
        alert('signup successfull');
    }
}
function signin()
{
    var user_ = document.getElementById('username').value;
    var pass_ = document.getElementById('password').value;
    if(user_ == "" || pass_ ==""){
        alert('please fill the empty field');
    }
    var check = false;
    for(var i = 0;i < users.length;i++){
        if(user_ == users[i].username && pass_ == users[i].password){
            check = true;
            break;
        }
    }
    if(check){
        alert('signin successfull');
    }
    else{
        alert('error please try again');
    }

}
function forget()
{
    var userr = document.getElementById('user').value;
    var passs = document.getElementById('pa').value;
    var confirmm = document.getElementById('conf').value;
    if(userr == "" || passs =="" || confirmm == ""){
        alert('please fill the empty field');
    }
    else if(confirmm != passs){
        alert('invalid confirm password');
    }
    var update = false;
    for(var i = 0;i < users.length;i++){
        if(userr == users[i].username){
            update = true;
            break;
        }
    }
    if(update){
        alert('password updated successfull');
    }
}