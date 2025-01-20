import React from 'react'
import { TiAttachment} from 'react-icons/ti'
function ProjectsCard({project}) {
  return (
    <div className='p-6 bg-white rounded-xl space-y-5'>
      <div>
        <h1 className='text-xl font-semibold text-gray-700'>{project.name}</h1>
        <p className='text-sm text-gray-500'>{project.type}</p>
      </div>
      <p className='text-xs p-2 rounded bg-gray-100 w-[25%]'>{project.date}</p>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div className='w-[30%] bg-indigo-500 rounded-full h-2'></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='relative'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt="gpt" className='w-10 h-10 rounded-full border-4 border-white'/>
          <img src='https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=211&h=211&c=7&r=0&o=5&pid=1.7' alt="gpt" className='w-10 h-10 rounded-full border-4 border-white absolute top-0 left-4'/>
          <img src='https://th.bing.com/th/id/R.139ba3f17d2966ca1fcfbfe34491d3d6?rik=bgSItoyASVfBIg&riu=http%3a%2f%2fimages.statusfacebook.com%2fprofile_pictures%2fstylish-girls%2fstylish-girls-profile-pictures-06.jpg&ehk=kWv6V6UoRzOKd6EZhppwqyTtbYvzCiWpUxEHHjwKtiY%3d&risl=&pid=ImgRaw&r=0' alt="gpt" className='w-10 h-10 rounded-full border-4 border-white absolute top-0 left-8'/>
          <img src='https://th.bing.com/th/id/OIP.UZNS_zKmXLb_Pl-6Bh9OdQHaGr?rs=1&pid=ImgDetMain' alt="gpt" className='w-10 h-10 rounded-full border-4 border-white absolute top-0 left-12'/>
        </div>
        <p className='flex space-x-2 items-center text-gray-400'>
          <TiAttachment/>
          <span>{project.files}</span> files
        </p>
      </div>
    </div>
  )
}

export default ProjectsCard