function displayInfo() {
    document.getElementById("salonInfo").innerHTML = `
    <p> Welcome to the ${salon.salonName}.</p>
    <p> Address: ${salon.address.number} ${salon.address.street}</p>
    <p> Hours ${salon.hours.open} to ${salon.hours.close}</p>
    `
}
displayInfo()