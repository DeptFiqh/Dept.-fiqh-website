// Initialize Bootstrap carousel with 3-second interval
const carousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
  interval: 2000,
  ride: 'carousel'
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const newsItems = [
  {
    src: '/img/ps-1.jpg'
  },
  {
    src: '/img/ps-2.jpg'
  },
  {
    src: '/img/ps-10.jpg'
  }
];

// Populate news section
const newsContainer = document.getElementById('newsContainer');
newsItems.forEach(item => {
  const newsElement = document.createElement('div');
  newsElement.className = 'col-md-4';
  newsElement.innerHTML = `
    <div class="card h-100 border-0 shadow-sm news-item">
          <img src="${item.src}" class="card-img-top" alt="...">
    </div>
  `;
  newsContainer.appendChild(newsElement);
});

const publiItems = [
  {
    srcImg: '/img/ps-1.jpg',
    srcPage: '/Publication/culture/article-1.html'
  },
  {
    srcImg: '/img/ps-2.jpg',
    srcPage: '/Publication/culture/article-1.html'
  },
  {
    srcImg: '/img/ps-3.jpg',
    srcPage: '/Publication/culture/article-1.html'
  }
];

// Populate news section
const mainPub = document.getElementById('mainPub');
const pubContainer = document.createElement('div')
pubContainer.className = 'row g-4';
publiItems.forEach(item => {
  const pubElement = document.createElement('div');
  pubElement.className = 'col-md-4';
  pubElement.innerHTML = `
    <div class="card h-100 border-0 shadow-sm news-item">
          <a href="${item.srcPage}"><img src="${item.srcImg}" class="card-img-top" alt="..."></a>
    </div>
  `;
  pubContainer.appendChild(pubElement);
  mainPub.appendChild(pubContainer);
});
