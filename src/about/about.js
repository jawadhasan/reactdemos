import React from "react";

export function About(props) {
    return (
        <div>
            <h4>Introduction</h4>
            <ul>
                <li>React is component based. Each component is a separate concern. Think of component as simple functions in programming.</li>
                <li>A Rect component is a function that converts a model object into a pieces of user interfac. That's it.</li>
                <li>Two type of componets are function components and class components.</li>
                <li>funciton components are recommended, however class syntax has some additional features, we may need occasionally</li>
            </ul>
            <ul>
                <li>props: are explicity, similar to HTML attributes</li>
                <li>state: is internal, state can be changed, props can't.</li>
                <li>All react components must act like pure functions with respect to received props.</li>
                <li>elements that represent DOM tags are written in lower-case.</li>
                <li>user-defined elements/components must be an identifier starting with a capital letter.</li>

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
        </div>
    )
}