import './App.css';
import FlagCotainer from './Components/FlagCotainer';
import FlagList from './Components/FlagList'

const Flags = [
  {
    flagtitle: "Likelihood",
    severity: "High",
    color: "hotpink",
  },
  {
    flagtitle: "Impact",
    severity: "Critical",
    color: "Red",
  },
  {
    flagtitle: "Risk Rating",
    severity: "Medium",
    color: "Blue",
  }

]
const Flags2 = [
  {
    flagtitle: "Likelihood",
    severity: "High",
    color: "Green",
  },
  {
    flagtitle: "Impact",
    severity: "Critical",
    color: "Yellow",
  },
  {
    flagtitle: "Risk Rating",
    severity: "Medium",
    color: "Maroon",
  }

]
function App() {
  return (
    <div className="App">
      Flag selection

      <FlagCotainer data={Flags} />
      <FlagCotainer data={Flags2} />

      {/* <FlagList flagtitle="Likelihood" severity="High" color="hotpink"/> */}

    </div>
  );
}

export default App;
