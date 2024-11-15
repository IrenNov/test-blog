const sliderList1 = document.querySelector('.articles__list');
const slides1 = document.querySelectorAll('.article-container');
const paginationContainer = document.getElementById('pagination'); // Контейнер для номеров страниц
const articlesPerPage = 11; // Количество статей на странице
const totalSlides1 = slides1.length;
const totalPages = Math.ceil(totalSlides1 / articlesPerPage);
let currentPage = 1;
let showAllPages = false; // Флаг для отслеживания, показывать ли все страницы

function updateSliderPosition1() {
  const startSlide = (currentPage - 1) * articlesPerPage;
  const endSlide = startSlide + articlesPerPage;

  // Скрываем все слайды
  slides1.forEach(slide => (slide.style.display = 'none'));

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
    if (pageNumber === currentPage) pageButton.classList.add('current');

    pageButton.addEventListener('click', () => {
      currentPage = pageNumber;
      showAllPages = currentPage > 4; // Показываем все страницы, если переходим на 5-ю и далее
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(pageButton);
  };

  if (!showAllPages) {
    // Добавляем первые 4 страницы
    for (let i = 1; i <= 4 && i <= totalPages; i++) {
      createPageButton(i);
    }

    // Добавляем многоточие, если страниц больше 4
    if (totalPages > 4) {
      const dots = document.createElement('span');
      dots.textContent = ' ... ';
      dots.classList.add('dots');

      // При клике на многоточие показываем все страницы
      dots.addEventListener('click', () => {
        showAllPages = true;
        updatePagination(); // Обновляем пагинацию
      });

      paginationContainer.appendChild(dots);

      // Добавляем последнюю страницу
      createPageButton(totalPages);
    }
  } else {
    // Показываем все страницы
    for (let i = 1; i <= totalPages; i++) {
      createPageButton(i);
    }
  }

  // Добавляем кнопку "Назад"
  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = '< Предыдущая';
    prevButton.classList.add('prev-btn', 'category');

    prevButton.addEventListener('click', () => {
      currentPage--;
      showAllPages = currentPage > 4; // Если возвращаемся с 5-й страницы, проверяем флаг
      updateSliderPosition1();
      updatePagination();
    });

    paginationContainer.appendChild(prevButton);
  }

  // Добавляем кнопку "Следующая"
  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Следующая >';
    nextButton.classList.add('next-btn', 'category');

    nextButton.addEventListener('click', () => {
      currentPage++;
      showAllPages = currentPage > 4; // Показываем все страницы, если находимся на 5-й и далее
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
