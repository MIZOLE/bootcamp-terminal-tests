module.exports = function countAllPaarl(reg){
    //you functions logic here
    
      // console.log(reg)
      var anc = reg.split(", ")
      var firstPaarl=""
      var array1 = []
      console.log(anc)
      for (var i = 0; i < anc.length; i++)
      if (anc[i].startsWith("CJ")){
                array1.push(anc[i])
        
      }
        console.log(array1)
        return array1.length
      
}