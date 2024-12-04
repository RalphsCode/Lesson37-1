
function Tweet(props){
    return (
        <div className="container">
            <p className="text-warning">&#x1F426; Tweet:</p>
            <p className="text-primary"><b>Message:</b> {props.message}</p>
            <p className="text-secondary"><b>Username:</b> {props.username} -&nbsp;
            <b>Name:</b> {props.name} -&nbsp;
            <b>Date:</b> {props.date}</p>
        </div>
    );
}