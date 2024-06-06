const form = document.querySelector("form");
const CodeArticle = document.getElementById("CodeArticle");
const Désignation = document.getElementById("Désignation");
const Qté = document.getElementById("Qté");
const PU = document.getElementById("PU");
const Valeur = document.getElementById("Valeur");
const Atelier = document.getElementById("Atelier");
const Machine = document.getElementById("Machine");
const Emplacement = document.getElementById("Emplacement");
const Responsable = document.getElementById("Responsable");
const Date = document.getElementById("Date");
function sendEmail() {
    const bodyMessage = `Item code: ${CodeArticle.value}<br> Designation: ${Désignation.value}<br> unit price: ${PU.value}<br> Qty: ${Qté.value}<br> Value: ${Valeur.value}<br> Workshop: ${Atelier.value}<br> Machine: ${Machine.value}<br> Location: ${Emplacement.value}<br> Responsible: ${Responsable.value}<br> Date: ${Date.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "site2218@gmail.com",
        Password : "F210CBE70B302A2A5E91D2A2CB2E52A923DD",
        To : 'site2218@gmail.com',
        From : "site2218@gmail.com",
        Subject : Responsable.value,
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
