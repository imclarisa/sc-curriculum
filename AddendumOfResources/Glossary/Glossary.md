# Glossary

## Introduction (Agile, Project Planning, Dev Tools, Languages)

---

### Agile

| Term        | Definition  |
| ----------- | ----------- |
| Scrum     | A framework that helps teams work together. This framework includes scrum artifacts, ceremonies, and roles.      |
| Scrum Artifacts | Include Product Backlog, Sprint Backlog and Increment; these represent work or value and are designed to maximize transparency of key information.        |
| Product Backlog   | An emergent, ordered list of what is needed to improve the product and is the single source of work undertaken by the Scrum team.       |
| Sprint Backlog   | Composed of the sprint goal, the set of Product Backlog items selected for the sprint, as well as an actionable plan for delivering the Increment.       |
| Increment (Sprint Goal)   | A concrete stepping stone toward the Product Goal where each increment is additive to all prior Increments and thoroughly verified, ensuing that all Increments work together.       |
| Scrum Ceremony   | Sprint Planning, Daily Stand-up, Iteration review, retrospective,         |
| Daily Standup   | A meeting with the purpose of inspecting progress towards the Sprint Goal and adapt the Sprint Backlog as necessary.        |
| Sprint   | Fixed length events of one month or less to create consistency, a new sprint starts immediately after the conclusion of the previous Sprint.        |
| Sprint Planning   | Initiates the Sprint by laying out the work to be performed for the Sprint. This resulting plan is created by the collaborative work of the entire Scrum Team.       |
| Sprint Review   | Inspects the outcome of the Sprint and determines future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.      |
| Sprint Retrospective   | The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness.  The Scrum Team discusses what went well during the Sprint, what problems it encountered, and how those problems were (or were not) solved.      |
| Scrum Roles  | Scrum has three roles: product owner, scrum master and the development team members.        |
| Scrum Master  | The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice, both within the Scrum Team and the organization.       |
| Product Owner   | The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. How this is done may vary widely across organizations, Scrum Teams, and individuals.      |
| Development Team   | Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint.      |

These terms and a more in-depth look into Agile can be found here: [Agile Glossary](https://scrumguides.org/scrum-guide.html)

### Project Planning

| Term        | Definition  |
| ----------- | ----------- |
| Definition of Audience   | Mentor & Peers, Recruiters & Career Coaches, Hiring Managers, Ultimately the consumer of your product        |
| Definition Statement   | A declaration of the purpose of your project (I want to create a web application that...)        |
| Elevator Pitch   | A high level story you want to tell with your project ("I want to create a web APPLICATION that allows users to ask questions via chat during a talk and add resources to videos.")      |
| Jira   | Software the allows users to create Kanban boards|
| Mobile First Layout   | Creating an application that is designed for mobile that is then adapted to be viewed on tablet and desktop devices.        |
| Responsive Web Design   | Responsive design starts on the desktop; that is, at the maximum required resolution, and then scales down to the smallest screen. Per [Darwin Digital - Mobile vs Responsive](https://darwindigital.com/mobile-first-versus-responsive-web-design/), Responsive is preferred as more users are still on desktop or tablets, not phones.     |
| Navigation   | How the user navigates through the various pages of the application       |
| SWOT Analysis   | A SWOT anaylsis, is a method to evaluate the viability of a project by looking at the above four areas.        |
| UserFlow   | [Sample User FLow](../../Section01/img/SWOTgrid.png)      |
| User Stories   |  A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.        |
| Wire Frames   | Wireframes are used to design (and define) the form and function of an application, usually a web application or smartphone app in our case.       |

### Essential Dev Tools

| Term        | Definition  |
| ----------- | ----------- |
| CLI (Command Line Interface)  | In a command line interface (A.K.A. "Console", "Command Line", "Terminal", or "Shell"), the user types commands using the keyboard to tell the computer to take an action. The computer will display the results of the operation by writing text to the screen.      |
| CLI Commands   | See [Section 1.5-GitandGitHub](../../Section01/1.5-GitandGitHub.md) in curriculum.       |
| GIT (Global Information Tracker)   | A mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel.        |
| Github   | A cloud-based hosting service that lets you manage Git repositories.     |
| git Commands   | See [Section 1.5-GitandGitHub](../../Section01/1.5-GitandGitHub.md) in curriculum.       |
| npm (Node Package Manager)   | Node Package Manager (npm) is our dependency-management system.      |
| VS Code   | A modular editor built for web development, maintained by Microsoft, and contributed to by a large Open Source community.    |
| Chrome Dev Tools    | We can use Chrome's Dev Tools to play around with JS in our browser. Open those tools up with either "Ctrl + Shift + I" on Windows or "Cmd + Option + I" on Mac.       |

### Languages

| Term        | Definition  |
| ----------- | ----------- |
| JavaScript   | JavaScript (JS) is the most applicable, powerful and flexible language in the world today - no other language in the world allows us to work natively in the browser (client side) while also on the server (NodeJS) while also creating super-fast web-based applications (Single Page Applications - SPAs - Angular or React or Vue) while also using the same code to create native desktop applications (Electron) while also creating native mobile apps (React Native or NativeScript)!    |
| HTML   | A markup language for describing the structure and content of web documents/pages.        |
| CSS   | CSS is the language we use to style an HTML document.       |
| Markdown   | A simple markup language for formatting text.     |

## JavaScript

---

### Data Types

| Term        | Definition  |
| ----------- | ----------- |
| Primitives   | Data types that can only hold one discrete piece of data.        |
| String   | Strings are characters contained inside single ( `''` ) or double ( `""` ) quotation marks.      |
| Number   | Numbers are any numbers not contained in quotation marks. JS does not differentiate between integers (whole numbers) and floating point numbers (decimals).        |
| Boolean   | Booleans can be one of only two values: `true` or `false`. Booleans are not wrapped in quotation marks.     |
| Undefined   | Undefined should never be deliberately assigned. Undefined is used by JS to indicate the absence of any assigned value. All variables start with a value of `undefined` until they are assigned a value with the assignment operator ( `=` ).       |
| Null   | null - If we want to indicate that a variable is "blank" on purpose, we explicitly assign the variable a value of `null`.       |
| typeOf Operator   | You can check / get the type of data for any primitive by using the `typeof` operator       |

### Variables

| Term        | Definition  |
| ----------- | ----------- |
| Variable   | The concept of 'instantiating a variable' ( `const`, `let` ) and 'assigning a value to a variable' ( `=` ) is to create 'references' to the values in memory.      |
| const vs let   | A variable created with `const` cannot be reassigned with a new value. A variable created with `let` can be mutated (changed) and/or reassigned.        |
| Assignment Operator   | The assignment operator ( `=` ) is used to link variables to the values they reference.       |
| Dynamic Typing   | The data type of a variable does not have to be explicitly stored, meaning stored data of any type can be replaced with any other type of data.        |
| Template Literals   | Wrapping a string with a pair of backticks( ` `` ` ) allows the use of variable and single and double quotations inside of the string.        |

### Operators and Flow Control

| Term        | Definition  |
| ----------- | ----------- |
| Mathematical Operators    | Operators used with numbers to do basic math (Addition (`+`), Subtraction( `-` ), Division( `/` ), Multiplication( `*` ), Exponent( `**` ), Modulo( `%` )).       |
| Data Coercion   |  JS does its best to coerce data types into whatever it sees fit for a given situation. In the case of the operator ( `+` ), if there are any string operands it attempts to convert each operand into a string. JS wants to 'combine' strings before it tries to 'add' numbers.        |
| Comparison Operators   | Operators used to compare two primitive values and return a boolean (Greater Than( `>` ), Less Than( `<` ), Greater Than or Equal To ( `>=` ), Less Than or Equal To ( `<=` )).       |
| Equality Operators   | Compares expressions to see if they are equal to each other.      |
| Strict Equality Operators   | Strict comparisons are only true if the expressions are of the same type and the contents match. (Strict Equality( `===` ) and Strict Inequality( `!==` ))         |
| Fuzzy Equality Operators   | Abstract (or 'Fuzzy') comparisons converts the expressions to the same type before comparison. (Fuzzy Equality( `==` ) and Fuzzy Inequality( `!=` )).       |
| If... Else Statements   | The if statement executes a statement if a specified condition is true. Else, if the condition is false, another statement can be executed.       |
| Truthy/Falsy    | Non-boolean primitive types are coerced into being true or false. We describe this as values having 'truthiness' or 'falsiness' - or we say that a value is truthy or falsy. Almost all values in JS are coerced to truthy. There are only 6 non-boolean primitives that are falsy : `0`, `""` (any empty string), `false`, `undefined`, `null`, `NaN`       |
| Ternary/Conditional Operator   | A one-line shortcut for simple `if` statements. For an example, click here: [Ternary/Conditional Operator](../../Section02/2.3-JSOperatorsAndFlowControl.md#the-ternary--conditional-operator)        |
| Logical Operators   | Logical Operators evaluate two boolean values and return a single boolean. And( `&` ), Or( `||` ), Not( `!` )       |
| Loops   | Code that executes repetitive 'task' until a condition is met that stops the loop.        |
| While Loop   | The `while` loop will repeatedly check its conditional expression and continue to run its code block as long as it evaluates to true. For an example of a `while` loop, click here: [While Loop](../../Section02/2.3-JSOperatorsAndFlowControl.md#while-loop)        |
| For Loop   | Much like the `while` loop, except that the syntax is a bit more compact and the iterator variable is inside the `for` loop itself. For an example of a `for` loop, click here: [For Loop](../../Section02/2.3-JSOperatorsAndFlowControl.md#for-loop)       |

### Functions

| Term        | Definition  |
| ----------- | ----------- |
| Function   | Broad Use: We use functions to 'wrap up' some code and give it a name so that we can just invoke it 'upon demand.' This means less repetitive code. In JS, we should consider "function" to take the broader meaning of another related term: "procedure". A procedure is a collection of statements that can be invoked one or more times, may be provided some inputs, and may give back one or more outputs.         |
| Function Declaration   | JS functions start with the function keyword, followed by parentheses for the function's arguments or parameters, followed by braces that define the function's scope (the code that will run when the function is called or invoked). This can be done with either function expressions or function declarations.     |
| Function Invocation   | To invoke a function, use the parentheses after the name of the stored function (e.g. myFirstFunction()). This runs that code inside of the curly braces.         |
| Function Return   | The return statement ends function execution and specifies a value to be returned to the function caller. If we don't include an explicit return, then function returns undefined.        |
| JS Parameters   | Named parameters give our inputs (arguments) variable names while the function is running. We use a named parameter for each of the arguments that we expect to receive.        |
| JS Rest Parameter(...)   | The rest parameter syntax allows us to represent an indefinite number of arguments as an array. A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within an array. Only the last parameter can be a "rest parameter".       |
| Scope   | Scope is the current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.       |
| Composing Functions   | Composing functions occurs when we use the return value of a function as an argument for another function.        |
| Modularity   | Modular code is written in such a way that each piece of functionality is separated into a function and then composed in various ways to extend an app's features and functionality (extensibility).        |
| Callback Functions   | A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.        |
| Arrow Syntax   | An arrow function expression is a syntactically compact alternative to a regular function expression, although without access to some keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.       |

### Data Collections

| Term        | Definition  |
| ----------- | ----------- |
| Primitive vs Complex   | Primitive data types are meant to represent a single piece of discrete data. Complex or Composite data types represent collections of data. The Complex data types of JavaScript are Array and Object.        |
| Arrays    | Arrays are another type of 'built-in' Object. Arrays and Object Literals share many similarities.        |
| Indexing   | Arrays are also zero-indexed, which means that the first piece of data in the collection has a position of 0 (instead of 1).        |
| Length   | One of the most useful properties of Arrays is `length`, which is the number of elements in that array.        |
| for... of loops   | A loop that iterates over the elements of an array. For an example, click here: [`for...of` loops](../../Section03/3.2-DataCollections.md#forof-loops)       |
| Objects   | Objects are collections of data just like Arrays, but we can access data by name/key instead of sequence. Keys are themselves arbitrary Strings that you're free to make up as you see fit.        |
| Properties   | The key-value pairs inside of an object.        |
| Bracket Notation vs Dot Notation   | How to access data inside Objects, to see an example of each, click here: [Accessing Properties](../../Section03/3.2-DataCollections.md#accessing-properties)       |
| Methods   | When we scope a function inside of an object literal, we call this a method.       |
| Global Window Object   | `window` is the global object within the browser. `window` is a part of the Browser Object Model (BOM). Within the BOM, `window` 'wraps up' all of the built-in JS functionality that we have access to within the browser.        |
| Mutation   | A mutable is a type of variable that can be changed. In JavaScript, only Objects and Arrays are mutable. Immutables are objects whose state cannot be changed once the object is created. Primitive values are immutable - they cannot be changed.        |
| Reference vs Value   | [Reference & Value](../../Section03/3.2-DataCollections.md#reference--value)     |
| Passing Reference vs Value   | [Pass by Reference & Value](../../Section03/3.2-DataCollections.md#reference--value)       |

### String & Array Methods

| Term        | Definition  |
| ----------- | ----------- |
| String Methods   | JavaScript has a range of methods for doing String manipulation operations, such as `.toUpperCase()` and `.indexOf`. To review other string methods and to see examples, click here: [String Methods](../../Section04/4.2-ArrayMethods1.md#useful-string-methods)        |
| Array Properties   | Helps to use collections of data more effectively, such as `.length`.        |
| Array Methods   | Helps to use collections of data more effectively, such as `.push()`.        |
| Examples of Basic Array Methods  | To see examples and review syntax of Array Methods like `.push()`, click here: [Basic Array Methods](../../Section04/4.2-ArrayMethods1.md#adding-an-item-with-push-and-unshift)        |
| Examples of Complex Array Methods   | To see examples and review syntax of Array Methods like `.forEach()` and `.map()`, click here: [Complex Array Methods](../../Section04/4.3-ArrayMethods2.md#more-array-methods)        |

### JS and the DOM(Document Object Model)

| Term        | Definition  |
| ----------- | ----------- |
| DOM (Document Object Model)   | Connects web pages to scripts or programming languages by representing the structure of a document. An example is the HTML representing a web page — in memory.        |
| DOM Methods   | To begin interacting with the HTML document, we first need to select some piece of the DOM. We can find elements by their HTML tag name, class name, or ID. To review, click here: [Selecting HTML Elements](../../Section04/4.1-DocumentObjectModel.md#dom-methods)      |
| DOM Tree   | The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.        |
| Node Tree   |  The nodes in the node tree have a hierarchical relationship to each other, and the terms parent, child, and sibling are used to describe the relationships. In a node tree, the top node is called the root node. Every node has exactly one parent, except the root (which has no parent). A node can have a number of children. Siblings are nodes with the same parent.       |
| Example of DOM Tree     | [DOM Tree Example](../../Section04/4.1-DocumentObjectModel.md#dom-tree-example)        |
| Accessing Elements via Node Relationships   | `.children`, `.firstElementChild`, `.lastElementChild`, `.nextElementSibling`, `.parentElement` are node properties used to navigate between nodes.        |
| Node Properties   | To review which node properties are used to access different pieces of the element node, such as `.outerHTML` and `.innerHTML`, click here: [Node Properties](../../Section04/4.1-DocumentObjectModel.md#changing-html-elements)        |
| Adding & Removing Elements   | To add a new HTML element to the DOM, you must first create the new element before appending it. Use the following DOM methods to add or remove elements: `.createElement()`, `.appendChild()`, `.removeChild(child)`, `.remove()`. To review examples, click here: [Adding/Removing Elements](../../Section04/4.1-DocumentObjectModel.md#adding--removing-elements)           |
| Events & Event Handling   | Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.        |
| Common Events   | `click` and `dblclick`, `mousedown` and `mouseup`, `mouseover` and `mouseout`, `focus` and `blur`, `keydown` and `keyup` and `keypress`       |
| Event Listeners   | "Handlers", to review syntax and see and example of `.addEventListener()`, click here: [Event Listeners](../../Section04/4.1-DocumentObjectModel.md#addingremoving-event-listeners)        |

### Object-Oriented Programming (OOP)

| Term        | Definition  |
| ----------- | ----------- |
| Object-Oriented Programming (OOP)   | Organizing code structures around Objects rather than functions is called Object-Oriented Programming (OOP).        |
| Methods   | If a `function` is attached to an Object, we refer to that `function` as a method.        |
| this   | `this` refers to the calling context - or parent Object - of a function. For an example, click here [Methods and the this keyword in Javascript OOP](../../Section05/5.2-JavaScriptClasses.md#methods-and-the-this-keyword-in-javascript-oop)       |
| function constructors   | A function Constructors is used as a kind of "template" for creating a category of things instead of, creating just a specific single instance of a thing (like with an Object literal).        |
| Object.prototype   | [The Object.prototype](../../Section05/5.2-JavaScriptClasses.md#the-objectprototype)        |
| Inheritance   | A Javascript Class can therefore be thought of as a parent. The children inherit information from the parent class. For more detail, click here: [Inheritance](../../Section05/5.2-JavaScriptClasses.md#inheritance)       |
| Over-writting   | Because JS checks the Object itself for a property before checking the prototype, we can "overwrite" a prototype property / method for that particular instance by declaring it on the instance directly. For an example, click here: ["Overwriting" prototype Properties](../../Section05/5.2-JavaScriptClasses.md#overwriting-prototype-properties)        |
| class   | A Class is the blueprint from which individual objects are created. A class is a template for creating objects. Inside the object that you create, code is written that allows you to work with the object data. This code is written inside curly brackets and is known as the body of the class. For an example, click here: [Creating Javascript Objects with the class keyword](../../Section05/5.2-JavaScriptClasses.md#creating-javascript-objects-with-the-class-keyword)      |
| extend   | A major benefit of the class keyword is the ability to extend a class, adding to the prototype chain and allowing new classes to inherit behavior from classes they extend.        |
| super() and constructor()   | To see the purpose of super() and constructor(), as well as examples, click here: [Creating Javascript Objects with the class keyword, bullet points](../../Section05/5.2-JavaScriptClasses.md#inheriting-behavior-with-the-extend-keyword)         |

### Unit Testing (Dev Note, not sure if this is exactly where we want to put this section)

| Term        | Definition  |
| ----------- | ----------- |
| Functional Tests   | There are several different kinds of tests, like unit tests, integration tests, or end-to-end tests, but all functional tests do the same basic thing: they try something and report PASS or FAIL.        |
| Unit Testing   | Unit testing is a type of testing which is found at the bottom of the software testing pyramid. It involves breaking the codebase down into smaller parts (or units) and testing those in isolation.        |
| Jasmine   | Jasmine is a very popular JavaScript behavior-driven development (BDD) framework for unit testing JavaScript applications. It provides utilities that can be used to run automated tests for both synchronous and asynchronous code.      |
| Arrange-Act-Assert   | Arrange-Act-Assert is a great way to structure test cases. The "AAA - pattern" forces tests to focus on independent, individual behaviors.       |

|    | Text        |

## HTML/CSS

---

### Basics of HTML and CSS

| Term        | Definition  |
| ----------- | ----------- |
| "Text Content"   | The 'text content' is what we see on the page, and the tags describe or 'mark up' that text to give it structure.        |
| Tags   | HTML tags are keywords (tag names) surrounded by angle brackets: `<html>`, HTML tags normally come in pairs like: `<p>` and `</p>` with the first tag in a pair being the start tag while the second tag is the end tag.        |
| HTML Tags and Attributes  | View Examples of Tags and Attributes here: [Tags and Attributes Examples](../../Section03/3.3-HTMLAndCSSBasics.md#html-boilerplate)     |
| class and id attributes   | `class` and `id` are two global attributes that can be attached to any element in order to select and access specific elements. You can create as many classes and IDs as you need, and you can use each class as many times as you need, but each ID should only be used once.        |
| `<div>` and `<span>` section tags   | The `<div>` element is a generic **block** element which defines a section of your page. The `<span>` element is a generic **inline** element which defines a section of your page.       |
| Three ways to give HTML Content Some Style   | inline styles, style tags, stylesheets       |
| Basic CSS Selectors   | `*`, `elementName`, `.className`, `#idName`. To review syntax, click here: [General CSS Syntax](../../Section03/3.3-HTMLAndCSSBasics.md#general-css-syntax)        |
| Complex CSS selectors   | As our documents grow, we'll need to leverage more complex CSS selection syntax. To review, click here: [Complex CSS selectors](../../Section03/3.3-HTMLAndCSSBasics.md#complex-css-selectors)        |
| Pseudo-class and Pseudo-elements   | There are some selectors that can be used to make some very basic calculations about the state of your markup, and add styles accordingly. To review: click here: [Pseudo-class and Pseudo-elements](../../Section03/3.3-HTMLAndCSSBasics.md#pseudo-classes-and-pseudo-elements)        |

### Intermediate HTML & CSS

| Term        | Definition  |
| ----------- | ----------- |
| `<form>` and `<input>` tags   | A `<form>` tag and one or more `<input>` tags are the bare minimum required for an HTML form.    |
| action and method   | In the HTML `<form>` tag, the action attribute specifies where on the server to send the data submitted from the form. The `<method>` attribute takes one of three values: `get`, `post`, or `dialog`.       |
| attributes: for and name   | For definition, context and examples, click here: [The `<label>` & `<input>` attributes: `for` & `name`](../../Section05/5.1-IntermediateHTMLAndCSS.md#the-label--input-attributes--for--name)       |
| Media Query   | A media query is composed of an optional media type and any number of media feature expressions. The media query "wraps up" some CSS rules that will only apply to the page if the media type and features evaluate to `true`.       |
| Media Types   | The different Media types (`all`, `print`, `screen`, `speech`) describe the general category of a given device. By default the media type is `all`, so specifying a media type is optional.       |
| Media Features   | Media features describe the specific characteristics of a given user agent, output device, or environment.       |
| Element Positioning   | CSS has a built-in `position` property that can be used to alter the position of your HTML elements. For more about `position` properties, click here: [FYI: CSS Element Positioning](../../Section05/5.1-IntermediateHTMLAndCSS.md#fyi-css-element-positioning)       |
| Flexbox   | Flexbox was designed as a one-dimensional layout model, and as a method that aligns and spaces items on a webpage. For examples of Flexbox and more on the Flex Container, click here: [Flexbox and Grid](../../Section05/5.1-IntermediateHTMLAndCSS.md#flexbox-and-grid)        |
| CSS Units   | Units such as `px`, `em`, `rem` - For more information, click here: [CSS Units](../../Section05/5.3-CapstoneWork.md#css-units)        |
| Keywords vs Hexadecimal vs rgb   | The three most common ways to specify color in CSS. For more detail, click here: [Colors & CSS](../../Section05/5.3-CapstoneWork.md#colors--css)        |
| CSS Variables   | Developer (that's you!) created properties that allow the developer to reduce the chance for errors from mistyping or editing when dealing with color schemes. To read more, click here: [CSS Variables](../../Section05/5.3-CapstoneWork.md#css-variables)        |
| Stylesheet `normalize.css`   | To read more, click here: [Stylesheet `normalize.css`](../../Section05/5.3-CapstoneWork.md#stylsheet-normalizecss)        |
| Fonts   | To view in curriculum, click here: [Fonts](../../Section05/5.3-CapstoneWork.md#google-fonts)       |
| Collapsible Nav Bar --Hamburger-- element  | To read more about the functionality of the responsive icon that "sandwiches" our navigation links on smaller screens, click here: [Collapsible Nav Bar](../../Section05/5.3-CapstoneWork.md#collapsible-nav-bar---hamburger---element)        |
| Jumbotron/Hero   | For information about the Jumbotron/Hero section displayed on the Class SPA, click here: [Jumbotron/Hero](../../Section05/5.3-CapstoneWork.md#jumbotronhero--border-radius)     |

## SPAs (dev note, need to discuss how we want to hit definitions or if we just want this to be a reference to examples) Section 6

| Term        | Definition  |
| ----------- | ----------- |
| Single-Page Application (SPA)    | A SPA (Single-Page Application) is a web development implementation that allows users to use websites without requesting and loading new pages from a server. For more, click here: [What are Single-Page Applications](../../Section06/6.1-SPAIntro.md#what-are-single-page-applications)        |
| Search Engine Optimization (SEO)   | Search Engine Optimization (SEO) is one potential disadvantage of SPAs. Some SEO Web Crawlers cannot execute JavaScript and therefore cannot access the HTML inside SPAs functional components.       |
| SPA File Structure   | For a visual and more in depth explanation, including the purpose of each folder and its contents, click here: [SPA File Structure](../../Section06/6.1-SPAIntro.md#essential-file-structure-of-an-spa)       |
| Index Files   | [The Importance of Having index files](../../Section06/6.1-SPAIntro.md#the-importance-of-having-index-files)       |
| MVC Pattern   | For details on the Model View Controller pattern, click here [MVC Pattern - from MDN](https://developer.mozilla.org/en-US/docs/Glossary/MVC)       |
| MVU Architecture   | Based on the MVC pattern with the main difference being that MVU architecture maintains unidirectional (one-way) data flow.        |
| Model   | Model (state) - the current state of the application's data.       |
| View   | View (components/views) - the functional components that hold the HTML for displaying the site.        |
| Update   | Update (event listeners) - event listeners that handle user input and use it to alter the state/model.      |
| Modules   | Modules split JavaScript programs into separate "pieces"/modules that can be imported when needed.       |
| export statements   | For more detail, click here: [JS export statements](../../Section06/6.2-SPAComponents.md#js-export-statements)       |
| aggregating exports   | For definition and examples, click here: [Aggregating Exports](../../Section06/6.2-SPAComponents.md#aggregating-exports)      |
| import statements   | For more detail, click here: [JS import Statements](../../Section06/6.2-SPAComponents.md#js-import-statements)        |
| Aliasing   | Both import and export statements support aliasing or renaming the features as you import or export them. For an example, click here: [Aliasing](../../Section06/6.2-SPAComponents.md#aliasing)       |
| Data Model   | A data model emphasizes what data is needed and how it should be organized.        |
| State   | The data model for the current state of the application's data.      |
| Routing and Navigo   | For more detail, click here: [Routing and Navigo](../../Section06/6.3-SPAState.md#routing-and-navigo)        |
| State Driven SPA File Structure   | To view, click here: [State SPA File Structure](../../Section06/6.3-SPAState.md#for-a-step-by-step-model-to-help-you-create-your-spa-refer-to-this-document-in-the-curriculum)        |

## Backend Development

### Section 7

| Term        | Definition  |
| ----------- | ----------- |
| Asynchronous Functions   | For detailed explanation, click here: [Asynchronous Functions](../../Section07/7.2-APIsAndAxios1.md#asynchronous-functions-and-apis----working-with-time)        |
| AJAX web development techniques   | Asynchronous JavaScript And XML (AJAX) is how most JS applications interact with data: pulling information that can be handled by JavaScript from an Application Programming Interface (API).        |
| APIs   | For a detailed explanation, click here: [Introduction to web APIs - from MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)       |
| ReSTful JSON API   | The most common type of API you'll interact with as a web developer is a ReSTful (Responsive State Transfer) JSON API. This kind of API leverages the HTTP verbs that we've seen before in our work with forms (e.g. `GET`, `POST`, etc.), but uses a JavaScript-compatible data format instead of URL-encoded data.       |
| fetch API   | For more details, click here: [JS fetch API](../../Section07/7.2-APIsAndAxios1.md#javascript-fetch-api)       |
| Axios   | A third-party library that works like fetch except it works in and out of the browser, has more sensible defaults, and is just a bit more convenient for complex requests.       |
| Promise   | A Promise is created with the new keyword, and is given a callback function that is passed two parameters: a resolve function and a reject function, which handle the two possible outcomes of a Promise. For more, click here: [JS Promises](../../Section07/7.2-APIsAndAxios1.md#javascript-promises)       |
| Query Params   | For more detail, click here: [Query Params](../../Section07/7.2-APIsAndAxios1.md#query-params)      |
| Securing environment variables with `dotenv`   | For a detailed explanation, click here: [dotenv](../../Section07/7.2-APIsAndAxios1.md#securing-environmental-variables-with-dotenv)        |
| Order of root index.js file   | Guide for the order of root index.js can be found here: [Order Guide - index.js root](../../Section07/7.2-APIsAndAxios1.md#order-matters-in-the-root-indexjs-file-heres-a-guide)       |

### Section 8 and Section 9 - In Depth Backend

| Term        | Definition  |
| ----------- | ----------- |
| Application Architecture  | 3 Tier Application Architecture that is made up of 3 portions: presentation, application and data. For a visual representation and more explanation, click here: [3 Tier Application Architecture](../../Section08/8.1-BackendDevelopment.md#3-tier-application-architecture)      |
| Backend Development| Backend refers to the server side of the website; it is the portion of software that does not come in direct contact with the users. It stores and arranges data, and also makes sure everything on the client-side of the website works fine.        |
| Node.js   | In context of this cohort: [Node.js](../../Section08/8.1-BackendDevelopment.md#nodejs). Broader context: [Node.js - from MDN](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)       |
| REPL   | For more information, click here: [REPL](../../Section08/8.1-BackendDevelopment.md#repl)        |
| Global Object   | For more detail, click here: [Global Object](../../Section08/8.1-BackendDevelopment.md#global-object)        |
| Modules: CommonJS vs ES6   | For more detail, click here: [CommonJS vs ES6](../../Section08/8.1-BackendDevelopment.md#modules-commonjs-vs-es6)   |
| Built-in Modules    | Node.js contains a number of built-in modules that you can require and use in your code. There are different modules that you can bring in depending on what goal you're trying to accomplish. For more, click here: [Built-in Modules](../../Section08/8.1-BackendDevelopment.md#built-in-modules)       |
| HTTP and RESTful APIs in more depth  | [Click here](../../Section08/8.1-BackendDevelopment.md#http-and-restful-apis-in-more-depth)        |
| HTTP Servers   | For more details, click here: [HTTP Servers](../../Section08/8.1-BackendDevelopment.md#http-servers)        |
| Postman/Insomnia   | Text        |
| nodemon   | [Click here](../../Section08/8.1-BackendDevelopment.md#monitor-and-restart-your-server-with-nodemon)       |
| HTTP Methods - Safe vs Idempotent   | For details about the differences between "Safe" and "Idempotent" Methods, click here: [HTTP Methods](../../Section08/8.1-BackendDevelopment.md#http-methods)       |
| HTTP Methods - GET, POST, PUT, PATCH, DELETE  | For details about these methods, click here: [HTTP Methods](../../Section08/8.1-BackendDevelopment.md#http-methods) These are just the methods you'll encounter most, for an exhaustive list of HTTP methods, click this link to MDN here: [HTTP methods - from MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)       |
| API Servers (REST)  | For more detail, click here: [API Servers (REST)](../../Section08/8.1-BackendDevelopment.md#api-servers-rest)        |
| REST Principles  | Client-Server Separation, Statelessness, Cacheable Resources, Uniform Interface, Layered Architecture. For more detail, click here: [REST Principles](../../Section08/8.1-BackendDevelopment.md#rest-principles)        |
| Express server   | A toolkit for writing HTTP ReSTful APis. For details on how we build an express server, click here: [Building an Express Server](../../Section08/8.2-HTTP-Server-using-Express.md#building-an-express-server)        |
| `route()` method   | For details on routing with the `route()` method, click here:[Routing with the route() method](../../Section08/8.2-HTTP-Server-using-Express.md#routing-with-the-route-method)         |
| `request.params`   | For details on adding `request.params`, click here: [Adding request.params](../../Section08/8.2-HTTP-Server-using-Express.md#adding-requestparams)        |
| response methods   | For more details and context, click here: [response Methods](../../Section08/8.2-HTTP-Server-using-Express.md#response-methods)        |
| Middleware   | `express` is built around the idea of middleware. Middleware are functions that have access to the request and response Objects of their respective scopes.       |
| PORT   | For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.       |
| Database   | A database is a storing system that collects organized data, to make some works easier like searching, structure, and extend. In web development, most databases use the relational database management system (RDBMS) to organize data and programming in SQL. Some databases, however, don't follow the former mechanism to organized data, which called NoSQL.        |
| Structure Query Language (SQL)   | SQL (Structured Query Language) is a descriptive computer language designed for updating, retrieving, and calculating data in table-based databases.       |
| Relational Database Management System (RDBMS)   | For more detail, click here: [RDBMS](../../Section08/8.3-MongoDB-Config-and-Setup.md#sql--relational-database-management-systems)       |
| NoSQL   | A NoSQL (originally referring to "non SQL" or "non relational") database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.      |
| NoSQL Database Types   | Document, Graph, Key-value stores, Wide-column stores. For more detail, click here: [NoSQL Database Types](../../Section08/8.3-MongoDB-Config-and-Setup.md#nosql-database-types)        |
| CRUD | Create, Read, Update, Delete |
| MongoDB   | MongoDB is one of the most popular Document Store databases in the industry. Typically coming in just behind the top relational databases such Oracle, MySQL and Microsoft SQL Server.        |
| Defining a Schema and Model   | For more detail, click here: [Defining a Schema and Model](../../Section09/9.1-CRUD-Operations-Using-Express-Routes.md#defining-a-schema-and-model)     |
| Cross-Origin Resouce Sharing (Cors)   | Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own, from which a browser should permit loading of resources.        |
| The Front End | We used Netlify to deploy the public version of our single-page-app (frontend), but Netlify is built to serve primarily static content (like HTML, CSS, and JavaScript files) in what's called a "serverless" environment *. Serverless environments do not support the kind of long-running services that we've just written; as you might expect, it's difficult to deploy a "server" to a platform that is explicitly "serverless".|
| Heroku   | A platform for deploying git-based long-running processes. Heroku has the benefit of a MongoDB plugin that will make it easier to use the document database we build for our Pizza posts.        |
| Serverless Architecture   | A software design pattern where applications are hosted by a third-party service -- like Netlify-- eliminating the need for server software and hardware management by the developer. Also known as serverless computing or function as a service, FaaS.        |

### Unit Testing

| Functional Tests   | A test is a procedure that exercises a behavior to determine if the behavior functions correctly. All functional tests do the same basic thing: they try something and report PASS or FAIL.        |
| Unit Testing   | Unit testing is a type of testing which is found at the bottom of the software testing pyramid. It involves breaking the codebase down into smaller parts (or units) and testing those in isolation.        |
| Jasmine   | Jasmine is a very popular JavaScript behavior-driven development (BDD) framework for unit testing JavaScript applications. It provides utilities that can be used to run automated tests for both synchronous and asynchronous code.        |
| Arrange-Act-Assert   | For an example, click here: [Arrange-Act-Assert](../../Section10/10.3-Unit-Testing.md#arrange-act-assert-a-pattern-for-writing-good-tests)       |
| Why does Unit Testing Matter?   | Testing provides an empirical feedback loop for development. That’s how testing keeps us safe. With tests, we know when things break. Without tests, coding can be dangerous. For more reason, click here: [Reasons Why Unit Testing Matters](../../Section10/10.3-Unit-Testing.md)      |

## Job Preparation Tools

### Interview Prep

| Term        | Definition  |
| ----------- | ----------- |
| Whiteboarding   | [Whiteboarding example](../../Section07/7.3-Whiteboarding.md)        |
| Relationships and Networks   | Within our clients, you’ll regularly engage with teams and networks across geographic, political, demographic, functional and other cultural and organizational boundaries.        |
| Courage and Candor   | While facing some of the world’s toughest challenges head on and being able to respectfully disagree and present alternative solutions.        |
| Agility   | In the dynamic industry we operate within, flexibility and the ability to adapt to new situations creates more opportunities along the way for our customers and your career.       |
| Initiative and Foresight   | Recognizing the opportunities ahead of you and acting on them can mean the difference between the next great breakthrough and a missed opportunity.        |
| Results Orientation   | Delivering results is integral to both your career success and our success as a company. We look for people that want to contribute from day one and turn strategies and commitments into realities.        |
| STAR Method   | The STAR method is a structured manner of responding to a behavioral-based interview question by discussing the specific situation, task, action, and result of the situation you are describing. This follows the following flow: Situation, Task, Action and Result. For more detail on each, read the following section: [STAR Method Interview Prep & Sample Questions](../../Section10/10.1.3-STARmethod.md#star-method-interview-prep--sample-questions)        |
