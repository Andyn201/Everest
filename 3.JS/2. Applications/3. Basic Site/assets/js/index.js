const nav_btn = document.getElementById('nav-button');
const navbar = document.querySelector('.navbar');
const modal = document.getElementById("Modal");
const btn = document.getElementById("trigger");
const span = document.getElementsByClassName("close")[0];


nav_status = false;

nav_btn.addEventListener('click', () => {
    nav_status = !nav_status;

    if (nav_status === false){
        navbar.style.display = 'none';
    }
    else{
        navbar.style.display = 'block';
    }
});



btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}