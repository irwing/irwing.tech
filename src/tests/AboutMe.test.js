import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AboutMe from 'components/pages/AboutMe'

describe('Test about me components', () => {
  test('should show a image the avatar on the left sidebar with alt Irwing Naranjo', async () => {
    const view = render(<AboutMe />)
    const logo = view.getByTestId('image')
    expect(logo).toHaveAttribute('alt', 'Irwing Naranjo')
    expect(logo).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/499907?v=4')
  })
  test('Validation social networks', async () => {
    const subtitle = 'Redes sociales:'
    const links = [
      'LinkedIn',
      'GitHub',
      'Instagram'
    ]

    const view = render(<AboutMe />)
    await view.getByText(subtitle)
    links.forEach(link => {
      view.getByText(link)
    })
  })
})
