import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AboutMe from 'components/Pages/AboutMe'

describe('Test about me components', () => {
  test('should show a image the avatar on the left sidebar with alt Irwing Naranjo', async () => {
    const view = render(<AboutMe />)
    const logo = view.getByTestId('image')
    expect(logo).toHaveAttribute('alt', 'Irwing Naranjo')
    expect(logo).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/499907?v=4')
  })
  test('should show a subtitle Social networks: and social links github, linkedin, instagram', async () => {
    const subtitle = 'Social networks:'
    const links = [
      'GitHub',
      'LinkedIn',
      'Instagram'
    ]

    const view = render(<AboutMe />)
    await view.getByText(subtitle)
    links.forEach(link => {
      view.getByText(link)
    })
  })
  test('should show on the title: Hi i am Irwing!', async () => {
    const title = 'Hi i am Irwing!'
    const view = render(<AboutMe />)
    await view.getByText(title)
  })
  test('should show on the skills: PHP / JS / HTML', async () => {
    const skills = ['PHP', 'JS', 'HTML']
    const view = render(<AboutMe />)
    skills.forEach(skill => {
      view.queryByText(skill)
    })
  })
})
