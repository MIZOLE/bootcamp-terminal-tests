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
  