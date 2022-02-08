labels = [ 
    'Name', 
    'Age', 
    'Gender', 
    'Breed', 
    'Service', 
    'Owner',
    'Contact', 
]

function buildTable(labels, arr, container) {
    document.getElementById('pet-table').innerHTML = null;
    let caption = document.createElement('caption')
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    caption.innerHTML = 'Pet Queue'
    table.appendChild(caption)
    let theadTr = document.createElement('tr');
    for (let i = 0; i < labels.length; i++) {
      let theadTh = document.createElement('th');
      theadTh.innerHTML = labels[i];
      theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);
  
    for (j = 0; j < arr.length; j++) {
      let tbodyTr = document.createElement('tr');
      for (k = 0; k < labels.length; k++) {
        let tbodyTd = document.createElement('td');
        tbodyTd.innerHTML = arr[j][labels[k].toLowerCase()];
        tbodyTr.appendChild(tbodyTd);
      }
      tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);
  
    container.appendChild(table);
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


displayFooter()
buildTable(labels, salon.pets, document.getElementById('pet-table'))

