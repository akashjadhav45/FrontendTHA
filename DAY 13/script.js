function fetchtext() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        ee.textContent = data.content;
      });
  }
  
  fetchtext();
  var ee = document.querySelector('p');