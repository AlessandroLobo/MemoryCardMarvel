export function Game() {


  const grid = document.querySelector('.grid')

  const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
  ]

  const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
  }

  let firstCard = '';
  let secondCard = '';

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.reveal-card');
    console.log(disabledCards.length)

    if (disabledCards.length == 20) {
      alert('Parabéns,! ');
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

      console.log(checkEndGame());



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


    front.style.backgroundImage = `url('../src/assets/images/${character}.png')`;

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
  loadGame()
}
