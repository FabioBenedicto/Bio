var items = [
  {
    id: 1,
    matchWith: 2,
    content:
      '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">',
    title: 'Sangue'
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
      '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">',
    title: 'Plasma'
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
      '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">',
    title: 'Hemácias ou Glóbulos vermelhos'
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
      '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">',
    title: 'Leucócitos ou Glóbulos brancos'
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
      '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">',
    title: 'Plaquetas'
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
      '<img src="https://www.triadperio.com/wp-content/uploads/2019/10/blood_platelets-02.png" alt="">',
    title: 'Curiosidade'
  },
  {
    id: 12,
    matchWith: 11,
    content:
      '<p class="text-content">O sangue é dividido nos tipos A, O, B e AB sendo esse definido pelo antígeno presente no sangue, podendo ser positivo ou negativo, definido pela presença ou ausência do antígeno D.</p>'
  }
]

function loadGame() {
  var game = document.getElementById('scene')
  game.innerHTML = ''
  items = items.sort(() => Math.random() - 0.5)
  items.map(value => {
    if (value.title != undefined) {
      var content = `
      <div class='card' id='${value.id}' matchWith='${value.matchWith}'>
        <div class="card-face card-front">
        </div>
        <div class="card-face card-back">
          ${value.content}
          ${value.title}
        </div>
      </div>
    `
    } else {
      var content = `
      <div class='card' id='${value.id}' matchWith='${value.matchWith}'>
        <div class="card-face card-front">
        </div>
        <div class="card-face card-back">
          ${value.content}
        </div>
      </div>
      `
    }

    game.innerHTML += content
  })

  var card = document.querySelectorAll('.card')
  card.forEach(element => {
    element.addEventListener('click', () => {
      isCorrect(element)
    })
  })
}

var previous = 0
var acertos = 0

function isCorrect(element) {
  actualElement = element
  actualElement.classList.toggle('is-flipped')
  if (previous == 1) {
    var id = actualElement.getAttribute('id')
    if (matchWith == id) {
      acertos++
      console.log(acertos)
      actualElement.removeEventListener('click', () => {
        isCorrect(element)
      })
      previousElement.removeEventListener('click', () => {
        isCorrect(element)
      })
    } else {
      console.log(id)
      console.log(matchWith)
      actualElement.classList.toggle('is-flipped')
      previousElement.classList.toggle('is-flipped')
    }
    previous = 0
  } else {
    var previousElement = actualElement
    var matchWith = previousElement.getAttribute('matchWith')
    previous = 1
  }
}
