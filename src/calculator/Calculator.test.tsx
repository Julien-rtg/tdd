import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator', () => {
  it('should handle equals for addition', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button5 = screen.getByText('5')
    const buttonPlus = screen.getByText('+')
    const button3 = screen.getByText('3')
    const buttonEquals = screen.getByText('=')
    
    // Simulate clicking the buttons to perform 5 + 3 = 
    fireEvent.click(button5)      // Click 5
    expect(display.textContent).toBe('5')
    
    fireEvent.click(buttonPlus)   // Click +
    
    fireEvent.click(button3)      // Click 3
    expect(display.textContent).toBe('3')
    
    fireEvent.click(buttonEquals) // Click =
    
    // Assert that the display shows the correct result (8)
    expect(display.textContent).toBe('8')
  })
  
  it('should handle equals for subtraction', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button9 = screen.getByText('9')
    const buttonMinus = screen.getByText('-')
    const button4 = screen.getByText('4')
    const buttonEquals = screen.getByText('=')
    
    // Simulate clicking the buttons to perform 9 - 4 = 
    fireEvent.click(button9)      // Click 9
    expect(display.textContent).toBe('9')
    
    fireEvent.click(buttonMinus)  // Click -
    
    fireEvent.click(button4)      // Click 4
    expect(display.textContent).toBe('4')
    
    fireEvent.click(buttonEquals) // Click =
    
    // Assert that the display shows the correct result (5)
    expect(display.textContent).toBe('5')
  })
  
  it('should handle equals for multiplication', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button6 = screen.getByText('6')
    const buttonMultiply = screen.getByText('×')
    const button7 = screen.getByText('7')
    const buttonEquals = screen.getByText('=')
    
    // Simulate clicking the buttons to perform 6 * 7 = 
    fireEvent.click(button6)         // Click 6
    expect(display.textContent).toBe('6')
    
    fireEvent.click(buttonMultiply)  // Click ×
    
    fireEvent.click(button7)         // Click 7
    expect(display.textContent).toBe('7')
    
    fireEvent.click(buttonEquals)    // Click =
    
    // Assert that the display shows the correct result (42)
    expect(display.textContent).toBe('42')
  })
  
  it('should handle equals for division', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button8 = screen.getByText('8')
    const buttonDivide = screen.getByText('/')
    const button2 = screen.getByText('2')
    const buttonEquals = screen.getByText('=')
    
    // Simulate clicking the buttons to perform 8 / 2 = 
    fireEvent.click(button8)       // Click 8
    expect(display.textContent).toBe('8')
    
    fireEvent.click(buttonDivide)  // Click /
    
    fireEvent.click(button2)       // Click 2
    expect(display.textContent).toBe('2')
    
    fireEvent.click(buttonEquals)  // Click =
    
    // Assert that the display shows the correct result (4)
    expect(display.textContent).toBe('4')
  })
})
