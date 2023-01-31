import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export function Game() {

  let contadorStart = ''
  const grid = document.querySelector('.grid')
  const timer = document.querySelector('.timer')

  const characters = [
    'america',
    'cavaleiro_lua',
    'ciclop',
    'doutor_octo',
    'fera',
    'ghost_rider',
    'homem_ferro',
    'hulk',
    'tempestade',
    'venon',
  ]

  function finalConfet() {
    confetti({
      particleCount: 2000,
      angle: 90,
      spread: 360,
      startVelocity: 40,
      decay: 0.9,
      gravity: 0.1,
      origin: { y: 0 },
      // colors: ["#f00", "#0f0", "#00f"],
      shapes: ["square", "circle"],
      ticks: 200,
      zIndex: 100,
      disableForReducedMotion: false
    })

  }

  const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
  }

  let firstCard = '';
  let secondCard = '';

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.reveal-card');
    // console.log(disabledCards.length)

    if (disabledCards.length == 20) {
      finalConfet()
      setTimeout(() => {
        clearInterval(loop)
        alert(`Parabéns, Você venceu! seu tempo foi de ${timer.innerHTML} segundos`);

      }, 500)
    }
  }

  const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')
    // Acertou a carta
    if (firstCharacter === secondCharacter) {

      firstCard.firstChild.classList.add('disabled-Card')
      secondCard.firstChild.classList.add('disabled-Card')

      firstCard = '';
      secondCard = '';
      checkEndGame();

    } else {

      setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';

      }, 500)

    }

  }

  const revealcard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
      return

    }

    if (firstCard === '') {
      if (contadorStart == 0) {
        StartTimer()
        // console.log("testando o contador---")
        contadorStart = 1
      }
      target.parentNode.classList.add('reveal-card')
      firstCard = target.parentNode

    } else if (secondCard === '') {

      target.parentNode.classList.add('reveal-card')
      secondCard = target.parentNode

      checkCards()
    }
  }

  const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')
    front.style.backgroundImage = `url('/static/images/${character}.png')`;

    card.appendChild(front)
    card.appendChild(back)
    grid.appendChild(card)
    card.addEventListener('click', revealcard)
    card.setAttribute('data-character', character)

    return card;
  }

  const loadGame = () => {
    const duplicateCharacter = [...characters, ...characters]

    const shuffledArray = duplicateCharacter.sort(() => Math.random() - 0.5)

    shuffledArray.map((character) => {
      const card = createCard(character)
      grid.appendChild(card)
      // console.log(character)
    });
  }

  let loop;
  let currentTime;

  const StartTimer = () => {
    loop = setInterval(() => {
      currentTime = +timer.innerHTML
      timer.innerHTML = currentTime + 1;
    }, 1000)
  }

  window.onload = () => {

  }

  loadGame()
}