import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__link">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
  )
  .join("");

listEl.insertAdjacentHTML("beforeend", markup);
listEl.addEventListener("click", onListClick);

function onListClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
