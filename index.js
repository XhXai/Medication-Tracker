fetch('http://localhost:3000/medications')
  .then(res => res.json())
  .then(data => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const picture = card.querySelector('img');
      const name = card.querySelector('h2');
      const type = card.querySelector('p');
      const button = card.querySelector('button');

      picture.src = data[index].picture;
      picture.alt = data[index].name;
      name.textContent = data[index].name;
      type.textContent = data[index].type;
      button.textContent = 'Set Reminder';
      button.addEventListener('click', () => {
        button.textContent = '\u{1F514}';
      });
    });
  })
  .catch(error => console.error(error));


