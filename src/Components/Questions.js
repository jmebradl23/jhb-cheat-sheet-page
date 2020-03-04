import React from 'react';
import './Questions.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Questions() {
	return (
		<div className="Questions">
			<Accordion>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="react-angular">
							<h4>How are Angular, React and Vue different?</h4>
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
						<Accordion.Toggle as={Button} variant="link" eventKey="challenge">
							<h4>Site a challenge you faced and tell how you resolved it?</h4>
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
							<h4>What are you looking for in your next role?</h4>
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
							<h4>What is your best strength?</h4>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="strength">
						<Card.Body>
							<p>To be able to remain calm. When there is an error in my code, and have the ability to step back, investigate and determine step by step what went wrong and how to fix it - without going crazy or getting upset.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="crudDifferences">
							<h4>Explain CRUD operations and the differences of each? Get, Push, Post and Delete.</h4>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="crudDifferences">
						<Card.Body>
							<p><u>The HTTP GET method:</u> Used to read(retrieve) a representation of a resource. If successful, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).</p><p><u>The POST verb:</u> Most-often utilized to create a new resource. When creating a new resource, POST takes care of assigning an ID to the resource. On successful creation, return HTTP status 201, returning a Location header with a link to the newly-created resource with the 201 HTTP status.</p><p><u>PUT:</u> most-often utilized for update capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. On successful update, return 200 (or 204 if not returning any content in the body) from a PUT.</p><p><u>DELETE:</u> Is used to delete a resource identified by a URI. On successful deletion, return HTTP status 200 (OK) along with a response body, perhaps the representation of the deleted item. Either that or return HTTP status 204 (NO CONTENT) with no response body.</p>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}

export default Questions;