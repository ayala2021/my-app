import './App.css';
import HomePage from './components/HomePage';
import TodosPage from './components/TodosPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return <Router>
    <Switch>
      <Route path="/todos">
      <TodosPage/>
      </Route>
      <Route exact path="/">
      <HomePage/>
      </Route>
    </Switch>
</Router>
}

export default App;
