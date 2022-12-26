import React from "react";

export function About(props) {
    return (
        <div>
            <h4>Introduction</h4>
            <ul>
                <li>React is component based. Each component is a separate concern. Think of component as simple functions in programming.</li>
                <li>A Rect component is a function that converts a model object into a pieces of user interfac. That's it.</li>
                <li>Two type of componets are
                    <ul>
                        <li>function components ('this' not needed)</li>
                        <li>class components (complex, need to deal with 'this' and also need to 'bind' methods.)</li>
                    </ul>
                </li>
                <li>funciton components are recommended, however we may use class syntax occasionally.</li>
                <li>function components in combination with hooks enable straight forward components creating structured apps.</li>
            </ul>

            <h4>React components</h4>
            <ul>

                <li>props: are explicity, similar to HTML attributes</li>
                <li>state: is internal, state can be changed, props can't.</li>
                <li>All react components must act like pure functions with respect to received props.</li>
                <li>elements that represent DOM tags are written in lower-case.</li>
                <li>user-defined elements/components must be an identifier starting with a capital letter.</li>
                <li>All props values and internal state is activey monitored by react.</li>
                <li>React re-renders a component when a prop or state value changes.</li>

            </ul>


            <h4>Hooks: useEffect</h4>
            <ul>
                <li>A hook lets you hook into React's internal in a functional-component.</li>
                <li>useEffect enables us to create <u>side-effects</u> when the state of a component changes.</li>

            </ul>

            <h4>Refs</h4>
            <ul>
                <li>Refs are ways of accessing underlying DOM elements that are wrapped by React components,
                    so that, you can imperatively modify them. Thare are kind of a tool of last resort. </li>

                <li>Use <span className="bg-info">React.CreateRef() method.</span></li>
                <li>It is common to create Ref in constructor of class component.</li>
            </ul>


            <h4>Component Life Cycle</h4>
            <ul>
                <li>component life-cycle: React [class components] allows you to override lifecycle mothods </li>

                <li>mounting: constructor&gt;ComponentWillMount&gt;render&gt;ComponentDidMount</li>
                <li>updating: CompponentWillReceiveProps&gt;ShouldComponentUpdate&gt;ComponentWillUpdate&gt;render&gt;ComponentDidUpdate</li>
            </ul>

            <h4>Articles</h4>
            <ul>
                <li><a href="https://hexquote.com/react-js-basics-for-starters-and-angular-developers/" target="_blank">ReactJS- Part1</a></li>
                <li><a href="https://hexquote.com/react-js-basics-part-2-for-starters-and-angular-developers/" target="_blank">ReactJS- Part2</a></li>
                <li><a href="https://hexquote.com/react-js-basics-part-3-for-starters-and-angular-developers/" target="_blank">ReactJS- Part3</a></li>
                <li><a href="https://hexquote.com/react-js-basics-part-4-for-starters-and-angular-developers/" target="_blank">ReactJS- Part4</a></li>
            </ul>

            <section>
                <h4>React Components Practices</h4>
                <ul>
                    <li>
                        Always call hooks at the top-level.
                        e.g., you should not wrap them in if-statement or in loops etc (calling hooks should not be in curly brances).
                    </li>

                    <li>
                        Passing functions to child components allows child to pass-data / callback to parent.
                    </li>

                    <li>
                        <h6>Hooks: Callback and Ref</h6>
                        <ul>
                            <li>useCallback: when we wrap a function inside it, function will maintain referntial integrity. (e.g. will avoid infinite loop rendering)</li>
                            <li>i.e it will remain same during re-renders, not triggering a change in useEffect()</li>
                        </ul>

                    </li>

                    <li>
                        <h6>CustomHooks</h6>
                        <ul>
                            <li>Promotes SOC principle</li>
                            <li>Component is about rendering, not about fetching-data</li>
                        </ul>

                    </li>
                </ul>

            </section>

            <section>
                <h4>Putting it all togather</h4>
                <div className="card">
                    <div className="card-body" >

                        <p>components are JavaScript functions that return JSX.</p>

                        <p>React helps bring strcture through components</p>
                        <p>React doesn't really have the concept of a page. What the user perceives as a page, is just composition of components.</p>


                        <p>In React, UIs work like building a house.
                            Before building the house, there is an architect, which will define every detail of the house in a blue print.

                        </p>
                        <p>
                            When it's time to build a house, the architect isn't involved anymore.
                            There's enough information in the blueprint for the construction workers to meterialize it.
                        </p>

                        <p>
                            The analogy with React is that in Reac we, as developers, are the architect of the application.
                            We declare the UI like a blueprint. We wrote the instructions, how it should be rendered, so React can
                            materialize it.
                        </p>

                        <p>
                        Lazy loading is a technique in which components that are not required on the home page are not loaded until a user navigates to that page, allowing our application to load faster than having to wait for the entire app to load at once. This contributes to improved performance, which leads to a positive user experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}