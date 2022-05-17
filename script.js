var items = [
  {
    id: 1,
    matchWith: 2,
    content: '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">'
  },      
  {
    id: 2,
    matchWith: 1,
    content: '<p class="text-content">test</p>'
  },
  {
    id: 1,
    matchWith: 2,
    content: '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">'
  },      
  {
    id: 2,
    matchWith: 1,
    content: '<p class="text-content">test</p>'
  },
  {
    id: 1,
    matchWith: 2,
    content: '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">'
  },      
  {
    id: 2,
    matchWith: 1,
    content: '<p class="text-content">Células sanguíneas anucleadas relacionadas principalmente com o transporte de oxigênio pelo corpo</p>'
  },
  {
    id: 1,
    matchWith: 2,
    content: '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">'
  },      
  {
    id: 2,
    matchWith: 1,
    content: '<p class="text-content">test</p>'
  },
  {
    id: 1,
    matchWith: 2,
    content: '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">'
  },      
  {
    id: 2,
    matchWith: 1,
    content: '<p class="text-content">test</p>'
  },
  {
    id: 1,
    matchWith: 2,
    content: '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">'
  },      
  {
    id: 2,
    matchWith: 1,
    content: '<p class="text-content">test</p>'
  },
]

function loadGame(){
  var game = document.getElementById('scene');
  game.innerHTML = ""
  items = items.sort(() => Math.random() - 0.5)
  items.map(value => {
    let content = `
      <div class='card'>
        <div class="card-face card-front">
        </div>
        <div class="card-face card-back">
          ${value.content}
        </div>
      </div>
    `;

    game.innerHTML += content;
  })

  var card = document.querySelectorAll('.card');
  card.forEach(element => {
    element.addEventListener('click', isCorrect(element));
  });  
}

function isCorrect(element) {
  actualElement = element;
  if(previous) {
    
    actualElement.classList.toggle('is-flipped');
    previousElement.classList.toggle('is-flipped');
    previous = null;
  } else {
    previous = 0;""
    previousElement = actualElement;
  }
}