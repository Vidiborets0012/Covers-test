const coversSection = document.querySelector('.covers');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Додаємо клас для запуску анімації
      coversSection.classList.add('animate');
    } else {
      // Видаляємо клас, якщо секція вийшла з видимості
      coversSection.classList.remove('animate');
    }
  });
});

observer.observe(coversSection);
