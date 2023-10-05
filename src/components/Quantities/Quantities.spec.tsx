import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'

import { Quantities } from '.'

describe('Components/Quantities', () => {
  it('should render the Quantities component correctly', () => {
    const { asFragment } = render(<Quantities />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should return the text 0 of 10 and not 0', async () => {
    const testID = 'test:quantities'

    render(<Quantities testID={testID} created={10} />)

    const counterComponent = screen.getByTestId(testID).children[1].children[1]

    expect(counterComponent.innerHTML).not.toBe('0')
  })
})
