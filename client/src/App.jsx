import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import Main from './Views/Main';
import Create from './Views/Create';
import Show from './Views/Show';
import Edit from './Views/Edit';

function App() {
  return (
    <div className="App">
      <div className= "d-flex flex-wrap justify-content-between col-11 mx-3 p-2">
        <h1>Pet Shelter </h1>
        <Link to= "/">Back to Home</Link>
      </div>
       
      
                

      
      <Router>
      <Main path= "/" />
      <Create path="/new" />
      <Show path= "/show/:id" />
      <Edit path= "/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
