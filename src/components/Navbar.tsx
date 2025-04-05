import { ArrowLeft, Plus, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"


const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div>
           <nav className="border-b border-purple-500/20 bg-black backdrop-blur-sm sticky top-0 z-50"> 
      <div className="container mx-auto px-4 py-4"> 
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"> 
          
          <div className="flex items-center gap-6"> 
            <button 
            onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 p-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/50 hover:bg-purple-500/20 transition-all whitespace nowrap"> 
              <ArrowLeft size={20} /> 
            </button> 
            <h4 className="text-md sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"> 
              Explore Projects 
            </h4> 
          </div> 
 
          
          <div className="flex items-center gap-4"> 
            <div className="relative w-64 sm:w-80"> 
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} /> 
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full bg-black/30 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-purple-500/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all" 
              /> 
            </div> 
            <button 
            onClick={() => navigate('/create-project')}
              className="flex items-center text-white justify-center gap-2 px-4 py-2 bg-purple-500/10 text-purple 400 rounded-lg border border-purple-500/50 hover:bg-purple-500/20 transition-all whitespace nowrap"> 
              <Plus size={20} /> 
              Create Project 
            </button> 
          </div> 
        </div> 
      </div> 
    </nav>
    </div>
  )
}

export default Navbar
