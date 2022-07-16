import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalaryHtml(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup)

function createGalaryHtml(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" target="_self" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
}

galleryEl.addEventListener("click", onModal);

function onModal(eve) {
  eve.preventDefault()
  if (!eve.target.classList.contains('gallery__image')
  ) {
    return;
  }
const instance = basicLightbox.create(`<img src="${eve.target.dataset.source}">`);
  instance.show();
};