import { Header, Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
  `;

  afterRender();
}

render();

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // handle form submission with PrintFormOnSubmit module
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    Array.from(event.target.elements).forEach((el) => {
      console.log("Input Type: ", el.type);
      console.log("Name: ", el.name);
      console.log("Value: ", el.value);
    });
  });
}
