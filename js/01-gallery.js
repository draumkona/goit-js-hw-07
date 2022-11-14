import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance = basicLightbox.create(`<img src="" alt=""`);

const galleryOfObjects = galleryItems
    .map((image) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"/>
        </a>
    </div>`)
    .join("");

gallery.insertAdjacentHTML("afterbegin", galleryOfObjects);

function handleClick(event) { 
     if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault();

    instance = basicLightbox.create(`
     <img src=${event.target.getAttribute("data-source")} alt="${event.target.getAttribute("alt")}" >
    `);

    instance.show();
};

gallery.addEventListener("click", handleClick);

document.addEventListener("keydown", (event) => {
    console.log('fngjg')
    if (event.key === "Escape" && instance.visible()) instance.close();
});