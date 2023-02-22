import Toggle from "./Toggle"

const Alarm = (props) => {
    return (
        <div className="alarm-div">
            <div className="alarm-dateTime">
                <h1>{props.time}</h1>
                <h2>{props.date}</h2>
                <h2>{props.desc}</h2>
            </div>
            <Toggle/>
        </div>
    )
}

export default Alarm