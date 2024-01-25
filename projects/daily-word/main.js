const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/bliss'

fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      // Add other necessary headers here, e.g., Authorization tokens
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    // Process successful response data here, e.g.:
    console.log(jsonData);
  })
  .catch(err => {
    // Handle errors here, e.g.:
    console.error('Fetch problem: ', err.message);
  });