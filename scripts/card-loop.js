const items = document.querySelectorAll('.article-container');

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
items.forEach((item, index) => {
    const newClass = classSequence[index % classSequence.length];

    item.style.display = ''; 

    if (Array.isArray(newClass)) {
        item.classList.add(...newClass); 
    } else {
       
        item.classList.add(newClass);
    }
});