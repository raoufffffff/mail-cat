import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './commponent/footer/Footer'
import Header from './commponent/header/Header'

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Header />
      <div className='w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
