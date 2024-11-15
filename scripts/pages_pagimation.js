const sliderList1 = document.querySelector('.articles__list');
const slides1 = document.querySelectorAll('.article-container');
const paginationContainer = document.getElementById('pagination'); 
const articlesPerPage = 11; 
const totalSlides1 = slides1.length;
const totalPages = Math.ceil(totalSlides1 / articlesPerPage);
let currentPage = 1;
let showAllPages = false; 

function updateSliderPosition1() {
  const startSlide = (currentPage - 1) * articlesPerPage;
  const endSlide = startSlide + articlesPerPage;

 
  slides1.forEach(slide => (slide.style.display = 'none'));

  
  slides1.forEach((slide, index) => {
    if (index >= startSlide && index < endSlide) {
      slide.style.display = 'block';
    }
  });

  updatePagination();
}

function updatePagination() {
  paginationContainer.innerHTML = ''; 

  const createPageButton = (pageNumber) => {
    const pageButton = document.createElement('button');
    pageButton.textContent = pageNumber;
    pageButton.classList.add('page-btn');
    if (pageNumber === currentPage) pageButton.classList.add('current');

    pageButton.addEventListener('click', () => {
      currentPage = pageNumber;
      showAllPages = currentPage > 4; 
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(pageButton);
  };

  if (!showAllPages) {
    
    for (let i = 1; i <= 4 && i <= totalPages; i++) {
      createPageButton(i);
    }

    
    if (totalPages > 4) {
      const dots = document.createElement('span');
      dots.textContent = ' ... ';
      dots.classList.add('dots');

      
      dots.addEventListener('click', () => {
        showAllPages = true;
        updatePagination(); 
      });

      paginationContainer.appendChild(dots);

     
      createPageButton(totalPages);
    }
  } else {
   
    for (let i = 1; i <= totalPages; i++) {
      createPageButton(i);
    }
  }

  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = '< Предыдущая';
    prevButton.classList.add('prev-btn', 'category');

    prevButton.addEventListener('click', () => {
      currentPage--;
      showAllPages = currentPage > 4; 
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(prevButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Следующая >';
    nextButton.classList.add('next-btn', 'category');

    nextButton.addEventListener('click', () => {
      currentPage++;
      showAllPages = currentPage > 4; 
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(nextButton);
  }
}

function initSlider1() {
 
  const classSequence = [
    'article-main',
    'article-double',
    'article-accent',
    ['article-accent', 'img'],
    'article-standart',
    'article-standart',
    'article-double',
    'article-accent',
    ['article-accent', 'img'],
    'article-standart',
    'article-standart'
  ];

  slides1.forEach((item, index) => {
    const newClass = classSequence[index % classSequence.length];

    item.style.display = ''; 

    if (Array.isArray(newClass)) {
      item.classList.add(...newClass);
    } else {
      item.classList.add(newClass);
    }
  });

  updateSliderPosition1(); 
  updatePagination(); 
}

initSlider1();
