import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App'

test('renders learn react link', async () => {
  const title = /learn react/i
  const view = render(<App />)
  await view.findByText(title)
})
