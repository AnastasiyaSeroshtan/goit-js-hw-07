import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');


function createGalleryItemMarkup(image) {
  return galleryItems.map(({preview, original, description}) =>
  {return  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`}).join('');
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
    const script = document.createElement('script');
    script.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.crossOrigin="anonymous";
    script.referrerPolicy="no-referrer"

    document.body.appendChild(script);

    const lazyImage = document.querySelectorAll('.gallery__image');
    lazyImage.forEach(img => {
       img.classList.add('lazyload');
       img.dataset.src = img.src;
       }) 
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: '250',
captionPosition: 'bottom', captionsData: "alt"});

