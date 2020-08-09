module.exports = function countAllFromTown(reg, loc){
    //you functions logic here
    // function countAllFromTown(reg, loc){
      console.log(reg)
      
        
      var cope = reg.split(",")
      var AllFromTown=""
      var array4 = []
      console.log(array4)
      //console.log(cope)
      for (var i = 0; i < cope.length; i++){
      if (cope[i].trim().startsWith(loc)){
                array4.push(cope[i].trim())
      }
      
        
      }
        console.log(array4)
        return array4.length
      
}