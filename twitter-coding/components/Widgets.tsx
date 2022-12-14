import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Widgets() {
  return (
    <div className="mt-2 px-2" >
        {/*search*/}
        <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3 ">
            <SearchIcon className="h-5 w-5 text-gray-400"/>
            <input 
            type="text" 
            placeholder="Search Twitter" 
            className="flex-1 bg-transparent outline-none" />
        </div>

        
    </div>
  )
}

export default Widgets