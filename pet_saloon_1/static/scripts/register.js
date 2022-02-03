let pets = [
    {
        name : 'Spot',
        age : 4,
        gender : 'male',
        breed : 'Doberman',
        service : 'Grooming',
        owner : 'Jiminy Billy Bob',
        contact : '858-908-8456'
    },
    {
        name : 'River',
        age : 7,
        gender : 'Female',
        breed : 'Unknown',
        service : 'Nail clipping',
        owner : 'Grant Sanders',
        contact : '958-908-8111'
    }, 
    {
        name : 'Lucy',
        age : 14,
        gender : 'Female',
        breed : 'Dachsund',
        service : 'Grooming',
        owner : 'Stephanie Meyer',
        contact : '123-848-8484'
    },
    {
        name : 'Thomas',
        age : 17,
        gender : 'male',
        breed : 'Calico',
        service : 'Vaccination',
        owner : 'Willem Dafoe',
        contact : '985-098-8123'
    }, 
]

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
    } 
}


// alert(`There are ${pets.length} pets registered in the salon right now.`)

function petNames(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i].name)
    }
} 

petNames(pets)