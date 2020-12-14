const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        // this is the header format as per "https://icanhazdadjoke.com/api"
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (err) {
        return "no jokes available";
    }
}
button.addEventListener('click', addNewJoke)

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log('ERROR', err)
//     })

// *******************************************************************************************************************************************
// USING ASYNC AND AWAIT
// *******************************************************************************************************************************************

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }
//     catch (err) {
//         console.log('ERROR', err)
//     }
// }

// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     // this is the header format accepted in their documentation
//     const res = await axios.get('https://icanhazdadjoke.com/', config)
//     console.log(res.data.joke)
// }

// getDadJoke()
// Promise {<pending>}__proto__: Promise[[PromiseStatus]]: "resolved"[[PromiseValue]]: undefined
// app.js:24 
// {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
// config: {url: "https://icanhazdadjoke.com/", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data:
// id: "pjyA59MRusc"
// joke: "There’s a new type of broom out, it’s sweeping the nation."
// status: 200
// __proto__: Object
// headers:
// cache-control: "max-age=0, must-revalidate, no-cache, no-store, public, s-maxage=0"
// content-type: "application/json"
// __proto__: Object
// request: XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status: 200
// statusText: ""
// __proto__: Object






