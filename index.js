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


  fetch('http://localhost:3000/medications')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    const medications = document.querySelector('.card-container');
  
    data.foreach(function(medications){
  
      const card = document.querySelector('div');
      card.classList.add('card');
      card.innerHTML = `,
      <img src = "${medications.picture}" alt = "Medications Picture" style = width:50%; height:50%">
      <div class = "container">
      <h2><b>${medications.name}<b></h2>
      <p>${medications.type}</p>
      <div class="card-actions">
      <button class = "Set-Reminder" style="background-color: #9FE2BF; color:green; font-family: Arial, san-serif; font-size: 16px; font-weight: bold; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Set-Reminder</button>
      </div>
      </div>
      `;
      medications.appendChild(card);
  
      const editbutton = document.querySelector('.edit-button');
      const deletebutton = document.querySelector('.delete.button');
  
      deletebutton.addEventListener('click',() => {
        card.remove()
        console.log(medications.id)
        deleteMedications(medications.id)
      });
  
      editbutton.addEventListener('click',() => {
        console.log('Edit clicked for product', medications.id);
      });
    });
  });
  
  function deleteMedications(id){
    fetch(`http://localhost:3000/medications/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json)
    .then(medications => console.log(medications))
  }
  