function customRender(reactElem, container) {
    const domElement = document.createElement(reactElem.type)
    domElement.innerHTML = reactElem.children

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    for (const prop in reactElem.props) {
        if(prop === 'children') continue;  // for safety purpose and can be ignored bcuz there are no children in props.
        domElement.setAttribute(prop, reactElem.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://portal.piaic.org',
        target: '_blank'
    },
    children: 'Click me to visit PIAIC student login'
}

const mainContainer = document.getElementById('root')

// render or add reactElement in root
customRender(reactElement, mainContainer);