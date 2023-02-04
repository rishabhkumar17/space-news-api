import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((response) => response.json())
      .then((data) => setNewsList(data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((value, key) => {
          return (
            <div key={key}>
              <h3>{value.title}</h3>
              <img src={value.imageUrl} alt={value.id} />
              <p>{value.summary}</p>
              <h4>{value.publishedAt}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
