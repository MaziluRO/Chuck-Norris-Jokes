// https://icanhazdadjoke.com/api

const btn = document.querySelector('button');
const jokePara = document.querySelector('.joke');

const getJoke = async function () {
	const jokeURL = 'https://api.chucknorris.io/jokes/random';

	/*fetch('https://api.chucknorris.io/jokes/random')
		.then((response) => response.json())
		.then((data) => console.log(data));

	const response = await fetch(jokeURL);
	const responseData = await response.json();
  */

	const joke = await fetch(jokeURL)
		.then((response) => response.json())
		.then((data) => data);
	console.log(joke);

	jokePara.innerText = joke.value;
};

btn.addEventListener('click', getJoke);
