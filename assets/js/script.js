var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

let enviarcorreo = document.getElementById("enviarcorreo");
enviarcorreo.addEventListener("click", () => {
    alert("El correo fue enviado correctamente...");
})

let eventChangeColor1=document.getElementsByTagName("h5")[0];
eventChangeColor1.addEventListener("dblclick", () => {
    eventChangeColor1.style.color="#DC3545";
})

let eventChangeColor2=document.getElementsByTagName("h5")[1];
eventChangeColor2.addEventListener("dblclick", () => {
    eventChangeColor2.style.color="#DC3545";
})

let MyToggleFunction = () => {
    for(let i = 0; i <= 2; i++) {
        let texthide = document.getElementsByClassName("card-text")[i];
        texthide.classList.toggle("mystyle");
    }
}