
import {Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Book from './pages/Book'
function App() {


  return (
    <>
      <Routes> 
      <Route/>
      <Route path='/' element={<About/>}/> 
      <Route path='/book' element={<Book/>}/> 
      </Routes>
    </>
  )
}

export default App
