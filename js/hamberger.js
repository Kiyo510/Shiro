document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('hamburger-menu-Button').addEventListener("click",function() {
    this.classList.toggle("active");
    document.getElementById('header_menu').classList.toggle("active");
  });
  document.getElementById('header_menu').addEventListener("click", function() {
    this.classList.remove("active");
    document.getElementById('hamburger-menu-Button').classList.toggle("active");
  });
});
