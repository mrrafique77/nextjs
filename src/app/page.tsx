import React from 'react'

const page = () => {
  return(
     <div> <figure className="md:flex bg-pink-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
       <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/rfique.jpg" alt="" width="1000" height="1000"/>
       <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
         <blockquote>
           <p className="text-lg font-medium">
             “Hello! Muahammad rafique here, student of ICS, I am  passionate for learning coding 
              and building different apps”
           </p>
         </blockquote>
         <figcaption className="font-medium">
           <div className="text-sky-500 dark:text-sky-400">
             Muhammad Rafiique
           </div>
           <div className="text-slate-700 dark:text-slate-500">
             student of ICS
           </div>
         </figcaption>
       </div>
     </figure></div>
  )
}

export default page