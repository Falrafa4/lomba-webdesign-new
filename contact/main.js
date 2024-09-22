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