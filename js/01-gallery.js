import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
// console.log(galleryContainer);

function createGalleryItemMarkup(image) {
  return galleryItems.map(({preview, original, description}) =>
  {return  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join('');
}

const galleryImage = createGalleryItemMarkup(galleryItems);
// console.log(galleryImage);

galleryContainer.insertAdjacentHTML('beforeend', galleryImage);

galleryContainer.addEventListener('click', handleGalleryContainerClick);

function handleGalleryContainerClick(event) {
    event.preventDefault();
  console.log(event.target);
  const descriptionValue = event.target.dataset.source;
  console.log(descriptionValue);

  const modal = basicLightbox.create(`
<img src="${descriptionValue}">`)

modal.show()
}

// import * as basicLightbox from 'basiclightbox'




