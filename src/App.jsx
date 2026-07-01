import './App.css'
import Counter from './components/bug01-state-not-updating/Counter'
import UserProfile from './components/bug02-too-many-rerenders/UserProfile'
import ProductDashboard from './components/bug03-useeffect-infinite-loop/ProductDashboard'

function App() {


  return (
   <>
    {/* <Counter/> */}
    {/* <UserProfile/> */}
    <ProductDashboard/>
   
   </>
  )
}

export default App
