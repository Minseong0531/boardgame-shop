import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.css';

function SearchInput() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    navigate(`/search?q=${encodeURIComponent(input.trim())}`);
    setInput('');
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="보드게임 검색"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit">
      <SearchIcon/>
      </button>
    </form>
  );
}

export default SearchInput;