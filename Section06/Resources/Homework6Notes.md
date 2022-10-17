1.  Use the [Savvy Starter Template](https://github.com/savvy-coders/savvy-starter) to create a new GitHub repo for our practice SPA.

2.  Clone the repo to your machine.

3.  Update the `README` to reflect that this is a practice SPA.

4.  Update `package.json`:

    - in `scripts` add the following code:

    ```json
    "parcel-build": "parcel build index.html && cp _redirects ./dist/",
    "serve": "parcel index.html"
    ```

5.  In your terminal, `cd` in your new repo, and instal Parcel as a development dependency by running this command: `npm install -d parcel`

6.  In the project root, create a `_redirects` file with the following line of code in it:

    ```javascript
    /* /index.html 200
    ```

7.  Replace the default `index.html`, `index.js`, and `style.css` starter files with the content from `6.2-Activities` in the curriculum.

8.  In the root, create a `components` folder with the following files inside:

    - Header.js
    - Nav.js
    - Main.js
    - Footer.js
    - index.js

9.  Cut each appropriate section from your `index.html` and paste it into a template literal in its corresponding file in `components`:

    - `<header>` --> Header.js
    - `<nav>` --> Nav.js
    - all other `<section>`s and the `<form>` --> Main.js
    - `<footer>` --> Footer.js

10. Nothing should be left inside the `<body>` of your HTML except your `<script>` tag. In the body section, above the script tag, create a `<div>` with an id of "root".

11. Back in the JS files in our `components` folder, we need to `export` our template literals as a **functional component**.

    1. First, import "html-literal", and use arrow syntax ( `() =>` ) to modify the template literal to become the output of a one-line function: -

    ```javascript
    // before
    `HTML template literal`;

    // after
    import html from "html-literal";
    () => html`HTML template literal`;
    ```

    2. Then, `export` the function as the `default` export:

    ```javascript
    export default () => html`HTML template literal`;
    ```

    3. Repeat for each JS file in `components` (except `index.js`)

12. Each file (except `index.js`) in our `components` folder is now a **functional component** JS module.
    Next we want to _aggregate_ our components in `components/index.js` so we don't have to access each and every module directly. For each module, use the _aggregator shorthand syntax_ to both import and export the module in one line. Alias each `default` export as the module name:

    ```javascript
    export { default as Module } from "./Module";

    //  Example
    export { default as Header } from "./Header";
    ```

13. We have our functional components all set up, but nothing is using or importing them yet. In the "main" `index.js` at the root level our the repo, let's `import` our functional components.

    ```javascript
    // importing all as a Module object
    import * as components from "./components";

    // importing all by name
    import { Header, Nav, Main, Footer } from "./components";
    ```

14. To get our website to finally appear in the browser, we need to create a render function in our root `index.js` that calls our functional components.

    1. declare a `function` named `render`
    2. inside the function, query the DOM for the `root <div>` and set its `innerHTML` property to a template literal.
    3. inside the template literal, call each of the functional components in the order you want them to appear on the page
    4. call `render` in the body of `index.js`

    ```javascript
    function render() {
      document.querySelector("#root").innerHTML = `
          ${Header()}
          ${Nav()}
          ${Main()}
          ${Footer()}
        `;
    }

    render();
    ```

15. Next, Let's break up our `components/Main.js` into separate views much like we broke up the body of our starter HTML.

    1. Inside `components`, create a new folder named `views`

    2. Inside `views`, create a JS file for each view/"main" section/page

       - Home.js (`section #jumbotron`)
       - Bio.js (`section #bio`)
       - Pizza.js (`section #pizza`)
       - Order.js (`section <form></form>`)

    3. Cut each section from the template literal inside `Main.js` and paste it into a template literal inside its corresponding JS file inside `views`.
       The template literal inside `Main.js` should eventually be empty when each section has been moved to `views`.

    4. in the JS files in our `views` folder, we need to import "html-literal", and`export` our template literals as _functional components_

    5. create an `index.js` file inside `views` that aggregates our 'views' modules

    6. inside `components/Main.js`, import all of the `view` functional components as `views`; and inside the template literal, call each functional component you want to appear from the `views` Object:

       ```javascript
       import html from "html-literal";
       import * as views from "./views";

       export default () => html`
         ${views["Home"]()},
         ${views["Bio"]()},
         ${views["Pizza"]()},
         ${views["Order"]()}
       `;
       ```

In the end, our stateless SPA could have a folder structure that looks about something like this example here below.

Below is an example of what our stateless SPA file structure could possibly look like (Ignore anything that was not covered in class. This is **_only an example_** so don't freak out or loose your minds.):

![Stateless SPA Structure](img/Stateless-SPA_Example.png)

<br>

---
