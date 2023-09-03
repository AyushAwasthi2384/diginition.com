// let mForm = document.frm;
// var uname = document.getElementById("username").value;
// var pw = document.getElementById("pass").value;
// var rpw = document.getElementById("repass").value;
// var mail = document.getElementById("email").value;
// var addr = document.getElementById("address").value;
// var ag = document.getElementById("age").value;

function subm() {
    var uname = document.getElementById("username").value;
    var pw = document.getElementById("pass").value;
    var rpw = document.getElementById("repass").value;
    var mail = document.getElementById("email").value;
    var addr = document.getElementById("address").value;
    var ag = parseInt(document.getElementById("age").value);

    var nameEr = emailEr = passEr = ageer =  true;
    
    //NAME
    if(uname=="")
        alert("Please Enter the name");
    else{
        let re = /^[a-zA-Z\s]+$/;
        if(re.test(uname) === false){
            alert("Please Enter a valid name");
        }
        else{
            console.log("Name Validated");
            nameEr = false;
        }
    }

    //PASSWORD
    if(pw=="")
        alert("Please Enter the Password");
    else{
        let re = /^(?=.*\d)(?=(.*[!@#$%^&*_.]){2,})(?=(.*[a-z]).{2,})(?=(.*[A-Z]).{2,})(?:[\da-zA-Z@#$%!]).{8,100}$/;
        if(re.test(pw) === false){
            alert("Please Enter a valid Password");
        }
        else{
            console.log("Password Validated");
            passEr = false;
        }
    }
    //RE-ENTERED PASSWORD
    if(pw!=rpw)
        alert("Passwords didn't match")
    else if(pw!="" && pw==rpw){
        console.log("Both passwords validated");
    }

    //EMAIL
    if(mail=="")
        alert("Please Enter the E-mail");
    else{
        let re = /^\S+@\S+\.\S+$/;
        if(re.test(mail) === false){
            alert("Please Enter a valid E-mail");
        }
        else{
            console.log("E-mail Validated");
            passEr = false;
        }
    }

    //AGE
    if(ag<18 && ag>27){
        alert("Please Enter the Age");
    }
    else if(ag>18 && ag<27){
        console.log("Age Validated");
        passEr = false;
    }

    let enData = {
        enName: uname,
        enPass: pw,
        enRePass: rpw,
        enMain: mail,
        enAddress: addr,
        enAge: ag
    }
    if((nameEr || passEr || emailEr || ageer)===false){
        alert(
            "The data you entered is as follows: \n"+
            "Name: "+uname+"\n"+
            "Password: "+pw+"\n"+
            "E-mail: "+mail+"\n"+
            "Address: "+addr+"\n"+
            "Age: "+ag+"\n"
        )
    }
}

function clear() {
    let form = document.getElementById("frm-ele");
    form.reset();
}
