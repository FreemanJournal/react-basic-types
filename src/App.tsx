import './App.css'
import Private from './components/Auth/Private'
import Profile from './components/Auth/Profile'
import { Counter } from './components/Class/Counter'
import Box from './components/Hooks/context/Box'
import { ThemeContextProvider } from './components/Hooks/context/ThemeContext'
import User from './components/Hooks/context/User'
import { UserContextProvider } from './components/Hooks/context/UserContext'
import List from './components/generics/List'
import RandomNumber from './components/restriction/RandomNumberProps'
import Toast from './components/templateLiterals/Toast'
export default function App() {
  const nameList = [
    {
      id: 1,
      first: "Bruce",
      last: "Wayne"
    },
    {
      id: 2,
      first: "Clark",
      last: "Kent"
    },
    {
      id: 3,
      first: "Shakil",
      last: "Mahmud"
    },

  ]
  return (
    <div className='App'>
      <Toast position='center'/>
      {/* <RandomNumber value={10} isPositive/> Restricted use of props */}
      {/* <List items={['Batman', 'Superman', 'Mrs Marvel']} onClick={(item) => console.log('item ::', item)} /> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log('item ::', item)} /> */}
      {/* <List items={[1,"Hello",3]} onClick={(item)=>console.log('item ::',item)}/> */}
      {/* <List items={nameList} onClick={(item) => console.log('item ::', item)} /> */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <Counter message='The count value is '/> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Counter/> */}
      {/* <User/> */}
    </div>
  )
}
