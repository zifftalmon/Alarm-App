import {useEffect, useState} from 'react'
import Hours from './components/Hours';
import Header from './components/Header';
import Button from './components/Button';
import Date from './components/Date';
import Desc from './components/Desc';
import Alarm from './components/Alarm';
import './App.css';


function App() {
  const [name,setName] = useState()
  const [time,setTime] = useState()
  const [date,setDate] = useState()
  const [desc,setDesc] = useState()
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
    setTime(e.target[0].value)
    setDate(e.target[1].value)
    setDesc(e.target[2].value)
    setAlarms(alarms => [...alarms,{time:time,date:date,desc:desc}])
  }

  return (
    <div className="App">
      <Header name={name}/>
      <form onSubmit={setNewAlarm}>
        <div className='hours-div'>
          <Hours/>
          <Date/>
        </div>
          <Desc/>
          <Button/>
      </form>
      {
        alarms.map((item,i) => {
          console.log(item);
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
