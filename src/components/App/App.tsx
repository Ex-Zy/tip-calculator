import './App.scss'
import { Logo } from '../Logo.tsx'
import { TipCalculator } from '../TipCalculator/TipCalculator.tsx'

function App() {
  return (
    <div className="app">
      <Logo />
      <TipCalculator className="tip-calculator--margin" />
    </div>
  )
}

export default App
