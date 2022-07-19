import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

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
galleryContainer.insertAdjacentHTML('beforeend', galleryImage);

galleryContainer.addEventListener('click', handleGalleryContainerClick);

function handleGalleryContainerClick(event) {
    event.preventDefault();
  
    if (!event.target.classList.contains('gallery__image')) {
    return
    }
    else {
    const descriptionValue = event.target.dataset.source;

    const modal = basicLightbox.create(
    `<img src="${descriptionValue}">`,
    {onShow: () => {window.addEventListener('keydown', handleEscPress)},
    onClose: () => {window.removeEventListener('keydown', handleEscPress)}
})
    modal.show();

    function handleEscPress (event) {
    if (event.code === "Escape") {
        modal.close()}
}
}
}






