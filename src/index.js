const fetchJoke = require('./fetchJoke')

fetchJoke()
    .then((joke) => console.log(joke))
    .catch((error) => console.log(error))