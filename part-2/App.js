const App = () => (
    // These are the props/properties to use in the Components
    <div>
        <Tweet username="RalphsCode" name="Big Money" date="2024-12-03" message="22 days until Christmas!" />
        <Tweet username="SantasLittleHelper" name="Chad Elfston" date="2024-12-03" message="Time to get to work!" />
        <Tweet username="BigRed" name="Rudolf" date="2024-12-03" message="Need to get the sleigh to the shop for servicing!" />
    </div>
  );
  
  ReactDOM.render(<App/>, document.getElementById("root"));