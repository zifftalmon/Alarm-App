const Toggle = () => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" checked={true}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle