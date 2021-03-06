let salon = {
    salonName: 'Pet Palace',
    address: {
        street: 'Broadway',
        zip: '12345',
        number: '101'
    },
    hours: {
        open: '3:00 pm',
        close: '4:00 pm'
    }, 
    pets : []
}



class Pet {
    constructor(name, age, gender, breed, service, owner, contact) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.contact = contact;
    }
}




let pet1 = new Pet('scrappy', 4, 'male', 'mixed', 'cut', 'brad', '858-098-8901')
let pet2 = new Pet('dilly', 6, 'female', 'golden doodle', 'nail clipping', 'brandon', '858-098-5454')
let pet3 = new Pet('daffy', 9, 'male', 'pitt bull', 'cut', 'braden', '858-298-2301')
salon.pets.push(pet1, pet2, pet3)


function register() {
    let name = document.getElementById('txtPetName').value
    let age = document.getElementById('txtAge').value
    let gender = document.getElementById('selGender').value
    let breed = document.getElementById('txtBreed').value
    let service = document.getElementById('selService').value
    let owner = document.getElementById('txtOwner').value
    let contact = document.getElementById('txtContact').value
    // contact = contact.mask('(000) 000-0000')

    // create new pet
    let new_pet = new Pet(name, age, gender, breed, service, owner, contact)

    // add pet to salon
    salon.pets.push(new_pet)

    // build the table after pet added
    buildTable(labels, salon.pets, document.getElementById('pet-table'))

    // set all form fields to null to clear the form
    document.getElementById('txtPetName').value = null
    document.getElementById('txtAge').value = null
    document.getElementById('selGender').value = null
    document.getElementById('txtBreed').value = null
    document.getElementById('selService').value = null
    document.getElementById('txtOwner').value = null
    document.getElementById('txtContact').value = null

    // location.href = 'index.html'

    // return salon
}

function displayFooter() {
    document.getElementById("salonInfo").innerHTML = `
    <p> Address: ${salon.address.number} ${salon.address.street}</p>
    <p> Hours ${salon.hours.open} to ${salon.hours.close}</p>
    `
}

displayFooter()