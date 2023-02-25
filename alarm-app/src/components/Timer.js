const Timer = (props) => {
    const a = new Date()
    const m = new Date(props.date)
    const diffTime = (m-a)
    const diffDays = Math.floor(diffTime / 86400000)
    const diffHrs = Math.floor((diffTime % 86400000) / 3600000)
    const diffMins = Math.round(((diffTime % 86400000) % 3600000) / 60000)
}
export default Timer