let button = document.getElementById('btn')
let uname = document.querySelector('#un')
let pswd = document.querySelector('#pass')
let Email = document.querySelector('#email')
let phone = document.querySelector('#phn')
document.getElementById('una').style.visibility = 'hidden'
document.getElementById('ps').style.visibility = 'hidden'
document.getElementById('mail').style.visibility = 'hidden'
document.getElementById('ph').style.visibility = 'hidden'
function validate(){
    if((uname.value.trim() != "" && pswd.value.trim() != "") && (Email.value.trim() != "" && phone.value.trim() != ""))
    {
        console.log('please fill out of this field')
    }
    else{
        document.getElementById('una').style.visibility = 'visible'
        document.getElementById('ps').style.visibility = 'visible'
        document.getElementById('mail').style.visibility = 'visible'
        document.getElementById('ph').style.visibility = 'visible'
        return false;
    }
}
