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
  if (currentScrollPos === 0) {
    document.getElementById('navbar').style.top = '0';
  }
  if (prevScrollpos < currentScrollPos) {
    document.getElementById('navbar').style.top = '-7vh';
  }

  prevScrollpos = currentScrollPos;
}