const bord = document.querySelector('.bord');
let index = 0;
let randomQuote = '';

async function getRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw Error(response.statusText);
    const result = await response.json();
    randomQuote = result.content;
  } catch (error) {
    console.log(error);
  }
}







function writer() {
  
  if (!randomQuote) {
    getRandomQuote();
  }
  
  bord.innerHTML = `${randomQuote.substring(0,index)} <span>\u25AE</span>`
  
  if (randomQuote && randomQuote.length > index) {
    setTimeout(write, 1000);
    index++;
  }else{
    writer();
  }
}
console.log(randomQuote);
writer();