const Header = () => {
  return (
    <header className="bg-gray-400 w-100 flex flex-row justify-between py-5">
      <div className="flex">
        <a className="text-yellow-400 hover:text-yellow-100" href="#">
          Irwing Naranjo
        </a>
      </div>
      <nav className="flex flex-row justify-between space-x-3">
        <a href="#" className="text-white hover:text-green-100 active:text-green-100">
          Sobre mi
        </a>
        <a href="#" className="text-white hover:text-green-100 active:text-green-100">
          Blog
        </a>
        <a href="#" className="text-white hover:text-green-100 active:text-green-100">
          Videos
        </a>
        <a href="#" className="text-white hover:text-green-100 active:text-green-100">
          Proyectos
        </a>
      </nav>
    </header>
  )
}

export default Header
