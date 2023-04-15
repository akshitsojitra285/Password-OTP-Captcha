function Password() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    let max = str.length;
    let length = Math.floor(Math.random()*(11-6))+6;
    let pass="";
    for (let i = 0; i < length; i++) {
        pass+= str.charAt(Math.floor(Math.random()*(max)));
    }
    document.getElementById("passwordgenerator").innerHTML=pass;
    // console.log(pass.length);
}
Password();
function Otp() {
    let str = "0123456789";
    let max = str.length
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random()*max);  
    }
    document.getElementById("otpgenerator").innerHTML=otp;
}
Otp();
function Captcha() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let max = str.length;
    let length = 8
    let cap="";
    for (let i = 0; i < length; i++) {
        cap+= str.charAt(Math.floor(Math.random()*(max)));
    }
    document.getElementById("captchagenerator").innerHTML=cap;
    // console.log(pass.length);
}
Captcha();