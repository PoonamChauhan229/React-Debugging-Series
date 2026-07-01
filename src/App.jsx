import './App.css'
import Counter from './components/bug01-state-not-updating/Counter'
import UserProfile from './components/bug02-too-many-rerenders/UserProfile'
import ProductDashboard from './components/bug03-useeffect-infinite-loop/ProductDashboard'
import EmployeeDashboard from './components/bug04-cannot-read-properties/EmployeeDashboard'

function App() {


  return (
   <>
    {/* <Counter/> */}
    {/* <UserProfile/> */}
    {/* <ProductDashboard/> */}
    <EmployeeDashboard/>
   
   </>
  )
}

export default App
