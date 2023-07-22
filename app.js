var quote = "";


function getRandomQuote() {
 fetch('https://api.quotable.io/random')
    .then((response) => {
      if (!response.ok) throw Error(response.statusText)
       return response.json()
    })
    .then((quot) => quot)
    .catch(error => console.log(error));
}


const bord = document.querySelector('.bord');
let posi = 0;

function writer() {
if (quote) {
  
}


  if (word.length > posi) {
    bord.innerHTML = `${word.substring(0,posi)
    } <span>\u25AE</span>`
    posi++;
  } else {
    
  }
  console.log("hhhh");
}


setInterval(writer, 100)

//setTimeout(writer,100);




//console.log(getRandomQuote());