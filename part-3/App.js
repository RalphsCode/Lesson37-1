const App = () => (
    // These are the props/properties to use in the Components
    <div>
        <Person name="Tata" age={30} hobbies={ ["Surfing", "Skating", "Yoga"] } />
        <Person name="Bart Simpson" age={11} hobbies={ ["Goofing off", "Tricking Homer", "Teasing Lisa"]} />
        <Person name="Sidney Sweeney" age={18} hobbies={ ["Acting", "Reading"]} />
    </div>
  );
  
  ReactDOM.render(<App/>, document.getElementById("root"));