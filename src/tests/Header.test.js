import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from 'components/layouts/Header'

describe('Test layouts components', () => {
  test('should show on the title: Irwing Naranjo', async () => {
    const title = 'Irwing Naranjo'
    const view = render(<Header />)
    await view.getByText(title)
  })
  test('Validation navigation', async () => {
    const links = [
      'Sobre mí!',
      'Portafolio'
    ]
    const view = render(<Header />)
    links.forEach(link => {
      view.getByText(link)
    })
  })
})
