import { Outlet } from 'react-router-dom'
import './App.css'
import Headers from './Components/Headers'
import Footer from './Layout/Footer'

function App() {


  return (
    <div className='max-w-11/12 mx-auto'>
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
