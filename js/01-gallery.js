import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
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

gallery.addEventListener("click", handleClick);

function handleClick(event) { 
    event.preventDefault();

    const instance = basicLightbox.create(`
     <img src=${event.target.getAttribute("data-source")} alt="${event.target.getAttribute("alt")}" >
    `)

    instance.show()
    
    document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) instance.close();
  })
};

