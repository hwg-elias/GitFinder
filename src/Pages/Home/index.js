import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false)

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      history.push('./repositories');
    })
      .catch(err => {
        setError(true);
      });
  }
  return (
    <S.HomeCtainer>
      <S.Ctainer>
        <h1>Git Finder</h1>
        <p>@{user}</p>
        <S.Input placeholder="User" className="userInput" value={user} onChange={e => setUser(e.target.value)} />
        <S.Button type="button" onClick={handleSearch}>Search</S.Button>
      </S.Ctainer>

      {error ? <S.ErrorMsg>An error has occurred. Try again.</S.ErrorMsg> : ''}
    </S.HomeCtainer>
  );
}

export default App;
