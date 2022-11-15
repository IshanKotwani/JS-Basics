
var oneLinerJoke = require('one-liner-joke');
var cowsay = require('cowsay')

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
const joku = getRandomJoke.body;

var getRandomJoke = oneLinerJoke.getRandomJoke();
const jokf = getRandomJoke.body;

var getRandomJoke = oneLinerJoke.getRandomJoke();
const jokg = getRandomJoke.body;



console.log(
    cowsay.say({
        text: joku,jokf,jokg,
        e:"$$",
        T:"b",
        
    })
);