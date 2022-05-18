var items = [
  {
    id: 1,
    matchWith: 2,
    content:
      '<img src="./images/sangue.png" alt="">',
    title: '<p>Sangue</p>'
  },
  {
    id: 2,
    matchWith: 1,
    content:
      '<p class="text-content">Composto por plasma, hemácia, leucócitos e plaquetas</p>'
  },
  {
    id: 3,
    matchWith: 4,
    content:
      '<img src="./images/plasma.png" alt="">',
    title: '<p>Plasma</p>'
  },
  {
    id: 4,
    matchWith: 3,
    content:
      '<p class="text-content">É um líquido amarelo onde se encontram dissolvidos proteínas, açúcares, gorduras e sais minerais</p>'
  },
  {
    id: 5,
    matchWith: 6,
    content:
      '<img src="./images/hemácias.png" alt="">',
    title: '<p>Hemácias</p> ou Glóbulos vermelhos'
  },
  {
    id: 6,
    matchWith: 5,
    content:
      '<p class="text-content">Transportam o oxigênio dos pulmões para as células de todo o organismo e eliminam o gás carbônico das células, transportando-o para os pulmões.</p>'
  },
  {
    id: 7,
    matchWith: 8,
    content:
      '<img src="./images/leucócitos.png" alt="">',
    title: '<p>Leucócitos</p> ou Glóbulos brancos'
  },
  {
    id: 8,
    matchWith: 7,
    content:
      '<p class="text-content">Realizam à defesa do organismo contra a presença de elementos estranhos a ele, como por exemplo, as bactérias</p>'
  },
  {
    id: 9,
    matchWith: 10,
    content:
      '<img src="./images/plaqueta.png" alt="">',
    title: '<p>Plaquetas</p>'
  },
  {
    id: 10,
    matchWith: 9,
    content:
      '<p class="text-content">Auxiliam na interrupção dos sangramentos.</p>'
  },
  {
    id: 11,
    matchWith: 12,
    content:
      '<img src="./images/interrogação.png" alt="">',
    title: '<p>Curiosidade</p>'
  },
  {
    id: 12,
    matchWith: 11,
    content:
      '<p class="text-content">O sangue é dividido nos tipos A, O, B e AB sendo esse definido pelo antígeno presente no sangue, podendo ser positivo ou negativo, definido pela presença ou ausência do antígeno D.</p>'
  }
]

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function loadGame() {
  var game = document.getElementById('scene')
  game.innerHTML = ''
  shuffle(items).map(value => {
    var content = `
      <div class='card' id='${value.id}' matchWith='${value.matchWith}'>
        <div class="card-face card-front">
        </div>
        <div class="card-face card-back">
          ${value.content}
          ${value.title != undefined ? value.title : ""}
        </div>
      </div>
    `

    game.innerHTML += content
  })

  var card = document.querySelectorAll('.card')
  card.forEach(element => {
    element.addEventListener('click', isCorrect)
    element.elmt = element;
  })
}

var previous = 0
var acertos = 0
var matchWith;
var previousElement;
var actualElement;

function isCorrect(evt) {
  actualElement = evt.currentTarget.elmt
  actualElement.classList.toggle('is-flipped')
  actualElement.removeEventListener('click', isCorrect)
  if (previous == 1) {
    let tempActualElement = actualElement;
    let tempPreviousElement = previousElement;
    var id = actualElement.getAttribute('id')
    if (matchWith == id) {
      sleep(1000).then(() => {
        acertos++
        tempActualElement.style.outlineColor = "#3aa394"
        tempPreviousElement.style.outlineColor = "#3aa394"
        tempPreviousElement.removeEventListener('click', isCorrect)
        if (acertos == 6) {
          alerta()
        }
      });
    } else {
      sleep(500).then(() => {
        tempActualElement.style.outlineColor = "#D10000"
        tempPreviousElement.style.outlineColor = "#D10000"
        sleep(2500).then(() => {
          tempActualElement.classList.toggle('is-flipped')
          tempPreviousElement.classList.toggle('is-flipped')
          tempActualElement.style.outlineColor = "rgb(76, 67, 71)"
          tempPreviousElement.style.outlineColor = "rgb(76, 67, 71)"
          tempActualElement.addEventListener('click', isCorrect)
          tempPreviousElement.addEventListener('click', isCorrect)
        });
      })

    }
    previous = 0
  } else {
    previousElement = actualElement
    matchWith = previousElement.getAttribute('matchWith')
    actualElement.removeEventListener('click', isCorrect)
    previous = 1
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function alerta() {
  Swal.fire({
    title: 'Parabéns!',
    text: 'Você completou o jogo.',
    icon: 'success'
  })
}

