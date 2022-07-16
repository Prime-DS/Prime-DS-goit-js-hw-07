import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const result = createLi(galleryItems);

function createLi(galleryItems) {
    return galleryItems.reduce((acc,item)=> acc + `<a class="gallery__item" href="${item.original}" target="_self">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,"")
};

galleryEl.insertAdjacentHTML('beforeend', result)

let gallery = new SimpleLightbox('.gallery__item', {
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,
    animationSpeed: 250,
    overlayOpacity: 0.4,
    widthRatio: 0.9,
});