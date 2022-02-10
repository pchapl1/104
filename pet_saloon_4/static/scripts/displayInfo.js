labels = [ 
    'Name', 
    'Age', 
    'Gender', 
    'Breed', 
    'Service', 
    'Owner',
    'Contact', 
    'delete pet'
]

function buildTable(labels, arr, container) {
  let lengthID = String(arr.length)
  console.log(lengthID)
  document.getElementById('pet-table').innerHTML = null;
  let caption = document.createElement('caption')
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let delPet = document.createElement('button');

  
  caption.innerHTML = 'Pet Queue'
  table.appendChild(caption)
  let theadTr = document.createElement('tr');
  for (let i = 0; i < labels.length; i++) {
    if (i < 7) {
      let theadTh = document.createElement('th');
      theadTh.innerHTML = labels[i];
      theadTr.appendChild(theadTh);
    }
  }


  thead.appendChild(theadTr);
  table.appendChild(thead);

  for (j = 0; j < arr.length; j++) {
    let tbodyTr = document.createElement('tr');
    for (k = 0; k < labels.length; k++) {
      let tbodyTd = document.createElement('td');
      tbodyTd.setAttribute('id', `${k}`)
      tbodyTd.innerHTML = arr[j][labels[k].toLowerCase()];
      if (k === 7) {
        tbodyTd.innerHTML = `<button class="delButton" onclick="removePet(${j})">delete</button>`
      }

      tbodyTr.appendChild(tbodyTd);
    }
    tbody.appendChild(tbodyTr);
  }
  table.appendChild(tbody);

  container.appendChild(table);
}


function removePet(index) {
  if (index < salon.pets.length){
    document.getElementById('')
    salon.pets.splice(index, 1);
    buildTable(labels, salon.pets, document.getElementById('pet-table'))
  }
}

  function displayFooter() {
    document.getElementById("salonInfo").innerHTML = `
    <p> Address: ${salon.address.number} ${salon.address.street}</p>
    <p> Hours ${salon.hours.open} to ${salon.hours.close}</p>
    `
}

function displayMain(){
  document.getElementById('salon-main').innerHTML = ` 
  <h1>Welcome to the ${salon.salonName}</h1>
  <p> We're located at ${salon.address.number} ${salon.address.street}</p>
`  
}


function search() {
  allPets = salon.pets

  // console.log(salon.pets)
  let searchName = document.getElementById('search-pet').value;
  // console.log(searchName)

  salon.pets.forEach(element => {
    // console.log(searchName)
    let petTable = document.getElementById('pet-table');

    if (searchName in petTable) {
      let match = document.getElementById('txtPetName').value
    }
  });

 }


displayFooter()
buildTable(labels, salon.pets, document.getElementById('pet-table'))

