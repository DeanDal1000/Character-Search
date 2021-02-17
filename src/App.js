import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Searchbar from './components/searchbar';
import { fetchData } from './components/api';

// class App extends React.Component {
//   async componentDidMount() {
//     const data = await fetchData();
//     console.log(data);
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header />
//         {/* <Searchbar /> */}
//       </div>
//     );
//   }
// }
// export default App;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.map((item) => (
          <div className="container" key={item.id}>
            <div className="card">
              <div className="card-body">
                <p>
                  {' '}
                  <img src={item.image} alt="image" />{' '}
                </p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card text">{item.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
