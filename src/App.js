import "./App.css";
import Meditation from "./Component/Meditation";
import Navbar from "./Component/Navbar";
import YogaBenifits from "./Component/yogaBenifits";
import Yogasection from "./Component/Yogasection";

function App() {
  return (
    <div className="App">
    <Yogasection />
    <Meditation />
    <YogaBenifits />
    </div>
  );
}

export default App;
