import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import HomePage from './pages/HomePage';
import CommentListPage from './pages/CommentListPage';
import PostListPage from './pages/PostListPage';
import TaskListPage from './pages/TaskListPage';
import UserListPage from './pages/UserListPage';

import UserUpdatePage from './pages/UserUpdatePage';

function App() {
  return (
    <Router>
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React Admin</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users">Utilisateurs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/comments">Commentaires</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/posts">Articles</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tasks">Tâches</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/users/:bachi" component={UserUpdatePage} />
            <Route path="/users" component={UserListPage} />

            <Route path="/comments" component={CommentListPage} />
            <Route path="/tasks" component={TaskListPage} />
            <Route path="/posts" component={PostListPage} />

            <Route path="/" component={HomePage} />
          </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;
