window.addEventListener('scroll', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight * 0.8) { 
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
});

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

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 768) { // Apply only for mobile view
      const headerDescriptionLink = document.querySelector('.header-description a');

      const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.width = '98.5%';
              } else {
                  entry.target.style.width = '150px';
              }
          });
      }, options);

      observer.observe(headerDescriptionLink);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 768) { // Apply only for mobile view
      const mainGalleryLink = document.querySelector('.main-gallery a');

      const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.width = '84%';
              } else {
                  entry.target.style.width = '150px';
              }
          });
      }, options);

      observer.observe(mainGalleryLink);
  }
});