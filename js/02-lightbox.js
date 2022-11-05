import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryOfObjects = galleryItems
    .map((image) => `
    <div class="gallery__item">
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
    </div>`)
    .join("");

gallery.insertAdjacentHTML("afterbegin", galleryOfObjects);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: "250"
 });