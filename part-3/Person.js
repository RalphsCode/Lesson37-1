
function Person(props){
    let script;
    // If the person is over 18 years old
    if (props.age >= 18){
        script = "please go vote!"
    } else { 
        script = "you must be 18"
    }

    /**
     * If the person’s name is longer than 8 characters, only display the first six characters of their name.
     */
    const maxEightCharsName = props.name.length > 8 ? props.name.substring(0, 6) + '...' : props.name;

    return (
        <div  className="container">
            <p className="bg-primary text-white">Learn some information about this person: </p>
            <p><b>{maxEightCharsName}</b>, age: {props.age} </p>
            <h3>-&nbsp; {script}.</h3>
            <p><b>Hobbies:</b></p>
            <p>{props.hobbies.map(item => <li>{item}</li>)}</p> 
        </div>
    )
}