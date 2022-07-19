import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');
    const lazyImage = document.querySelectorAll('.gallery__image');
    
    lazyImage.forEach(img => {
    img.loading = 'lazy';
    })   
}
else {
    const script = document.querySelector('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossorigin = 'anonymous';
    script.referrerpolicy = 'no-referrer';

    document.body.appendChild(script);

    const lazyImage = document.querySelectorAll('.gallery__image');
    lazyImage.forEach(img => {
       img.classList.add('lazyload');
       img.dataset.src = img.src;
       }) 
}

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






