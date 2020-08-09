module.exports = function findItemsOver20(items){
    //you functions logic here
  


        var array5 = []
        
        for(var i = 0; i < items.length; i++){
          if(items[i].qty > 20){
            array5.push(items[i])
              }
           }
          return array5;
        }
        
        
        
        function findItemsOver(name, treshold){
          
        var names = name;
          var quantityavail = treshold;
          console.log(treshold)
          console.log(name)
          var empty = []
          
          for (var i = 0; i < names.length; i++){
            if(names[i].qty > quantityavail){
                empty.push(names[i])
            }
          }
          return empty;
        
}