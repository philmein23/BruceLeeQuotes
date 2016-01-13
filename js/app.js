$(function () {
   document.getElementById("button").onclick = buttonClick;




})


var randomQuotes = [
    {quote: "The key to immortality is first living a life worth remembering."},
    {quote: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successfull personality and duplicate it."},
    {quote: "If you love life, don't waste time, for time is what life is made up of."},
    {quote: "If you spend too much time thinking about a thing, you'll never get it done."},
    {quote: "Mistakes are always forgivable, if one has the courage to admit them."},
    {quote: "To hell with circumstances; I create opportunities."},
    {quote: "A goal is not always meant to be reached, it often serves simply as something to aim at."},
    {quote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer."},
    {quote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."},
    {quote: "Adapt what is useful, reject what is useless, and add what is specifically your own."},

];


function buttonClick() {

    var randomNum = Math.floor((10 * Math.random()));
    document.getElementById("quotebox").innerHTML = randomQuotes[randomNum].quote;
    var target = document.getElementById("tweet");
    target.href = "https://twitter.com/intent/tweet?text=" + randomQuotes[randomNum].quote;


}
