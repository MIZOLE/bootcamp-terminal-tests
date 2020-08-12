module.exports = function findItemsOver(name, threshold){
    //you functions logic here

    // function findItemsOver(name, treshold){
          var empty = []
          
          for (var i = 0; i < name.length; i++){
            if(name[i].qty > threshold){
                empty.push(name[i])
            }
          }
          return empty;
}