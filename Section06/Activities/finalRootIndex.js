import { Header, Nav, Main, Footer } from "./components";

import {
  AddPicturesToGallery,
  GalleryPictures,
  PrintFormOnSubmit,
} from "./lib";

function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
  `;

  addEventListeners();
}

render();

function addEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // populating gallery with pictures
  const gallerySection = document.querySelector("#gallery");
  // using modules to populate gallery with pictures
  AddPicturesToGallery(GalleryPictures, gallerySection);

  // handle form submission with PrintFormOnSubmit module
  const form = document.querySelector("form");
  PrintFormOnSubmit(form);
}
