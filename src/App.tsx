import './App.css'
import ListOfUsers from './components/ListOfUsers.js'
import { CreateNewUser } from './components/CreateNewUser.js'
import { Toaster } from 'sonner'

function App() {  

  return (
    <>
      <ListOfUsers/>
      <CreateNewUser/>
      <Toaster richColors/>
    </>
  )
}

export default App
