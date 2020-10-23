import React from 'react';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">

      <Router>
        <Header />
        <Switch>

          <Route path="/search/:searchId">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>

          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
