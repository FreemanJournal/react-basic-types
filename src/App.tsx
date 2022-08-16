import './App.css'
import Box from './components/Hooks/context/Box'
import { ThemeContextProvider } from './components/Hooks/context/ThemeContext'
import User from './components/Hooks/context/User'
import { UserContextProvider } from './components/Hooks/context/UserContext'
import Counter from './components/Hooks/Counter'
export default function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Counter/> */}
      {/* <User/> */}
    </div>
  )
}
