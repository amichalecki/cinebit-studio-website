// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('portfolio1');
var modal2 = document.getElementById('portfolio2');
var modal3 = document.getElementById('portfolio3');
var modal4 = document.getElementById('portfolio4');

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
}