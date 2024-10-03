document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebar = document.querySelector('.toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
  
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
  
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
  });

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}