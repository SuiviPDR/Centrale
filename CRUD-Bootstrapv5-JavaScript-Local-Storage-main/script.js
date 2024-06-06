const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail() {
    const bodyMessage = `full Name: ${fullName.value}<br> email: ${email.value}<br> phone: ${phone.value}<br> message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "site2218@gmail.com",
        Password : "F210CBE70B302A2A5E91D2A2CB2E52A923DD",
        To : 'site2218@gmail.com',
        From : "site2218@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Good job!",
                text: "Message send",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    sendEmail();
});
