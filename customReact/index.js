function insertReactelement(container, reactElement) {
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.content;

    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const container = document.querySelector(".root");

const reactElement = {
    type: "h1",
    props: {
        id: "heading",
        class: "text-animation",
    },
    content: "I'm Heading :) ",
};

insertReactelement(container, reactElement);
