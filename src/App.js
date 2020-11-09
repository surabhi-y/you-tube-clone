import React,{useEffect, useState} from 'react';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {

  const [inputSearch,setInoutSearch]=useState("");

  const [data, setData] = useState(null)
  const fetchData=()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${inputSearch}&type=video&key=AIzaSyCPzbK8xIGcGqW6QlxoF1F198juHL7oiPU`)
    .then(res=>res.json())
    .then(data=> {
      setData(data)
      console.log(data)})

}
  useEffect(() => {
    
    fetchData()
    
  }, [])

  

function handler(e){
          setInoutSearch(e.target.value);
}
  
  return (
    <div className="app">

      <Router>
        <Header inputSearch={inputSearch} setInoutSearch={inputSearch} handler={handler} fetchData={fetchData}/>
        <Switch>

          <Route path="/search/:searchId">
            <div className="app__page">
              <Sidebar />
              <SearchPage data={data} />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos  data={data} />
            </div>

          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
