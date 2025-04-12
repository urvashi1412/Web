function calculateTotal() {
    const adultPrice = 10;
    const childPrice = 5;
    let adultTickets = document.getElementById("adults").value;
    let childTickets = document.getElementById("children").value;


    adultTickets = parseInt(adultTickets) || 0;
    childTickets = parseInt(childTickets) || 0;


    let totalAmount = (adultTickets * adultPrice) + (childTickets * childPrice);
    document.getElementById("totalAmount").value = "Rs. " + totalAmount;
}
