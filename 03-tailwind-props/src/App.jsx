import './App.css'
import Cards from './components/cards'

function App() {
  // let myObj = {
  //   userName: "umar",
  //   age: 22
  // }
  // let myArr = [1, 2, 3]

  return (
    <>
      {/* can pass array, string or object here */}
      {/* <Cards AStr="hello!" AObj={myObj} AArr={myArr} />  */}

      <Cards userName = "Jia" para = "hello"/>
      <Cards userName = "Kia" para = "world" btnText="click here"/>
    </>
  )
}

export default App
