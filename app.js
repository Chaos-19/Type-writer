const bord = document.querySelector('.bord');
let index = 0;
let responseTime = 0;
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
  bord.innerHTML = `${randomQuote.substring(0,index)} <span>\u25AE</span>`

  if (randomQuote === '') {
    getRandomQuote();
    console.log("true......");
  }
  if (randomQuote.length > index) {
    console.log("inner function ");
    setTimeout(writer, 100);
    index++;
  } else if (randomQuote !== '' && randomQuote.length <= index) {
    randomQuote = '';
    index = 0;
    setTimeout(writer, 1500);
  } else {
    setTimeout(writer, 2000);
  }
}

window.addEventListener('load', writer);

// find out the exact interval between each request  time 

/*  
async function checkResponseTime(testURL) {

  let time1 = performance.now();
  await fetch(testURL);
  let time2 = performance.now();
  return time2 - time1;
}(async () => {
  // for the purpose of this snippet example, some host with CORS response 
responseTime = await checkResponseTime('https://api.quotable.io/random');
})();
*/