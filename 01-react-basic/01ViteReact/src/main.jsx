import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>Custom APP</h1>
    </>
  )
}
function MyApp2() {
  return (
    <>
      <h1>Custom APP 2!</h1>
    </>
  )
}

const anchorElem = (
  <a href="https://www.google.com" target='_blank'>Google</a>
)

const myFriend = "rohan"

// React.createElement (built-in syntax) 
// (type -> tag, key -> attributes, ref -> value, props -> evaluated expression)

const reactElem = React.createElement(
  'p',
  {}, // can be leave empty acc to use case
  'hello bye!',
  // variable will be injected here, and it should be a evaluated varible bcuz u can't evalute in JS object
  myFriend
)

const anchorElemLikeReact = React.createElement(
  'a',
  { href: 'https://github.com/rohanadnan1', target: '_blank' },
  'visit github of my friend!',
  myFriend
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // // <App />
  // // <MyApp />
  // MyApp2()

  // anchorElem
  // reactElem
  anchorElemLikeReact
)
