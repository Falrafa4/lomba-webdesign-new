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

document.getElementById('learn-more').addEventListener('click', function(e) {
  e.preventDefault();  // Prevent default anchor click behavior
  document.querySelector('#article').scrollIntoView({ 
      behavior: 'smooth'  // Enable smooth scrolling
  });
});
