import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsList = ({sorted}) => {
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-12">
      {sorted && sorted.map((item, index)=>
       <Link key={index} to="/portfolio-details/Medical-VR-Intubation-Simulation">
       <div className="mb-4">
         <div className="relative">
           <img className='w-full' src={item.img} alt="" />
           <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
             <img
               className="w-10 h-11 "
               src="/images/Portfolio/vr-1.svg"
               alt=""
             />
           </div>
         </div>
         <p className="text-white text-xl mt-4">{item.name}</p>
         <p className="text-white text-xl">{item.type}</p>
       </div>
       </Link>
      )}
  </div>
  )
}

export default ProjectsList