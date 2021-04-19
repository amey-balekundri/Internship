import {BrowserRouter as Router,Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';

const App=()=> {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Home}></Route> 
    </Router>
    </div>
  );
}

export default App;
