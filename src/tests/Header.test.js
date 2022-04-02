import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from 'components/layouts/Header'

describe('Test layouts components', () => {
  test('should show on the title: Irwing Naranjo', async () => {
    const title = 'Irwing Naranjo'
    const view = render(<Header />)
    await view.getByText(title)
  })
  test('should show on the nav: Sobre mi, Blog, Videos, Proyectos', async () => {
    const links = [
      'Sobre mi',
      'Blog',
      'Videos',
      'Proyectos'
    ]
    const view = render(<Header />)
    links.forEach(link => {
      view.getByText(link)
    })
  })
})
