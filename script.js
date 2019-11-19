var counter = 0;

function addEmail() {
    var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var emailid = document.getElementById("emailid").value;
    var ul = document.getElementById("email-list");
    var li = document.createElement('li');
    li.setAttribute('id', emailid + counter++);
    li.classList.add("email-li");
    document.getElementById("emailid").value = "";
    if (emailReg.test(emailid)) {
        if (ul.querySelectorAll(".disabled")) {
            ul.classList.remove("disabled");
        }
        li.innerHTML += '<label><input type="checkbox" name="emailcheckbox" />' + emailid + '</label></li>';
        ul.appendChild(li);
    } else {
        alert("Please enter valid email");
        return false;
    }
}

function removeElement(id) {
    var checkboxitems = document.getElementsByName('emailcheckbox');
    var li = document.getElementById("email-list").querySelectorAll(".email-li");
    var ul = document.getElementById("email-list");
    for (var i = 0; i < checkboxitems.length; i++) {
        if (checkboxitems[i].type == 'checkbox' && checkboxitems[i].checked == true) {
            selectedItems = checkboxitems[i];
            selectedItems.parentElement.parentElement.style.display = 'none';
            if (li < 2) {
                ul.classList.add("disabled");
            }
        }
    }
}

function Searchemail() {
    var ul = document.getElementById("email-list");
    var li = document.getElementById("email-list").querySelectorAll(".email-li");
    var licount = li.length;
    var searchid = document.getElementById("searchinput").value;
    // li.classList.add("disabled");   
    for (i = 0; i <= licount; i++) {
        if (li[i] && li[i].id.toLowerCase().indexOf(searchid.toLowerCase()) > -1) {
            if (li < 2) {
                ul.classList.add("disabled");
            }
        } else {
            var licontainer = li[i];
            licontainer.style.display = 'none';
        }
    }

}
