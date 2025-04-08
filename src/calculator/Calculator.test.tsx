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
    
    fireEvent.click(button5)
    expect(display.textContent).toBe('5')
    
    fireEvent.click(buttonPlus)
    
    fireEvent.click(button3)
    expect(display.textContent).toBe('3')
    
    fireEvent.click(buttonEquals)
    expect(display.textContent).toBe('8')
  })
  
  it('should handle equals for subtraction', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button9 = screen.getByText('9')
    const buttonMinus = screen.getByText('-')
    const button4 = screen.getByText('4')
    const buttonEquals = screen.getByText('=')
    
    fireEvent.click(button9)
    expect(display.textContent).toBe('9')
    
    fireEvent.click(buttonMinus)
    
    fireEvent.click(button4)
    expect(display.textContent).toBe('4')
    
    fireEvent.click(buttonEquals)
    expect(display.textContent).toBe('5')
  })
  
  it('should handle equals for multiplication', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button6 = screen.getByText('6')
    const buttonMultiply = screen.getByText('×')
    const button7 = screen.getByText('7')
    const buttonEquals = screen.getByText('=')
    
    fireEvent.click(button6)         
    expect(display.textContent).toBe('6')
    
    fireEvent.click(buttonMultiply)
    
    fireEvent.click(button7)
    expect(display.textContent).toBe('7')
    
    fireEvent.click(buttonEquals)
    expect(display.textContent).toBe('42')
  })
  
  it('should handle equals for division', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button8 = screen.getByText('8')
    const buttonDivide = screen.getByText('/')
    const button2 = screen.getByText('2')
    const buttonEquals = screen.getByText('=')
    
    fireEvent.click(button8)
    expect(display.textContent).toBe('8')
    
    fireEvent.click(buttonDivide)
    
    fireEvent.click(button2)
    expect(display.textContent).toBe('2')
    
    fireEvent.click(buttonEquals)
    expect(display.textContent).toBe('4')
  })

  it('should handle equals for exponentiation', () => {
    render(<Calculator />)
    
    const display = screen.getByTestId('calculator-display')
    
    const button2 = screen.getByText('2')
    const buttonPower = screen.getByText('x^y')
    const button3 = screen.getByText('3')
    const buttonEquals = screen.getByText('=')
    
    fireEvent.click(button2)
    expect(display.textContent).toBe('2')
    
    fireEvent.click(buttonPower)
    
    fireEvent.click(button3)
    expect(display.textContent).toBe('3')
    
    fireEvent.click(buttonEquals)
    expect(display.textContent).toBe('8')
  })
})
