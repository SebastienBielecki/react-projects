import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [show, setShow] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [show])

  return <>
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo"/>
          <button onClick={() => setShow(!show)} className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map(link => {
              return <>
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              </>
            })}
          </ul>
        </div>
        <ul className='social-icons'>
         {social.map(el => {
          return <>
            <li key={el.id}>
              <a href={el.url}>
                {el.icon}
              </a>
            </li>
          </>
         })}
        </ul>
      </div>
    </nav>
  </>
}

export default Navbar
