
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { ProjectDashboard } from './pages/ProjectDashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProjectDetails } from './pages/ProjectDetails'
import CreateProject from './pages/CreateProject'
function App() {

  // const project = {
  //   title: "AI Chat Application"
  // }

  return (
    <div className='bg-black'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/dashboard' element={<ProjectDashboard/>}/>
          <Route path='/dashboard/:id' element={<ProjectDetails/>}/>
          <Route path='/create-project' element={<CreateProject/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
