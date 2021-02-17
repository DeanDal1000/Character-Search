import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
// import Searchbar from './components/searchbar';
import { fetchData } from './components/api';

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className="container">
        <Header />
        {/* <Searchbar /> */}
      </div>
    );
  }
}
export default App;
