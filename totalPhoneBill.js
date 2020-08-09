module.exports = function totalPhoneBill(bill) {
    //you functions logic here


    var myCalls = bill.split(", ")

    var totalAmount = 0;


    for (var i = 0; i < myCalls.length; i++) {
        if (myCalls[i] === "call") {
            totalAmount += 2.75;
        }
        else if (myCalls[i] === "sms") {
            totalAmount += 0.65
        }
    }
    return "R" + totalAmount.toFixed(2) - totalAirtimelft

}