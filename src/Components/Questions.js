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
                            <h4>How are Angular and React different?</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="react-angular">
                        <Card.Body>
                            <ul className="compare">
                                <li><h6>Framework/Library</h6></li>
                                <li className="angular compare-item">Angular is a framework that comes with all the tools needed to build an application and is the full MVC architecture.</li>
                                <li className="react compare-item">React is a library, much smaller than Angular and only is the View in the MVC architecture. But you can add other packages to add functionality like routing, http requests, validation, etc. so that it can potentially be as powerful as Angular.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Performance</h6></li>
                                <li className="angular compare-item">Since it is a framework it's more powerful but slower than React.</li>
                                <li className="react compare-item">Since it's only a libaray it's faster on the front-end. As you start adding packages to React, it becomes more powerful but also heavier and slows down as it grows.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Learning Curve</h6></li>
                                <li className="angular compare-item">There's a lot of specific things and ways of doing things that you need to learn about Angular before diving in i.e. directives, dependency injection, pipes, decorators, etc. It's also opinionated: Less flexible than React when creating your application. Apps written with Angular will basically have the same look as opposed to React apps that can vary in structure.</li>
                                <li className="react compare-item">Less-opinionated: Flexible when it comes to creating your application. Apps written with React can vary in how they are built depending on how they handle http requests, state and properties. However with this flexibility comes more potential of building your app in the wrong way and therefore having to go back and make changes as it grows.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Language</h6></li>
                                <li className="angular compare-item">Typescript, which is a superset of Javascript and makes for more robust and cleaner code, i.e. declaring types: strings, numbers, etc, making your app less prone to errors.</li>
                                <li className="react compare-item">JSX, which is basically writing html inside Javascript with a few changes, i.e. className instead of class, etc. You're free to write any type of JavaScript in your React app. Can be confusing and frustrating for those of us who prefer separation of concerns.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>State Management</h6></li>
                                <li className="angular compare-item">Provides built-in state functionality - basically use of stateful and stateless components (via input bindings and output custom events), and using Angular services, data saving and promises. (But using an application level state manager is possible - like RxJS). Basicaly you use a stateful parent component that delegates down into children components, and if the application gets too big and more and more components need to share data - services are brought in as needed.</li>
                                <li className="react compare-item">Must use an application level state managers, which has a high learning curve.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Data Binding</h6></li>
                                <li className="angular compare-item">2 way data binding. You can easily bind data from the view to the model (using ng-model directive).</li>
                                <li className="react compare-item">1 way data binding.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>DOM Manipulation</h6></li>
                                <li className="angular compare-item">Updates DOM directly.</li>
                                <li className="react compare-item">Uses a virtual DOM and compares with real DOM to update only what is needed.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>CLI</h6></li>
                                <li className="angular compare-item">More powerful than Reacts. It not only can create new projects but also can create services, and components with basic set up, and those components come complete with testing. It's easy to build and create production ready applications.</li>
                                <li className="react compare-item">A good CLI, just not as powerful as Angulars. Easy to build and create production ready applications.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Native</h6></li>
                                <li className="angular compare-item">NativeScript: Can build iOS and Android apps using Angular + Javascript with this newer technology.</li>
                                <li className="react compare-item">ReactNative: More powerful and more popular and can be comparable to native apps written in Swift and Java.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Tooling</h6></li>
                                <li className="angular compare-item">Angular has all tooling bulit in.</li>
                                <li className="react compare-item">Gives you the freedom to choose which tooling libraries, extentions and tools to use in your project with React. However if you are unsure about your tools you may pick the wrong one and pay a price later on as your app grows.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Testing</h6></li>
                                <li className="angular compare-item">It has built in testing, which also includes Karma and Protractor, so it's easy to get started with writing tests immediately.</li>
                                <li className="react compare-item">Has Jest as it's default testing environment, but you can add in others with configursation. Enzyme is also helpful as it helps traverse through React virtual DOM and run your testing.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Rendering Engines</h6></li>
                                <li className="angular compare-item">React's is usually faster, but Angulars is catching up quickly.</li>
                                <li className="react compare-item">React's is usually faster, but Angulars is catching up quickly.</li>
                            </ul>
                            <ul className="compare">
                                <li><h6>Syntax</h6></li>
                                <li className="angular compare-item">Anuglar has very specific syntax you must follow when building your applications. (e.g. add Services to Providers)</li>
                                <li className="react compare-item">React's is simpler and doesn't require you to learn specific syntax to use the libaray.</li>
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
            </Accordion>
        </div>
    );
}

export default Questions;