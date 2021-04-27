import  React ,  {  useState , useContext}from 'react'
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext
function App() {

  const [ theme , setTheme ] = useState('red')
  return (
    <ThemeContext.Provider value={{
      backgroundColor: theme
    }}>
      Counter
    <Counter initialCount={0}/>
     Counter Hooks
    <CounterHooks initialcount={5}></CounterHooks>
    <button onClick={prevTheme=>{
      return prevTheme === 'red' ?  'blue' : 'red'}}>Toogle theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
