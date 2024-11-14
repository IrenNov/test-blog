const sliderList1 = document.querySelector('.article-other__list');
const slides1 = document.querySelectorAll('.article-other__item');
const paginationContainer = document.getElementById('pagination'); // Контейнер для номеров страниц
const articlesPerPage = 10; // Количество статей на странице
const totalSlides1 = slides1.length;
const totalPages = Math.ceil(totalSlides1 / articlesPerPage);
let currentPage = 1;

function updateSliderPosition1() {
  const startSlide = (currentPage - 1) * articlesPerPage;
  const endSlide = startSlide + articlesPerPage;

  // Скрываем все слайды
  slides1.forEach(slide => slide.style.display = 'none');

  // Показываем только слайды текущей страницы
  slides1.forEach((slide, index) => {
    if (index >= startSlide && index < endSlide) {
      slide.style.display = 'block';
    }
  });

  updatePagination();
}

function updatePagination() {
  paginationContainer.innerHTML = ''; // Очищаем пагинацию

  const createPageButton = (pageNumber) => {
    const pageButton = document.createElement('button');
    pageButton.textContent = pageNumber;
    pageButton.classList.add('page-btn');
    if (pageNumber === currentPage) pageButton.classList.add('active');
    
    pageButton.addEventListener('click', () => {
      currentPage = pageNumber;
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(pageButton);
  };

  // Добавляем первые четыре страницы
  for (let i = 1; i <= 4 && i <= totalPages; i++) {
    createPageButton(i);
  }

  // Добавляем многоточие, если нужно
  if (totalPages > 5 && currentPage > 4) {
    const dots = document.createElement('span');
    dots.textContent = '...';
    dots.classList.add('dots');
    paginationContainer.appendChild(dots);
  }

  // Добавляем последнюю страницу
  if (totalPages > 5) {
    createPageButton(totalPages);
  }

  // Добавляем кнопку "Далее"
  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Далее';
    nextButton.classList.add('next-btn');

    nextButton.addEventListener('click', () => {
      currentPage++;
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(nextButton);
  }
}

function initSlider1() {
  updateSliderPosition1();
  updatePagination();
}

initSlider1();
