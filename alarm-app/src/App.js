import {useEffect, useState} from 'react'
import Numbers from './components/Numbers';
import Header from './components/Header';
import './App.css';


function App() {
  const [name,setName] = useState()


  useEffect(() => {
    const newName = () => {
      const userName = prompt('please enter your name')
      if(userName.length === 0 || userName === '') {
        prompt('please enter your name')
      }else {
        setName(userName)
      }
    }
    newName()
  },[])

  return (
    <div className="App">
      <Header name={name}/>
      <div className='hours-div'>
        <Numbers/>
        <Numbers/>
      </div>
    </div>
  );
}

export default App;
