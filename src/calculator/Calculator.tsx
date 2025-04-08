import { useState } from 'react'

function Calculator() {
    const [display, setDisplay] = useState('0')
    const [firstOperand, setFirstOperand] = useState<number | null>(null)
    const [operator, setOperator] = useState<string | null>(null)
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)

    const inputDigit = (digit: string) => {
        if (waitingForSecondOperand) {
            setDisplay(digit)
            setWaitingForSecondOperand(false)
        } else {
            setDisplay(display === '0' ? digit : display + digit)
        }
    }

    const inputDecimal = () => {
        if (waitingForSecondOperand) {
            setDisplay('0.')
            setWaitingForSecondOperand(false)
            return
        }

        if (!display.includes('.')) {
            setDisplay(display + '.')
        }
    }

    const clearDisplay = () => {
        setDisplay('0')
        setFirstOperand(null)
        setOperator(null)
        setWaitingForSecondOperand(false)
    }

    const performOperation = (nextOperator: string) => {
        const inputValue = parseFloat(display)

        if (firstOperand === null) {
            setFirstOperand(inputValue)
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator)
            setDisplay(String(result))
            setFirstOperand(result)
        }

        setWaitingForSecondOperand(true)
        setOperator(nextOperator)
    }

    const calculate = (firstOperand: number, secondOperand: number, operator: string) => {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand
            case '-':
                return firstOperand - secondOperand
            case '*':
                return firstOperand * secondOperand
            case '/':
                return firstOperand / secondOperand
            default:
                return secondOperand
        }
    }

    const handleEquals = () => {
        if (!operator || firstOperand === null) return

        const inputValue = parseFloat(display)
        const result = calculate(firstOperand, inputValue, operator)
        setDisplay(String(result))
        setFirstOperand(result)
        setOperator(null)
        setWaitingForSecondOperand(true)
    }

    return (
        <div className="calculator-container" style={{ maxWidth: '300px', margin: '0 auto', padding: '20px' }}>
            <h2>Calculator</h2>
            <div className="calculator-display" data-testid="calculator-display" style={{
                backgroundColor: '#f0f0f0',
                padding: '10px',
                textAlign: 'right',
                fontSize: '24px',
                marginBottom: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                color: '#333',
            }}>
                {display}
            </div>
            <div className="calculator-keypad" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px'
            }}>
                <button onClick={() => clearDisplay()} style={{ gridColumn: 'span 2' }}>AC</button>
                <button onClick={() => performOperation('/')}>/</button>
                <button onClick={() => performOperation('*')}>×</button>

                <button onClick={() => inputDigit('7')}>7</button>
                <button onClick={() => inputDigit('8')}>8</button>
                <button onClick={() => inputDigit('9')}>9</button>
                <button onClick={() => performOperation('-')}>-</button>

                <button onClick={() => inputDigit('4')}>4</button>
                <button onClick={() => inputDigit('5')}>5</button>
                <button onClick={() => inputDigit('6')}>6</button>
                <button onClick={() => performOperation('+')}>+</button>

                <button onClick={() => inputDigit('1')}>1</button>
                <button onClick={() => inputDigit('2')}>2</button>
                <button onClick={() => inputDigit('3')}>3</button>
                <button onClick={() => handleEquals()} style={{ gridRow: 'span 2' }}>=</button>

                <button onClick={() => inputDigit('0')} style={{ gridColumn: 'span 2' }}>0</button>
                <button onClick={() => inputDecimal()}>.</button>
            </div>
        </div>
    )
}

export default Calculator
