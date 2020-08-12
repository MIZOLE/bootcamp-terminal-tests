module.exports = function transportFee(shift) {
    //you functions logic here
    if (shift === "morning") {
        return "R20";

    } else
        if (shift === "afternoon")
            return "R10";
        else
            return "free";
}