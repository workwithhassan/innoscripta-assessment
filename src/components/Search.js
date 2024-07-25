import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        label="Search articles"
        variant="outlined"
        fullWidth
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default Search;