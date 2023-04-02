import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsList = ({sorted}) => {
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-12 max-w-screen-xxl mx-auto">
      {sorted && sorted.map((item, index)=>
       <Link key={index} to={`/portfolio-details/${item.name.replace(/ /g, "_")}`}>
       <div className="mb-4">
         <div className="relative">
           <img className='w-80 h-80 xxl:w-96 xxl:h-96 2xl:w-100 2xl:h-100 3xl:w-110 3xl:h-110 object-fill' src={item.img} alt="" />
           <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
             <img
               className="w-10 h-11 "
               src={`/icons/${item.icon}.svg`}
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