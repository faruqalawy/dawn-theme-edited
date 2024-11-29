document.addEventListener('DOMContentLoaded', function () {
  const galleryElements = document.querySelectorAll('.product-image');

  const items = Array.from(galleryElements).map(link => ({
    src: link.getAttribute('href'),
    w: parseInt(link.getAttribute('data-pswp-width'), 10),
    h: parseInt(link.getAttribute('data-pswp-height'), 10),
  }));

  galleryElements.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const pswpElement = document.querySelector('.pswp');

      const options = {
        index: index,
        bgOpacity: 0.8,
        showHideOpacity: true,
      };

      const lightbox = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      lightbox.init();
    });
  });
});
