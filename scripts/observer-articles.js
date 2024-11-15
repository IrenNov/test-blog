document.addEventListener("DOMContentLoaded", () => {
    const mainArticle = document.querySelector('.article-main');
    const articlesList = document.querySelector('.article-other__list');
  
    function updateMainArticle() {
      const articles = articlesList.querySelectorAll('.article-other__item');
      
      // Находим каждую 12-ю статью и заменяем содержимое основного блока
      articles.forEach((article, index) => {
        if ((index + 1) % 11 === 1 && index > 0) {
          mainArticle.innerHTML = article.innerHTML;
          mainArticle.style.backgroundImage = article.style.backgroundImage;
  
          // Удаляем перемещенную статью из общего списка
          article.remove();
        }
      });
    }
  
    updateMainArticle();
  
    // Следим за изменениями в списке статей (например, при добавлении новых)
    const observer = new MutationObserver(updateMainArticle);
    observer.observe(articlesList, { childList: true });
  });
  