const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', () => {
  const query = searchInput.value;

  // Send the query to your backend server
  fetch(`/search?q=${encodeURIComponent(query)}`)
    .then(response => response.text())
    .then(data => {
      resultsDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching results:', error);
      resultsDiv.innerHTML = 'Error fetching results';
    });
});
