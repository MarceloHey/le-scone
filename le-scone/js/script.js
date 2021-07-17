function animaScrollInit() {
  const containers = document.querySelectorAll('.container');
  const windowHalf = window.innerHeight * 0.6;
  function animaScroll() {
    containers.forEach((container) => {
      const containerTop = container.getBoundingClientRect().top - windowHalf;
      if (containerTop < 0) {
        container.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', animaScroll);
  animaScroll();
}
animaScrollInit();
