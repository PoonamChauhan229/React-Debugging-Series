import './App.css'
import Counter from './components/bug01-state-not-updating/Counter'
import UserProfile from './components/bug02-too-many-rerenders/UserProfile'
import ProductDashboard from './components/bug03-useeffect-infinite-loop/ProductDashboard'
import EmployeeDashboard from './components/bug04-cannot-read-properties/EmployeeDashboard'
import MovieLibrary from './components/bug05-react-key-warning/MovieLibrary'
import Newsletter from './components/bug06-controlled-vs-uncontrolled/Newsletter'
import TaskManager from './components/bug07-component-not-rerendering/TaskManager'
import UserDashboard from './components/bug08-ui-not-updating-after-mutating-props/UserDashboard'
import AnalyticsDashboard from './components/bug09-strictmode-double-rendering/AnalyticsDashboard'
import NotificationPanel from './components/bug10-memory-leak/NotificationPanel'
import ProjectBoard from './components/bug11-state-mutation/ProjectBoard'
import ProductCatalog from './components/bug12-infinite-api-calls/ProductCatalog'
import UserSearch from './components/bug14-dependency-array-mistakes/UserSearch'
import CountdownTimer from './components/bug13-stale-closures/CountdownTimer'
import StudentList from './components/bug15-event-handler-mistakes/StudentList'
import Dashboard from './components/bug16-react-memo-not-working/Dashboard'
import EmployeeDirectory from './components/bug17-usememo-mistakes/EmployeeDirectory'
import ShoppingCart from './components/bug18-usecallback-mistakes/ShoppingCart'
import HospitalDashboard from './components/bug19-context-value-not-memoized/HospitalDashboard'
import BookSearch from './components/bug20-debouncing-mistakes/BookSearch'
import MovieSearch from './components/bug21-race-condition-api-calls/MovieSearch'
import TeamDirectory from './components/bug22-keys-changing-on-every-render/TeamDirectory'

function App() {


  return (
   <>
    {/* <Counter/> */}
    {/* <UserProfile/> */}
    {/* <ProductDashboard/> */}
    {/* <EmployeeDashboard/> */}
    {/* <MovieLibrary/> */}
    {/* <Newsletter/> */}
    {/* <TaskManager/> */}
    {/* <UserDashboard/> */}
    {/* <AnalyticsDashboard/> */}
    {/* <NotificationPanel/> */}
    {/* <ProjectBoard/> */}
    {/* <ProductCatalog/> */} 
    {/* <CountdownTimer/> */}
    {/* <UserSearch/> */}
    {/* <StudentList/> */}
    {/* <Dashboard/> */}
    {/* <EmployeeDirectory/> */}
    {/* <ShoppingCart/> */}
    {/* <HospitalDashboard/> */}
    {/* <BookSearch/> */}
    {/* <MovieSearch/> */}
    <TeamDirectory/>


   </>
  )
}

export default App
