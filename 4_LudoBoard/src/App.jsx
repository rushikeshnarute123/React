import './App.css'
// import LudoBoard from './LudoBoard'
// import ToDoList from './ToDoList'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {

  return (
    <>
      {/* <LudoBoard></LudoBoard> */}
      {/* <ToDoList></ToDoList> */}
      {/* <Lottery></Lottery> */}
      <Lottery n={3} winningSum={15}></Lottery>
    </>
  )
}

export default App
