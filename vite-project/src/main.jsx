import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://www.google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const AnotherElement=(
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const user="Anik Biswas"
const reactElement=React.createElement(
  'a',
  {href:"https://facebook.github.io/react/" ,target:'_blank'},
  'Click Here to go to Facebook!',
  user
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // MyApp() ->possible
    // <MyApp/>
    // AnotherElement
    reactElement
    // <App/>
)
