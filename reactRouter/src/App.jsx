
import {Link,Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Book from './pages/Book'
function App() {


  return (
    <>
    <nav>
      <ul>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/book'>Books</Link></li> {/*Link acts as new acnhor Tag */}
      </ul>
    </nav>
      <Routes> 
      <Route/>
      <Route path='/' element={<About/>}/> 
      <Route path='/book' element={<Book/>}/> 
      </Routes>
    </>
  )
}

export default App
