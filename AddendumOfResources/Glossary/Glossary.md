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
| UserFlow   | [Sample User FLow](img/SWOTgrid.png)      |
| User Stories   |  A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.        |
| Wire Frames   | Wireframes are used to design (and define) the form and function of an application, usually a web application or smartphone app in our case.       |

### Essential Dev Tools

| Term        | Definition  |
| ----------- | ----------- |
| CLI (Command Line Interface)  | In a command line interface (A.K.A. "Console", "Command Line", "Terminal", or "Shell"), the user types commands using the keyboard to tell the computer to take an action. The computer will display the results of the operation by writing text to the screen.      |
| CLI Commands   | See [Section 1.5-GitandGitHub](https://github.com/savvy-coders/sc-curriculum/blob/master/Section01/1.5-GitandGitHub.md) in curriculum.       |
| GIT (Global Information Tracker)   | A mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel.        |
| Github   | A cloud-based hosting service that lets you manage Git repositories.     |
| git Commands   | See [Section 1.5-GitandGitHub](https://github.com/savvy-coders/sc-curriculum/blob/master/Section01/1.5-GitandGitHub.md) in curriculum.       |
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
| Ternary/Conditional Operator   | A one-line shortcut for simple `if` statements. For an example, click here: [Ternary/Conditional Operator](https://github.com/savvy-coders/sc-curriculum/blob/master/Section02/2.3-JSOperatorsAndFlowControl.md#the-ternary--conditional-operator)        |
| Logical Operators   | Logical Operators evaluate two boolean values and return a single boolean. And( `&` ), Or( `||` ), Not( `!` )       |
| Loops   | Code that executes repetitive 'task' until a condition is met that stops the loop.        |
| While Loop   | The `while` loop will repeatedly check its conditional expression and continue to run its code block as long as it evaluates to true. For an example of a `while` loop, click here: [While Loop](https://github.com/savvy-coders/sc-curriculum/blob/master/Section02/2.3-JSOperatorsAndFlowControl.md#while-loop)        |
| For Loop   | Much like the `while` loop, except that the syntax is a bit more compact and the iterator variable is inside the `for` loop itself. For an example of a `for` loop, click here: [For Loop](https://github.com/savvy-coders/sc-curriculum/blob/master/Section02/2.3-JSOperatorsAndFlowControl.md#for-loop)       |

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
| for... of loops   | A loop that iterates over the elements of an array. For an example, click here: [`for...of` loops](https://github.com/savvy-coders/sc-curriculum/blob/master/Section03/3.2-DataCollections.md#forof-loops)       |
| Objects   | Objects are collections of data just like Arrays, but we can access data by name/key instead of sequence. Keys are themselves arbitrary Strings that you're free to make up as you see fit.        |
| Properties   | The key-value pairs inside of an object.        |
| Bracket Notation vs Dot Notation   | How to access data inside Objects, to see an example of each, click here: [Accessing Properties](https://github.com/savvy-coders/sc-curriculum/blob/master/Section03/3.2-DataCollections.md#accessing-properties)       |
| Methods   | When we scope a function inside of an object literal, we call this a method.       |
| Global Window Object   | `window` is the global object within the browser. `window` is a part of the Browser Object Model (BOM). Within the BOM, `window` 'wraps up' all of the built-in JS functionality that we have access to within the browser.        |
| Mutation   | A mutable is a type of variable that can be changed. In JavaScript, only Objects and Arrays are mutable. Immutables are objects whose state cannot be changed once the object is created. Primitive values are immutable - they cannot be changed.        |
| Reference vs Value   | [Reference & Value](https://github.com/savvy-coders/sc-curriculum/blob/master/Section03/3.2-DataCollections.md#reference--value)     |
| Passing Reference vs Value   | [Pass by Reference & Value](https://github.com/savvy-coders/sc-curriculum/blob/master/Section03/3.2-DataCollections.md#reference--value)       |

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
|    | Text        |
|    | Text        |
|    | Text        |
|    | Text        |
|    | Text        |

### Object-Oriented Programming (OOP)

| Term        | Definition  |
| ----------- | ----------- |
| Object-Oriented Programming (OOP)   | Organizing code structures around Objects rather than functions is called Object-Oriented Programming (OOP).        |
| Methods   | If a `function` is attached to an Object, we refer to that `function` as a method.        |
| this   | `this` refers to the calling context - or parent Object - of a function. For an example, click here [Methods and the this keyword in Javascript OOP](https://github.com/savvy-coders/sc-curriculum/blob/master/Section05/5.2-JavaScriptClasses.md#methods-and-the-this-keyword-in-javascript-oop)       |
| function constructors   | A function Constructors is used as a kind of "template" for creating a category of things instead of, creating just a specific single instance of a thing (like with an Object literal).        |
| Object.prototype   | [The Object.prototype](https://github.com/savvy-coders/sc-curriculum/blob/master/Section05/5.2-JavaScriptClasses.md#the-objectprototype)        |
| Inheritance   | A Javascript Class can therefore be thought of as a parent. The children inherit information from the parent class. For more detail, click here: [Inheritance](https://github.com/savvy-coders/sc-curriculum/blob/master/Section05/5.2-JavaScriptClasses.md#inheritance)       |
| Over-writting   | Because JS checks the Object itself for a property before checking the prototype, we can "overwrite" a prototype property / method for that particular instance by declaring it on the instance directly. For an example, click here: ["Overwriting" prototype Properties](https://github.com/savvy-coders/sc-curriculum/blob/master/Section05/5.2-JavaScriptClasses.md#overwriting-prototype-properties)        |
| class   | A Class is the blueprint from which individual objects are created. A class is a template for creating objects. Inside the object that you create, code is written that allows you to work with the object data. This code is written inside curly brackets and is known as the body of the class. For an example, click here: [Creating Javascript Objects with the class keyword](https://github.com/savvy-coders/sc-curriculum/blob/master/Section05/5.2-JavaScriptClasses.md#creating-javascript-objects-with-the-class-keyword)      |
| extend   | A major benefit of the class keyword is the ability to extend a class, adding to the prototype chain and allowing new classes to inherit behavior from classes they extend.        |
| super() and constructor()   | To see the purpose of super() and constructor(), as well as examples, click here: [Creating Javascript Objects with the class keyword, bullet points](https://github.com/savvy-coders/sc-curriculum/blob/master/Section05/5.2-JavaScriptClasses.md#inheriting-behavior-with-the-extend-keyword)         |

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
|    | Text        |
|    | Text        |

### Intermediate HTML & CSS (Dev note, this will include 5.1 and 5.3)

| Term        | Definition  |
| ----------- | ----------- |
| `<form>` and `<input>` tags   | Text        |
| action and method   | Text        |
| attributes: for and name   | Text        |
| Media Query   | Text        |
| Media Types   | Text        |
| Media Features   | Text        |
| Element Positioning   | Text        |
| Static   | Text        |
| Relative vs Absolute   | Text        |
| Flexbox   | Text        |
| CSS Units   | Text        |
| Keywords vs Hexadecimal vs rgb   | Text        |
| CSS Variables   | Text        |
| Fonts   | Text        |
| Jumbotron/Hero   | Text        |

## SPAs (dev note, need to discuss how we want to hit definitions or if we just want this to be a reference to examples) Section 6

| Term        | Definition  |
| ----------- | ----------- |
| Single-Page Application (SPA)    | Text        |
| Search Engine Optimization (SEO)   | Text        |
| Frameworks   | Text        |
| SPA File Structure   | Text        |
| components/lib/store   | Text        |
| index.js in an SPA   | Text        |
| MVC Pattern   | Text        |
| Model   | Text        |
| View   | Text        |
| Update   | Text        |
| Modules   | Text        |
| export statements   | Text        |
| import statements   | Text        |
| aggregating exports   | Text        |
| Data Model   | Text        |
| State   | Text        |
| MVU Architecture   | Text        |
| Routing and Navigo   | Text        |
| State Driven SPA File Structure   | Text        |
|    | Text        |
|    | Text        |
|    | Text        |

## Backend Development

### Section 7

| Term        | Definition  |
| ----------- | ----------- |
| Asynchronous Functions   | Text        |
| AJAX   | Text        |
| APIs   | Text        |
| ReSTful API   | Text        |
| Authorization   | Text        |
| fetch API   | Text        |
| Axios   | Text        |
| Promise   | Text        |
| Query Params   | Text        |
| dotenv/ .env   | Text        |
| .gitignore   | Text        |
| Order of root index.js file   | Text        |

### Section 8

| Term        | Definition  |
| ----------- | ----------- |
| Application Tier  | Text        |
| Data Tier  | Text        |
| Backend Development| Text        |
| Built-in Modules    | Text        |
| runtime   | Text        |
| REPL   | Text        |
| Global Object   | Text        |
| Node (CommonJS)   | Text        |
| Browsers (ES6 modules)   | Text        |
| fs/path/crypto/http   | Text        |
| curl   | Text        |
| httpie   | Text        |
| Postman/Insomnia   | Text        |
| nodemon   | Text        |
| "Safe" Methods   | Text        |
| "Idempotent" Methods   | Text        |
| HTTP Methods   | Text        |
| Get   | Text        |
| Post   | Text        |
| Put   | Text        |
| Patch   | Text        |
| Delete   | Text        |
| API Servers (REST)  | Text        |
| Client-Server Separation   | Text        |
| Statelessness   | Text        |
| Cacheable Resources   | Text        |
| Uniform Interface   | Text        |
| Layered Architecture   | Text        |
| express server   | Text        |
| request.params   | Text        |
| response methods   | Text        |
| Middleware   | Text        |
| Logging   | Text        |
| PORT   | Text        |

### Section 9

| Term        | Definition  |
| ----------- | ----------- |
| Abstractions   | Text        |
| one-to-one relationship   | Text        |
| one-to-many relationship   | Text        |
| many-to-many relationship   | Text        |
| model   | Text        |
| controller   | Text        |
| controller   | Text        |
| schema   | Text        |
| CRUD Operations   | Text        |
| Database   | Text        |
| Structure Query Language (SQL)   | Text        |
| record/row   | Text        |
| column   | Text        |
| Relational Database Management System (RDBMS)   | Text        |
| relational databases   | Text        |
| NoSQL   | Text        |
| NoSQL Database Types   | Text        |
| MongoDB   | Text        |
| Cross-Origin Resouce Sharing (Cors)   | Text        |
| Heroku   | Text        |
| Frontend (SPA)   | Text        |
| Backend (Server)   | Text        |
| Serverless Architecture   | Text        |

## Job Preparation Tools

### Interview Prep

| Term        | Definition  |
| ----------- | ----------- |
| Whiteboarding   | Text        |
| Relationships and Networks   | Text        |
| Courage and Candor   | Text        |
| Agility   | Text        |
| Initiative and Foresight   | Text        |
| Results Orientation   | Text        |
| STAR Method   | Text        |
| Situation   | Text        |
| Task   | Text        |
| Action   | Text        |
| Result   | Text        |
| Functional Tests   | Text        |
| Unit Testing   | Text        |
| Jasmine   | Text        |
| Arrange-Act-Assert   | Text        |
| Why does Unit Testing Matter?   | Text        |
