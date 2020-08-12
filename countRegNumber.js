module.exports = function countRegNumber(loc1){
    //you functions logic here
      console.log(loc1)
      var splitloc1 = loc1.split(",");
      console.log(splitloc1)
      var regNumber = splitloc1.length;
      console.log(regNumber)
      return regNumber;

}