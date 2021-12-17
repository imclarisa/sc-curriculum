export default function printFormOnSubmit(form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    Array.from(event.target.elements).forEach(el => {
      console.log("Input Type: ", el.type);
      console.log("Name: ", el.name);
      console.log("Value: ", el.value);
    });
  });
}
