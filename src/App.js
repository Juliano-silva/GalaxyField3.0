import Header from './components/Principal/Header';
import Api from './components/Project/Api';
import style from './components/Principal/Principal.module.css';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Portfolio from './components/Project/Portfolio'
import Post from './components/Project/Post'
import Inicial from './components/Principal/Inicial';
function App() {
  return (
    <div className={style.Corpo}>
    <Router>
        <Header/>
        <br />
        <div className={style.BorCorpo}>
        <Switch>
          <Route exact path="/">
            <Inicial/>
          </Route>
          <Route exact path="/Post">
            <Post/>
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio/>
          </Route>
        </Switch>
        </div>
        </Router>
    </div>
  );
}

export default App;
