import {useEffect, useState} from 'react'
import Hours from './components/Hours';
import Header from './components/Header';
import Button from './components/Button';
import Date from './components/Date';
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
        <Hours/>
        <Date/>
        <Button/>
      </div>
    </div>
  );
}

export default App;
