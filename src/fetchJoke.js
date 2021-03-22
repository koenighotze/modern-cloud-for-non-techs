const axios = require('axios').default
const randomJokeUrl = 'https://official-joke-api.appspot.com/jokes/programming/random'

const fetchJoke = async () => {
    const { data } = await axios.get(randomJokeUrl)
    
    const { setup, punchline } = data[0]

    return `${setup}: ${punchline}`
}

module.exports = fetchJoke