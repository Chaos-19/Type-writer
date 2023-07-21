/*function getRandomQuote() {

 fetch('https://api.quotable.io/random')
    .then((response) => {
      if (!response.ok) throw Error(response.statusText)
       return response.json()
    })
    .then((quot) => console.log(quot))
    .catch(error => console.log(error));

*/

const bord = document.querySelector('.bord');
let posi = 0;

function writer() {

  const word = 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.'

  if (word.length > posi) {
    bord.textContent = `${word.substring(0,posi)
    }`
    posi++;
  } else {
    posi = 0
  }
  console.log("hhhh");
}


setInterval(writer, 100)

//setTimeout(writer,100);




//console.log(getRandomQuote());