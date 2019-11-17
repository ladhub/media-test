function Addemail() {
    var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var ul = document.getElementById("email-list");
    var emailid = document.getElementById("emailid").value;
    document.getElementById("emailid").value = "";
    
    if (emailReg.test(emailid)) {
        var itemsByTagName = document.getElementsByTagName("li");
        ul.innerHTML += '<li class="email-li"> ' + emailid + '<span class="remove-anchor">Remove</span></li>' ;        
    } else{
        alert("Please enter valid email")
        return false;    
    }   
    }
    
    document.getElementById("email-list").addEventListener("click",function(e) {
    var tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
        tgt.parentNode.removeChild(tgt);
    }
});