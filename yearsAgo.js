module.exports = function yearsAgo(year){
    //you functions logic here
        const date = new Date()
        var fullYear = date.getFullYear() - new Date(year)
        return fullYear;
        
}