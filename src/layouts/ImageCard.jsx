// import React from 'react'

// export default function ImageCard( {children,imgsrc, ... props}) {
//   return (
//     <div {... props} className='p-5 flex items-center'>
//         <div className='relative max-w-md overflow-hidden rounded-xl shadow-lg group'>
//             <img src={imgsrc} className='transition-transform group-hover:scale-100 duration-200'/>
//             <div className='p-4 absolute insert-0 text-white flex items-end bg-gradient-to-t from-black/60 to-transparent'>{children}</div>
//         </div>
//     </div>
//   )
// }


// import React from 'react';

// export default function ImageCard({ children, imgsrc, alt = 'Image', ...props }) {
//   return (
//     <div className='p-5 flex items-center'>
//       <div {...props}  className='relative max-w-md overflow-hidden rounded-xl shadow-lg group'>
//         <img 
//           src={imgsrc} 
//           alt={alt} 
//           className='transition-transform group-hover:scale-105 duration-200' 
//         />
//         <div className='absolute inset-0 p-4 text-white flex items-end bg-gradient-to-t from-black/60 to-transparent'>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function ImageCard({ children, imgsrc, alt = 'Image', ...props }) {
  return (
    <div {...props} className='p-5 flex items-center'>
      <div className='relative max-w-md overflow-hidden rounded-xl shadow-lg group'>
        <img 
          src={imgsrc} 
          alt={alt} 
          className='transition-transform group-hover:scale-105 duration-200 w-full' 
        />
        <div className='absolute inset-0 p-4 text-white flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent'>
          {children}
        </div>
      </div>
    </div>
  );
}
