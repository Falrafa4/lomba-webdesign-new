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
  
