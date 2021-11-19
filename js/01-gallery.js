import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const imagesCreated = onCreateGallery(galleryItems);

gallery.addEventListener("click", onMakeModal);

function onCreateGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}" 
      alt="${description}"/>
      </a>
      </div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", imagesCreated);

function onMakeModal(event) {
    event.preventDefault();

    const isImageLink = event.target.classList.contains("gallery__image");
    if (!isImageLink) {
        return;
    }

    let selectedImage = event.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${selectedImage}" width="800" height="600">`
    );

    instance.show()


    document.addEventListener("keydown", onEscKeyPress);

    function onEscKeyPress(event) {
        const ESC_KEY_CODE = "Escape";

        if (event.code === ESC_KEY_CODE) {
            instance.close();
        }
    }
}