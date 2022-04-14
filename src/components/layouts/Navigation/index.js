import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const ToggleNav = (props) => {
  const { action, setIsOpenNav } = props

  const handleToggleNav = () => {
    setIsOpenNav((prevState) => !prevState)
  }

  const iconToggle = (action === 'open')
    ? <FontAwesomeIcon icon={faBarsStaggered} />
    : <FontAwesomeIcon icon={faXmark} className="mt-5 text-4xl" />

  return (
    <span
      className="text-yellow-400 hover:text-yellow-100 py-2 px-4 md:hidden cursor-pointer"
      onClick={() => handleToggleNav()}>
      {iconToggle}
    </span>
  )
}

const Nav = (props) => {
  const { orientation } = props

  const stylesNav = (orientation === 'row')
    ? 'hidden md:block flex flex-row justify-between items-center space-x-3'
    : 'flex flex-col justify-center items-center space-y-3 text-xl'

  return (
    <nav className={stylesNav}>
      <a href="/" className="text-white p-2 hover:text-green-100 active:text-green-100">
        About me!
      </a>
      <a href="/blog" className="text-white p-2 hover:text-green-100 active:text-green-100">
        Blog
      </a>
      <a href="/projects" className="text-white p-2 hover:text-green-100 active:text-green-100">
        Projects
      </a>
    </nav>
  )
}

const Navigation = () => {
  const [isOpenNav, setIsOpenNav] = useState(false)

  let ModalNav = null
  if (isOpenNav) {
    ModalNav = (
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 h-100vh flex flex-col justify-center items-center">
          <Nav orientation="col" />
          <ToggleNav action="close" setIsOpenNav={setIsOpenNav} />
      </div>
    )
  } else {
    ModalNav = (<Nav orientation="row" />)
  }

  return (
    <>
      <ToggleNav action="open" setIsOpenNav={setIsOpenNav} />
      {ModalNav}
    </>
  )
}

export default Navigation
