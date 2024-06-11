//script.js
function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_649ozjc", "template_sn7jjxn", params).then(function (res) {
        alert("Success!" + res.status);
        resetForm();
    })
}

function resetForm() {
    document.getElementById("contactForm").reset();
}