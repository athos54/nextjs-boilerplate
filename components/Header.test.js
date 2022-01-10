import { render } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('test example', () => {
    const component = render(<Header />)
    expect(component.getByText(/header/i)).toBeInTheDocument()
  })
})
