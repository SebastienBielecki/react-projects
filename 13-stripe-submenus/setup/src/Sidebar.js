import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {

  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return <>
    <div className={ isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((sublink, idx1) => {
            return (
              <article key={idx1}>
                <h4>{sublink.page}</h4>
                <div className='sidebar-sublinks'>
                {sublink.links.map((link, idx2)=> {
                  return (
                      <a key={idx2} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    
                  )
                })
                }
                </div>
              </article>
            )
          })}
          
        </div>
      </aside>
    </div>
  </>
}

export default Sidebar
