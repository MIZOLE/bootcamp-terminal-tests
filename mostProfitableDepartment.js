module.exports = function mostProfitableDepartment(dip){
    //you functions logic here
    
        // console.log(dip) 
        var ProfitableDepartmentMap = {}
        var Deplist = dip;
        
         
        var Department = "";
        //console.log(ProfitableDepartmentMap)
        for(var i = 0; i < Deplist.length; i++){
          var currentDepartment = Deplist[i].department;
          console.log(currentDepartment)
         if(ProfitableDepartmentMap[currentDepartment] === undefined){
           ProfitableDepartmentMap[currentDepartment] = 0;
         }	
         ProfitableDepartmentMap[currentDepartment] = ProfitableDepartmentMap[currentDepartment] + Deplist[i].sales;
        }
        //console.log(ProfitableDepartmentMap)
        var dep = "x";
          for (var x in ProfitableDepartmentMap){
           // console.log(ProfitableDepartmentMap[y])
            if(ProfitableDepartmentMap[x] > Department){
                  dep = x
            // console.log(x)
             Department = ProfitableDepartmentMap[x]
          }
         } 
          
         return dep ;
        } 
        
        function mostProfitableDay(themostsale){
        var mostSaleDay = themostsale
        
        var themostsaleMap = {}
          //console.log(themostsale)
          
        for(var i = 0; i < mostSaleDay.length; i++){
          var currentDay = mostSaleDay[i].day;
          
         if(themostsaleMap[currentDay] === undefined){
           themostsaleMap[currentDay] = 0;
         }	
         themostsaleMap[currentDay] = themostsaleMap[currentDay] + mostSaleDay[i].sales;
        }
        
        
          var day = "";
          var profDay = 0;
        
          for (var y in themostsaleMap){
        
            if(themostsaleMap[y] > profDay){
              profDay = themostsaleMap[y]
             day = y
          }
            
         } 
        
          return day;
        
        
}