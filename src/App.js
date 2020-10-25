import logo from './logo.svg';
import './App.scss';

import View from './components/Chamado/view';
import Add from './components/Chamado/add';
import ListarChamados from './components/Chamado/listarChamados';

import { BrowserRouter, Switch, Route, Router, Redirect, Link } from 'react-router-dom'

function App() {
  return (
    <div className="chamados">
      <div className="header">
        <h3>Header</h3>
      </div>
      <div className="container">  
        <div className="menu">
          <ul className="">
                <li><Link to="/listarChamado" >Listar Chamado</Link></li>
                <li><Link to="/add">Criar Chamado</Link></li>
          </ul>
        </div>
        <div className="app">
         
            <Switch>
              <Route path="/listarChamados" component={ ListarChamados } />
              <Route exact path="/add" component={ Add } />
              <Route exact path="/view/:id" component={ View } />
              <Route path="*" component={ ListarChamados } />
            </Switch>
         
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
