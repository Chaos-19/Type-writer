var quote = "";


function getRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => {
      if (!response.ok) throw Error(response.statusText)
      return response.json()
    })
    .then((result) => quote = result)
    .catch(error => console.log(error));
}


const bord = document.querySelector('.bord');
let posi = 0;

function writer() {
  if (quote) {
    getRandomQuote();
  }
  if (quote.length > posi) {
    bord.innerHTML = `${word.substring(0, posi)
      } <span>\u25AE</span>`
    posi++;
  } else {
    quote = '';
  }
  console.log("hhhh");
}


setInterval(writer, 100)

//setTimeout(writer,100);




//console.log(getRandomQuote());