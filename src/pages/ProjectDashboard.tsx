import  { useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { IProject } from '../type'
import { Footer } from '../components/Footer'
export const ProjectDashboard = () => {
    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const response = await axios.get<IProject[]>('https://akatsuki-project-hub-backend.vercel.app/api/project')
                setProjects(response.data)
                setLoading(false)
    
            }catch(error){
                console.error('Error fetching projects:', error)
                setLoading(false)
            }
            
        }
        fetchProjects()
    })
    

    const [technology, setTechnology] = useState<string>('all')
    const [projects, setProjects] = useState<IProject[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const filteredProjects = projects.filter((project) => {
        return(technology === 'all' || project.techStack.toLowerCase() === technology.toLowerCase())
    })

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-2xl text-purple-400">Loading project...</div>
            </div>
        );
    }
    return (
        <div className=''>
            <Navbar />

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 mt-8">
                {['All', 'MERN', 'JAVA', 'PYTHON'].map(tech => (
                    <button
                    onClick={()=>{setTechnology(tech.toLowerCase())}}
                        key={tech}
                        className={`px-4  text-black cursor-pointer sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 border
                 
                ? 'bg-black text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-black/50 text-gray-400 border-gray-800 hover:border-purple-500/50'
                }`}
                    >
                        {tech}
                    </button>
                ))}
            </div>



            <div className="m-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
                {filteredProjects.map((project) => (
                    <Card project={project} key={project._id} />
                ))}

            </div>
            <Footer/>
        </div>
    )
}
