const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
let previousFocus = null;

function openGraphic(button) {
  previousFocus = button;
  lightboxImage.src = button.querySelector('img').src;
  lightboxImage.alt = button.querySelector('img').alt;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.close').focus();
}

function closeGraphic() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
  if (previousFocus) previousFocus.focus();
}

document.querySelectorAll('.work').forEach((button) => {
  button.addEventListener('click', () => openGraphic(button));
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeGraphic();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeGraphic();
});
