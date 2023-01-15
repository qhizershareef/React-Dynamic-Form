import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TestScreen from './Screens/TestScreen';


function App(props) {
  return (
          <Router>
                <Routes>
                    <Route path="/" exact element={<TestScreen/>}/>
                </Routes>
            </Router>
  );
}

export default App;
