import {useEffect, useState} from 'react'
import Hours from './components/Hours';
import Header from './components/Header';
import Button from './components/Button';
import Date from './components/Date';
import Desc from './components/Desc';
import Alarm from './components/Alarm';
import './App.css';
import Timer from './components/Timer';


function App() {
  const [name,setName] = useState()
  // const [time,setTime] = useState()
  const [date,setDate] = useState()
  // const [desc,setDesc] = useState()
  const [alarms,setAlarms] = useState([])
  
  // useEffect(() => {
  //   const newName = () => {
  //     const userName = prompt('please enter your name')
  //     if(userName.length === 0 || userName === '') {
  //       prompt('please enter your name')
  //     }else {
  //       setName(userName)
  //     }
  //   }
  //   newName()
  // },[])

  const setNewAlarm = (e) => {
    e.preventDefault()
    setDate(e.target[0].value)
  }

  return (
    <div className="App">
      <Timer date={date}/>
      <Header name={name}/>
      <form onSubmit={setNewAlarm}>
        <div className='hours-div'>
          <Date/>
        </div>
          <Desc/>
          <Button/>
      </form>
      {
        alarms.map((item,i) => {
          return(
            <div key={i}>
              <Alarm time={item.time} date={item.date} desc={item.desc}/>
            </div>
          )
        })
      }
      </div>
  );
}

export default App;
