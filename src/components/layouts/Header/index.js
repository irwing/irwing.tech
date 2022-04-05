import Nav from 'components/layouts/Navigation'
import Icon from 'components/layouts/Icon'

const Header = () => {
  return (
    <header className="bg-gray-400 w-100 py-2">
      <div className="flex justify-between items-center">
        <Icon />
        <Nav />
      </div>
    </header>
  )
}

export default Header
