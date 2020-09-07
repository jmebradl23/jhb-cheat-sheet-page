import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Questions.css';
import MixinImg from '../img/mixins.jpg';
import eDImg from '../img/eventDelegationImg.jpg';

function Questions() {
	return (
		<div className="Questions">
			<Accordion>
				<h4 class="question-category"><u>Intro/Getting to know you</u></h4>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="aboutYourself">
							<p class="question-title">Tell me about yourself?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="aboutYourself">
						<Card.Body>
						I got interested in web development while working on the Catalog team at a music company in the Bay Area. I was workign closely with the IT departemnt while I was there - working on planning functionality, adding to the UI, etc. The work they did intrigued me, so I started to study Javascript on my own and eventually took web development bootcamp in San Francisco in 2015. That’s where I learned front and backend technologies while studying Javascript, Node and Ruby on Rails, while building my first three projects from the ground up. Since graduating in June of 2015, I’ve had numerous contract positions focusing mostly on the front end. Most of them while using plain Javascript, HTML and CSS. One was more focused on working with  Angular and another working a bit with Vue. During the down time, I’ve taught myself other technologies like React, Redux and GraphQL as I like to keep up with new technologies. So now I've been with Naked Wines for a while working on internal tools for customer-facing deparments as well as assisting with Marketing's weekly promos and sales. And now I'm searching for a...
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="workingOn">
							<p class="question-title">Tell me about something you've been working on lately?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="workingOn">
						<Card.Body>
							<p>The company recently switched shipping carriers from FedEx to UPS. So this meant that we needed to incorporate the functionality we had using FedEx API and transfer that functionality to be used with UPS API. So this whole process took a number of steps to carry out:</p>
							<ol>
								<li><u>Familiarize with technology:</u> First I had to go through the documentation of UPS API and familiarize myself with their data and endpoints. What type of data can be returned. </li>
								<li><u>Gather requirements:</u> Gather requirements included team meetings with customer-facing departments (CS, Shipping, Marketing) and understanding what the vision is - what is required and what is recommended and suggested. Any changes that are necessary with this new carrier/API as well as any stories that will help with understanding what is needed.</li>
								<li><u>Solve / work through problems:</u> Come up with ideas how to add new functionality or how to proceed with implementation (meetings with other developers), includes exchanging and discussing ideas, best solutions, etc.</li>
								<li><u>Plan:</u> Pretty straight forward. I take the time to plan out the project. Plan out the steps need to take in order to execute project.</li>
								<li><u>Implement:</u> Actually write out the code for the project</li>
								<li><u>Test</u> Test out code with stories provided in gather requirements process. Writing test cases to see if code satisfies requirements. Pass on to other departments to test if necessary.</li>
								<li><u>Push:</u> Push to testing, development and/or production enviroments.</li>
								<li><u>Manage feedback / Respond to QA:</u> Generally feedback and QA will come from other departments, so hopfully there is a bug tracking system in use. I generally have been using Jira. At that point, prioritization comes into play to attack bugs of highest priority first. </li>
							</ol>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="prioritize">
							<p class="question-title">How do you prioritize your work?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="prioritize">
						<Card.Body>
							<p>I prioritize by the following:</p>
							<ol>
								<li>Legal: Are there legal complications that may arise if this work isn’t completed asap?</li>
								<li>Impact: How much impact will this project have on the company/users?
									<ul>
										<li>Is this preventing sales?</li>
										<li>Is this preventing users from using the site?</li>
									</ul>
								</li>
								<li>Scoring system: Does company have a scoring system in place? -If so, tackle highest priority first, down to least</li>
							</ol>
							<p>As always, when new bugs arise, they need to be prioritized using the list above.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="challenge">
							<p class="question-title">Site a challenge you faced and tell how you resolved it?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="challenge">
						<Card.Body>
							<ul>
								<li>When I was working on my first Angular.js application one of the tasks that was assigned to me was creating a dropdown menu in the user's dashboard. Simple, right? Well I thought so too, until I came upon a little problem. The dropdown menu was able to open and the user was able to select an option, but when it came to closing the dropdown menu, it wouldn't collapse back down. I clicked outside the menu. Nothing. I clicked the top of the menu to collapse it.  Nothing. So, my steps to revolve the issue were as follows:</li>
								<ol>
									<li>Check the console to see if there were any errors. No errors were listed there.</li>
									<li>Check my markup to make sure it was correct. Check for missing closing tags, class misspellings, etc. Everything looked correct and there were no errors indicated in my code editor.</li>
									<li>Compare my component structure with the Bootstrap example and/or the instructions on Bootstrap's component creation page. Everything checked out.</li>
									<li>Search online for an answer. (googling issue, checking stackoverflow, etc.)</li>
									<li>When still an answer didn't present itself, I asked my manager for advice. I told him all that I had done and he told me they were using a previous version of Bootstrap and to check the docs for that particular version.</li>
									<li>I looked in the app's configuaration and sure enough they were using a pervious version. So I found the docs for that specific version and started searching for the dropdown issue.</li>
									<li>I eventually found that there was an issue that was reported to Bootstrap with the dropdown component but that Bootstrap put in a fix for it in the next version. So, since we were set on using the previous version we were unable to resolve the issue with Bootstrap.</li>
									<li>So I started to search online for an answer and included the Bootstrap version we were using with my search. I found a couple answers that were posted that presented a fix using jQuery, but wasn't sure if I should follow those examples because I knew my manager was a stickler for doing things the right way - and this fix was kinda hacky. Since this solution had the potential of screwing up how Angular manipulated the DOM I thought my manager would not approve.</li>
									<li>But I presented him with the jquery answers answers, and sure enough he rejected them saying it would be too risky of a fix and to keep searching.</li>
									<li>Basically, I was able to find a solution without using jQuery, and which my manager approved and was able to implement it into the code by writing a custom directive. (I can't remember exactly how we did it but, I believe it was by wrapping the component in an parent element and then using Angular to reset the dropdown and update the option depending on what the user selected, if any change was made.)</li>
								</ol>
							</ul>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="lookingFor">
							<p class="question-title">What are you looking for in your next role?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="lookingFor">
						<Card.Body>
							<p>First and foremost, I’m looking for a full-time role at a company where I can grow as a developer - honing my front end skills (Javascript, CSS, React, Angular), and also while learning new technologies and languages (Java, Python, D3, etc.).</p><p>I’m also looking to work with a company that’s transparent and that values communication between teams and team members.</p><p>I also want to find a team that values growth and helps everyone on that team to do the best they can, possibly through code reviews, open communication and feedback. I want to be with team members who not only give feedback but are also open to receiving it.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="strength">
							<p class="question-title">What is your best strength?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="strength">
						<Card.Body>
							<p>To be able to remain calm. When there is an error in my code, and have the ability to step back, investigate and determine step by step what went wrong and how to fix it - without going crazy or getting upset.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<h4 class="question-category">Frameworks & Libraries</h4>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="react-angular">
							<p class="question-title">How are Angular, React and Vue different?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="react-angular">
						<Card.Body>

							<ul className="compare">
								<li><h6>CLI</h6></li>
								<li className="angular compare-item">More powerful than Reacts. It not only can create new projects but also can create services, and components with basic set up, and those components come complete with testing. It's easy to build and create production ready applications.</li>
								<li className="react compare-item">A good CLI, just not as powerful as Angulars. Easy to build and create production ready applications.</li>
								<li className="vue compare-item">A solid CLI. It promotes best practices, webpack configuration, interactive project initialization, generators, etc. Vue's is more flexible than React, allowing configuration, having a wider variety of default options as well as is able to generate projects from user-built presets.</li>
							</ul>

							<ul className="compare">
								<li><h6>Community</h6></li>
								<li className="angular compare-item">Has a solid community, but may be the only one that's shrinking.</li>
								<li className="react compare-item">Biggest community out of the three.</li>
								<li className="vue compare-item">Has a big community, but not as big as React - however it is growing.</li>
							</ul>

							<ul className="compare">
								<li><h6>Data Binding</h6></li>
								<li className="angular compare-item">2 way data binding. You can easily bind data from the view to the model (using ng-model directive).</li>
								<li className="react compare-item">1 way data binding.</li>
								<li className="vue compare-item">Two way data binding makes it easier to update related components and track data. Downfall here is that when it's triggered it may not be as smart and may make mistakes during data reading - so it may require data to be flattened.</li>
							</ul>

							<ul className="compare">
								<li><h6>DOM Manipulation</h6></li>
								<li className="angular compare-item">Updates DOM directly.</li>									<li className="react compare-item">Uses a virtual DOM and compares with real DOM to update only what is needed.</li>
								<li className="vue compare-item">Uses virtual DOM so dev doesn't have to interact with the DOM, and only needs to update components as needed.</li>
							</ul>

							<ul className="compare">
								<li><h6>Flexibility</h6></li>
								<li className="angular compare-item">Not flexible. Angular has specific structure to follow in builing any app.</li>
								<li className="react compare-item">Much more flexible but comes with a price - there's more ways of doing something the wrong way since it doesn't have a strict structure to follow like Angular.</li>
								<li className="vue compare-item">Vues is much less opinionated. It offers official support  and has a growing community (big but not as big as React). </li>
							</ul>

							<ul className="compare">
								<li><h6>Framework/Library</h6></li>
								<li className="angular compare-item">Angular is a framework that comes with all the tools needed to build an application and is the full MVC architecture.</li>
								<li className="react compare-item">React is a library, much smaller than Angular and only is the View in the MVC architecture. But you can add other packages to add functionality like routing, http requests, validation, etc. so that it can potentially be as powerful as Angular.</li>									<li className="vue compare-item">Like React, Vue is a library and much smaller than Angular, but has potential to grow when adding tools and libraries to have the same functionality as Angular.</li>
							</ul>

							<ul className="compare">
								<li><h6>Language</h6></li>
								<li className="angular compare-item">Typescript, which is a superset of Javascript and makes for more robust and cleaner code, i.e. declaring types: strings, numbers, etc, making your app less prone to errors.</li>
								<li className="react compare-item">JSX, which is basically writing html inside Javascript with a few changes, i.e. className instead of class, etc. You're free to write any type of JavaScript in your React app. Can be confusing and frustrating for those of us who prefer separation of concerns.</li>
								<li className="vue compare-item">Only languages required are HTML, CSS and Javascript.</li>
							</ul>

							<ul className="compare">
								<li><h6>Learning Curve</h6></li>
								<li className="angular compare-item">There's a lot of specific things and ways of doing things that you need to learn about Angular before diving in i.e. directives, dependency injection, pipes, decorators, etc. It's also opinionated: Less flexible than React when creating your application. Apps written with Angular will basically have the same look as opposed to React apps that can vary in structure.</li>
								<li className="react compare-item">Less-opinionated: Flexible when it comes to creating your application. Apps written with React can vary in how they are built depending on how they handle http requests, state and properties. However with this flexibility comes more potential of building your app in the wrong way and therefore having to go back and make changes as it grows.</li>
								<li className="vue compare-item">Only pre-knowledge you need is HTML, CSS and JS to get started (don't have to learn Typescript or JSX). With Vue, you don't have to learn any new syntax or concepts to get started.</li>
							</ul>
		
							<ul className="compare">
								<li><h6>Native</h6></li>
								<li className="angular compare-item">NativeScript: Can build iOS and Android apps using Angular + Javascript with this newer technology.</li>
								<li className="react compare-item">ReactNative: More powerful and more popular and can be comparable to native apps written in Swift and Java.</li>
								<li className="vue compare-item">Vue is working with Weex for mobile option but it's still in development.</li>
							</ul>

							<ul className="compare">
								<li><h6>Optimization</h6></li>
								<li className="angular compare-item">.</li>
								<li className="react compare-item">Devs need to use shouldComponentUpdate to determine if components sub-tree needs re-rendering.</li>
								<li className="vue compare-item">Component's dependencies are automatically tracked, so Vue knows which components need re-rendering on state change.</li>
							</ul>

							<ul className="compare">
								<li><h6>Performance</h6></li>
								<li className="angular compare-item">Since it is a framework it's more powerful but slower than React. The digest cycle can be harder to manipulate than the other two.</li>
								<li className="react compare-item">Since it's only a libaray it's faster on the front-end. As you start adding packages to React, it becomes more powerful but also heavier and slows down as it grows.</li>
								<li className="vue compare-item">It can hold it's own when comparing to the other two. Has a better runtime performance and is much easier to potimize.</li>
							</ul>

							<ul className="compare">
								<li><h6>Rendering Engines</h6></li>
								<li className="angular compare-item">React's is usually faster, but Angulars is catching up quickly.</li>
								<li className="react compare-item">React's is usually faster, but Angulars is catching up quickly.</li>
							</ul>

							<ul className="compare">
								<li><h6>Size</h6></li>
								<li className="angular compare-item">Huge! Biggest of the three.</li>
								<li className="react compare-item">On the smaller side and comparable with Vue when on it's own, but after adding in other libraries and tools it can grow in size to compare with Angular.</li>
								<li className="vue compare-item">It's small - at ~80KB (non-minified) it is the smallest of the three. Zipped ~20KB / Minified ~60KB</li>
							</ul>
							
							<ul className="compare">
								<li><h6>State Management</h6></li>
								<li className="angular compare-item">Provides built-in state functionality - basically use of stateful and stateless components (via input bindings and output custom events), and using Angular services, data saving and promises. (But using an application level state manager is possible - like RxJS). Basicaly you use a stateful parent component that delegates down into children components, and if the application gets too big and more and more components need to share data - services are brought in as needed.</li>
								<li className="react compare-item">Must use an application level state managers, which has a high learning curve.</li>
							</ul>

							<ul className="compare">
								<li><h6>Support</h6></li>
								<li className="angular compare-item">?</li>
								<li className="react compare-item">?</li>
								<li className="vue compare-item">Provides official support. You can research official support for add-ons like vue-router, Vuex, vue-test-utils, etc. Is also flexible enough to use with Redux or Mobx, and has very good recommended defaults.</li>
							</ul>

							<ul className="compare">
								<li><h6>Syntax</h6></li>
								<li className="angular compare-item">Anuglar has very specific syntax you must follow when building your applications. (e.g. add Services to Providers)</li>
								<li className="react compare-item">React's is simpler and doesn't require you to learn specific syntax to use the libaray.</li>
								<li className="vue compare-item">No new or complex syntax to learn - just HTML, CSS and Javascript.</li>
							</ul>

							<ul className="compare">
								<li><h6>Testing</h6></li>
								<li className="angular compare-item">It has built in testing, which also includes Karma and Protractor, so it's easy to get started with writing tests immediately.</li>
								<li className="react compare-item">Has Jest as it's default testing environment, but you can add in others with configursation. Enzyme is also helpful as it helps traverse through React virtual DOM and run your testing.</li>
							</ul>

							<ul className="compare">
								<li><h6>Tooling</h6></li>
								<li className="angular compare-item">Angular has all tooling bulit in.</li>
								<li className="react compare-item">Gives you the freedom to choose which tooling libraries, extentions and tools to use in your project with React. However if you are unsure about your tools you may pick the wrong one and pay a price later on as your app grows.</li>
								<li className="vue compare-item">Has an impressive collection of tools and libraries that is always growing. Not just the CLI, but dev tools to help with debugging, loader for build purposes, and router or state management libraries.</li>
							</ul>

						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="crudDifferences">
							<p class="question-title">Explain CRUD operations and the differences of each? Get, Push, Post and Delete.</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="crudDifferences">
						<Card.Body>
							<p><u>The HTTP GET method:</u> Used to read(retrieve) a representation of a resource. If successful, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).</p><p><u>The POST verb:</u> Most-often utilized to create a new resource. When creating a new resource, POST takes care of assigning an ID to the resource. On successful creation, return HTTP status 201, returning a Location header with a link to the newly-created resource with the 201 HTTP status.</p><p><u>PUT:</u> most-often utilized for update capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. On successful update, return 200 (or 204 if not returning any content in the body) from a PUT.</p><p><u>DELETE:</u> Is used to delete a resource identified by a URI. On successful deletion, return HTTP status 200 (OK) along with a response body, perhaps the representation of the deleted item. Either that or return HTTP status 204 (NO CONTENT) with no response body.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="updates">
							<p class="question-title">How do you keep up with rapid improvements/updates to technologies?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="updates">
						<Card.Body>
							<p>Read the documentation. There should be updates to the docs when improvements of tools and frameworks are made. Additionally, I’ve found that there are constantly new videos, articles and books about the newest technologies and the improvements to each. And lastly, whenever I come across an error, I usually get on stackoverflow and there’s usually a solution to my issue there if i’m not 100% up on the latest version of the tool or framework.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<h4 class="question-category">CSS</h4>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="preprocessor">
							<p class="question-title">What is a CSS Pre-Processor?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="preprocessor">
						<Card.Body>
							<p>Pre-processors give you more functionality as a means of writing cleaner and more intelligent CSS.</p>
							<ul>
								<li><b>Use of variables</b>: Instead of changing multiple lines in your code if you want to change a style, you can simply change one variable to update all those properties.</li>
								<li><b>Imports</b>: All css files that you create can be collected and outputted as 1 single file that needs to be downloaded from the server. And as we all know, 1 request is better than multiple requests.</li>
								<li><b>Nesting</b>: A way of writing cleaner code by creating compound selectors within other selectors. It helps you better see the relation between elements, is faster and makes more sense with HTML.</li>
								<li><b>Mixins</b>: Reusable blocks of code for CSS that allows the use of arguments to create styling. Example:
									<div className="def-img medium">
										<img src={MixinImg} alt='what a mixin is' />
									</div>
								</li>
								<li><b>Functions</b>: Allow you to do quick little tricks like lightening color by a percentage.</li>
								<li><b>Math</b>: Math equations can be used. Simple equations like figuring out margins or changing colors.</li>
							</ul>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="srcSet">
							<p class="question-title">What's the difference between src and srcset?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="srcSet">
						<Card.Body>
							<p>Both are required attributes that specifies the URL (location) of an image. The difference between the two are as follows:</p>
							<ul>
								<li><b>src</b>: Attribute for one single image.</li>
								<li><b>srcset</b>: Allows multiple sized versions of the same image to be used in an image tag. It also allows data to be provided regarding about the size of each image in the list - which allows the browser to make decision on which image to download and use. (Items separated by commas)</li>
							</ul>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<h4 class="question-category">Programming Practices</h4>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="eventDelegation">
							<p class="question-title">What is the difference between functional and object-oriented programming?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="eventDelegation">
					<Card.Body>
						<ul className="compare">
							<li><h6>Pros:</h6></li>
							<li className="functional compare-item">Functional reasons</li>
							<li className="oop compare-item">OOP reasons.</li>
						</ul>
					</Card.Body>
					</Accordion.Collapse>
				</Card>
				<h4 class="question-category">DOM Manipulation</h4>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="eventDelegation">
							<p class="question-title">Explain Event Delegation?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="eventDelegation">
						<Card.Body>
							<p>Let's say we have a unorganized list and inside that element, we have a dynamic grouping of list items.</p>
							<div className="def-img small">
								<img src={eDImg} alt='list items' />
							</div>
							<p>We could go through and set an event listener on each one, but that wouldn't be very efficient. Additionally, if any list items get added after the page loads, those elements won't have an event listener attached unless one is assigned on creation which again...isn't very efficient. Event Delegation allows a developer to attach one single event listener to a parent of a collection of elements so that no matter which child element is triggered, the event listener will fire.</p>
							<p>Additionally, once an event listener is triggered inside of that parent element, the event will bubble up (or possibly capture down depending on your event listener) and therefore trigger any other event listeners up (or down) the DOM until it either reaches the final element or until stopPropagation is called on an event.</p>
							<p>Finally, you will be able to see exactly which element was triggered by looking at the event's 'target' property. (Not to be confused with currentTarget which is the element the event listener was attached to.)</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="forEachMap">
							<p class="question-title">What's the difference between .map and forEach?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="forEachMap">
						<Card.Body>
							<p>Both are Javascript methods that basically do the same thing - that is, they both run through an array and will do something to each element if certain conitions are met. The difference between the two is that .map will return a new array, but forEach will modify the existing array.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<h4 class="question-category">Optimization</h4>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="optimization">
							<p class="question-title">How have you optimized the front end?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="optimization">
						<Card.Body>
							<p>There are a number of ways to optimize your codebase. When I was at Levis, there were a few times where some of our landing pages were making a number of external requests to retrieve a number of small product icons - pretty small in size, however the number of requests to grab each image was adding extra time for the page to load. So instead of keeping those numerous requests, we decided to create one file with a collection of sprites that could be downloaded once - thus greatly cutting down the time it took the page to load. Once we had our new file, we then had to go through the code and link each element on the page that had the old image to update it to link to the new file (background-image property) and then focus on the specific sprite (using CSS background-position property).</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="optimize">
							<p class="question-title">What are some ways to optimize your website?</p>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="optimize">
						<Card.Body>
							<p>There are a number of ways to optimize your codebase. Some examples are below:</p>
							<ul>
								<li><b>Proper CSS Placement</b>: CSS files should be placed at the top of the HTML document to ensure progressive rendering, and therefore  will improve the loading speeds of your website, but it will keep your visitors from waiting on blank screens or seeing a flash of unstyled text while the page is loading.</li>
								<li><b>Proper JavaScript placement</b>: Javascript files should be placed at the bottom of the HTML document to prevent blocking of the loading process of HTML and CSS elements. Placing these scripts at the bottom will ensure your page and styling is loaded first and that the user will not wait on a blank screen while script files are being retrieved and processed.  Additionally, this will help ensure that the DOM is loaded before any Javascript files are run.</li>
								<li><b>Defer third party Javascript</b>Wait to execute until after the page is fully rendered. This can be done with the defer keyword (Javascript), or the onLoad method (jQuery).</li>
								<li><b>Combine files</b>: The less external requests your page has to make the faster it will be able to load. Combining js and css files is a way to reduce the amount of external files referenced in your app.</li>
								<li><b>Asynchronous CSS loading</b>: When you load CSS files into your HTML document, the default is to load them synchronously. Instead of loading them synchronously and delaying the load time of your application, these (less-critical) CSS files can be loaded asynchronously and not affect the loading of your app to a high degree (they can be applied after your page has been onloaded).</li>
								<li><b>Lazy Loading</b>: Only load images that are in the viewport first. Load images further down the page as needed or after critical images are loaded.</li>
								<li><b>HTML picture tag to load responsive images</b>: Use html picture tag to load responsive images as this element has specifications to do the following:
									<ol>
										<li>Images render cripsly at different device-pixel-ratios</li>
										<li>Fluid image use case - images will load depending on size of image in viewport</li>
										<li>Variable-sized-image use case - making images to be available in multiple resolutions so they scale efficiently</li>
										<li>Art-direction use case - abaility to crop or alter the content of images.</li>
										<li>Switching use case - allows ability to send different formats to browsers depending on what formats they support.</li>
									</ol>
								</li>
								<li></li>
							</ul>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default Questions;