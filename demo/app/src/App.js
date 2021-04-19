import {BrowserRouter as Router,Route}  from 'react-router-dom'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const  App= () => {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Home}></Route> 
    </Router>
    </div>
  );
}

export default App;
