import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

function createGalleryItemMarkup(image) {
  return galleryItems.map(({preview, original, description}) =>
  {return  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join('');
}

const galleryImage = createGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImage);

// galleryContainer.addEventListener('click', handleGalleryContainerClick);
