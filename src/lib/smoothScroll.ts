export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
  
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
};

export const registerSmoothScrolling = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetId = href.substring(1);
      smoothScrollTo(targetId);
    }
  });
};
